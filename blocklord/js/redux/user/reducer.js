import {
    fromJS
} from 'immutable';
const initialState = fromJS({
    user: null,
});

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return state;
        case 'CHANGE_USER_INFO':
            return state;
        default:
            return state;
    }
}

export default userReducer;



// WEBPACK FOOTER //
// ./src/redux/user/reducer.js