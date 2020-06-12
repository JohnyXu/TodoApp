import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import AddTodo from './../AddTodo';
import Todo from '../Todo';
import FilterTodo from '../FilterTodo';
import { FilterType } from './constants';
import './TodoApp.scss';

import shoppings from '../../config/shopping';
const { date, items } = shoppings;

class TodoApp extends Component {
  constructor() {
    super();
    console.log('date:', date);
    this.state = {
      filteType: FilterType.ALL,
      todos: items,
    };
    this.counter = 0;
  }

  addTodoItem = (value, isEnter) => {
    if (!isEnter) {
      return;
    }
    if (!String(value).trim()) {
      return;
    }
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.counter++,
          content: value,
          complete: false,
        },
      ],
    });
  };

  deleteTodoItem = (e, id) => {
    let todos = this.state.todos.filter((todoItem) => {
      return todoItem.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  handleComplete = (e, todo) => {
    let todos = this.state.todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        todoItem.complete = e.target.checked;
      }
      return todoItem;
    });
    this.setState({
      todos: todos,
    });
  };

  resetTodos = () => {
    this.setState({
      todos: [],
    });
  };

  resetTodoComplete = () => {
    let todos = this.state.todos.filter((todo) => {
      return !todo.complete;
    });
    this.setState({
      todos: todos,
    });
  };

  displayTodos = () => {
    this.setState({
      filteType: FilterType.ALL,
    });
  };

  displayActive = () => {
    this.setState({
      filteType: FilterType.ACTIVE,
    });
  };

  displayComplete = () => {
    this.setState({
      filteType: FilterType.COMPLETE,
    });
  };

  render() {
    const { todos, filteType } = this.state;
    let displayTodos = todos.filter(function (todo) {
      switch (filteType) {
        case FilterType.COMPLETE:
          return todo.complete;
        case FilterType.ACTIVE:
          return !todo.complete;
        case FilterType.ALL:
          return true;
        default:
          return true;
      }
    });
    return (
      <Container>
        <Row className="d-flex justify-content-center ">
          <h2>Todos</h2>
        </Row>
        <Row className="ml-2 mr-2 mt-2 mb-2">
          <AddTodo addTodoItem={this.addTodoItem}></AddTodo>
        </Row>
        {displayTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              className="ml-2 mr-2 mt-1"
              todo={todo}
              handleComplete={this.handleComplete}
              deleteTodoItem={this.deleteTodoItem}
            />
          );
        })}
        {todos.length > 0 && (
          <FilterTodo
            todos={displayTodos}
            resetTodos={this.resetTodos}
            resetTodoComplete={this.resetTodoComplete}
            displayActive={this.displayActive}
            displayComplete={this.displayComplete}
            displayTodos={this.displayTodos}
          />
        )}
      </Container>
    );
  }
}

export default TodoApp;
