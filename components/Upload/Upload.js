import React from "react";

const FileUploadComponent = ({bookPdf, setBookPdf}) => {

  return (
  <div className="py-5 px-10 w-[95%] lg:w-[60%] m-auto flex flex-col items-center justify-center rounded-lg shadow-[0_10px_15px_-3px_rgb(59,130,246,0.3)] border">
     
      <h2 className="text-xl font-bold mb-4">Upload Books</h2>
      <div className="border-2 rounded-lg my-5 p-5 sm:p-10 flex flex-col items-center justify-center">
        <input
          type="file"
          name="upload-btn"
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={(e)=>setBookPdf(e.target.files[0])}
          className="hidden"
        />
        <label
          htmlFor="upload-btn"
          className="text-center mb-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Select Books To Upload
        </label>
        {bookPdf && (
          <p className="border-dashed border-gray-500 dark:border-gray-700 rounded-md p-2 m-1">
            {bookPdf.name}
          </p>
        )}

      </div>

      <p className="mt-0 text-center">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>

    </div> )
};



export default FileUploadComponent;
