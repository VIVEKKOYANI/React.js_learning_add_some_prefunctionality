import React, { useReducer, useState } from 'react'
import { todoReducer } from '../reducer/todoReducer'

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };

  return (
    <div>
      <h2>Todo App (useReducer)</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoApp