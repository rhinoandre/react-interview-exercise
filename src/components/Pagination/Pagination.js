import React from 'react';
import PropTypes from 'prop-types';
import PageInput from './PageInput';

function previousPage(currentPage, updatePage) {
  if (!isFirstPage(currentPage)) {
    updatePage(currentPage-1);
  }
}

function isFirstPage(currentPage) {
  return currentPage === 0;
}

function nextPage(currentPage, maxPages, updatePage) {
  if (!isLastPage(currentPage, maxPages)) {
    updatePage(currentPage+1);
  }
}

function isLastPage(currentPage, maxPages) {
  return currentPage === maxPages-1;
}

export function Pagination({friendsNumber, currentPage, updatePage}) {
  const maxPages = Math.ceil(friendsNumber/2);
  return (
    <ul>
      <li>
        <a onClick={() => previousPage(currentPage, updatePage)}>&#60;</a>
      </li>
       <PageInput maxPages={maxPages} updatePage={updatePage} currentPage={currentPage} /> of {maxPages}
      <li>
        <a onClick={() => nextPage(currentPage, maxPages, updatePage)}>&#62;</a>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  friendsNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
}
