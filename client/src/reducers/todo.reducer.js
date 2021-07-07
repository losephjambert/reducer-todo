//actions
import * as todoActions from '../actions/todo.actions';
const { CREATE_TODO, COMPLETE_TODO, DELETE_COMPLETED } = todoActions;
// this is the initial state we use to seed our todo state in our application

export const initialTodoState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    completedAt: null,
    createdAt: Date.now(),
    dueDate: '',
  },
];

const createNewTodo = (item, dueDate) => {
  dueDate = dueDate ? new Date(dueDate) : dueDate;
  return {
    item,
    dueDate,
    id: Date.now(),
    completedAt: null,
    createdAt: Date.now(),
    completed: false,
  };
};

// State is the data that we want to update
// action is an object that contains a type and the data we want to use to update our state
export const todoReducer = (todos, action) => {
  switch (action.type) {
    case CREATE_TODO:
      const todo = createNewTodo(action.payload.item, action.payload.dueDate);
      return [...todos, todo];
    case COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: !todo.completed ? Date.now() : null,
          };
        }
        return todo;
      });
    case DELETE_COMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
