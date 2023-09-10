import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, incrementByFive, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch=useDispatch();
    return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={()=>{
        dispatch(increment());
        }}>
            Increment
            </button>

            <button onClick={()=>{
        dispatch(reset());
        }}>
            Reset
            </button>

            <button onClick={()=>{
        dispatch(decrement());
        }}>
            Decrement
            </button>

            <button onClick={()=>{
        dispatch(incrementByFive(5));
        }}>
            Increse BY 5
            </button>
    </div>
  )
}

export default CounterView
