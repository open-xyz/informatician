import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import logo from "../../assets/logo.png";
import mobile from "../../assets/mobile.png";
import "./Download.css";

export default function Download() {
  return (
    <div className="row download">
      <div className="left col-lg-6 col-md-6 position-relative d-flex align-items-start justify-content-center">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <img className="rounded-5" src={mobile} alt="mobile" />
      </div>
      <div className="right col-lg-6 col-md-6">
        <p className="brand-name fw-bold text-uppercase">
          <img src={logo} alt="logo" className="h-10 d-inline" /> Informatician
        </p>
        <h1 className="fw-bolder fs-1">Available For Your Smartphone</h1>
        <p>
        Use Informatician through any web browser, Android, or iOS device. Download into the apps for offline access, so whether you’re reading on the beach or on the airplane, you’ll always have access. Install the apps to try them out.
        </p>
        <button className="fw-bold">
          <AppleIcon className="apple" /> Download
        </button>
      </div>
    </div>
  );
}
