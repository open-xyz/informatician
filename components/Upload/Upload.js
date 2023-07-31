"use client"
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const FileUploadComponent = ({error}) => {
  const [file, setFile] = useState(null);
  const navigate = useRouter();
  const id = useParams();
  // loggedIn variable
  var loggedIn= true;
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    let submitable = true;
    Object.values(error).forEach((e) => {
      if (e !== false) {
        submitable = false;
        return;
      }
    });

    if (submitable) {
    try {
      if (file) {
        toast.loading("Uploading...");
        const formData = new FormData();
        formData.append("file", file);

        await axios.post(
          "https://informaticonserver.onrender.com/api/upload",
          formData
        );
        await axios.put(
          "https://informaticonserver.onrender.com/api/book/" + id,
          {
            bookpdf: file.name,
          }
        );
        navigate("/success");
        localStorage.clear();
      } else {
        toast.error("Choose a file to upload!");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong!");
      console.error(error);
    }
  }else{
    toast.error("Fill the form properly");
  }
  };

  return (
    !loggedIn? <ShowLogin/> :
   ( <div className="p-10 flex flex-col items-center justify-center rounded-lg shadow-lg border">
     
      <h2 className="text-xl font-bold mb-4">Upload Books</h2>
      <div className="border-2 rounded-lg my-5 p-10 flex flex-col items-center justify-center">
        <input
          type="file"
          name="upload-btn"
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="upload-btn"
          className="mb-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Select Books To Upload
        </label>
        {file && (
          <p className="border-dashed border-gray-500 dark:border-gray-700 rounded-md p-2 m-1">
            {file.name}
          </p>
        )}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleFileUpload}
        >
          Submit
        </button>
      </div>

      <p className="mt-0">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>

    </div> )
  );
};

const ShowLogin=()=>{
  return(
    <div className="show-login p-10 flex flex-col items-center justify-center rounded-lg shadow-lg border">
      <h2 className="text-xl font-bold mb-4">Please first login to upload a book</h2>
    </div>
  )
}

export default FileUploadComponent;
