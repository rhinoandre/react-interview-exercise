import React from 'react';
import { mount } from 'enzyme';
import Gender from './Gender';

describe('Gender', () => {
  const onGenderChange = jest.fn();
  afterEach(() => {
    onGenderChange.mockReset();
  });

  test('should contain radio buttons for female and male options', () => {
    // GIVEN
    const gender = mount(<Gender onGenderChange={onGenderChange} />);

    // EXPECT
    expect(gender.find('input[type="radio"]#female').exists()).toBe(true);
    expect(gender.find('input[type="radio"]#female').prop('checked')).toBe(false);
    expect(gender.find('input[type="radio"]#male').exists()).toBe(true);
    expect(gender.find('input[type="radio"]#male').prop('checked')).toBe(false);
    expect(gender.find('label').length).toBe(2);
  });

  test('should select auto female when "f" is passed in value prop', () => {
    // GIVEN
    const gender = mount(<Gender onGenderChange={onGenderChange} value='f' />);

    // EXPECT
    expect(gender.find('#female').prop('checked')).toBe(true);
    expect(gender.find('#male').prop('checked')).toBe(false);
  });

  test('should select auto male when "m" is passed in value prop', () => {
    // GIVEN
    const gender = mount(<Gender onGenderChange={onGenderChange} value='m' />);

    // EXPECT
    expect(gender.find('#female').prop('checked')).toBe(false);
    expect(gender.find('#male').prop('checked')).toBe(true);
  });

  test('should notify when female is selected', () => {
    // GIVEN
    const gender = mount(<Gender onGenderChange={onGenderChange} />);

    // WHEN
    gender.find('#female').simulate('change', { target: { value: 'f' }});

    // THEN
    expect(onGenderChange).toBeCalled();
  });

  test('should notify when male is selected', () => {
    // GIVEN
    const gender = mount(<Gender onGenderChange={onGenderChange} />);

    // WHEN
    gender.find('#male').simulate('change', { target: { value: 'm' }});

    // THEN
    expect(onGenderChange).toBeCalled();
  });
});