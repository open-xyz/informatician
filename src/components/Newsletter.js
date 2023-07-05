import React from "react";
import { toast } from "react-toastify";

class Newsletter extends React.Component {
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

      if(response.status===200){
        toast.success("Subscribed", {position: 'top-center', autoClose: 3000, theme: 'colored'})
        // emailInput="";
      }
      else toast.error("Already Subscribed", {position: 'top-center', autoClose: 3000, theme: 'colored'})
    } 
    
    catch (error) {
      console.error(error);
      toast.error("There was a problem with server, Please try again!", {position: 'top-center', autoClose: 3000, theme: 'colored'})
    }
  };
  render() {
    return (
      <>
        <p className="text-center text-lg font-semibold text-white pt-3">
          Subscribe to newsletter
        </p>
        <form className="flex justify-center mt-5 mb-5 ml-2 mr-2 max-[400px]:flex-col">
          <label for="simple-search" className="sr-only">
            Email
          </label>
          <div className="relative flex justify-center max-[400px]:flex-col items-center">
            <input
              type="email"
              id="simple-search"
              className=" border w-64 lg:w-96  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  bg-gray-200  "
              placeholder="Email address"
              required
            />
          <button
            onClick={this.handleClick}
            className="px-4 py-2 min-[400px]:ml-3 relative rounded group overflow-hidden font-medium bg-purple-50 text-gray-700 inline-block max-[400px]:w-32 max-[400px]:mt-2"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Submit</span>
          </button>
          </div>

        </form>
      </>
    );
  }
}

export default Newsletter;