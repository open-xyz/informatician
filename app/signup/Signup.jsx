"use client";

import { useState, useEffect } from "react";
import GoogleLogo from "@/public/assets/auth/googleLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FaSyncAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaShieldVirus,
  FaCheckCircle,
} from "react-icons/fa";

const SignUp = () => {
  let navigate = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [captchaVal, setCaptchaVal] = useState("");
  const [captchaText, setCaptchaText] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signup = async (e) => {
    e.preventDefault();
    axios
      .post("/api/register", user)
      .then(() => {
        navigate.push("/");
        toast.success("User registered successfully");
      })
      .catch(() => {
        toast.error("Something Went Wrong! User Registration failed!");
      });
  };

  // Captcha logic
  const genrateCaptcha = () => {
    let captcha = "";
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      captcha += charset.charAt(randomIndex);
    }
    setCaptchaText(captcha);
  };

  useEffect(() => {
    genrateCaptcha();
  }, []);

  return (
    <div className="md:w-1/2 mx-auto">
      {/* Signup Form */}
      <form
        className="lg:w-[80%] flex flex-col items-start p-4 px-6 mx-auto gap-2 text-lg"
        aria-label="Signup Form"
        onSubmit={signup}
      >
        {/* Heading */}
        <h2 className="mx-auto mb-4 text-2xl md:text-3xl font-bold text-indigo-600">
          Signup to Informatician
        </h2>

        {/* Signup with google button */}
        <button
          aria-label="Signup with Google"
          className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer"
          onClick={() => signIn("google")}
        >
          Signup with Google{" "}
          <Image src={GoogleLogo} alt="" width={50} height={50} />
        </button>
        <div className="w-[100%] flex mx-auto items-center justify-center gap-2 my-3">
          <div className="w-[40%] border-t-2 border-slate-200"></div>
          or
          <div className="w-[40%] border-t-2 border-slate-200"></div>
        </div>

        {/* Name input */}
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="name">Full Name</label>
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={user.name}
              onChange={handleChange}
              aria-label="Username"
              className="pl-8 w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              required
            />
            <FaUser className="text-[#4f46e5] absolute top-[12px] left-2" />
          </div>
        </div>
        {/* Email input */}
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="email">Your Email</label>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              aria-label="Your Email"
              className="pl-8 w-full bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              required
            />
            <FaEnvelope className="text-[#4f46e5] absolute top-[12px] left-2" />
          </div>
        </div>
        {/* Password input */}
        <div className="w-full flex flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-2 relative">
            <label htmlFor="password">Create Password</label>
            <div className="relative w-[100%]">
              <FaLock className="text-[#4f46e5] absolute top-[12px] left-2" />
              <input
                type={showPass1 ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={user.password}
                onChange={handleChange}
                aria-label="Create Password"
                autoComplete="current-password"
                className="pl-8 w-full bg-slate-100 py-2 px-4 focus:outline-indigo-500"
                required
              />
              <FontAwesomeIcon
                icon={showPass1 ? faEye : faEyeSlash}
                onClick={() => setShowPass1(!showPass1)}
                className="absolute top-4 right-2 cursor-pointer"
              />
            </div>
          </div>
          {/* Confirm password input */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative w-[100%]">
              <FaCheckCircle className="text-[#4f46e5] absolute top-[12px] left-2" />

              <input
                type={showPass2 ? "text" : "password"}
                name="confirmPassword"
                placeholder="Password"
                value={user.confirmPassword}
                onChange={handleChange}
                aria-label="Confirm Password"
                className={
                  !(
                    user.confirmPassword.length === 0 &&
                    user.confirmPassword === user.password
                  )
                    ? "pl-8 w-full bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "pl-8 w-full bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
                required
              />
              <FontAwesomeIcon
                icon={showPass2 ? faEye : faEyeSlash}
                onClick={() => setShowPass2(!showPass2)}
                className="absolute top-4 right-2 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="captcha">Captcha</label>
          <div className="flex flex-row gap-3 justify-center items-center">
            <div
              id="captcha"
              className="w-[40%] py-1 px-2 text-2xl text-gray-700 border-black border-2 border-solid"
              style={{ backgroundImage: `url("/assets/auth/captcha.webp")` }}
            >
              {captchaText}
            </div>
            <FaSyncAlt
              className="spin-icon text-3xl cursor-pointer"
              onClick={genrateCaptcha}
            />
            <div className="relative w-ful">
              <input
                type="text"
                name="captch"
                value={captchaVal}
                placeholder="Enter Captcha Here"
                onChange={(e) => setCaptchaVal(e.target.value)}
                className="pl-8 w-full self-end bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
              <FaShieldVirus className="text-[#4f46e5] absolute top-[12px] left-2" />
            </div>
          </div>
        </div>

        {/* Signup button */}
        <button
          className="w-full my-4 bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out "
          aria-label="Signup"
          type="submit"
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
  );
};

export default SignUp;
