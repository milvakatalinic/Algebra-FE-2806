import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

import { TodoItem } from "./index";

function TodoList({ todos }) {
  return (
    <ListGroup>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ListGroup>
  );
}

export default TodoList;

TodoList.propTypes = {
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todos: PropTypes.array,
};
