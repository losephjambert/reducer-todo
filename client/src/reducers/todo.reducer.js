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
    default:
      return state;
  }
};
