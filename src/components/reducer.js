import {combineReducers} from 'redux';
import UserReducer from './reducer_user';
import ActiveUserReducer from './reducer_active_user';


const Reducer = combineReducers({
  users: UserReducer, 
  activeUser: ActiveUserReducer
}); 

export default Reducer;

