import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
    return (
        <div className="news">
            <div className="black">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 subscribe">
                            <h4 className="head">Subscribe To NewsLetter</h4>
                            <div className="d-flex p-2">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email ID" />
                                <button type="button" className="btn btn-danger" style={{marginLeft: '8px'}}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}