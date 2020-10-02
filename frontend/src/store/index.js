import {createStore} from 'redux';
import rootReducer from '../reducer/reducer';
import * as Constants from '../constants/Constants';

const store = createStore(rootReducer, Constants.INITIAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({shouldHotReload: false}));
export default store;
