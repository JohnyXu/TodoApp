import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodoType } from './../../propTypes/Todo';
import './Todo.scss';
import { AiOutlineClose } from 'react-icons/ai';

class Todo extends Component {
  handleComplete = (event) => {
    console.log('handleComplete', event.target.checked);
    this.props.handleComplete(event, this.props.todo);
  };

  deleteTodoItem = (event) => {
    console.log('deleteTodoItem');
    this.props.deleteTodoItem(event, this.props.todo.id);
  };

  render() {
    const {
      todo: { content, complete },
    } = this.props;

    return (
      <div className="todo">
        <div className="item">
          <input type="checkbox" defaultChecked={complete} className="complete" onChange={this.handleComplete}></input>
          <span className="content-item">{content}</span>
        </div>
        <AiOutlineClose onClick={this.deleteTodoItem} size={25} />
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape(TodoType).isRequired,
  handleComplete: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

export default Todo;
