import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import TodosList from "./components/TodosList.js";
import "./styles/todo.css";

function Todo() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="todo">
      <div className="container">
        <Header />
        <div className="app-wrapper">
          <div className="scrollbar">
            <div>
              <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
              <TodosList
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
