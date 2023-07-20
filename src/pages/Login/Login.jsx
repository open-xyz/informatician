import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIMG from "../../assets/login.jpg";
import GoogleLogo from "../../assets/googleLogo.png";
import validate from "../../utils/validation";
import { ToastContainer,toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    const errObj = validate[name](value);
    setError((prev)=>{
      return {...prev, ...errObj}
    })
  };

  const login = (e) => {
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
    <div className="mt-16 flex">
      {/* Login Form */}
      <div className="md:w-1/2 mx-auto">
        <form className="lg:w-[80%] flex flex-col py-4 px-5 gap-6 mx-auto text-lg" onSubmit={login}>
          {/* Heading */}
          <h2 className="mx-auto text-2xl md:text-3xl font-bold text-indigo-600">
            Login to Informatician
          </h2>

          {/* Login with google button */}
          <button className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer">
            Login with Google{" "}
            <img src={GoogleLogo} alt="" className="h-6 w-6" />
          </button>
          <div className="w-[100%] flex mx-auto items-center justify-center gap-2">
            <div className="w-[40%] border-t-2 border-slate-200"></div>
            or
            <div className="w-[40%] border-t-2 border-slate-200"></div>
          </div>

          {/* Show error */}

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
                required
            />
             {error.email && error.emailError && <p className="text-red-600 text-xs">{error.emailError}</p>}
          </div>
          {/* Password input */}
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="pass">Your Password</label>
            <input
              type="password"
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
             {error.pass && error.passError && <p className="text-red-600 text-start text-xs">{error.passError}</p>}
          </div>

          {/* Remember me */}
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center">
              <input type="checkbox" name="checkbox" className="h-4 w-4" />
              <label className="px-2" htmlFor="checkbox">
                {" "}
                Remember Me
              </label>
            </div>
            <div className="text-blue-700 hover:underline duration-300 ease-out">
              Forgot password?
            </div>
          </div>

          {/* Login button */}
          <button type="submit"
            className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out ">
            Login
          </button>

          {/* Link to Signup page */}
          <div className="mx-auto">
            <div>
              Not Registered?{" "}
              <Link
                to="/signup"
                className="text-blue-700 hover:underline duration-200 ease-out"
              >
                Create Account
              </Link>{" "}
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>

      {/* right part image */}
      <div className="hidden md:block md:w-1/2">
        <img src={loginIMG} alt="" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default Login;
