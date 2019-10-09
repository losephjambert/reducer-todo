import React from 'react';

const learCompletedTodosForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.clearCompletedTodos();
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type='submit' value='Clear Completed' />
    </form>
  );
};

export default learCompletedTodosForm;
