import userInfoReducer from './userinforeducer';
import {combineReducers} from 'redux';
import * as Constants from '../constants/Constants';

const appReducer = combineReducers({userInfoState: userInfoReducer});

const rootReducer = (state, action) => {

    return appReducer(state, action);
}

export default rootReducer;
