import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

export function Pagination({totalPages}) {
  return (
    <ul>{createPages(totalPages)}</ul>
  );
}

function createPages(totalPages) {
  const pages = [];
  for(let i=0; i<totalPages; i++) {
    pages.push(<Page key={i} pageNumber={i} />);
  }
  return pages;
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired
}
