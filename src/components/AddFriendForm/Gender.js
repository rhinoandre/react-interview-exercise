import React from 'react';
import styles from './Gender.css';

export default function Gender({onGenderChange}) {
  return (
    <div className={styles.gender}>
      <input id="female" type="radio" name="gender" value="f" onClick={onGenderChange} />
      <label htmlFor="female" title="Gender">
        <i className="icon-female"></i>
      </label>
      <input id="male" type="radio" name="gender" value="m" onClick={onGenderChange} />
      <label htmlFor="male" title="Gender">
        <i className="icon-male"></i>
      </label>
    </div>
  );
}