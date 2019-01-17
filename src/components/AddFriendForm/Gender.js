import React from 'react';

export default function Gender() {
  return (
    <div>
      <label htmlFor="female">Female
        <input type="radio" name="gender" value="f" />
      </label>
      <label htmlFor="Male">Male
        <input type="radio" name="gender" value="m" />
      </label>
    </div>
  );
}