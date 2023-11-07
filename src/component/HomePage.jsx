import React from "react";
import "./All.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const navigateToAddBlogForm = () => {
    navigate("/addBlogForm");
  };
  return (
    <div className="dja outer">
      <div className="dja main">
        <nav className="dja navbar">
          <div className="dja logo">PRASHANT TRAVELS</div>
          <ul className="dja navlist">
            <li>BEST OFFERS</li>
            <li>SALES</li>
            <li>NEWS</li>
            <li>REVIEWS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className="dja middleArea">
          <div className="dja templateArea">
            <h1>TRAVEL WEBSITE TEMPLATE</h1>
            <h3>PATAYA</h3>
            <br></br>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, minima."
            </p>
            <button>SEE MORE</button>
          </div>
        </div>
        <div className="dja getStartedArea">
          <button onClick={navigateToAddBlogForm}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
