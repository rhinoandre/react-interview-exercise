import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendForm.css';
import Gender from './Gender';

class AddFriendForm extends Component {

  render () {
    return (
      <section>
        <form className={styles.addFriendForm} onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange.bind(this)} />
          <Gender />
        </form>
      </section>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const name = this.state.name.trim();
    this.props.addFriend(name);
    this.setState({ name: '' });
  }
}

AddFriendForm.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendForm;
