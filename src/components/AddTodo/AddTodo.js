import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.scss';

class AddTodo extends Component {
  handleChange(e, isEnter) {
    console.log('handleChange:', e.target.value, isEnter);
    // this.props.addTodoItem(e.target.value,isEnter);
  }

  handleKeyDown(e, isEnter) {
    this.props.addTodoItem(e.target.value, isEnter);
  }

  render() {
    return (
      <div className="input-group mb-3 addtodo block">
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done?"
          onChange={(e) => {
            this.handleChange(e, e.key === 'Enter');
          }}
          onKeyDown={(e) => {
            let isEnter = e.key === 'Enter';
            this.handleKeyDown(e, isEnter);
            if (isEnter) {
              e.target.value = '';
            }
          }}
        />
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;
