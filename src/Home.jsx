import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from './logo/favicon.png'

const Home = () => {
  const [secret, setSecret] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/find")
      .then((res) => {
        setSecret(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-vh-100 bg-light py-5">
  <div className="container">
    {/* Header */}
    <div className="text-center mb-5">
      <h1 className="fw-bold display-4"><img className="img-fluid logo" src={logo} alt="logo" style={{ width: "50px"}}  /> GhostPen</h1>
      <p className="text-secondary fs-5">
        Write your thoughts freely. Shared anonymously.
      </p>
      <Link
        to="/form"
        className="btn btn-danger btn-lg mt-3 shadow-sm"
        style={{ textDecoration: "none", fontWeight: "500" }}
      >
        ✏️ Create Entry
      </Link>
    </div>

    {/* Diary Entries */}
    {secret.length === 0 ? (
      <div className="text-center mt-5">
        <h2 className="text-muted display-6">No diary entries yet 😔</h2>
        <p className="text-secondary fs-5">Be the first to share your thoughts.</p>
      </div>
    ) : (
      <div className="row justify-content-center">
        {secret.map((dairy) => (
          <div key={dairy._id} className="col-12 col-md-8 mb-4">
            <div className="card shadow-lg rounded-4 border-0">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary fs-6 px-3 py-2">{dairy.mood}</span>
                  <small className="text-muted fs-7">
                    {new Date(dairy.createdAt).toLocaleString()}
                  </small>
                </div>

                {dairy.title && (
                  <h4 className="card-title mt-2 fw-semibold">{dairy.title}</h4>
                )}

                <p className="card-text mt-3 fs-5" style={{ lineHeight: "1.9" }}>
                  {dairy.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default Home;
