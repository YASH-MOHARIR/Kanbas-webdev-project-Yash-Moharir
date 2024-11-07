import React, { Component } from 'react'

class Lab1 extends Component {
	render() {
		return (
			<div>
				<hr />
                <h1>Lab1- Week 1</h1>
<hr />
<h2>Headings</h2>
<h1>This is heading 1 </h1>
<h2>This is heading 2 </h2>
<h3>This is heading 3 </h3>
<h4>This is heading 4 </h4>
<h5>This is heading 5 </h5>
<h6>This is heading 6 </h6>
<p>This is a sample paragrgaph with dummy text - Lorem ipsum dolor sit, 
  amet consectetur adipisicing elit. Saepe quisquam libero qui voluptatibus 
  veniam reiciendis delectus vero voluptate magni dicta facilis nemo voluptas 
  itaque quod neque rem eum ipsum, sunt debitis sit reprehenderit dolores quas? 
  Sed sequi debitis distinctio doloremque veniam similique recusandae provident 
  est dolor nemo, delectus sunt odit!</p>
<hr/>
  <h2>Lists</h2>
  
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
  </ol>

      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
      </ul>
  <hr/>

    <h2>Images</h2>
    <p>Images using image link:</p>
    <img width={500} src="https://images.unsplash.com/photo-1726533815259-8fe320ac2493?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p>Image in local</p>
    <img src="NEU.jpg" width={500} alt="" />
  <hr />
  <h2>Tables</h2>

  <table border={1} width="100%">	 
    <thead>				 
      <tr>					 
        <th>Quiz</th>				 
        <th>Topic</th>
        <th>Date</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>			 
      <tr>					 
        <td>Q1</td>				 
        <td>HTML</td>
        <td>2/3/21</td>
        <td>85</td>
      </tr>
      <tr>						 
        <td>Q2</td>				 
        <td>CSS</td>
        <td>2/3/27</td>
        <td>90</td>
      </tr>
      <tr>						 
        <td>Q3</td>				 
        <td>JAVASCRIPT</td>
        <td>3/3/10</td>
        <td>95</td>
      </tr>
    </tbody>
    <tfoot>					 
      <tr>
        <td colSpan={3}>Average</td>	 
        <td>90</td>
      </tr>
    </tfoot>
  </table>

  <hr/>
  <h2>Forms</h2>

    <form>
      {/* Text Fields */}
      <label htmlFor="email"> Email:</label><br />
      <input type="email" id="email" name="email" placeholder="Email" required /><br /><br />

      <label htmlFor="password">Password:</label><br />
      <input type="password" id="password" name="password" placeholder="Password" required /><br /><br />

      {/* Radio Buttons */}
      <label>Gender:</label><br />
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">Male</label><br />
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">Female</label><br />
      <input type="radio" id="other" name="gender" value="other" />
      <label htmlFor="other">Other</label><br /><br />

      {/* Checkboxes */}
      <label>Hobbies:</label><br />
      <input type="checkbox" id="reading" name="hobby" value="Reading" />
      <label htmlFor="reading">Reading</label><br />
      <input type="checkbox" id="traveling" name="hobby" value="Traveling" />
      <label htmlFor="traveling">Traveling</label><br />
      <input type="checkbox" id="sports" name="hobby" value="Sports" />
      <label htmlFor="sports">Sports</label><br /><br />

      {/* Dropdown */}
      <label htmlFor="country">Country:</label><br />
      <select id="country" name="country" required>
        <option value="">Select your country</option>
        <option value="USA">United States</option>
        <option value="UK">United Kingdom</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
      </select><br /><br />

      {/* File Upload */}
      <label htmlFor="file">Upload a file:</label><br />
      <input type="file" id="file" name="fileupload" /><br /><br />

      {/* Buttons */}
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
<hr/>

    <h2>Anchors</h2>
    <a href="https://main--kanbas-yash-moharir.netlify.app/Account/Signin"> Assignments Landing Page </a> <br/>
    <a href='https://www.google.com/'> Google Search </a>

			</div>
		)
	}
}

export default Lab1 ;