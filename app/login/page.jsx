import Image from "next/image";
import Login from "./Login";
import loginIMG from "@/public/assets/auth/login.jpg";

export default function page() {
  return (
    <section className="my-28 flex">
      <Login />

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
    </section>
  );
}
