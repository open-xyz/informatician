"use client";

import "./NewsLetter.css";
import React from "react";

class NewsLetter extends React.Component {
  handleClick = async (e) => {
    e.preventDefault();
    let emailInput = document.getElementById("simple-search");
    const email = emailInput.value;
    console.log(email);

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      };

      const response = await fetch(
        "http://localhost:5000/api/addUser",
        requestOptions
      );
      console.log(response);

      if (response.status === 200) {
        alert("Subscribed");
        emailInput = "";
      } else alert("Already Subscribed");
    } catch (error) {
      console.error(error);
      alert("There was a problem with server, Please try again!");
    }
  };
  render() {
    return (
      <div className="news bg-cover bg-center bg-no-repeat min-h-180">
        <div className="black bg-opacity-50 container flex justify-center">
          <div className="w-96 max-w-full">
            <h4 className="head">Subscribe To Newsletter</h4>
            <div className="flex p-2 gap-2 md:gap-8">
              <input
                type="email"
                className="form-input mr-2 w-96 px-3 rounded-md focus:outline-0"
                id="simple-search"
                placeholder="Email ID"
                required
              />
              <button
                onClick={this.handleClick}
                type="button"
                className=" px-2 h-9 border-[1.5px] border-red-700 rounded-md text-white hover:bg-red-700 duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;

// export default function NewsLetter() {
//     return (
//         <div className="news">
//             <div className="black">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 subscribe">
//                             <h4 className="head">Subscribe To NewsLetter</h4>
//                             <div className="d-flex p-2">
//                                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email ID" />
//                                 <button type="button" className="btn btn-danger" style={{marginLeft: '8px'}}>
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
