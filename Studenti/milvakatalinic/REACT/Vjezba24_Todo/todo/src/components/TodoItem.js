import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

class TodoItem extends React.Component {
  handleToggleTodoClick() {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
  }

  handleRemoveTodoClick() {
    const { todo, removeTodo } = this.props;
    removeTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    const textClass = todo.completed
      ? "todo-item_text todo-item_completed"
      : "todo-item_text";

    return (
      <ListGroup.Item className="todo-item">
        <span
          className="todo-item_item"
          onClick={this.handleToggleTodoClick.bind(this)}
        >
          <Form.Check readOnly checked={todo.completed}></Form.Check>
          <span className={textClass}>{todo.text}</span>
        </span>
        <span
          className="todo-item_delete-button"
          onClick={this.handleRemoveTodoClick.bind(this)}
        >
          x
        </span>
      </ListGroup.Item>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todo: PropTypes.object,
};
