import {
    fromJS
} from 'immutable';
const initialState = fromJS({
    contract: null,
});

function web3Reducer(state = initialState, action) {
    switch (action.type) {
        case 'CONTRACT_LOADED':
            return state
                .set('contract', action.contract)
                .set('eth', action.eth);
        case 'ACCOUNT_LOADED':
            return state
                .set('account', action.account);
        case 'SET_NETWORK_ID':
            return state.set('currentNetwork', action.network);
        case 'CONTRACT_NOT_LOADED':
            return state.set('contract', null);
        default:
            return state;
    }
}

export default web3Reducer;



// WEBPACK FOOTER //
// ./src/redux/web3/reducer.js