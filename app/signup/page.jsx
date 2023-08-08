import Image from "next/image";
import signupIMG from "@/public/assets/auth/signup.jpg";
import SignUp from "./Signup";

export const metadata = {
  title: "Signup",
};

export default function page() {
  return (
    <section className="flex my-28">
      {/* Left part image */}
      <div className="hidden md:block md:w-1/2">
        <Image
          src={signupIMG}
          alt="signup-img"
          className="object-cover"
          width="100%"
          height="100%"
        />
      </div>
      <SignUp />
    </section>
  );
}
