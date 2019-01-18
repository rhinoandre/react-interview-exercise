import friends from './friendList';

describe('FriendsReducers', () => {
  test('should return the default state', () => {
    // WHEN
    const state = friends(undefined, {type: 'TEST'});

    // THEN
    expect(state).toEqual({
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
    });
  });

  test('should add the new friend with an id and default star value', () => {
    // WHEN
    const state = friends({ friendsById: [] }, {
      type: 'ADD_FRIEND',
      friend: {
        id: 1,
        name: 'Ariane',
        gender: 'f'
      }
    });

    // THEN
    expect(state).toEqual({
      friendsById: [
        {
          id: 1,
          name: 'Ariane',
          gender: 'f',
          starred: false
        }
      ]
    });
  });

  test('should delete friend by ID', () => {
    // WHEN
    const state = friends(undefined, {
      type: 'DELETE_FRIEND',
      id: 1
    });

    // THEN
    expect(state).toEqual({
      friendsById: [
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
    });
  });

  test('should star a friend by ID', () => {
    // WHEN
    const state = friends(undefined, {
      type: 'STAR_FRIEND',
      id: 2
    });

    // THEN
    expect(state).toEqual({
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
          starred: true
        },
        {
          id: 3,
          name: 'George Washington',
          gender: 'm',
          starred: false
        }
      ]
    });
  });

  test('should unstar a friend by ID if the friend is already starred', () => {
    // WHEN
    const state = friends(
      {
        friendsById: [{
          id: 1,
          name: 'Theodore Roosevelt',
          gender: 'm',
          starred: true
        }]
      },
      {
        type: 'STAR_FRIEND',
        id: 1
      }
    );

    // THEN
    expect(state).toEqual({
      friendsById: [
        {
          id: 1,
          name: 'Theodore Roosevelt',
          gender: 'm',
          starred: false
        }
      ]
    });
  });
});