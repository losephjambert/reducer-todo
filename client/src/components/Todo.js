import React from 'react';
import { format, isAfter } from 'date-fns';
import styled from 'styled-components';

const StyledTodo = styled.li`
  box-shadow: 0 0 0 0 black;
  border-radius: 6px;
  padding: 10px;
  &:hover {
    box-shadow: 0 0 3px 0 black;
  }
`;

const Todo = props => {
  const createdDate = format(props.createdAt, 'E MMM do, y');
  const completedDate = props.completedAt && format(props.completedAt, 'E MMM do, y');
  const formattedDueDate = props.dueDate && format(props.dueDate, 'E MMM do, y');
  const overDue = props.dueDate && isAfter(new Date(), props.dueDate);

  return (
    <StyledTodo>
      <div>
        <h4 className={`${props.completed ? '__completed' : ''}`}>{props.item}</h4>
        {props.completedAt && <p>completed on {completedDate}</p>}{' '}
        {props.dueDate && overDue && <p>This todo is over due!!!</p>}
        <p>Created on {createdDate}</p>
        {props.dueDate && <p>Due: {formattedDueDate}</p>}
        <div>
          <label htmlFor={props.item}>Mark Completed</label>
          <input
            type='checkbox'
            id={props.item}
            name={props.item}
            defaultChecked={props.completed}
            onClick={e => props.updateTodoStatus(e, props.id)}
          />
        </div>
      </div>
    </StyledTodo>
  );
};

export default Todo;
