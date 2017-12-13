import {  SHOPPING_LIST } from '../actions/index';

export default function(state=[], action) {
  switch (action.type) {
    case SHOPPING_LIST:
      console.log(action.payload);
      return action.payload.data.hits
    default:
      return state;
  }
}
