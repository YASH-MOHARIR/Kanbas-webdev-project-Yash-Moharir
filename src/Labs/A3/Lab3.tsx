import React from "react";
import "./Classes.css";
import Functions from "./Functions.tsx";
import Arrays from "./Arrays.tsx";
import DestructingImports from "./DestructingImports.tsx";
import Add from "./Add.tsx";
import Square from "./Square.tsx";
import Highlight from "./Highlight.tsx";
import AddPathParameters from "./AddPathParameters.tsx";
import { Link } from "react-router-dom";
import PathParameters from "./PathParameters.tsx";

class Lab3 extends React.Component {
  render() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;

    let true1 = true,
      false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123; // always use === not ==
    let true5 = floatingPointNumber !== 321.432;
    let false3 = numberVariable < 100;

    let loggedIn = true;

    const color = "blue";
    const dangerous = true;

    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = { backgroundColor: "lightblue", color: "black", ...padding10px };
    const bgRed = {
      backgroundColor: "lightcoral",
      ...colorBlack,
      ...padding10px,
    };
    return (
      <div>
        LAB 3
        <div id="wd-variable-types">
          <h4>Variables Types</h4>
          numberVariable = {numberVariable}
          <br />
          floatingPointNumber = {floatingPointNumber}
          <br />
          stringVariable = {stringVariable}
          <br />
          booleanVariable = {booleanVariable + ""}
          <br />
          isNumber = {isNumber}
          <br />
          isString = {isString}
          <br />
          isBoolean = {isBoolean}
          <hr />
        </div>
        <div id="wd-boolean-variables">
          <h4>Boolean Variables</h4>
          true1 = {true1 + ""} <br />
          false1 = {false1 + ""} <br />
          false2 = {false2 + ""} <br />
          true2 = {true2 + ""} <br />
          true3 = {true3 + ""} <br />
          true4 = {true4 + ""} <br />
          true5 = {true5 + ""} <br />
          false3 = {false3 + ""} <hr />
        </div>
        <div id="wd-if-else">
          <h4>If Else</h4>
          {true1 && <p>true1</p>}
          {!false1 ? <p>!false1</p> : <p>false1</p>} <hr />
        </div>
        <div id="wd-ternary-operator">
          <h4>Logged In</h4>
          {loggedIn ? <p>Welcome</p> : <p>Please login</p>} <hr />
        </div>
        <div id="wd-conditional-output-inline">
          {loggedIn && <h2>Welcome Inline</h2>}
          {!loggedIn && <h2>Please login Inline</h2>}
        </div>
        <Functions />
        <Arrays />
        <DestructingImports />
        <div>
          <h2>Classes</h2>
          <div className="wd-bg-yellow wd-fg-black wd-padding-10px">Yellow background </div>
          <div className="wd-bg-blue wd-fg-black wd-padding-10px">Blue background </div>
          <div className="wd-bg-red wd-fg-black wd-padding-10px">Red background </div>
          <hr />

          <h2>Dynamic Assigning</h2>
          <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>Dynamic Blue background</div>
          <div
            className={`${dangerous ? "wd-bg-red" : "wd-bg-green"}
                                     wd-fg-black wd-padding-10px`}>
            Dangerous background
          </div>
        </div>
        <div id="wd-styles">
          <h2>Styles</h2>
          <div style={{ backgroundColor: "lightyellow", color: "black", padding: "10px" }}>Yellow background</div>
          <div style={bgRed}> Red background </div>
          <div style={bgBlue}>Blue background</div>
        </div>
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam vel
          nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <PathParameters/>
      </div>
    );
  }
}

export default Lab3;
