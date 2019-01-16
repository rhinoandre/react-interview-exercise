import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FriendListApp.css';
import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { updatePage } from '../actions/PaginationActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {
  render () {
    const {
      friendlist: { friendsById },
      pagination: { pageNumber },
      addFriend,
      deleteFriend,
      starFriend,
      updatePage
    } = this.props;

    const actions = {
      deleteFriend,
      starFriend,
    };

    const totalPages = Math.ceil(friendsById.length/2);
    const friendsList = friendsById.slice(pageNumber*2, pageNumber*2+2);
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={addFriend} />
        <FriendList friends={friendsList} actions={actions} />
        <Pagination currentPage={pageNumber} totalPages={totalPages} updatePage={updatePage} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  updatePage
})(FriendListApp)
