import { combineReducers } from 'redux';
import user from './reducer_user';
import lists from './reducer_lists';
import boughtItems from './reducer_bought_items';

export default combineReducers({
  user,
  lists,
  boughtItems
})
