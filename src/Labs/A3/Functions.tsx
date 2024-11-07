import React from "react";

const subtract = (a: number, b: number) => {
  return a - b;
};

class Functions extends React.Component {
  render() {
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    const result2 = `2 + 3 = ${2 + 3}`;
    const username = "alice";
    const greeting1 = `Welcome home ${username}`;
    const loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;

    return (
      <div>
        <div id="wd-arrow-functions">
          <h4>New ES6 arrow functions</h4>
          threeMinusOne = {threeMinusOne} <br />
          subtract(3, 1) = {subtract(3, 1)} <hr />
        </div>

        <div id="wd-implied-return">
          <h4>Implied return</h4>
          fourTimesFive = {fourTimesFive}
          <br />
          multiply(4, 5) = {multiply(4, 5)} <hr />
        </div>

        <div id="wd-template-literals">
          <h4>Template Literals</h4>
          result1 = {result1} <br />
          result2 = {result2} <br />
          greeting1 = {greeting1} <br />
          greeting2 = {greeting2} <hr />
        </div>


      </div>
    );
  }
}

export default Functions;
