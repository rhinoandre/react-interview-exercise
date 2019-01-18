import * as types from '../constants/ActionTypes';

export const initialState = {
  friendsById: [
    {
      id: 1,
      name: 'Theodore Roosevelt',
      gender: 'm',
      starred: true
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      gender: 'm',
      starred: false
    },
    {
      id: 3,
      name: 'George Washington',
      gender: 'm',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            id: state.friendsById.length+1,
            ...action.friend
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter(friend => friend.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find(friend => friend.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
