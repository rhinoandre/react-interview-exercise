import React from 'react';
import { connect } from 'react-redux';

import styles from './FriendListApp.css';
import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { updatePage } from '../actions/PaginationActions';
import { FriendList, AddFriendForm, Pagination } from '../components';

function getCurrentVisibleFriends(friendsList, pageNumber) {
  return friendsList.slice(pageNumber*2, pageNumber*2+2);
}

function FriendListApp({ friendList, pageNumber, friendsNumber, ...actions }) {
  const {
    addFriend,
    updatePage,
    ...friendListActions
  } = actions;

  const visibleFriends = getCurrentVisibleFriends(friendList, pageNumber);
  return (
    <div className={styles.friendListApp}>
      <h1>The FriendList</h1>
      <AddFriendForm addFriend={addFriend} />
      <FriendList friends={visibleFriends} actions={friendListActions} />
      <Pagination currentPage={pageNumber} friendsNumber={friendsNumber} updatePage={updatePage} />
    </div>
  );
}

function mapStateToProps({ friendlist, pagination, ...state}) {
  return {
    friendList: friendlist.friendsById,
    pageNumber: pagination.pageNumber,
    friendsNumber: pagination.friendsNumber,
    ...state
  }
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  updatePage
})(FriendListApp)
