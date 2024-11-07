import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterReducer.tsx";

export default function CounterRedux() {
  const { count } = useSelector((state: any) => state.CounterReducer);
  const dispatch = useDispatch()
  return (
    <div id="wd-hello-redux">
      <h3>Counter Redux</h3>
      <h4>{count}</h4> <hr />
      <button className="ex btn btn-success" onClick={()=> dispatch(increment())}>Increment</button>
      <button className="btn btn-danger mx-3" onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}
