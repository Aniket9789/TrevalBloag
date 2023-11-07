import React, { useState } from "react";
import HomePage from "./component/HomePage";
import { Route, Routes } from "react-router-dom";
import AddBlogForm from "./component/AddBlogForm";
import ViewBlog from "./component/ViewBlog";
function App() {
  const [saveFormData, setSaveFormData] = useState([]);
  const getFormData = (values) => {
    setSaveFormData([...saveFormData, values]);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/addBlogForm"
          element={<AddBlogForm callback={getFormData} />}
        />
        <Route path="/viewBlog" element={<ViewBlog data={saveFormData} />} />
      </Routes>
    </div>
  );
}
export default App;
