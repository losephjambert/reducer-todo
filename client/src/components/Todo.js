import React from 'react';
import { format } from 'date-fns';

const Todo = props => {
  const date = format(props.createdAt, 'E MMM do, y');
  return (
    <li>
      <div>
        <h3 className={`${props.completed ? '__completed' : ''}`}>{props.item}</h3>
        <p>Created on {date}</p>
        <div>
          <label htmlFor='todoItem'>Mark Completed</label>
          <input
            type='checkbox'
            id='todoItem'
            name='todoItem'
            defaultChecked={props.completed}
            onClick={e => props.updateTodoStatus(e, props.id)}
          />
        </div>
      </div>
    </li>
  );
};

export default Todo;
