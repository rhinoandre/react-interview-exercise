import pagination from './pagination';

describe('PaginationReducers', () => {
  test('should return the default state', () => {
    // WHEN
    const state = pagination(undefined, {type: 'TEST'});

    // THEN
    expect(state).toEqual({
      pageNumber: 0,
      friendsNumber: 3
    });
  });

  test('should update the page', () => {
    // WHEN
    const state = pagination(
      {
        pageNumber: 0,
        friendsNumber: 3
      },
      {
        type: 'UPDATE_PAGINATION',
        pageNumber: 2
      }
    );

    // THEN
    expect(state).toEqual({
      pageNumber: 2,
      friendsNumber: 3
    });
  });

  test('should increase the amount of friend by 1 when a friend is added', () => {
    // WHEN
    const state = pagination(
      {
        pageNumber: 0,
        friendsNumber: 3
      },
      {
        type: 'ADD_FRIEND'
      }
    );

    // THEN
    expect(state).toEqual({
      pageNumber: 0,
      friendsNumber: 4
    });
  });

  test('should decrease the amount of friend by 1 when a friend is deleted', () => {
    // WHEN
    const state = pagination(
      {
        pageNumber: 0,
        friendsNumber: 3
      },
      {
        type: 'DELETE_FRIEND'
      }
    );

    // THEN
    expect(state).toEqual({
      pageNumber: 0,
      friendsNumber: 2
    });
  });
});