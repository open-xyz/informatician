import Feature from "@/components/About/Feature";
import Hero from "@/components/About/Hero";
import Testimonial from "@/components/About/Testimonial";

export default function About ()  {
  return (
    <section className="bg-lightBlue py-20 text-light">
      <Hero />
      <Feature />
      <Testimonial />
    </section>
  );
};