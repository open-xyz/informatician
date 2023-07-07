"use client"

import React from "react";
import pnf from "@/public/assets/error/pagenotfound.webp";
import styles from "@/styles/Error.module.css"
import Image from "next/image";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  
  return (
    <div className={styles["Error"]}>
      <Image loading='lazy' src={pnf} alt="a person standing near a 404 sign" className={styles["img"]} width={300} height={200}/>
      <button className={`${styles["navigate"]} mb-12`} onClick={() => router.push('/')}>
        Go To HomePage
      </button>
    </div>
  );
};

export default Error;
