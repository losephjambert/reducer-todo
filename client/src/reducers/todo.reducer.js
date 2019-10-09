//actions
import * as todoActions from '../actions/todo.actions';
const { ADD_TODO, COMPLETE_TODO } = todoActions;
// this is the initial state we use to seed our todo state in our application
export const initialTodoState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
  },
];

// State is the data that we want to update
// action is an object that contains a type and the data we want to use to update our state
export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return todos;
  }
};
