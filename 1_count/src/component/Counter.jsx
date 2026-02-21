import React, { useState } from 'react'

import './Counter.css';


const Counter = () => {

    const [count,setCount] = useState(0)


const Increment=()=>setCount(count+1);
const Decrement=()=>setCount(count-1);
const reset=() => setCount(0);


  return (
   <div className="container">
      <div className="counter-card">
        <h2 className="title">React Counter</h2>
        <h1 className="count-display">{count}</h1>
        <div className="button-group">
          <button className="btn btn-decrement" onClick={Decrement}>-</button>
          <button className="btn btn-increment" onClick={Increment}>+</button>
        </div>
        <button className="btn-reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter
