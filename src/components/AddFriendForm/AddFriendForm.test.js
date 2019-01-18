import React from 'react';
import { mount } from 'enzyme';
import AddFriendForm from './AddFriendForm';

describe('Gender', () => {
  const addFriend = jest.fn();
  afterEach(() => {
    addFriend.mockReset();
  });

  test('should contain an input field for the friend name, gender and a submit button', () => {
    // GIVEN
    const addFriendForm = mount(<AddFriendForm addFriend={addFriend} />);

    // EXPECT
    expect(addFriendForm.find('input[type="text"]').exists()).toBe(true);
    expect(addFriendForm.find('Gender').exists()).toBe(true);
    expect(addFriendForm.find('button[type="submit"]').exists()).toBe(true);
  });

  test('should notify when a new friend is added', () => {
    // GIVEN
    const addFriendForm = mount(<AddFriendForm addFriend={addFriend} />);
    addFriendForm.find('input[type="text"]').simulate('change', { target: { value: 'My friend' } });
    addFriendForm.find('#female').simulate('change', { target: { value: 'f' } });

    // WHEN
    addFriendForm.find('button[type="submit"]').simulate('submit');

    // THEN
    expect(addFriend).toBeCalledWith({
      name: 'My friend',
      gender: 'f'
    });

    // AND
    expect(addFriendForm.find('input[type="text"]').props().value).toBe('');
    expect(addFriendForm.find('input[type="radio"]').get(0).props.checked).toBe(false);
    expect(addFriendForm.find('input[type="radio"]').get(1).props.checked).toBe(false);
  });

  test('should allow to add a friend without a gender', () => {
    // GIVEN
    const addFriendForm = mount(<AddFriendForm addFriend={addFriend} />);
    addFriendForm.find('input[type="text"]').simulate('change', { target: { value: 'My friend' } });

    // WHEN
    addFriendForm.find('button[type="submit"]').simulate('submit');

    // THEN
    expect(addFriend).toBeCalledWith({
      name: 'My friend',
      gender: ''
    });

    // AND
    expect(addFriendForm.find('input[type="text"]').props().value).toBe('');
  });

  test('should NOT allow add a friend without a name', () => {
    // GIVEN
    const addFriendForm = mount(<AddFriendForm addFriend={addFriend} />);

    // WHEN
    addFriendForm.find('button[type="submit"]').simulate('submit');

    // THEN
    expect(addFriend).not.toBeCalled();
  });
});