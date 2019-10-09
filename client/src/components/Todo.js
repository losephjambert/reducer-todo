import React from 'react';
import { format, isAfter } from 'date-fns';
import styled from 'styled-components';

const StyledTodo = styled.li``;

const Todo = props => {
  const createdDate = format(props.createdAt, 'E MMM do, y');
  const completedDate = props.completedAt && format(props.completedAt, 'E MMM do, y');
  const formattedDueDate = props.dueDate && format(props.dueDate, 'E MMM do, y');
  const overDue = props.dueDate && isAfter(new Date(), props.dueDate);

  return (
    <StyledTodo>
      <div>
        <h3 className={`${props.completed ? '__completed' : ''}`}>
          {props.item} {props.completedAt && <span>completed on {completedDate}</span>}{' '}
          {props.dueDate && overDue && <span>This todo is over due!!!</span>}
        </h3>
        <p>Created on {createdDate}</p>
        {props.dueDate && <p>Due: {formattedDueDate}</p>}

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
    </StyledTodo>
  );
};

export default Todo;
