import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PageInput from './PageInput';
import styles from './Pagination.css';

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

export default function Pagination({friendsNumber, currentPage, updatePage}) {
  const maxPages = Math.ceil(friendsNumber/2);
  const previousArrowClass = classnames({
    disabled: isFirstPage(currentPage)
  });
  const nextArrowClass = classnames({
    disabled: isLastPage(currentPage, maxPages)
  });

  return (
    <ul className={styles.pagination}>
      <li>
        <a className={previousArrowClass} onClick={() => previousPage(currentPage, updatePage)}>
          <i className="glyphicon glyphicon-chevron-left"></i>
        </a>
      </li>
      <li>
        <PageInput maxPages={maxPages} updatePage={updatePage} currentPage={currentPage} /> of {maxPages}
      </li>
      <li>
        <a className={nextArrowClass} onClick={() => nextPage(currentPage, maxPages, updatePage)}>
        <i className="glyphicon glyphicon-chevron-right"></i>
        </a>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  friendsNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
}
