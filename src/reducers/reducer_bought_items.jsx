import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLETED:
      const { boughtItems } = action;
      return boughtItems;
    default:
      return state;
  }
}
