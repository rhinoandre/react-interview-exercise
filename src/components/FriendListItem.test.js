import React from 'react';
import { mount } from 'enzyme';
import FriendListItem from './FriendListItem';

describe('FriendListItem', () => {
  const deleteFriend = jest.fn();
  const starFriend = jest.fn();
  afterEach(() => {
    deleteFriend.mockReset();
    starFriend.mockReset();
  });

  test('should show the friend name, the male icon, a button to star and another to delete the friend', () => {
    // GIVEN
    const friendListItem = mount(<FriendListItem
      id={1}
      name={'André'}
      starred={true}
      gender={'m'}
      deleteFriend={deleteFriend}
      starFriend={starFriend} />
    );

    // EXPECT
    expect(friendListItem.find('span').text()).toBe('André');
    expect(friendListItem.find('i.icon-male').exists()).toBe(true);
  });

  test('should show the friend name, the female icon, a button to star and another to delete the friend', () => {
    // GIVEN
    const friendListItem = mount(<FriendListItem
      id={1}
      name={'Ariane'}
      starred={true}
      gender={'f'}
      deleteFriend={deleteFriend}
      starFriend={starFriend} />
    );

    // EXPECT
    expect(friendListItem.find('span').text()).toBe('Ariane');
    expect(friendListItem.find('i.icon-female').exists()).toBe(true);
  });

  test('should not show the gender when the gender is not passed', () => {
    // GIVEN
    const friendListItem = mount(<FriendListItem
      id={1}
      name={'André'}
      starred={true}
      gender={''}
      deleteFriend={deleteFriend}
      starFriend={starFriend} />
    );

    // EXPECT
    expect(friendListItem.find('span').text()).toBe('André');
    expect(friendListItem.find('i.icon-male').exists()).toBe(false);
    expect(friendListItem.find('i.icon-female').exists()).toBe(false);
    expect(friendListItem.find('button:first-child').exists()).toBe(true);
    expect(friendListItem.find('button:first-child i').hasClass('fa-star')).toBe(true);
    expect(friendListItem.find('button:last-child i').hasClass('fa-trash')).toBe(true);
  });

  test('should star a friend when the star button is clicked', () => {
    // GIVEN
    const friendListItem = mount(<FriendListItem
      id={1}
      name={'André'}
      starred={true}
      gender={''}
      deleteFriend={deleteFriend}
      starFriend={starFriend} />
    );

    // WHEN
    friendListItem.find('button:first-child').simulate('click');

    // THEN
    expect(starFriend).toBeCalledWith(1);
  });

  test('should delete a friend when the delete button is clicked', () => {
    // GIVEN
    const friendListItem = mount(<FriendListItem
      id={1}
      name={'André'}
      starred={true}
      gender={''}
      deleteFriend={deleteFriend}
      starFriend={starFriend} />
    );

    // WHEN
    friendListItem.find('button:last-child').simulate('click');

    // THEN
    expect(deleteFriend).toBeCalledWith(1);
  });
});