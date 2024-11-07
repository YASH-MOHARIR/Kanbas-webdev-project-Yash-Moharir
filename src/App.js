import Lab1 from "./Labs/A1/Labs.tsx";
import "./App.css";
import { HashRouter, Route, Routes, Navigate, BrowserRouter, Link } from "react-router-dom";
import { useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Lab2 from "./Labs/A2/Lab2.tsx";
import Lab2W2 from "./Labs/A2/Lab2W2.tsx";
import Lab3 from "./Labs/A3/Lab3.tsx";
import Lab4 from "./Labs/A4/Lab4.tsx";
import { Provider } from "react-redux";
import store from "./Labs/Store/Index.tsx";

function App() {
  const { pathname } = useLocation();
  return (

    <Provider store={store}>
      
    <div className="App container my-4">
      <h1>Yash Moharir</h1>
      <h2>Section - CS5610.20596.202510</h2>
      <div className="links">
        <div className="lab-links">
          <h2>LABS</h2>
          <Link to={"Labs/A1"} className={`lab-link ${pathname.includes("A1") ? "active" : ""}`}>
            Labs A1 - Week 1 and 2
          </Link> 
          <Link to={"/Labs/A2/Week3"} className={`lab-link ${pathname.includes("A2/Week3") ? "active" : ""}`}>
            Labs A2 - Week 3
          </Link> 
          <Link to={"/Labs/A2/Week4"} className={`lab-link ${pathname.includes("A2/Week4") ? "active" : ""}`}>
            Labs A2 - Week 4
          </Link> 
          <Link to={"/Labs/A3"} className={`lab-link ${pathname.includes("A3") ? "active" : ""}`}>
            Labs A3 - Week 5
          </Link> 
          <Link to={"/Labs/A4"} className={`lab-link ${pathname.includes("A4") ? "active" : ""}`}>
            Labs A4 - Week 6
          </Link> 
        </div>
        <hr />
        <div className="lab-links">
          <h2>Kanbas</h2>
          <a href="https://main--kanbas-yash-moharir.netlify.app/">Kanbas - Week 2</a>
          <a href="https://a1--kanbas-yash-moharir.netlify.app/">Kanbas ( Assignment 1 )</a>
          <a href="https://a2--kanbas-yash-moharir.netlify.app/">Kanbas ( Assignment 2 ) - Week 3 + 4</a>
          <a href="https://a3--kanbas-yash-moharir.netlify.app/">Kanbas ( Assignment 3 ) - Week 5 + 6</a>
          <a href="https://a4--kanbas-yash-moharir.netlify.app/">Kanbas ( Assignment 4 ) - Week 5 + 6</a>
        </div>
        <hr />
        <div className="repo-links">
          <h2>Repo Links</h2>
          <a href="https://github.com/YASH-MOHARIR/Kanbas-webdev-project-Yash-Moharir">
            Github Repository - Kanbas
          </a> 
          <a href="https://github.com/YASH-MOHARIR/a1-webdev-landing-page">Github Repository - Landing Page + Labs</a>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/Labs/A1" element={<Lab1 />} />
          <Route path="/Labs/A2/Week3" element={<Lab2 />} />
          <Route path="/Labs/A2/Week4" element={<Lab2W2 />} />
          <Route path="/Labs/A3" element={<Lab3 />} />
          <Route path="/Labs/A4" element={<Lab4 />} />
        </Routes>
      </div>
    </div>
    
    </Provider>
  );
}

export default App;
