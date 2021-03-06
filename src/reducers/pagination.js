import { UPDATE_PAGINATION, ADD_FRIEND, DELETE_FRIEND } from '../constants/ActionTypes';
import { initialState as friendList } from './friendList';

const initialState = {
  pageNumber: 0,
  friendsNumber: friendList.friendsById.length
};

export default function pagination(state = initialState, {type, pageNumber}) {
  switch(type) {
    case UPDATE_PAGINATION:
      return {
        ...state,
        pageNumber
      }
    case ADD_FRIEND:
      return {
        ...state,
        friendsNumber: state.friendsNumber+1
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friendsNumber: state.friendsNumber-1
      };
    default:
      return state;
  }
}