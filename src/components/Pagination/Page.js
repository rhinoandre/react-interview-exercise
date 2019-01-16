import React from 'react';

export default function Page({pageNumber}) {
  return (
    <li>
      <a>{pageNumber}</a>
    </li>
  );
}