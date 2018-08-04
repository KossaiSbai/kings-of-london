import {
    fromJS,
    List
} from 'immutable';
const initialState = fromJS({
    pending: List(),
});

function tileReducer(state = initialState, action) {
    switch (action.type) {
        case 'TRANSACTION_STARTED':
            return state.update('pending', pending => pending.push({
                key: action.key,
                tx: action.tx,
                type: action.transactionType
            }));
        case 'TRANSACTION_COMPLETE':
            return state
                .set('pending', state.get('pending').filter(o => o.tx !== action.tx));
        case 'SELECT_TILE':
            return state.set('selectedTile', {
                key: action.tile,
                center: action.center,
                tileData: action.tileData
            });
        case 'GET_UPVOTES':
            return state.set('upvotes', action.upvotes);
        default:
            return state;
    }
}

export default tileReducer;



// WEBPACK FOOTER //
// ./src/redux/tiles/reducer.js