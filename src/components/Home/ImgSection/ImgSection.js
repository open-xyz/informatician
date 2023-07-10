import React from "react";
import "./ImgSection.css";

export default function ImgSection(props) {
  const changeText = (element) => {
    let a = document.querySelector(".nameAnimation div");
    // console.log(element.elapsedTime);
    if (element.elapsedTime % 10 === 0) {
      a.innerText = props.txt[0];
    } else if (element.elapsedTime % 5 === 0) {
      a.innerText = props.txt[1];
    }
  };

  return (
    <div className="img-section">
      <div className="img-black">
        <div className="container-fluid" style={{ padding: "0px 30px" }}>
          <div className="row">
            <div style={{ height: "60px" }}></div>
            <div className="inner">
              <div className="inner-one inner-two"></div>
              <div className="inner-content">
                <h3 className="inner-head">Read anywhere. Anytime.</h3>
                <span className="inner-span">
                  <p className="inner-para">
                    Unveil the finest literary treasures across diverse genres.
                  </p>
                </span>
                <div
                  className="nameAnimation"
                  onAnimationIteration={(element) => {
                    changeText(element);
                  }}
                >
                  {" "}
                  <div>{props.txt[0]}</div>
                </div>
              </div>
              <div className="last-one last-two"></div>
              <div className="last-three"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
