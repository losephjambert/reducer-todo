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
const StyledTodoWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  h2 {
    grid-column: 1/3;
    margin: 20px 0;
    margin-bottom: 30px;
    margin-left: 20px;
  }

  .todos {
    margin: 20px;

    h3 {
      margin-bottom: 15px;
    }

    &.__forms {
      max-width: 400px;
    }
    &.__list {
      max-width: 400px;
    }
  }
`;

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
    <StyledTodoWrapper>
      <h2>Reducer Todos</h2>
      <section className='todos __forms'>
        <h3>Manage Todos</h3>
        <AddTodoForm addTodo={addTodo} />
        <ClearCompletedTodosForm clearCompletedTodos={clearCompletedTodos} />
      </section>
      <section className='todos __list'>
        <h3>Todos</h3>
        <StyledTodoList>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} updateTodoStatus={updateTodoStatus} />
          ))}
        </StyledTodoList>
      </section>
    </StyledTodoWrapper>
  );
};

export default TodosContainer;
