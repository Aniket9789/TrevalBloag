import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddBlogForm({ callback }) {
  const [createBlogBtn, setCreateBlogBtn] = useState("block");
  const [submitBlogFormBtn, setSubmitBlogFormBtn] = useState("none");
  const [successRightBtn, setSuccessRightBtn] = useState("none");
  const [inputDatas, setInputDatas] = useState({
    title: "",
    about: "",
    image: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleViewBlogBtn = () => {
    navigate("/viewBlog");
  };
  const handleNavigation = () => {
    navigate("/");
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInputDatas({ ...inputDatas, image: e.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      setInputDatas({ ...inputDatas, image: "" });
    }
  };
  const displayElements = (e, n) => {
    e.preventDefault();
    if (n === 1) {
      setCreateBlogBtn("none");
      setSubmitBlogFormBtn("flex");
    } else if (n === 2) {
      if (
        inputDatas.title !== "" &&
        inputDatas.about !== "" &&
        inputDatas.image !== ""
      ) {
        setInputDatas({ ...inputDatas, title: "", about: "", image: "" });
        callback(inputDatas);
        setErrorMsg("");
        setSubmitBlogFormBtn("none");
        setSuccessRightBtn("flex");
      } else {
        setErrorMsg("Please Fill Out the Form first");
      }
    } else if (n === 3) {
      setCreateBlogBtn("block");
      setSuccessRightBtn("none");
    }
  };
  return (
    <div>
      <div className="dja p blogOuterSection">
        <button
          style={{ display: createBlogBtn }}
          onClick={(e) => displayElements(e, 1)}
        >
          CREATE BLOG <strong>+</strong>
        </button>
        <br></br>
        <button style={{ display: createBlogBtn }} onClick={handleViewBlogBtn}>
          VIEW BLOG <strong>+</strong>
        </button>
        <form
          style={{ display: submitBlogFormBtn }}
          className="dja bloformsection"
        >
          <label htmlFor="title">TITLE</label>
          <input
            value={inputDatas.title}
            onChange={(e) =>
              setInputDatas({ ...inputDatas, title: e.target.value })
            }
            id="title"
            type="text"
          ></input>
          <br></br>
          <label htmlFor="about">ABOUT</label>
          <textarea
            value={inputDatas.about}
            onChange={(e) =>
              setInputDatas({ ...inputDatas, about: e.target.value })
            }
            id="about"
            type="text"
          ></textarea>
          <br></br>
          <label htmlFor="image">ADD IMAGE</label>
          <input
            accept="image/*"
            onChange={handleImageUpload}
            id="image"
            type="file"
          ></input>
          <br></br>
          <span style={{ color: "blue", fontWeight: "bold" }}>{errorMsg}</span>
          <br></br>
          <div className="dja blogformsubmitbtn">
            <button onClick={(e) => displayElements(e, 2)}>SUBMIT</button>
          </div>
        </form>
        <div
          style={{ display: successRightBtn }}
          className="dja successPopupSection"
        >
          <div className="dja rightIcon">✔️</div>
          <h1>Success</h1>
          <p>We have successfully sent ur data to the blog section</p>
          <button onClick={(e) => displayElements(e, 3)} className="dja">
            OK
          </button>
        </div>
        <div className="dja p viewBlogOuterSection">
          <button onClick={() => handleNavigation()} className="dja p homeBtn">
            HOME
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddBlogForm;
