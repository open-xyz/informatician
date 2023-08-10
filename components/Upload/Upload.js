import React from "react";
import { FaTimes } from "react-icons/fa";

const FileUploadComponent = ({ bookPdf, setBookPdf }) => {
  return (
    <div className="py-5 px-10 w-[95%] lg:w-[50%] m-auto flex flex-col items-center justify-center rounded-lg shadow-[0_10px_15px_-3px_rgb(59,130,246,0.3)] border">
      <h2 className="text-xl text-center font-bold mb-4">Upload Book</h2>
      <div className="border-2 rounded-lg my-5 p-5 sm:p-10 flex flex-col items-center justify-center">
        <input
          type="file"
          name="upload-btn"
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={(e) => setBookPdf(e.target.files[0])}
          className="hidden"
        />
        <label
          htmlFor="upload-btn"
          className="text-center mb-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Select Book To Upload
        </label>
        {bookPdf && (
          <p className="flex justify-center items-center rounded-md gap-5 bg-[#eff6ff] p-2 m-1">
            {bookPdf.name.slice(0, 21)}
            {bookPdf.name.length > 20 ? "..." : null}
            <FaTimes
              onClick={() => setBookPdf(null)}
              className="cursor-pointer"
            />
          </p>
        )}
      </div>

      <p className="mt-0 text-center">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>
    </div>
  );
};

export default FileUploadComponent;
