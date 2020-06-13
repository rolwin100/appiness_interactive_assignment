import { combineReducers } from 'redux';
import auth from 'views/Login/reducer';
import users from 'views/Home/reducer';

const rootReducer = combineReducers({ auth, users });

export default rootReducer;
