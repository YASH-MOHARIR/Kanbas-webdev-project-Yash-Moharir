import React from "react";
import "./Lab2W2.css";
import TOC from "./TOC.tsx";

class Lab2W2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Assignment 2 - Week 4, Bootstrap</h1>

        <h2>Bootstrap</h2>

        <div id="wd-bs-grid-system">
          <h2>Grid system</h2>
          <div className="row">
            <div className="col bg-danger text-white">
              <h3>Left half</h3>
            </div>
            <div className="col bg-primary text-white">
              <h3>Right half</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4 bg-warning">
              <h3>One thirds</h3>
            </div>
            <div className="col-8 bg-success text-white">
              <h3>Two thirds</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-2 bg-dark text-white">
              <h3>Sidebar</h3>
            </div>
            <div className="col-8 bg-secondary text-white">
              <h3>Main content</h3>
            </div>
            <div className="col-2 bg-info">
              <h3>Sidebar</h3>
            </div>
          </div>
        </div>

        <div id="wd-bs-responsive-grids">
          <h2>Responsive grid system</h2>
          <div className="row">
            <div
              className="col-12 col-md-6 col-xl-3 
                                        bg-warning">
              <h3>Column A</h3>
            </div>
            <div
              className="col-12 col-md-6 col-xl-3 
                                        bg-primary text-white">
              <h3>Column B</h3>
            </div>
            <div
              className="col-12 col-md-6 col-xl-3 
                                        bg-danger text-white">
              <h3>Column C</h3>
            </div>
            <div
              className="col-12 col-md-6 col-xl-3 
                                        bg-success text-white">
              <h3>Column D</h3>
            </div>
          </div>
        </div>
        <div id="wd-bs-responsive-dramatic">
          <h2>Responsive grid system</h2>
          <div className="row">
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-warning">
              <h4>1</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-primary text-white">
              <h4>2</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-danger text-white">
              <h4>3</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-success text-white">
              <h4>4</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-warning">
              <h4>5</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                                    bg-primary text-white">
              <h4>6</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-danger text-white">
              <h4>7</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-success text-white">
              <h4>8</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-warning">
              <h4>9</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-primary text-white">
              <h4>10</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-danger text-white">
              <h4>11</h4>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                                    bg-success text-white">
              <h4>12</h4>
            </div>
          </div>
        </div>

        <div id="wd-screen-size-label">
          <div className="d-block d-sm-none">XS - Extra Small (&lt;576px)</div>
          <div className="d-none d-sm-block d-md-none">S - Small (≥576px)</div>
          <div className="d-none d-md-block d-lg-none">M - Medium (≥768px)</div>
          <div className="d-none d-lg-block d-xl-none">L - Large (≥992px)</div>
          <div className="d-none d-xl-block d-xxl-none">XL - Extra Large (≥1200px)</div>
          <div className="d-none d-xxl-block">XXL - Extra Extra Large (≥1400px)</div>
        </div>

        <div id="wd-css-styling-tables">
          <h2>Tables</h2>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-warning">
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr className="table-danger">
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr className="table-primary">
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>90</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="table-success">
                <td colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div id="wd-css-responsive-tables">
          <h2>Responsive tables</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Very</th>
                  <th>long</th>
                  <th>set</th>
                  <th>of</th>
                  <th>columns</th>
                  <th>Very</th>
                  <th>long</th>
                  <th>set</th>
                  <th>of</th>
                  <th>columns</th>
                  <th>Very</th>
                  <th>long</th>
                  <th>set</th>
                  <th>of</th>
                  <th>columns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Very</td>
                  <td>long</td>
                  <td>set</td>
                  <td>of</td>
                  <td>columns</td>
                  <td>Very</td>
                  <td>long</td>
                  <td>set</td>
                  <td>of</td>
                  <td>columns</td>
                  <td>Very</td>
                  <td>long</td>
                  <td>set</td>
                  <td>of</td>
                  <td>columns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="wd-css-styling-lists">
          <h2>Favorite movies</h2>
          <ul className="list-group">
            <li className="list-group-item active">Aliens</li>
            <li className="list-group-item">Terminator</li>
            <li className="list-group-item">Blade Runner</li>
            <li className="list-group-item">Lord of the Ring</li>
            <li className="list-group-item disabled">Star Wars</li>
          </ul>
        </div>

        <div id="wd-css-hyperlink-list">
          <h3>Favorite books</h3>
          <div className="list-group">
            <a
              href="https://en.wikipedia.org/wiki/Dune_(novel)"
              className="list-group-item list-group-item-action active">
              Dune
            </a>
            <a
              href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
              className="list-group-item list-group-item-action">
              Lord of the Rings
            </a>
            <a href="https://en.wikipedia.org/wiki/The_Forever_War" className="list-group-item list-group-item-action">
              The Forever War
            </a>
            <a
              href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
              className="list-group-item list-group-item-action">
              2001 A Space Odyssey
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Ender%27s_Game"
              className="list-group-item list-group-item-action disabled">
              Ender's Game
            </a>
          </div>
        </div>
        <div id="wd-css-styling-forms">
          <h2>Forms</h2>
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="input1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="textarea1" className="form-label">
              Example textarea
            </label>
            <textarea className="form-control" id="textarea1" rows={3}></textarea>
          </div>
        </div>
        <div id="wd-css-styling-dropdowns">
          <h3>Dropdowns</h3>
          <select className="form-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div id="wd-css-styling-switches">
          <h3>Switches</h3>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switch1" />
            <label className="form-check-label" htmlFor="switch1">
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switch2" checked />
            <label className="form-check-label" htmlFor="switch2">
              Checked switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switch3" disabled />
            <label className="form-check-label" htmlFor="switch3">
              Disabled switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switch4" checked disabled />
            <label className="form-check-label" htmlFor="switch4">
              Disabled checked switch checkbox input
            </label>
          </div>
        </div>

        <div id="wd-css-styling-range-and-sliders">
          <h3>Range</h3>
          <label htmlFor="range1" className="form-label">
            Example range
          </label>
          <input type="range" className="form-range" min="0" max="5" step="0.5" id="range1" />
        </div>

        <div id="wd-css-styling-addons">
          <h3>Addons</h3>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <span className="input-group-text">0.00</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group">
            <input type="text" className="form-control" />
            <span className="input-group-text">$</span>
            <span className="input-group-text">0.00</span>
          </div>
        </div>

        <div id="wd-css-responsive-forms-2">
          <h3>Responsive forms</h3>
          <form>
            <div className="row mb-3">
              <label htmlFor="r1" className="col-sm-2 col-form-label">
                Email{" "}
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="r1" />
              </div>{" "}
            </div>
            <div className="row mb-3">
              <label htmlFor="r2" className="col-sm-2 col-form-label">
                Password{" "}
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="r2" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="textarea2" className="col-sm-2 col-form-label">
                Bio{" "}
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  placeholder="added the text area in this form"
                  id="textarea2"
                  rows={3}></textarea>
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="r3" value="option1" checked />
                  <label className="form-check-label" htmlFor="r3">
                    First radio{" "}
                  </label>{" "}
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="r4" value="option2" />
                  <label className="form-check-label" htmlFor="r4">
                    Second radio{" "}
                  </label>{" "}
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="gridRadios" id="r5" value="option3" disabled />
                  <label className="form-check-label" htmlFor="r5">
                    Third disabled radio{" "}
                  </label>{" "}
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="r6" />
                  <label className="form-check-label" htmlFor="r6">
                    Example checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in{" "}
            </button>
          </form>
        </div>

        <div id="wd-css-navigating-with-tabs">
          <h2>Tabs</h2>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>

        <div id="wd-css-navigating-with-cards">
          <h2>Cards</h2>
          <div className="card" style={{ width: "18rem" }}>
            <img src="NEU.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Stacking Starship</h5>
              <p className="card-text">Stacking the most powerful rocket in history. Mars or bust!</p>
              <a href="#" className="btn btn-primary">
                Boldly Go
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2>Navigation using Pills</h2>
          <TOC></TOC>
        </div>
      </div>
    );
  }
}

export default Lab2W2;
