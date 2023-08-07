import helpImage from "@/public/assets/mainPages/help.webp";
import Image from "next/image";
import Link from "next/link";
import faqData from "./faqData";
import AccordionItem from "./Accordion";

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
        {faqData.map((faq, index)=>{
          return   <AccordionItem key={index}
            title={faq.title}
            content={faq.content}
          />
        })}
        
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
