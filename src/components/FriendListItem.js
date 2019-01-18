import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';
import { FEMALE, MALE } from './AddFriendForm/Gender';

function getGenderIcon(gender) {
  return [
    ' - ',
    <i key="1" className={classnames(styles.icon, {
      'icon-male': gender === MALE,
      'icon-female': gender === FEMALE,
    })}></i>
  ];
}

function FriendListItem({ id, name, starred, gender, starFriend, deleteFriend }) {
  return (
    <li className={styles.friendListItem}>
      <div className={styles.friendInfos}>
        <div>
          <span>{name}</span>
          {gender && getGenderIcon(gender)}
        </div>
        <div>
          <small>xx friends in common</small>
        </div>
      </div>
      <div className={styles.friendActions}>
        <button className={`btn btn-default ${styles.btnAction}`}
                onClick={() => starFriend(id)}>
          <i className={classnames('fa', {
            'fa-star': starred,
            'fa-star-o': !starred
          })} />
        </button>
        <button className={`btn btn-default ${styles.btnAction}`}
                onClick={() => deleteFriend(id)}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  gender: PropTypes.string,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem;
