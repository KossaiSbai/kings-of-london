import {
    fromJS
} from 'immutable';
const initialState = fromJS({
    initialPrice: null,
    balance: 0,
    modalState: false,
    modalComponent: null,
});

function tileReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_INITIAL_PRICE':
            return state.set('initialPrice', action.price);
        case 'SET_CURRENT_USER':
            return state.set('currentUser', action.currentUser);
        case 'SHOW_CONFIRMATION':
            return state
                .set('modalState', true)
                .set('modalComponent', 'confirmation')
                .set('confirmedName', action.name)
                .set('confirmedKey', action.key);
        case 'SET_FEE_PERCENTAGE':
            return state.set('feePercentage', action.fee);
        case 'SET_MAIN_ADDRESS':
            return state.set('mainAddress', action.mainAddress);
        case 'SET_ALLOWANCE':
            return state.set('allowance', action.allowance);
        case 'RECEIVED_BALANCE':
            return state.set('balance', action.balance);
        case 'TRANSACTIONS_FETCHED':
            return state.set('transactions', action.transactions);
        case 'WITHDRAWN_BALANCE':
            return state.set('balance', 0);
        case 'PROPERTIES_FETCHED':
            return state.set('properties', action.properties);
        case 'MOST_EXPENSIVE_FETCHED':
            return state.set('mostExpensive', action.properties);
        case 'LATEST_FETCHED':
            return state.set('latest', action.properties);
        case 'MOST_POPULAR_FETCHED':
            return state.set('mostPopular', action.properties);
        case 'OPEN_MODAL':
            return state.set('modalState', true)
                .set('modalComponent', action.component);
        case 'CLOSE_MODAL':
            return state.set('modalState', false)
                .set('modalComponent', null);
        case 'SET_SOCKET':
            return state.set('socket', action.socket);
        default:
            return state;
    }
}

export default tileReducer;



// WEBPACK FOOTER //
// ./src/redux/app/reducer.js