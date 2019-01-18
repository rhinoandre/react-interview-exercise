import { addFriend, deleteFriend, starFriend } from './FriendsActions';

describe('FriendsAction', () => {
  test('should return the addFriend action object', () => {
    // WHEN
    const action = addFriend({
      name: 'André',
      gender: 'm'
    });

    // THEN
    expect(action).toEqual({
      type: 'ADD_FRIEND',
      friend: {
        name: 'André',
        gender: 'm'
      }
    });
  });

  test('should return the deleteFriend action object', () => {
    // WHEN
    const action = deleteFriend(1);

    // THEN
    expect(action).toEqual({
      type: 'DELETE_FRIEND',
      id: 1
    });
  });

  test('should return the starFriend action object', () => {
    // WHEN
    const action = starFriend(1);

    // THEN
    expect(action).toEqual({
      type: 'STAR_FRIEND',
      id: 1
    });
  });
});