import { LOGGED_IN, ADD_LIST, SET_COMPLETED } from '../constants';

export function logUser(email) {
  const action = {
    type: LOGGED_IN,
    email
  }
  return action;
}

export function addList(lists) {
  const action = {
    type: ADD_LIST,
    lists
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
