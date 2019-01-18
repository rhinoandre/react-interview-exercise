import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gender.css';

export const FEMALE = 'f'
export const MALE = 'm'

export default function Gender({onGenderChange, value}) {
  return (
    <div className={styles.gender}>
      <input
        id="female"
        type="radio"
        name="gender"
        value={FEMALE}
        onChange={onGenderChange}
        checked={value === FEMALE} />
      <label role="radio" htmlFor="female" title="Gender">
        <i className="icon-female"></i>
      </label>
      <input
        id="male"
        type="radio"
        name="gender"
        value={MALE}
        onChange={onGenderChange}
        checked={value === MALE} />
      <label role="radio" htmlFor="male" title="Gender">
        <i className="icon-male"></i>
      </label>
    </div>
  );
}

Gender.propTypes = {
  onGenderChange: PropTypes.func.isRequired,
  value: PropTypes.string
}