import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="success p-5 mt-20">
      <h1 className="fs-1 fw-bolder">Thank You For Adding Books.</h1>
      <p className="fs-4 my-3">Keep Contributing!</p>
      <Link to="/addBooks">
        <button className="btn btn-primary px-4 py-3 text-white">
          Upload More
        </button>
      </Link>
    </div>
  );
}
