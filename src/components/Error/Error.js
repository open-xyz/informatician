import React from "react";
import pnf from "../../assets/error/pagenotfound.webp";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="Error">
      <img loading='lazy' src={pnf} alt="a person standing near a 404 sign" className="img" />
      <button className="navigate mb-12" onClick={() => navigate("/")}>
        Go To HomePage
      </button>
    </div>
  );
};

export default Error;
