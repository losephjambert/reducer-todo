//actions
import * as todoActions from '../actions/todo.actions';
const { ADD_TODO, DELETE_TODO } = todoActions;
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
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('add todo', action.payload);
      return {
        ...state,
      };
    case DELETE_TODO:
      console.log('delete todo', action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
