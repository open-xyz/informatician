'use client'
import { useEffect, useState } from "react";
import Link from "next/link"
import loginIMG from "@/public/assets/auth/login.jpg";
import GoogleLogo from "@/public/assets/auth/googleLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";
import { FaSyncAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";


const Login = () => {
  const session = useSession()
  let navigate = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [captchaVal, setCaptchaVal] = useState();
  const [captchaText, setCaptchaText] = useState();




  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (session?.status === 'authenticated') {
       navigate.push('/') 
    }
})

  const login = async (e) => {
    e.preventDefault();
    signIn('credentials', {...data, redirect:false})
    .then((callback)=>{
        if(callback?.error){
           toast.error(callback.error)
        }

        if(callback?.ok && !callback?.error){
          toast.success("Logged in successfully!")
          navigate.push('/')
        }
    })
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
    <div className=" my-28 flex">
      {/* Login Form */}
      <div className="md:w-1/2 mx-auto">
        <form
          className="lg:w-[80%] flex flex-col py-4 px-5 gap-6 mx-auto text-lg"
          aria-label="Login form"
          onClick={login}
        >
          {/* Heading */}
          <h2 className="mx-auto text-2xl md:text-3xl font-bold text-indigo-600">
            Login to Informatician
          </h2>

          {/* Login with google button */}
          <button
            className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer"
            onClick={() => signIn("google")}
          >
            Login with Google{" "}
            <Image src={GoogleLogo} alt="" height={50} width={50} />
          </button>
          <div className="w-[100%] flex mx-auto items-center justify-center gap-2">
            <div className="w-[40%] border-t-2 border-slate-200"></div>
            or
            <div className="w-[40%] border-t-2 border-slate-200"></div>
          </div>

          {/* Email input */}
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="email">Your Email</label>
            <div className="w-full relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={handleChange}
              aria-labelledby="email-label"
              className="pl-8 w-[100%] text-gray-800 bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
            <FaEnvelope className="text-[#4f46e5] absolute top-[12px] left-2" />
            </div>
           
          </div>
          {/* Password input */}
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="pass">Your Password</label>
            <div className="relative w-[100%]">
            <FaKey className="text-[#4f46e5] absolute top-[12px] left-2" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={data.password}
                onChange={handleChange}
                aria-labelledby="pass-label"
                className="pl-8 w-[100%] text-gray-800 bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
              <FontAwesomeIcon
                icon={showPass ? faEye : faEyeSlash}
                className="absolute top-4 right-2 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
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
              <div className="relative">
                <input
                  type="text"
                  name="captch"
                  value={captchaVal}
                  placeholder="Enter Captcha Here"
                  onChange={(e) => setCaptchaVal(e.target.value)}
                  className="pl-8 w-full bg-slate-100 py-2 px-4 focus:outline-indigo-500"
                />
                <FaShieldVirus className="text-[#4f46e5] absolute top-[12px] left-2" />
              </div>
            </div>
          </div>

          {/* Remember me */}
          <div className="w-full flex flex-col py-5 sm:flex-row justify-between items-center">
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
          <button
            className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out "
            type="submit"
          >
            Login
          </button>

          {/* Link to Signup page */}
          <div className="mx-auto">
            <div>
              Not Registered?{" "}
              <Link
                href="/signup"
                className="text-blue-700 hover:underline duration-200 ease-out"
              >
                Create Account
              </Link>{" "}
            </div>
          </div>
        </form>
      </div>

      {/* right part image */}
      <div className="hidden md:block md:w-1/2">
        <Image
          src={loginIMG}
          alt="login-img"
          className="object-cover"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Login;
