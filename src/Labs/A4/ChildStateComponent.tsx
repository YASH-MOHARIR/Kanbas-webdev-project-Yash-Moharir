import React from "react";

export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div id="wd-child-state">
          <h3>Counter {counter}</h3>
          <button className="btn btn-outline-success" onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
            Increment</button>
          <button className="btn btn-outline-danger mx-3" onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
            Decrement</button>
          <hr/>
        </div>
    );}
    