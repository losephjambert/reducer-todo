import React, { useReducer } from 'react';
//components
import Todo from './Todo';
// reducers
import { initialTodoState, todoReducer } from '../reducers/todo.reducer';
//actions
import * as todoActions from '../actions/todo.actions';
const { ADD_TODO, COMPLETE_TODO } = todoActions;

const TodosContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);

  const updateTodoStatus = (e, id) => {
    dispatch({ type: COMPLETE_TODO, payload: id });
  };

  return (
    <section>
      <h2>Reducer Todos</h2>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} updateTodoStatus={updateTodoStatus} />
        ))}
      </ul>
    </section>
  );
};

export default TodosContainer;
