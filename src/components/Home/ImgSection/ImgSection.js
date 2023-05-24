import React from "react";
import "./ImgSection.css";

export default function ImgSection() {
    return (
        <div className="img-section">
            <div className="img-black">
                <div className="container-fluid" style={{ padding: '0px 30px' }}>
                    <div className="row">
                        <div className="inner">
                            <div className="inner-one inner-two"></div>
                            <div className="inner-content">
                                <h3 className="inner-head">
                                    Read anywhere. Anytime.
                                </h3>
                                <span className="inner-span">
                                    <p className="inner-para">
                                    Unveil the finest literary treasures across diverse genres.
                                    </p>
                                </span>
                                <div>
                                    <button className="btn btn-success">
                                        Start Reading Now
                                    </button>
                                </div>
                            </div>
                            <div className="last-one last-two"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}