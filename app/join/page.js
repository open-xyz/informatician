import Header from "@/components/join/Header";
import Benefits from "@/components/join/Benefits";
import ImgSection from "@/components/join/ImgSection";
import Employee from "@/components/join/Employee";
import Community from "@/components/join/Community";
import JobSection from "@/components/join/JobSection";

export const metadata = {
  title: "Join",
};

export default function JoinPage() {
  return (
    <main className="join py-5">
      <Header />
      <Benefits />
      <ImgSection />
      <Employee />
      <Community />
      <JobSection />      
    </main>
  );
};
;
