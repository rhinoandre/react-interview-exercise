import { UPDATE_PAGINATION, ADD_FRIEND, DELETE_FRIEND } from '../constants/ActionTypes';
import { initialState as friendlist } from './friendlist';

const initialState = {
  pageNumber: 0,
  totalPages: friendlist.length
}

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
        totalPage: state.totalPage+1
      };
    case DELETE_FRIEND:
      return {
        ...state,
        totalPage: state.totalPage-1
      };
    default:
      return state;
  }
}