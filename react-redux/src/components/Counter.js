import React from 'react';
import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <h1 style={{ color }}>{number}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
