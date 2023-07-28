"use client"
import { useState, useEffect } from "react";
import signupIMG from "@/public/assets/auth/signup.jpg";
import GoogleLogo from "@/public/assets/auth/googleLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaSyncAlt } from "react-icons/fa";
import { toast } from "react-toastify";


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
  const [captchaVal, setCaptchaVal] = useState("");
  const [captchaText, setCaptchaText] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signup = (e) => {
    e.preventDefault();
    if(captchaVal !== captchaText){
      toast.error("Wrong Captcha");
      return;
    }

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

   // Captcha logic
   const genrateCaptcha = ()=>
   {
     let captcha = "";
     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   
   for (let i = 0; i < 6; i++) {
     var randomIndex = Math.floor(Math.random() * charset.length);
     captcha += charset.charAt(randomIndex);
   }
   setCaptchaText(captcha)
   }

   useEffect(()=>{
     genrateCaptcha();
   }, [])

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
                placeholder="Enter First Name"
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
                placeholder="Enter Last Name"
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
              placeholder="Enter Username"
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
              placeholder="Enter Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          {/* Password input */}
          <div className="w-full flex flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="pass">Create Password</label>
              <input
                type="password"
                name="pass"
                placeholder="Enter Password"
                value={user.pass}
                onChange={handleChange}
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
            </div>
            {/* Confirm password input */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirmPass">Confirm Password</label>
              <input
                type="password"
                name="confirmPass"
                placeholder="Enter Confirm Password"
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
            </div>
          </div>

          <div className="w-[100%] flex flex-col items-start gap-2">
            <label htmlFor="captcha">Captcha</label>
            <div className="flex flex-row gap-3 justify-center items-center">
              <div
                id="captcha"
                className="w-[40%] py-1 px-2 text-2xl text-gray-700 border-black border-2 border-solid"
                style={{backgroundImage: `url("/assets/auth/captcha.webp")`}}
              >{captchaText}</div>
              <FaSyncAlt
                className="spin-icon text-3xl cursor-pointer"
                onClick={genrateCaptcha}
              />
              <input
                type="text"
                name="captch"
                value={captchaVal}
                placeholder="Enter Captcha Here"
                onChange={(e)=>setCaptchaVal(e.target.value)}
                className="w-[100%] self-end bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
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
