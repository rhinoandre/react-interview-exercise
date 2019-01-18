import React from 'react';
import { mount } from 'enzyme';
import FriendList from './FriendList';

describe('FriendList', () => {
  test('should create an FriendListItem for each Friend in the list', () => {
    // GIVEN
    const friendListItem = mount(<FriendList friends={[
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
      }
    ]} actions={{
      deleteFriend: jest.fn(),
      starFriend: jest.fn()
    }} />);

    // EXPECT
    expect(friendListItem.find('FriendListItem').length).toBe(2);
    expect(friendListItem.find('FriendListItem:first-child').props()).toEqual({
      id: 1,
      name: "Theodore Roosevelt",
      gender: 'm',
      starred: true,
      deleteFriend: expect.any(Function),
      starFriend: expect.any(Function)
    });
  });
});