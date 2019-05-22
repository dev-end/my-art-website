import {combineReducers} from 'redux';
import clickReducer from './clickReducer';

// this is our single and final store.
const navApp = combineReducers({
      clickReducer
    }
);

// make this available as a global store object
export default navApp;
