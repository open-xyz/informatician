import Contact from "./Contact";

export default function page() {
  return (
    <section className="container max-w-5xl mt-16 py-16 mx-auto px-4">
      <div className="text-center" data-aos="fade-down" data-aos-duration="500">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-500 mb-12">
          We'd love to hear from you! Reach out to us for any inquiries,
          feedback, or collaboration opportunities.
        </p>
      </div>
      <Contact />
    </section>
  );
}
