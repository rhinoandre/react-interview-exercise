import React from 'react';
import { mount } from 'enzyme';
import PageInput from './PageInput';

describe('PageInput', () => {
  const updatePage = jest.fn();
  afterEach(() => {
    updatePage.mockReset();
  });

  test('should start in the page 1', () => {
    // GIVEN
    const pageInput = mount(<PageInput maxPages={2} updatePage={updatePage} currentPage={1} />);

    // EXPECT
    expect(pageInput.find('input').props().value).toBe(1);
  });

  test('should accept only allow values between 1 and maxPages', () => {
    // GIVEN
    const pageInput = mount(<PageInput maxPages={2} updatePage={updatePage} currentPage={1} />);

    // WHEN
    pageInput.find('input').simulate('change', { target: { value: 2 } });

    // THEN
    expect(pageInput.find('input').props().value).toBe(2);

    // AND
    expect(updatePage).not.toBeCalled();
  });

  test('should update page when the enter key is pressed', () => {
    // GIVEN
    const pageInput = mount(<PageInput maxPages={2} updatePage={updatePage} currentPage={1} />);

    // WHEN
    pageInput.find('input').simulate('keypress', { key: 'Enter' });

    // THEN
    expect(pageInput.find('input').props().value).toBe(1);

    // AND
    expect(updatePage).toBeCalledWith(0);
  });

  test('should sum +1 to the currentPage when the component receive the prop', () => {
    // GIVEN
    const pageInput = mount(<PageInput maxPages={2} updatePage={updatePage} currentPage={1} />);

    // WHEN
    pageInput.setProps({ currentPage: 2 });

    // THEN
    expect(pageInput.find('input').props().value).toBe(3);
  });

  test('should NOT allow user to enter the number 0 as a initial value', () => {
    // GIVEN
    const pageInput = mount(<PageInput maxPages={2} updatePage={updatePage} currentPage={1} />);
    pageInput.find('input').simulate('change', { target: { value: '' } });
    expect(pageInput.find('input').props().value).toBe('');

    // WHEN
    pageInput.find('input').simulate('keypress', { key: '0' });

    // THEN
    expect(pageInput.find('input').props().value).toBe('');

    // AND
    expect(updatePage).not.toBeCalled();
  });

  test('should NOT allow user to enter a number greater than the maxPage', () => {
    // GIVEN
    const pageInput = mount(<PageInput maxPages={2} updatePage={updatePage} currentPage={1} />);

    // WHEN
    pageInput.find('input').simulate('change', { target: { value: 3 } });

    // THEN
    expect(pageInput.find('input').props().value).toBe(1);

    // AND
    expect(updatePage).not.toBeCalled();
  });
});