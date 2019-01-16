import React from 'react';

export default function Page({label, pageNumber, updatePage, ...props}) {
  return (
    <li {...props}>
      <a onClick={() => updatePage(pageNumber)}>{label}</a>
    </li>
  );
}