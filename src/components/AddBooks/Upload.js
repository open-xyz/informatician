import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("bookId");

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append("name", fileName);
      data.append("file", file);
      if (id) {
        toast.loading("Uploading...");
        try {
          await axios.post("http://localhost:5000/api/upload", data);
          await axios.put("http://localhost:5000/api/book/" + id, {
            bookpdf: fileName,
          });
          navigate("/success");
          localStorage.clear();
        } catch (err) {
          toast.error("Something went wrong!");
          console.log(err);
        }
      } else {
        toast.error("Add book details!");
      }
    } else {
      toast.error("Choose a file to upload!");
    }
  };

  return (
    <div
      className="upload p-10 d-flex flex-column justify-content-center align-items-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h1>Upload Book Here!</h1>
      <div
        className={`upload-box my-5 p-10 d-flex flex-column justify-content-center align-items-center`}
      >
        <input
          type="file"
          name=""
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="mb-4" id="label" htmlFor="upload-btn">
          Select Book To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        <p className="drag-drop text-center">
          OR<br />
          Drag and drop file here
        </p>
        {file && (
          <p className="uploaded mt-4">
            {file.name}
            <CloseIcon
              className="close-icon ml-10 cursor-pointer"
              onClick={() => setFile(null)}
            />
          </p>
        )}
        <button className="mt-4" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <p>Supported file types: pdf, txt, doc, ppt, xls, docx, and more</p>
      <ToastContainer />
    </div>
  );
}
