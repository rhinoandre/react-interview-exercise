import { updatePage } from './PaginationActions';

describe('PaginationActions', () => {
  test('should return the updatePage action object', () => {
    // WHEN
    const action = updatePage(1);

    // THEN
    expect(action).toEqual({
      type: 'UPDATE_PAGINATION',
      pageNumber: 1
    });
  });
});