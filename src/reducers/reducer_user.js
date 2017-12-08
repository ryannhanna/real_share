import { combineReducers } from 'redux';
import user from './reducer_user';
import lists from './reducer_lists';
// import completeGoals from './reducer_completed_goals';

export default combineReducers({
  user,
  lists,
  // completeGoals
})
