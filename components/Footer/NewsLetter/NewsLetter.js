
"use client";

import "./NewsLetter.css";
import React from "react";
import { toast } from "react-toastify";

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
        toast.success("Subscribed", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        emailInput = "";
      } else
        toast.error("Already Subscribed", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
    } catch (error) {
      console.error(error);
      toast.error("There was a problem with server, Please try again!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  render() {
    return (
      <div className="news bg-cover bg-center bg-no-repeat min-h-180">
        <div className="bg-black/50 h-[200px] bg-opacity-50 flex justify-center">
          <div className="w-96 max-w-full">
            <h4 className="head">Subscribe To Newsletter</h4>
            <div className="flex max-sm:flex-col p-2 gap-2 md:gap-8">
              <input
                type="email"
                className="form-input mr-2 sm:w-96 px-3 rounded-md focus:outline-0"
                id="simple-search"
                placeholder="Email ID"
                required
              />
              <button
                onClick={this.handleClick}
                type="button"
                className="px-2 h-9 border-[1.5px] border-red-700 rounded-md text-white hover:bg-red-700 duration-300"
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
