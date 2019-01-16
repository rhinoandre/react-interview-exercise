import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Page from './Page';

export function Pagination(props) {
  return (
    <ul>
      <li>
        {"<"}
      </li>
      {createPages(props)}
      <li>></li>
    </ul>
  );
}

function createPages({totalPages, page, updatePage}) {
  const pages = [];
  for(let i=0; i<totalPages; i++) {
    pages.push(
      <Page
        key={i}
        label={i+1}
        pageNumber={i}
        className={classnames({active: i === page})}
        updatePage={updatePage}
      />
    );
  }
  return pages;
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}
