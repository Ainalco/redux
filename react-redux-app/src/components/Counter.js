import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './services/actions/CounterAction';

const Counter = () => {
    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch();
    const handleIncrement=()=>{
        dispatch(incrementCounter());
    }
    const handleDecrement=()=>{
        dispatch(decrementCounter());
    }
    const handleReset=()=>{
        dispatch(resetCounter());
    }
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter

//state Manage.here state is count:0
//action - increment,decrement,reset
//reducer-increment - count => count+1
//reducer-decrement - count => count-1
//reducer-decrement - count => 0

//store

//provideing  store in react

// Use Store
