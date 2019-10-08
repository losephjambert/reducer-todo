import React, { useReducer } from 'react';
// reducers
import { initialTodoState, todoReducer } from '../reducers/todo.reducer';
//actions
import * as todoActions from '../actions/todo.actions';
//components
import Todo from './Todo';

const TodosContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  return (
    <section>
      <h2>Reducer Todos</h2>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodosContainer;
