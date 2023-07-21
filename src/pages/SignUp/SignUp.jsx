import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import signupIMG from "../../assets/signup.jpg";
import GoogleLogo from "../../assets/googleLogo.png";
import validate from "../../utils/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignUp = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    userName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const [error, setError] = useState({});
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    let errObj = validate[name](value);
    if(name === "confirmPass") errObj = validate.confirmPass(value, user.pass);
    setError((prev)=>{
      return {...prev, ...errObj}
    })
  };

  const signup = (e) => {
    e.preventDefault();
    let submitable = true;
   Object.values(error).forEach((e)=>{
    if(e !== false){
      submitable = false;
      return;
    }
   })

   if(submitable){
    //  Write submission code here
    setError({});
    navigate("/");
   }else{
    toast.error("Please fill all fields with valid data.")
   }
  };

  return (
    <div className="flex mt-16">
      {/* Left part image */}
      <div className="hidden md:block md:w-1/2">
        <img src={signupIMG} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Signup Form */}
      <div className="md:w-1/2 mx-auto">
        <form className="lg:w-[80%] flex flex-col items-start p-4 px-6 mx-auto gap-2 text-lg" onSubmit={signup}>
          {/* Heading */}
          <h2 className="mx-auto mb-4 text-2xl md:text-3xl font-bold text-indigo-600">
            Signup to Informatician
          </h2>

          {/* Signup with google button */}
          <button className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer">
            Signup with Google{" "}
            <img src={GoogleLogo} alt="" className="h-6 w-6" />
          </button>
          <div className="w-[100%] flex mx-auto items-center justify-center gap-2 my-3">
            <div className="w-[40%] border-t-2 border-slate-200"></div>
            or
            <div className="w-[40%] border-t-2 border-slate-200"></div>
          </div>

          {/* Show error */}

          {/* First name input */}
          <div className="w-full flex flex-row items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="fName"
                value={user.fName}
                onChange={handleChange}
                className={
                  (
                   error.fNameError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
                required
              />
              {error.fName && error.fNameError && <p className="block text-start text-red-600 text-xs w-[200px]">{error.fNameError}</p>}
            </div>
            {/* Last name input */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                name="lName"
                value={user.lName}
                onChange={handleChange}
                className={
                  (
                   error.lNameError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
                required
              />
              {error.lName && error.lNameError && <p className="text-start text-red-600 text-xs w-[200px]">{error.lNameError}</p>}
            </div>
          </div>
          {/* Username input */}
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              className={
                  (
                   error.userNameError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              required
            />
            {error.userName && error.userNameError && <p className="text-red-600 text-xs">{error.userNameError}</p>}
          </div>
          {/* Email input */}
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={
                  (
                   error.emailError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              required={true}
            />
            {error.email && error.emailError && <p className="text-red-600 text-xs">{error.emailError}</p>}
          </div>
          {/* Password input */}
          <div className="w-full flex flex-row items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-2 relative">
              <label htmlFor="pass">Create Password</label>
              <div className="relative">
              <input
                type={showPass1? "text": "password"}
                name="pass"
                value={user.pass}
                onChange={handleChange}
                className={
                  (
                   error.passError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
                required
              />
              <FontAwesomeIcon icon={showPass1?faEye:faEyeSlash} onClick={()=>setShowPass1(!showPass1)} className="absolute top-4 right-2"/>
              </div>
                 {error.pass && error.passError && <p className="text-red-600 text-start text-xs w-[200px]">{error.passError}</p>}
            </div>
            {/* Confirm password input */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirmPass">Confirm Password</label>
              <div className="relative">
              <input
                type={showPass2? "text": "password"}
                name="confirmPass"
                value={user.confirmPass}
                onChange={handleChange}
                className={
                  (
                   error.confirmPassError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
                required
              />
              <FontAwesomeIcon icon={showPass2?faEye:faEyeSlash} onClick={()=>setShowPass2(!showPass2)} className="absolute top-4 right-2"/>
              </div>
                 {error.confirmPass && error.confirmPassError && <p className="text-red-600 text-start text-xs w-[200px]">{error.confirmPassError}</p>}
            </div>
          </div>

          {/* Signup button */}
          <button type="submit"
            className="w-full my-4 bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out ">
            Signup
          </button>

          {/* Link to Login page */}
          <div className="mx-auto">
            <div>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline duration-200 ease-out"
              >
                Login
              </Link>{" "}
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
