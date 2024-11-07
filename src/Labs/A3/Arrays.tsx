import React from "react";
import TodoItem from "./ToDoList/TodoListItem.tsx";
import TodoList from "./ToDoList/TodoList.tsx";

class Arrays extends React.Component {
  render() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [<li>Buy milk</li>, <li>Feed the pets</li>];
    let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];

    let todoArray = [<li>Buy milk</li>, <li>Feed the pets</li>];
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    todoArray.push(<li>Walk the dogs</li>);
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    let stringsArray1 = ["string1", "string3"];
    let stringsArray2 = ["STRING1", "STRING3"];
    for (var i = 0; i < stringsArray1.length; i++) {
      console.log(stringArray1[i]);
    }

    const square = (a: number) => a * a;
    const todos = ["Buy milk", "Feed the pets"];
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a) => a * a * a);

    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");

    const fourIndex = numberArray1.findIndex((a) => a === 4);
    const string3Index = stringArray1.findIndex((a) => a === "string3");

    const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
    const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

    const house = {
      bedrooms: 4,
      bathrooms: 2.5,
      squareFeet: 2000,
      address: {
        street: "Via Roma",
        city: "Roma",
        state: "RM",
        zip: "00100",
        country: "Italy",
      },
      owners: ["Alice", "Bob"],
    };

    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5, 6];
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
    const obj3 = { ...obj1, b: 4 };

    const person = { name: "John", age: 25 };
    const { name, age } = person;
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;

    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });

    return (
      <div>
        <div id="wd-simple-arrays">
          <h4>Simple Arrays</h4>
          numberArray1 = {numberArray1} <br />
          stringArray1 = {stringArray1} <br />
          variableArray1 = {variableArray1} <br />
          Todo list:
          <ol>{htmlArray1}</ol>
          <hr />
        </div>

        <div id="wd-array-index-and-length">
          <h4>Array index and length</h4>
          length1 = {length1} <br />
          index1 = {index1} <hr />
        </div>

        <div id="wd-adding-removing-from-arrays">
          <h4>Add/remove to/from arrays</h4>
          numberArray1 = {numberArray1} <br />
          stringArray1 = {stringArray1} <br />
          Todo list:
          <ol>{todoArray}</ol>
          <hr />
        </div>

        <div id="wd-for-loops">
          <h4>Looping through arrays</h4>
          stringArray2 = {stringsArray2} <hr />
        </div>

        <div id="wd-map-function">
          <h4>Map Function</h4>
          squares = {squares} <br />
          cubes = {cubes} <br />
          Todos:
          <ol>
            {todos.map((todo) => (
              <li>{todo}</li>
            ))}
          </ol>{" "}
          <hr />
        </div>

        <div id="wd-find-function">
          <h4>Find Function</h4>
          four = {four} <br />
          string3 = {string3} <hr />
        </div>

        <div id="wd-filter-function">
          <h4>Filter Function</h4>
          numbersGreaterThan2 = {numbersGreaterThan2} <br />
          evenNumbers = {evenNumbers} <br />
          oddNumbers = {oddNumbers} <hr />
        </div>

        <div className="wd-json-stringify">
          <h3>JSON Stringify</h3>
          squares = {JSON.stringify(squares)}
          <hr />
        </div>
        <div id="wd-house">
          <h4>House</h4>
          <h5>bedrooms</h5>
          {house.bedrooms}
          <h5>bathrooms</h5>
          {house.bathrooms}
          <h5>Data</h5>
          <pre>{JSON.stringify(house, null, 2)}</pre>
          <hr />
        </div>

        <TodoItem />

        <TodoList />

        <div id="wd-spreading">
          <h2>Spread Operator</h2>
          <h3>Array Spread</h3>
          arr1 = {JSON.stringify(arr1)} <br />
          arr2 = {JSON.stringify(arr2)} <br />
          <h3>Object Spread</h3>
          {JSON.stringify(obj1)} <br />
          {JSON.stringify(obj2)} <br />
          {JSON.stringify(obj3)} <br /> <hr />
        </div>

        <div id="wd-destructing">
          <h2>Destructing</h2>
          <h3>Object Destructing</h3>
          const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;
          <br />
          <br />
          name = {name}
          <br />
          age = {age}
          <h3>Array Destructing</h3>
          const [first, second, third] = ["one","two","three"]
          <br />
          <br />
          first = {first}
          <br />
          second = {second}
          <br />
          third = {third}
          <hr />
        </div>
        <div id="wd-function-destructing">
          <h2>Function Destructing</h2>
          const add = (a, b) =&gt; a + b;
          <br />
          const sum = add(1, 2);
          <br />
          const subtract = (&#123; a, b &#125;) =&gt; a - b;
          <br />
          const difference = subtract(&#123; a: 4, b: 2 &#125;);
          <br />
          sum = {sum}
          <br />
          difference = {difference} <hr />
        </div>
      </div>
    );
  }
}

export default Arrays;
