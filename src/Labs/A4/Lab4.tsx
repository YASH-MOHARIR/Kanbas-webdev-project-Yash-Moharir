import React, { useState } from "react";
import PassingFunctions from "./PassingFunction.tsx";
import ParentStateComponent from "./ParentStateComponent.tsx";
import HelloRedux from "./ReduxExamples/HelloRedux/index.tsx";
import CounterRedux from "./ReduxExamples/CounterRedux/index.tsx";
import AddRedux from "./ReduxExamples/AddRedux/index.tsx";
import TodoItem from "./ReduxExamples/todos/TodoItem.tsx";
import TodoForm from "./ReduxExamples/todos/TodoForm.tsx";
import { useSelector } from "react-redux";

export default function Lab4() {
  const hello = () => {
    alert("Hello World!");
  };
  const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
  };

  const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
  };

  function sayHello() {
    alert("Hello");
  }

  const [count, setCount] = useState(7);
  // console.log(count);

  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };

  const [done, setDone] = useState(true);

  const [firstName, setFirstName] = useState("Yash");

  const [startDate, setStartDate] = useState(new Date());
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${
      date.getDate() + 1 < 10 ? 0 : ""
    }${date.getDate() + 1}`;
  };

  const [person, setPerson] = useState({ name: "Peter", age: 24 });

  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  // TODO LIST
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div>
      <h1>Assignment 4 - Lab 4</h1>

      <div id="wd-click-event">
        <h2>Click Event</h2>
        <button className="btn btn-outline-info mx-3" onClick={hello} id="wd-hello-world-click">
          Hello World!
        </button>
        <button className="btn btn-outline-info mx-3" onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">
          Life is Good!
        </button>
        <button
        className="btn btn-outline-info mx-3"
          onClick={() => {
            hello();
            lifeIs("Great!");
          }}
          id="wd-life-is-great-click">
          Life is Great!
        </button>
        <hr />
      </div>

      <div id="wd-passing-data-on-event">
        <h2>Passing Data on Event</h2>
        <button
          onClick={() => add(2, 3)}
          // onClick={add(2, 3)}
          className="btn btn-primary"
          id="wd-pass-data-click">
          Pass 2 and 3 to add()
        </button>
        <hr />
      </div>

      <PassingFunctions theFunction={sayHello} />

      <div>
        <h2>Event Object</h2>
        <button onClick={(e) => handleClick(e)} className="btn btn-primary" id="wd-display-event-obj-click">
          Display Event Object
        </button>
        <pre>{JSON.stringify(event, null, 2)}</pre>
        <hr />
      </div>

      <div>
        <h2>Counter: {count}</h2>
        <button className="btn btn-outline-success" onClick={() => setCount(count + 1)} id="wd-counter-up-click">
          Up
        </button>
        <button className="btn btn-danger mx-5" onClick={() => setCount(count - 1)} id="wd-counter-down-click">
          Down
        </button>
        <hr />
      </div>

      <div id="wd-boolean-state-variables">
        <h2>Boolean State Variables</h2>
        <p>{done ? "Done" : "Not done"}</p>
        <label className="form-control">
          <input type="checkbox" checked={done} onChange={() => setDone(!done)} /> Done
        </label>
        {done && <div className="alert alert-success">Yay! you are done</div>}
        <hr />
      </div>

      <div>
        <h2>String State Variables</h2>
        <p>{firstName}</p>
        <input className="form-control" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <hr />
      </div>

      <div id="wd-date-state-variables">
        <h2>Date State Variables</h2>
        <h3>{JSON.stringify(startDate)}</h3>
        <h3>{dateObjectToHtmlDateString(startDate)}</h3>
        <input
          className="form-control"
          type="date"
          defaultValue={dateObjectToHtmlDateString(startDate)}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
        <hr />
      </div>

      <div>
        <h2>Object State Variables</h2>
        <pre>{JSON.stringify(person, null, 2)}</pre>
        <input defaultValue={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} />
        <input defaultValue={person.age} onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })} />
        <hr />
      </div>

      <div id="wd-array-state-variables">
        <h2>Array State Variable</h2>
        <button className="btn btn-success" onClick={addElement}>
          Add Element
        </button>
        <ul className="list-group">
          {array.map((item, index) => (
            <li className="list-group-item mt-4" key={index}>
              {item}
              <button className="btn btn-danger mx-4" onClick={() => deleteElement(index)} id="wd-delete-element-click">
                Delete
              </button>
            </li>
          ))}
        </ul>
        <hr />
      </div>

      <ParentStateComponent />

      <HelloRedux />

      <CounterRedux />

      <AddRedux />

      <div id="wd-todo-list-redux">
        <h2>Todo List</h2>
        <ul className="list-group">
          <TodoForm />
          {todos.map((todo: any) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
        <hr />
      </div>

    </div>
  );
}
