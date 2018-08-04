import Web3 from 'web3';
import {
    getCurrentBalance,
    getMyAllowance
} from '../app/actions';
import Parse from 'parse';
const {
    abi
} = require('../../contracts/BLMain.json');
const web3 = Web3.givenProvider ? new Web3(Web3.givenProvider) : new Web3('https://mainnet.infura.io/Sy2qCE2cdnZGZtoKjVng');


export async function pollForMainAccount(dispatch, contract) {
    let accounts = await web3.eth.getAccounts();
    let account = accounts[0];
    setInterval(async function() {
        accounts = await web3.eth.getAccounts();
        if (accounts[0] !== account) {
            account = accounts[0];
            contract.options.from = account;
            console.log('Changing account to ', account);
            const user = Parse.User.current();
            if (user && account) {
                user.addUnique('accounts', account);
                user.save();
            }
            dispatch(accountLoaded(account));
            dispatch(getCurrentBalance());
            dispatch(getMyAllowance());
        }
    }, 500);
}

export function getNetworkID() {
    return async function(dispatch, getState) {
        web3.eth.net.getId((err, res) => {
            dispatch(setNetworkID(res));
        });
    }
}

export function loadContract() {
    return function(dispatch) {
        return web3.eth.getAccounts()
            .then(accounts => {
                dispatch(accountLoaded(accounts[0]));
                return accounts[0];
            })
            .then(defaultAccount => new web3.eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS, {
                from: defaultAccount,
                gasPrice: '10000000000'
            }))
            .then(
                contract => {
                    pollForMainAccount(dispatch, contract);
                    return dispatch(contractLoaded(contract, web3.eth))
                },
                error => dispatch(contractNotLoaded(error)),
            );
    };
}

export function setNetworkID(network) {
    return {
        type: 'SET_NETWORK_ID',
        network,
    }
}


export function contractLoaded(contract, eth) {
    return {
        type: 'CONTRACT_LOADED',
        contract,
        eth,
    }
}

export function accountLoaded(account) {
    return {
        type: 'ACCOUNT_LOADED',
        account,
    }
}

export function contractNotLoaded(error) {
    console.log(error);
    return {
        type: 'CONTRACT_NOT_LOADED',
        error,
    }
}



// WEBPACK FOOTER //
// ./src/redux/web3/actions.js