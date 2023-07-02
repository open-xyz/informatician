'use client'

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo() {
      const {theme} = useTheme();

      const themeImage = `/assets/logos/${
    theme === "dark" ? "dark" : "light"
  }_logo.png`;
    return (
      <Image
        loading="lazy"
        src={themeImage}
        width={300}
        height={100}
        className=" h-12 w-fit ml-1 mb-3  hover:shadow "
        alt="Informatician logo"
      />
    );
}