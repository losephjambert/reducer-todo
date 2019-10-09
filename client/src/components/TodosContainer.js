import React, { useReducer } from 'react';
import styled from 'styled-components';
//components
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';
import ClearCompletedTodosForm from './ClearCompletedTodosForm';
// reducers
import { initialTodoState, todoReducer } from '../reducers/todo.reducer';
//actions
import * as todoActions from '../actions/todo.actions';
const { CREATE_TODO, COMPLETE_TODO, DELETE_COMPLETED } = todoActions;
// styled components
const StyledTodoList = styled.ul``;
const TodosContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);

  const updateTodoStatus = (e, id) => {
    dispatch({ type: COMPLETE_TODO, payload: id });
  };

  const addTodo = todo => {
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
  };

  const clearCompletedTodos = () => {
    dispatch({
      type: DELETE_COMPLETED,
    });
  };

  return (
    <section>
      <h2>Reducer Todos</h2>
      <StyledTodoList>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} updateTodoStatus={updateTodoStatus} />
        ))}
      </StyledTodoList>
      <AddTodoForm addTodo={addTodo} />
      <ClearCompletedTodosForm clearCompletedTodos={clearCompletedTodos} />
    </section>
  );
};

export default TodosContainer;
