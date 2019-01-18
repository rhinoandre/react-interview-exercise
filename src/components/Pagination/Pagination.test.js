import React from 'react';
import { mount } from 'enzyme';
import Pagination from './Pagination';

const LEFT_ARROW = 'li:first-child > a';
const RIGHT_ARROW = 'li:last-child > a';

describe('Pagination', () => {
  const updatePage = jest.fn();
  afterEach(() => {
    updatePage.mockReset();
  });

  test('should have a left arrow, a PageInput, the total of pages and a right arrow', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={0} friendsNumber={10} updatePage={updatePage} />);

    // EXPECT
    expect(pagination.find(LEFT_ARROW).exists()).toBe(true);
    expect(pagination.find('PageInput').exists()).toBe(true);
    expect(pagination.find('li:first-child + li').text()).toContain('of 5');
    expect(pagination.find(RIGHT_ARROW).hasClass('disabled')).toBe(false);
    expect(pagination.find(RIGHT_ARROW).exists()).toBe(true);
  });

  test('should go to the next page when the right arrow is clicked', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={0} friendsNumber={10} updatePage={updatePage} />);

    // WHEN
    pagination.find(RIGHT_ARROW).simulate('click');

    // THEN
    expect(updatePage).toBeCalledWith(1);
  });

  test('should go to the previous page when the left arrow is clicked', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={1} friendsNumber={10} updatePage={updatePage} />);

    // WHEN
    pagination.find(LEFT_ARROW).simulate('click');

    // THEN
    expect(updatePage).toBeCalledWith(0);
  });

  test('should NOT allow user to go to a page after the last one', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={4} friendsNumber={10} updatePage={updatePage} />);

    // WHEN
    pagination.find(RIGHT_ARROW).simulate('click');

    // THEN
    expect(updatePage).not.toBeCalled();
  });

  test('should NOT allow user to go to a page before the first one', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={0} friendsNumber={10} updatePage={updatePage} />);

    // WHEN
    pagination.find(LEFT_ARROW).simulate('click');

    // THEN
    expect(updatePage).not.toBeCalled();
  });

  test('should disable the left arrow when the the component is on the first page', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={0} friendsNumber={10} updatePage={updatePage} />);

    // EXPECT
    expect(pagination.find(LEFT_ARROW).hasClass('disabled')).toBe(true);
  });

  test('should disable the right arrow when the the component is on the last page', () => {
    // GIVEN
    const pagination = mount(<Pagination currentPage={4} friendsNumber={10} updatePage={updatePage} />);

    // EXPECT
    expect(pagination.find(RIGHT_ARROW).hasClass('disabled')).toBe(true);
  });
});