import React from 'react';
import { mount } from 'enzyme';
import { FriendListApp } from './FriendListApp';

describe('FriendListApp', () => {
  test('should have AddFriendForm, FriendList with the first page and Pagination', () => {
    // GIVEN
    const friendListApp = mount(
      <FriendListApp
        friendList={[
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
        ]}
        pageNumber={0}
        friendsNumber={3}
        addFriend={jest.fn()}
        deleteFriend={jest.fn()}
        starFriend={jest.fn()}
        updatePage={jest.fn()}
      />);

      // EXPECT
      expect(friendListApp.find('h1').text()).toBe('The FriendList');
      expect(friendListApp.find('AddFriendForm').exists()).toBe(true);
      expect(friendListApp.find('AddFriendForm').props()).toEqual({
        addFriend: expect.any(Function)
      });

      expect(friendListApp.find('FriendList').exists()).toBe(true);
      expect(friendListApp.find('FriendList').props()).toEqual({
        friends: [
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
        ],
        actions: {
          deleteFriend: expect.any(Function),
          starFriend: expect.any(Function)
        }
     });

      expect(friendListApp.find('Pagination').exists()).toBe(true);
      expect(friendListApp.find('Pagination').props()).toEqual({
        currentPage: 0,
        friendsNumber: 3,
        updatePage: expect.any(Function),
     });
  });

  test('should show the FriendList with the second page', () => {
    // GIVEN
    const friendListApp = mount(
      <FriendListApp
        friendList={[
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
        ]}
        pageNumber={1}
        friendsNumber={3}
        addFriend={jest.fn()}
        deleteFriend={jest.fn()}
        starFriend={jest.fn()}
        updatePage={jest.fn()}
      />);

      // EXPECT
      expect(friendListApp.find('FriendList').exists()).toBe(true);
      expect(friendListApp.find('FriendList').props()).toEqual({
        friends: [
          {
            id: 3,
            name: 'George Washington',
            gender: 'm',
            starred: false
          }
        ],
        actions: {
          deleteFriend: expect.any(Function),
          starFriend: expect.any(Function)
        }
     });
  });
});
