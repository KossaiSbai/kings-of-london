import Parse from 'parse';
import Web3 from 'web3';
import ReactGA from 'react-ga';
const web3 = new Web3(Web3.givenProvider);
ReactGA.initialize('UA-112834002-1');
ReactGA.plugin.require('ecommerce');

Parse.initialize(process.env.REACT_APP_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

async function getUSDPrice() {
    const res = await fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/');
    const eth = await res.json();
    return parseInt(eth[0].price_usd, 10);
}

export function createBlock(key, price, name, description, url, imageURL, account) {
    return async function(dispatch, getState) {
        const hexName = web3.utils.utf8ToHex(name || ' ');
        const hexDesc = web3.utils.utf8ToHex(description || ' ');
        const hexURL = web3.utils.utf8ToHex(url || ' ');
        const hexImage = web3.utils.utf8ToHex(imageURL || ' ');
        const ethPrice = await getUSDPrice();
        const split = key.split(":");
        const contract = getState().web3Reducer.get('contract');
        let txHash = null;
        return contract.methods.createBlock(
                split[0],
                split[1],
                hexName,
                hexDesc,
                hexURL,
                hexImage).send({
                value: price
            })
            .once('transactionHash', hash => {
                console.log(hash);
                txHash = hash;
                dispatch(transactionStarted(txHash, key, 'Buy'));
                dispatch(showConfirmation(name, key));
                ReactGA.event({
                    category: 'Block',
                    action: 'Create Block',
                });
                ReactGA.plugin.execute('ecommerce', 'addTransaction', {
                    id: txHash, // Transaction ID. Required.
                    name: key, // Product name. Required.
                    revenue: price / 1000000000000000000 * ethPrice // Unit price.
                });
                ReactGA.plugin.execute('ecommerce', 'send');
                ReactGA.plugin.execute('ecommerce', 'clear');
                const airDrop = new Parse.Object('Airdrop');
                airDrop.save({
                    buyer_address: account,
                    amount: price,
                });
            }).then((receipt) => {
                dispatch(transactionComplete(receipt.transactionHash));
            }).catch((e) => {
                const handle = setInterval(() => {
                    web3.eth.getTransactionReceipt(txHash)
                        .then(res => {
                            if (res != null && res.blockNumber > 0) {
                                clearInterval(handle);
                                dispatch(transactionComplete(res.transactionHash));
                            }
                        })
                }, 1000);
            });
    };
}

export function buyBlock(key, price, name, description, url, imageURL, feePercentage) {
    return async function(dispatch, getState) {
        const ethPrice = await getUSDPrice();
        const hexName = web3.utils.utf8ToHex(name || ' ');
        const hexDesc = web3.utils.utf8ToHex(description || ' ');
        const hexURL = web3.utils.utf8ToHex(url || ' ');
        const hexImage = web3.utils.utf8ToHex(imageURL || ' ');
        const split = key.split(":");
        const contract = getState().web3Reducer.get('contract');
        let txHash = null;
        contract.methods.buyBlock(split[0], split[1],
                hexName,
                hexDesc,
                hexURL,
                hexImage,
            )
            .send({
                value: price
            })
            .once('transactionHash', hash => {
                txHash = hash;
                dispatch(transactionStarted(txHash, key, 'Buy'));
                dispatch(showConfirmation(name, key));
                ReactGA.event({
                    category: 'Block',
                    action: 'Buy Block',
                });
                ReactGA.plugin.execute('ecommerce', 'addTransaction', {
                    id: txHash, // Transaction ID. Required.
                    name: key, // Product name. Required.
                    revenue: price / 1000000000000000000 * feePercentage * ethPrice // Unit price.
                });
                ReactGA.plugin.execute('ecommerce', 'send');
                ReactGA.plugin.execute('ecommerce', 'clear');
            }).then((receipt) => {
                dispatch(transactionComplete(receipt.transactionHash));
            }).catch((e) => {
                const handle = setInterval(() => {
                    web3.eth.getTransactionReceipt(txHash)
                        .then(res => {
                            if (res != null && res.blockNumber > 0) {
                                clearInterval(handle);
                                dispatch(transactionComplete(res.transactionHash));
                            }
                        })
                }, 1000);
            });
    };
}

export function editBlock(key, name, description, url, imageURL) {
    return function(dispatch, getState) {
        const hexName = web3.utils.utf8ToHex(name || ' ');
        const hexDesc = web3.utils.utf8ToHex(description || ' ');
        const hexURL = web3.utils.utf8ToHex(url || ' ');
        const hexImage = web3.utils.utf8ToHex(imageURL || ' ');
        const split = key.split(":");
        const contract = getState().web3Reducer.get('contract');
        let txHash = null;
        contract.methods.updateBlock(
                split[0],
                split[1],
                hexName,
                hexDesc,
                hexURL,
                hexImage,
            ).send()
            .once('transactionHash', hash => {
                txHash = hash;
                dispatch(transactionStarted(txHash, key, 'Edit'));
            }).then((receipt) => {
                dispatch(transactionComplete(receipt.transactionHash));
                ReactGA.event({
                    category: 'Block',
                    action: 'Edit Block'
                });
            }).catch((e) => {
                const handle = setInterval(() => {
                    web3.eth.getTransactionReceipt(txHash)
                        .then(res => {
                            if (res != null && res.blockNumber > 0) {
                                clearInterval(handle);
                                dispatch(transactionComplete(res.transactionHash));
                                ReactGA.event({
                                    category: 'Block',
                                    action: 'Edit Block'
                                });
                            }
                        })
                }, 1000);
            });
    };
}

export function sellBlock(key, price) {
    return async function(dispatch, getState) {
        const ethPrice = await getUSDPrice();
        const split = key.split(":");
        const contract = getState().web3Reducer.get('contract');
        let txHash = null;
        contract.methods.sellBlock(split[0], split[1], price).send()
            .once('transactionHash', hash => {
                txHash = hash;
                dispatch(transactionStarted(txHash, key, 'Sell'));
                ReactGA.event({
                    category: 'Block',
                    action: 'Sell Block',
                    value: price / 1000000000000000000 * ethPrice,
                });
            }).then((receipt) => {
                dispatch(transactionComplete(receipt.transactionHash));
                ReactGA.event({
                    category: 'Block',
                    action: 'Edit Block'
                });
            }).catch((e) => {
                const handle = setInterval(() => {
                    web3.eth.getTransactionReceipt(txHash)
                        .then(res => {
                            if (res != null && res.blockNumber > 0) {
                                clearInterval(handle);
                                dispatch(transactionComplete(res.transactionHash));
                            }
                        })
                }, 1000);
            });
    };
}

export function cancelSellBlock(key) {
    return function(dispatch, getState) {
        const split = key.split(":");
        const contract = getState().web3Reducer.get('contract');
        let txHash = null;
        contract.methods.cancelSellBlock(split[0], split[1]).send()
            .once('transactionHash', hash => {
                txHash = hash;
                dispatch(transactionStarted(txHash, key, 'Cancel Sell'));
            }).then((receipt) => {
                dispatch(transactionComplete(receipt.transactionHash));
                ReactGA.event({
                    category: 'Block',
                    action: 'Cancel Sale'
                });
            }).catch((e) => {
                const handle = setInterval(() => {
                    web3.eth.getTransactionReceipt(txHash)
                        .then(res => {
                            if (res != null && res.blockNumber > 0) {
                                clearInterval(handle);
                                dispatch(transactionComplete(res.transactionHash));
                                ReactGA.event({
                                    category: 'Block',
                                    action: 'Cancel Sale'
                                });
                            }
                        })
                }, 1000);
            });
    };
}

export function increaseBlockCount(block) {
    return async function(dispatch, getState) {
        const findViewObject = new Parse.Query('View');
        findViewObject.equalTo('block', block);
        findViewObject.first()
            .then(viewObject => {
                const targetBlock = viewObject ? viewObject : new Parse.Object('View');
                targetBlock.increment('views');
                targetBlock.set('block', block);
                targetBlock.save();
            });
    }
}

export function upvoteBlock(block) {
    return async function(dispatch, getState) {
        const newUpvote = new Parse.Object('Upvote');
        newUpvote.set('block', block);
        newUpvote.set('user', Parse.User.current());
        newUpvote.save()
            .then(() => dispatch(getUpvotes(block)));
    }
}

export function getUpvotes(block) {
    return async function(dispatch, getState) {
        const UpvotesQ = new Parse.Query('Upvote');
        UpvotesQ.equalTo('block', block);
        UpvotesQ.include('user');
        UpvotesQ.find()
            .then(upvotes => {
                dispatch(setUpvotes(upvotes));
            });
    }
}

function setUpvotes(upvotes) {
    return {
        type: 'GET_UPVOTES',
        upvotes
    }
}

function showConfirmation(name, key) {
    return {
        type: 'SHOW_CONFIRMATION',
        name,
        key
    }
}



function transactionStarted(tx, key, transactionType) {
    return {
        type: 'TRANSACTION_STARTED',
        tx,
        key,
        transactionType
    }
}

function transactionComplete(tx) {
    return {
        type: 'TRANSACTION_COMPLETE',
        tx
    }
}

export function selectTile(tile, center, tileData) {
    return {
        type: 'SELECT_TILE',
        tile,
        tileData,
    }
}

export function tileFound(tile) {
    return {
        type: 'TILE FOUND',
        tile,
    }
}



// WEBPACK FOOTER //
// ./src/redux/tiles/actions.js