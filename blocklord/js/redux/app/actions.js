import Parse from 'parse';
import Web3 from 'web3';
Parse.initialize(process.env.REACT_APP_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;
const web3 = new Web3(Web3.givenProvider);

export function fetchCurrentUser() {
    return {
        type: 'SET_CURRENT_USER',
        currentUser: Parse.User.current(),
    }
}



export function getInitialPrice() {
    return async function(dispatch, getState) {
        try {
            const contract = getState().web3Reducer.get('contract');
            contract.methods.getInitialPrice().call()
                .then(price => dispatch(setInitialPrice(parseInt(price, 10))));
        } catch (err) {
            console.log(err)
        }
    };
}

export function getMyAllowance() {
    return async function(dispatch, getState) {
        try {
            const contract = getState().web3Reducer.get('contract');
            const allowance = await contract.methods.getMyAllowance().call();
            dispatch(setAllowance(parseInt(allowance, 10)));
        } catch (err) {
            console.log(err)
        }
    };
}

export function getMainAccount() {
    return async function(dispatch, getState) {
        try {
            const contract = getState().web3Reducer.get('contract');
            contract.methods.mainAddress().call()
                .then(address => dispatch(setMainAddress(address)));
        } catch (err) {
            console.log(err)
        }
    };
}

export function getFeePercentage() {
    return async function(dispatch, getState) {
        try {
            const contract = getState().web3Reducer.get('contract');
            contract.methods.getFeePercentage().call()
                .then(fee => dispatch(setFeePercentage(parseInt(fee, 10) / 100)));
        } catch (err) {
            console.log(err)
        }
    };
}

export function grantAllowance(address, amount) {
    return async function(dispatch, getState) {
        try {
            const contract = getState().web3Reducer.get('contract');
            contract.methods.grantAllowance(address, amount).send()
                .then(console.log);
        } catch (err) {
            console.log(err)
        }
    };
}

export function setAllowance(allowance) {
    return {
        type: 'SET_ALLOWANCE',
        allowance,
    }
}

export function setInitialPrice(price) {
    return {
        type: 'SET_INITIAL_PRICE',
        price,
    }
}

export function setMainAddress(mainAddress) {
    return {
        type: 'SET_MAIN_ADDRESS',
        mainAddress,
    }
}

export function setFeePercentage(fee) {
    return {
        type: 'SET_FEE_PERCENTAGE',
        fee,
    }
}

export function getCurrentBalance() {
    return async function(dispatch, getState) {
        try {
            const contract = getState().web3Reducer.get('contract');
            const balance = await contract.methods.getBalance().call()
            dispatch(receivedBalance(balance));
        } catch (err) {
            console.log(err)
        }
    };
}

export function receivedBalance(balance) {
    return {
        type: 'RECEIVED_BALANCE',
        balance,
    }
}

export function withdraw() {
    return async function(dispatch, getState) {
        const contract = getState().web3Reducer.get('contract');
        contract.methods.withdraw().send({
                gas: 50000
            })
            .on('transactionHash', function(hash) {
                console.log(hash);
            })
            .on('receipt', function(receipt) {
                dispatch(withdrawnBalance());
                console.log(receipt);
            })
            .on('error', console.error);
    };
}

export function withdrawnBalance() {
    return {
        type: 'WITHDRAWN_BALANCE',
    }
}

export function fetchProperties(account) {
    return async function(dispatch, getState) {
        const Query = new Parse.Query('Block');
        Query.equalTo('owner', account);
        Query.limit(10000);
        Query.find()
            .then(results => dispatch(propertiesFetched(results)));
    };
}

export function propertiesFetched(properties) {
    return {
        type: 'PROPERTIES_FETCHED',
        properties,
    }
}

export function fetchMostExpensive(account) {
    return async function(dispatch, getState) {
        const Query = new Parse.Query('Block');
        Query.limit(50);
        Query.descending('finalPrice');
        Query.find()
            .then(results => dispatch(mostExpensiveFetched(results)));
    };
}

export function mostExpensiveFetched(properties) {
    return {
        type: 'MOST_EXPENSIVE_FETCHED',
        properties,
    }
}

export function fetchMostPopular(account) {
    return async function(dispatch, getState) {
        const Query = new Parse.Query('View');
        Query.limit(50);
        Query.descending('views');
        Query.include('block');
        Query.find()
            .then(results => dispatch(mostPopularFetched(results)));
    };
}

export function fetchLatest() {
    return async function(dispatch, getState) {
        const Query = new Parse.Query('Block');
        Query.limit(50);
        Query.descending('updatedAt');
        Query.find()
            .then(results => dispatch(latestFetched(results)));
    };
}

export function latestFetched(properties) {
    return {
        type: 'LATEST_FETCHED',
        properties,
    }
}

export function getTransactions(account) {
    return async function(dispatch, getState) {
        const currentBlock = await web3.eth.getBlockNumber();
        try {
            const contract = getState().web3Reducer.get('contract');
            contract.getPastEvents('allEvents', {
                filter: {
                    owner: account
                },
                fromBlock: currentBlock - 40320,
                toBlock: 'latest'
            }).then(transactions => dispatch(transactionsFetched(transactions
                .filter(i => i.returnValues.owner === account)
                .filter(i => i.event !== 'SentAmountToOwner'))));
        } catch (err) {
            console.log(err)
        }
    };
}

export function transactionsFetched(transactions) {
    return {
        type: 'TRANSACTIONS_FETCHED',
        transactions,
    }
}

export function mostPopularFetched(properties) {
    return {
        type: 'MOST_POPULAR_FETCHED',
        properties,
    }
}

export function openModal(component) {
    return {
        type: 'OPEN_MODAL',
        component,
    }
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL',
    }
}

export function setSocket(socket) {
    return {
        type: 'SET_SOCKET',
        socket,
    }
}



// WEBPACK FOOTER //
// ./src/redux/app/actions.js