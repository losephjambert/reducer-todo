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
export const todoReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [...state];
    case COMPLETE_TODO:
      return state.map(t => {
        if (t.id === action.payload) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    default:
      return state;
  }
};
