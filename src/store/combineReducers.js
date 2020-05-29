import { combineReducers } from 'redux';
import users from 'views/Home/reducer';


const rootReducer = combineReducers({ users });

export default rootReducer;
