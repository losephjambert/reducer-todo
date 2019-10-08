import React from 'react';

const Todo = props => {
  return (
    <li>
      <div>
        <h3>
          {props.item} {!props.completed && 'not'} completed
        </h3>
        <input type='checkbox' defaultChecked={props.completed} onClick={e => props.updateTodoStatus(e, props.id)} />
      </div>
    </li>
  );
};

export default Todo;
