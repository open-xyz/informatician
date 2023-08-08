"use client"
import Image from "next/image";
import Login from "./Login";
import loginIMG from "@/public/assets/auth/login.jpg";

import { useState,useEffect } from "react";
import Preloader from "@/components/Preloader/Preloader";


export const metadata = {
  title: "Login",
};

export default function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (

     <>
      {loading ? (
          <Preloader />
        ) : (
          <>
          <section className="my-28 flex">
                    <Login />

       
<div className="hidden md:block md:w-1/2">
<Image
  src={loginIMG}
  alt="login-img"
  className="object-cover"
  height="100%"
  width="100%"
/>
   </div>
   </section></>

        )}
   
   </>
  );
}
