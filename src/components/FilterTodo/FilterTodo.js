import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FilterType, ClearType } from './../TodoApp/constants';

import './FilterTodo.scss';

class FilterTodo extends Component {
  constructor() {
    super();
    this.state = {
      filterType: FilterType.ALL,
      clearType: ClearType.ALL,
    };
  }

  updateFilterType = (filter) => {
    this.setState({
      filterType: filter,
    });
  };

  udpateClearType = (clear) => {
    this.setState({
      clearType: clear,
    });
  };

  handleFilterAll = () => {
    const { displayTodos } = this.props;
    this.updateFilterType(FilterType.ALL);
    displayTodos();
  };

  handleFilterActive = () => {
    const { displayActive } = this.props;
    this.updateFilterType(FilterType.ACTIVE);
    displayActive();
  };

  handleFilterComplete = () => {
    const { displayComplete } = this.props;
    this.updateFilterType(FilterType.COMPLETE);
    displayComplete();
  };

  resetTodos = () => {
    const { resetTodos } = this.props;
    this.udpateClearType(ClearType.ALL);
    resetTodos();
  };

  resetTodoComplete = () => {
    const { resetTodoComplete } = this.props;
    this.udpateClearType(ClearType.COMPLETE);
    resetTodoComplete();
  };

  render() {
    const { filterType, clearType } = this.state;
    const { todos } = this.props;
    return (
      <Container>
        <h5>{todos.length} Items Left</h5>
        <div className="mt-2 mb-2 d-flex justify-content-around">
          <Button active={filterType === FilterType.ALL} variant="secondary" onClick={this.handleFilterAll}>
            All
          </Button>
          <Button active={filterType === FilterType.ACTIVE} variant="secondary" onClick={this.handleFilterActive}>
            Active
          </Button>
          <Button active={filterType === FilterType.COMPLETE} variant="secondary" onClick={this.handleFilterComplete}>
            Complete
          </Button>
        </div>
        <div className="mt-2 mb-3 d-flex justify-content-around">
          <Button active={clearType === ClearType.ALL} onClick={this.resetTodos}>
            Clear
          </Button>
          <Button active={clearType === ClearType.COMPLETE} onClick={this.resetTodoComplete}>
            Clear Complete
          </Button>
        </div>
      </Container>
    );
  }
}

export default FilterTodo;
