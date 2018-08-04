import {
    combineReducers
} from 'redux';
import tileReducer from './tiles/reducer';
import userReducer from './user/reducer';
import web3Reducer from './web3/reducer';
import mapReducer from './map/reducer';
import appReducer from './app/reducer';

const rootReducer = combineReducers({
    tileReducer,
    userReducer,
    web3Reducer,
    mapReducer,
    appReducer,
});

export default rootReducer;



// WEBPACK FOOTER //
// ./src/redux/reducers.js