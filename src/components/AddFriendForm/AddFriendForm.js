import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendForm.css';
import Gender from './Gender';

class AddFriendForm extends PureComponent {

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
          <Gender onGenderChange={this.onGenderChange.bind(this)} value={this.state.gender} />
        </form>
      </section>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.name || ''
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  onGenderChange(e) {
    this.setState({ gender: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const {name, gender} = this.state;
    if (!name) return;

    this.props.addFriend({
      name: name.trim(),
      gender
    });
    this.setState({ name: '', gender: '' });
  }
}

AddFriendForm.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendForm;
