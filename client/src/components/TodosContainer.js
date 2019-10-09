import React, { useReducer } from 'react';
//components
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';
import ClearCompletedTodosForm from './ClearCompletedTodosForm';
// reducers
import { initialTodoState, todoReducer } from '../reducers/todo.reducer';
//actions
import * as todoActions from '../actions/todo.actions';
const { CREATE_TODO, COMPLETE_TODO, DELETE_COMPLETED } = todoActions;

const TodosContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);

  const updateTodoStatus = (e, id) => {
    dispatch({ type: COMPLETE_TODO, payload: id });
  };

  const addTodo = ({ item, dueDate }) => {
    console.log('TodosContainer.js: addTodo: ', { item, dueDate: new Date(dueDate) });
    dispatch({
      type: CREATE_TODO,
      payload: {
        completed: false,
        completedAt: null,
        createdAt: Date.now(),
        id: Date.now(),
        item,
        dueDate: new Date(dueDate),
      },
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
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} updateTodoStatus={updateTodoStatus} />
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
      <ClearCompletedTodosForm clearCompletedTodos={clearCompletedTodos} />
    </section>
  );
};

export default TodosContainer;
