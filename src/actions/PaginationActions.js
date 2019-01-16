import { UPDATE_PAGINATION } from '../constants/ActionTypes';

export const updatePage = pageNumber => ({ type: UPDATE_PAGINATION, pageNumber });