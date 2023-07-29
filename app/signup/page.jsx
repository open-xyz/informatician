"use client"
import { useState } from "react";
import signupIMG from "@/public/assets/auth/signup.jpg";
import GoogleLogo from "@/public/assets/auth/googleLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignUp = () => {
  let navigate = useRouter();
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    userName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const [error, setError] = useState("");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signup = (e) => {
    e.preventDefault();

    if (!user.fName) {
      setError("First Name is Required!");
      return;
    } else if (!user.lName) {
      setError("Last Name is Required!");
      return;
    } else if (!user.userName) {
      setError("Username is Required!");
      return;
    } else if (!user.email) {
      setError("Email is Required!");
      return;
    } else if (!user.pass) {
      setError("Password is Required!");
      return;
    } else if (!user.confirmPass) {
      setError("Please confirm your Password!");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="flex my-28">
      {/* Left part image */}
      <div className="hidden md:block md:w-1/2">
        <Image src={signupIMG} alt="" className="object-cover" width="100%" height="100%" />
      </div>

      {/* Signup Form */}
      <div className="md:w-1/2 mx-auto">
        <form className="lg:w-[80%] flex flex-col items-start p-4 px-6 mx-auto gap-2 text-lg">
          {/* Heading */}
          <h2 className="mx-auto mb-4 text-2xl md:text-3xl font-bold text-indigo-600">
            Signup to Informatician
          </h2>

          {/* Signup with google button */}
          <button className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer">
            Signup with Google{" "}
            <Image src={GoogleLogo} alt="" width={50} height={50} />
          </button>
          <div className="w-[100%] flex mx-auto items-center justify-center gap-2 my-3">
            <div className="w-[40%] border-t-2 border-slate-200"></div>
            or
            <div className="w-[40%] border-t-2 border-slate-200"></div>
          </div>

          {/* Show error */}
          {error && <div className="text-red-600">{error}</div>}

          {/* First name input */}
          <div className="w-full flex flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="fName"
                value={user.fName}
                onChange={handleChange}
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
            </div>
            {/* Last name input */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                name="lName"
                value={user.lName}
                onChange={handleChange}
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
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
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          {/* Email input */}
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          {/* Password input */}
          <div className="w-full flex flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2 relative">
              <label htmlFor="pass">Create Password</label>
              <div className="relative w-[100%]">
              <input
                type={showPass1? "text":"password"}
                name="pass"
                value={user.pass}
                onChange={handleChange}
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
               <FontAwesomeIcon icon={showPass1?faEye:faEyeSlash} onClick={()=>setShowPass1(!showPass1)} className="absolute top-4 right-2 cursor-pointer"/>
              </div>
            </div>
            {/* Confirm password input */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirmPass">Confirm Password</label>
              <div className="relative w-[100%]">
              <input
                type={showPass2? "text":"password"}
                name="confirmPass"
                value={user.confirmPass}
                onChange={handleChange}
                className={
                  !(
                    user.confirmPass.length === 0 &&
                    user.confirmPass === user.pass
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              />
              <FontAwesomeIcon icon={showPass2?faEye:faEyeSlash} onClick={()=>setShowPass2(!showPass2)} className="absolute top-4 right-2 cursor-pointer"/>
              </div>
             
            </div>
          </div>

          {/* Signup button */}
          <button
            className="w-full my-4 bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out "
            onClick={signup}
          >
            Signup
          </button>

          {/* Link to Login page */}
          <div className="mx-auto">
            <div>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-700 hover:underline duration-200 ease-out"
              >
                Login
              </Link>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
