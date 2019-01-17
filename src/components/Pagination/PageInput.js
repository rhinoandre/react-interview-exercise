import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PageInput.css';

export default class PageInput extends Component {
  state = {
    value: 1
  };

  componentWillReceiveProps({currentPage}) {
    this.setState({ value: currentPage+1 });
  }

  onChange(event) {
    const { maxPages } = this.props;
    if (this.isRightRange(event.target.value, maxPages) || event.target.value === "") {
      this.setState({ value: event.target.value });
    }
  }
  
  isRightRange(value, maxPages) {
    return value <= maxPages && value > 0;
  }
  
  onKeyPress(event) {
    if (event.key === 'Enter' && this.state.value) {
      this.props.updatePage(this.state.value-1);
    }
  }

  render() {
    return (
      <input
          onChange={this.onChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
          name="page"
          type="number"
          value={this.state.value} />
    );
  }
}

PageInput.propTypes = {
  maxPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
}