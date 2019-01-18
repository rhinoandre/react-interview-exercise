import React from 'react';
import styles from './Gender.css';

export default function Gender({onGenderChange, value}) {
  console.log(value)
  return (
    <div className={styles.gender}>
      <input id="female" type="radio" name="gender" value="f" onClick={onGenderChange} checked={value === 'f'} />
      <label htmlFor="female" title="Gender">
        <i className="icon-female"></i>
      </label>
      <input id="male" type="radio" name="gender" value="m" onClick={onGenderChange} checked={value === 'm'} />
      <label htmlFor="male" title="Gender">
        <i className="icon-male"></i>
      </label>
    </div>
  );
}