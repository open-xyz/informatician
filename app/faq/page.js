'use client'
import { useState } from "react";
import helpImage from "@/public/assets/mainPages/help.webp";
import Image from "next/image";
import Link from "next/link";
import { MinusCircle, PlusCircle } from "lucide-react";

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`border-b pb-5 ${
        expanded ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <button
        onClick={toggleAccordion}
        aria-expanded={expanded ? "true" : "false"}
        className="w-full flex justify-between items-center focus:outline-none gap-4"
      >
        <span className="font-medium">{title}</span>
        <span className={`rounded-full text-zinc-500 transition ${
          expanded ? "rotate-90" : "rotate-0"
        }`}>
          {expanded ? <PlusCircle size={18} /> : <MinusCircle size={18} />}
        </span>
      </button>
      <div
        className={`mt-3 overflow-hidden  duration-300 ${
          expanded ? "max-h-60" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div className="faq-help p-8 text-center my-12 max-w-6xl mx-auto">
      <div className="faq-help-header my-8">
        <h1 className="faq-help-title text-3xl font-bold mb-6">
          Informatician Help Center
        </h1>
        <Image
          loading="lazy"
          src={helpImage}
          alt="a person wearing a headset"
          className="faq-help-image w-96 mx-auto"
        />
      </div>
      <div className="max-w-2xl mx-auto py-6">
        <h2 className="text-2xl font-bold my-12">
          Frequently Asked Questions
        </h2>
        <div className="accordion space-y-5">
          <AccordionItem
            title="Q: How can one develop a habit of reading regularly?"
            content="A: One can start by setting aside dedicated time for reading each day. Creating a comfortable reading environment and choosing books that genuinely interest you can also help."
          />
          <AccordionItem
            title="Q: What are some common reasons why people abandon books midway?"
            content="A: Some reasons include a lack of interest in the content or finding it difficult to connect with the writing style. However, there are many other books to choose from."
          />
          <AccordionItem
            title="Q: What are the benefits of reading regularly?"
            content="A: Reading regularly has numerous benefits: improved cognitive function, increased knowledge, and enhanced focus & concentration. It reduces stress and promotes relaxation by immersing you in a different world or story. Reading improves one's vocabulary, language skills, and writing abilities, making one an effective communicator."
          />
          <AccordionItem
            title="Q: What are some strategies for staying motivated to read?"
            content="A: To stay motivated to read, it can be helpful to set reading goals and establish a regular reading routine. Additionally, having a consistent reading routine helps to make reading a habit and ensures one to set aside dedicated time for it."
          />
        </div>
      </div>
      <div className="help-section mt-12">
        <h2 className="help-section-title text-2xl font-bold mb-4">
          Need More Help?
        </h2>
        <p className="max-w-3xl text-center mx-auto text-lg mb-6">
          If you have any other questions or need further assistance, please
          don't hesitate to{" "}
          <Link href="/contact" className="text-blue-500 underline">
            contact
          </Link>{" "}
          our customer support team. We are here to help you!
        </p>
      </div>
    </div>
  );
};