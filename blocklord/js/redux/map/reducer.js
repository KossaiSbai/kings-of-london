import {
    fromJS
} from 'immutable';
const initialState = fromJS({
    zoom: 4,
    center: [0, 0]
});

function mapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ZOOM_LEVEL':
            return state
                .set('zoom', action.zoom);
        case 'SET_CENTER':
            return state
                .set('center', fromJS(action.center));
        case 'USER_CENTER_REQUESTED':
            return state
                .set('centerRequested', true);
        case 'ALL_BLOCKS_FETCHED':
            return state
                .set('allBlocks', action.blocks);
        default:
            return state;
    }
}

export default mapReducer;



// WEBPACK FOOTER //
// ./src/redux/map/reducer.js