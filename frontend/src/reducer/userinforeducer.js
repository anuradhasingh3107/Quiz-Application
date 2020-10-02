import * as Constants from '../constants/Constants';

function userInfoReducer(state = Constants.INITIAL_STATE.userInfoState, action) {
    switch (action.type) {
        case Constants.SET_USER_DATA:
            {
                return Object.assign({}, state, action.data);
            }
            // case Constants.RESET_STATE:
            //     {
            //         let initialState = {
            //             configs: {}
            //         };
            //         return initialState;
            //     }
        default:
            return state;
    }
}

export default userInfoReducer;
