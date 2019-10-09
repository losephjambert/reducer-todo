import React, { useState } from 'react';
import { format } from 'date-fns';

const date = Date.now();

const initialFormState = {
  item: '',
  dueDate: '',
};

const AddTodoForm = props => {
  const [formState, setFormState] = useState(initialFormState);
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e, formValues) => {
    e.preventDefault();
    console.log(formValues);
    // props.addTodo(item);
    setFormState(initialFormState);
  };
  return (
    <form onSubmit={e => handleSubmit(e, formState)}>
      <div>
        <input type='text' name='item' value={formState.item} onChange={handleChange} />
        <input type='submit' value='Add Todo' disabled={formState.item.length > 0 ? false : true} />
      </div>
      <div>
        <label htmlFor='start'>Due date:</label>
        <input
          type='date'
          id='start'
          name='dueDate'
          value={formState.dueDate}
          min={format(date, 'Y-M-d')}
          max='2030-12-31'
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default AddTodoForm;
