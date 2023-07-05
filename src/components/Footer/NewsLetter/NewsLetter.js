import React from "react";
import "./NewsLetter.css";
import { toast } from "react-toastify";

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
                toast.success("Subscribed", { position: 'top-center', autoClose: 3000, theme: 'colored' })
                emailInput = "";
            }
            else toast.error("Already Subscribed", { position: 'top-center', autoClose: 3000, theme: 'colored' })
        }

        catch (error) {
            console.error(error);
            toast.error("There was a problem with server, Please try again!", { position: 'top-center', autoClose: 3000, theme: 'colored' })
        }
    };
    render() {
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
