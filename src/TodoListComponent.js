import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
