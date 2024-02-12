import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components/index";
import { VISIBILITY_TYPES } from "./constants/const";
import { REMOVE_ALL_COMPLETED } from "./store/redux-store";

import "./App.css";

class App extends React.Component {
  state = {
    //todos: JSON.parse(localStorage.getItem("todos")) || [],
    visibility: VISIBILITY_TYPES.ALL,
  };

  componentDidMount() {
    const pathName = window.location.href;
    if (pathName.includes(VISIBILITY_TYPES.ACTIVE)) {
      this.setState({ visibility: VISIBILITY_TYPES.ACTIVE });
    }

    if (pathName.includes(VISIBILITY_TYPES.COMPLETED)) {
      this.setState({ visibility: VISIBILITY_TYPES.COMPLETED });
    }
  }

  componentDidUpdate() {
    const { todos } = this.props;

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  getVisibleTodos() {
    const { visibility } = this.state;
    const { todos } = this.props;
    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }

    return todos.filter((todo) => !todo.completed);
  }

  handleVisibilityChange(visibility) {
    this.setState({ visibility: visibility });
  }

  handleRemoveCompleted = () => {
    const { removeTodo } = this.props;
    removeTodo();
  };

  render() {
    const { visibility } = this.state;
    const { todos } = this.props;

    const visibleTodos = this.getVisibleTodos();
    const hasCompleted = todos.filter((todo) => !!todo.completed).length > 0;
    const showClearCompleted =
      visibility === VISIBILITY_TYPES.ALL ||
      visibility === VISIBILITY_TYPES.COMPLETED;

    return (
      <div className="app">
        <h1 className="header">My Tasks</h1>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm />
          <TodoList todos={visibleTodos} />
        </div>
        {hasCompleted && visibleTodos && showClearCompleted && (
          <span className="btn-clear-all" onClick={this.handleRemoveCompleted}>
            Clear Completed
          </span>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: () => dispatch({ type: REMOVE_ALL_COMPLETED }),
  };
}
//buduci da nemamo funkc komponentu, naslanjamo se na redux store, koristimo connect funkciju
//koja ima mapStateToProps kao argument. To je funkcija koja definira translaciju stanja
//kojeg citamo iz redux stora i vezu prema lokalnom propertiju unutar komponenete.
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
};
