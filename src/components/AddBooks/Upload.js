import React from "react";
import "react-toastify/dist/ReactToastify.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import './Upload.css';

const FileUploadComponent = ({bookPdf, setBookPdf}) => {

 const handleChange = (event)=>{
  setBookPdf(event.target.files[0])
 }

  return (
    <div className="upload p-10 d-flex flex-column justify-content-center align-items-center">
      <h2 className="fw-bolder" style={{color:"#3372c1"}}>Upload Book</h2>
      <div className="upload-box my-5 p-10 d-flex flex-column justify-content-center align-items-center">
        <input
          type="file"
          name=""
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={handleChange}
        />
        <label className="mb-5" htmlFor="upload-btn">
          Select Books To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        {bookPdf && (
          <p className="uploaded m-1">
            {bookPdf.name}
            <CloseIcon
              className="close-icon ml-10 cursor-pointer"
              onClick={() => setBookPdf(null)}
            />
          </p>
        )}
      </div>

      <p className="mt-0">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>
    </div>
  );
};

export default FileUploadComponent;
