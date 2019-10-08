import React from 'react';

const Todo = props => {
  const handleClick = () => {
    console.log('handle click');
  };
  return (
    <li>
      <div>
        <h3>{props.item}</h3>
        <input type='checkbox' onClick={() => handleClick()} />
      </div>
    </li>
  );
};

export default Todo;
