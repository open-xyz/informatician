import React from "react";
import "./NewsLetter.css";

class NewsLetter extends React.Component {
    handleClick = async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("simple-search");
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
            console.log(response)

            if (response.status === 200) {
                alert("Subscribed");
                emailInput = "";
            }
            else alert("Already Subscribed")
        }

        catch (error) {
            console.error(error);
            alert("There was a problem with server, Please try again!")
        }
    };
    render() {
        return (
            <>
                <div className="col-md-8 subscribe w-full">
                    <h4 className="head">Subscribe To NewsLetter</h4>
                        <div className="d-flex p-2" >
                            <input type="email" className="form-control" id="simple-search" placeholder="email@example.com" required  />
                                <button onClick={this.handleClick} type="button" className="btn btn-danger" style={{ marginLeft: '8px',color: 'black' }}>
                                Subscribe
                            </button>
                        </div>
                </div>
            </>
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