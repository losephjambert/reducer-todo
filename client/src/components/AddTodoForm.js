import React, { useState } from 'react';
import { format } from 'date-fns';

const date = Date.now();

const initialTodo = {
  item: '',
  dueDate: '',
};

const AddTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState(initialTodo);
  const handleChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e, todo) => {
    e.preventDefault();
    console.log('AddTodoForm.js: handleSubmit: ', todo);
    addTodo(todo);
    setTodo(initialTodo);
  };

  const isEnabled = todo.item.length > 0 && todo.dueDate.length > 0;
  return (
    <form onSubmit={e => handleSubmit(e, todo)}>
      <div>
        <label htmlFor='item'>What do you need to do?</label>
        <input type='text' name='item' value={todo.item} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='start'>When do you want to finish it?</label>
        <input
          type='date'
          id='start'
          name='dueDate'
          value={todo.dueDate}
          min={format(date, 'Y-M-d')}
          max='2030-12-31'
          onChange={handleChange}
        />
      </div>
      {isEnabled ? 'true' : 'false'}
      <input type='submit' value='Add Todo' disabled={!isEnabled} />
    </form>
  );
};

export default AddTodoForm;
