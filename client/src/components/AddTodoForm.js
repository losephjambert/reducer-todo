import React, { useState } from 'react';

const AddTodoForm = props => {
  const [todoTitle, setTodoTitle] = useState('');
  const handleChange = e => {
    setTodoTitle(e.target.value);
  };
  const handleSubmit = (e, item) => {
    e.preventDefault();
    props.addTodo(item);
    setTodoTitle('');
  };
  return (
    <form onSubmit={e => handleSubmit(e, todoTitle)}>
      <input type='text' value={todoTitle} onChange={handleChange} />
      <input type='submit' value='Add Todo' disabled={todoTitle.length > 0 ? false : true} />
    </form>
  );
};

export default AddTodoForm;
