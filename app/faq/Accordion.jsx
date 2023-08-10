"use client";

// use client
import { useState } from "react";

export default function AccordionItem({ title, content }) {
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
        <span
          className={`rounded-full text-zinc-500 transition ${
            expanded ? "rotate-90" : "rotate-0"
          }`}
        >
          {expanded ? "-" : "+"}
        </span>
      </button>
      <div
        className={`mt-3 overflow-hidden duration-300 ${
          expanded ? "max-h-60" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
