import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer.tsx";
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      {todo.title}
      <button className="btn btn-danger mx-2" onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
        {" "}
        Delete{" "}
      </button>
      <button className="btn-info btn mx-2" onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
        {" "}
        Edit{" "}
      </button>
    </li>
  );
}
