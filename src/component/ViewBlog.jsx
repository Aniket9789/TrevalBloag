import React from "react";
import { useNavigate } from "react-router-dom";
function ViewBlog(props) {
  const navigate = useNavigate();
  const handleNavigation = (a) => {
    if (a === "home") {
      navigate("/");
    } else if (a === "back") {
      navigate("/addBlogForm");
    }
  };
  return (
    <div className="dja p viewBlogOuterSection">
      <button
        onClick={() => handleNavigation("back")}
        className="dja p backBtn"
      >
        BACK
      </button>
      <button
        onClick={() => handleNavigation("home")}
        className="dja p homeBtn"
      >
        HOME
      </button>
      {props.data.length > 0 ? (
        <div className="dja p blogArray">
          {props.data.map((d, i) => (
            <div className="dja p blogPost" key={i}>
              <h1>{d.title}</h1>
              <h3>{d.about}</h3>
              <img
                style={{ width: "500px", height: "200px" }}
                src={d.image}
                alt="nothing is here"
              ></img>
              <p className="border"></p>
            </div>
          ))}
        </div>
      ) : (
        <h1
          className="p"
          style={{ fontFamily: "monospace", borderBottom: "1px solid black" }}
        >
          No Blog Here
        </h1>
      )}
    </div>
  );
}
export default ViewBlog;
