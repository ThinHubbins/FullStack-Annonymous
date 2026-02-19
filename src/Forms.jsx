import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./logo/favicon.png"

const Form = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    mood: "",
    title: "",
    content: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/", value)
      .then((res)=> {
        console.log(res);
        navigate('/');})
      .catch((err) => console.log(err));
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-4">
            <h3 className="text-center mb-2"><img className="img-fluid logo" src={logo} alt="logo" style={{ width: "50px"}}  /> GhostPen</h3>
            <p className="text-center text-muted mb-4">
              Write freely. No identity. No judgment.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Mood */}
              <div className="mb-3">
                <label className="form-label">Mood</label>
                <select className="form-select" value={value.mood} name="mood" onChange={(e)=> setValue({...value, mood: e.target.value})}>
                  <option>Select how you feel</option>
                  <option>😊 Happy</option>
                  <option>😔 Sad</option>
                  <option>😟 Anxious</option>
                  <option>😡 Angry</option>
                  <option>😌 Calm</option>
                </select>
              </div>

              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Title (optional)</label>
                <input value={value.title}
                  name="title"
                  onChange={(e)=> setValue({...value, title: e.target.value})}
                  
                  type="text"
                  className="form-control"
                  placeholder="Today was..."
                />
              </div>

              {/* Diary Note */}
              <div className="mb-4">
                <label className="form-label">Diary Note</label>
                <textarea value={value.content} name="content" onChange={(e)=> setValue({...value, content: e.target.value})}
                  className="form-control"
                  rows="5"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-dark w-100 py-2 rounded-3"
              >
                Submit Anonymously 🔒
              </button>
            </form>

            <div className="text-center mt-3">
              <small className="text-muted">
                100% anonymous • No login required
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
