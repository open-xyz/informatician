"use client"
import { useState, useEffect } from "react";
import signupIMG from "@/public/assets/auth/signup.jpg";
import GoogleLogo from "@/public/assets/auth/googleLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FaSyncAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import {validate, AuthErrorMessage} from "../../utils/validation.js"

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
  const [error, setError] = useState({});
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [captchaVal, setCaptchaVal] = useState("");
  const [captchaText, setCaptchaText] = useState();

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
    if(!captchaVal){ toast.error("Please fill Captcha field"); return}

    if(captchaVal !== captchaText){
      toast.error("Wrong Captcha");
      setCaptchaVal("");
      genrateCaptcha();
      return;
    }
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
        <Image src={signupIMG} alt="signup-img" className="object-cover" width="100%" height="100%" />
      </div>

      {/* Signup Form */}
      <div className="md:w-1/2 mx-auto">
        <form className="lg:w-[80%] flex flex-col items-start p-4 px-6 mx-auto gap-2 text-lg" aria-label="Signup Form" onSubmit={signup}>
          {/* Heading */}
          <h2 className="mx-auto mb-4 text-2xl md:text-3xl font-bold text-indigo-600">
            Signup to Informatician
          </h2>

          {/* Signup with google button */}
          <button aria-label="Signup with Google" className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer">
            Signup with Google{" "}
            <Image src={GoogleLogo} alt="" width={50} height={50} />
          </button>
          <div className="w-[100%] flex mx-auto items-center justify-center gap-2 my-3">
            <div className="w-[40%] border-t-2 border-slate-200"></div>
            or
            <div className="w-[40%] border-t-2 border-slate-200"></div>
          </div>

          {/* First name input */}
          <div className="w-full flex flex-row items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="fName"
                placeholder="Enter First Name"
                value={user.fName}
                onChange={handleChange}
                aria-label="First Name"
                className={
                  (
                   error.fNameError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              />
              {error.fName && error.fNameError && <AuthErrorMessage message={error.fNameError}/> }
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
                aria-label="Last Name"
                className={
                  (
                   error.lNameError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              />
               {error.lName && error.lNameError && <AuthErrorMessage message={error.lNameError}/> }
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
              aria-label="Username"
              className={
                  (
                   error.userNameError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
            />
             {error.userName && error.userName && <AuthErrorMessage message={error.userNameError}/> }
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
              aria-label="Your Email"
              className={
                  (
                   error.emailError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
            />
            {error.email && error.email && <AuthErrorMessage message={error.emailError}/> }
          </div>
          {/* Password input */}
          <div className="w-full flex flex-row items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-2 relative">
              <label htmlFor="pass">Create Password</label>
              <div className="relative w-[100%]">
              <input
                type={showPass1? "text":"password"}
                name="pass"
                placeholder="Enter Password"
                value={user.pass}
                onChange={handleChange}
                aria-label="Create Password"
                className={
                  (
                   error.passError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              />
               <FontAwesomeIcon icon={showPass1?faEye:faEyeSlash} onClick={()=>setShowPass1(!showPass1)} className="absolute top-4 right-2 cursor-pointer"/>
              </div>
            {error.pass && error.passError && <p className="block text-start text-red-600 text-sm w-[170px] m-0 mb-2">{error.passError}</p> }

            </div>
            {/* Confirm password input */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirmPass">Confirm Password</label>
              <div className="relative w-[100%]">
              <input
                type={showPass2? "text":"password"}
                name="confirmPass"
                placeholder="Enter Confirm Password"
                value={user.confirmPass}
                onChange={handleChange}
                aria-label="Confirm Password"
                className={
                  (
                   error.confirmPassError === false
                  )
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
              />
             <FontAwesomeIcon icon={showPass2?faEye:faEyeSlash} onClick={()=>setShowPass2(!showPass2)} className="absolute top-4 right-2 cursor-pointer"/>
              </div>
              {error.confirmPass && error.confirmPass && <AuthErrorMessage message={error.confirmPassError}/> }
            </div>
          </div>

          <div className="w-[100%] flex flex-col items-start gap-2">
            <label htmlFor="captcha">Captcha</label>
            <div className="flex flex-row gap-3 justify-center items-center">
              <div
                id="captcha"
                className="w-[40%] cursor-default py-1 px-2 text-2xl text-gray-700 border-black border-2 border-solid"
                style={{backgroundImage: `url("/assets/auth/captcha.webp")`}}
                onMouseDown={(e)=>e.preventDefault()}
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
            type="submit"
            aria-label="Signup"
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
