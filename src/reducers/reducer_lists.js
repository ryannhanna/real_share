import { ADD_LIST } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      const { lists } = action;
      return lists;
    default:
      return state;
  }
}
