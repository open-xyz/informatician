import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import './Upload.css';

const FileUploadComponent = ({bookPdf, setBookPdf}) => {

  // const handleFileUpload = async () => {
  //   let submitable = true;
  //   Object.values(formData).forEach((e) => {
  //     if (e !== false) {
  //       submitable = false;
  //       return;
  //     }
  //   });

  //   if (submitable) {
  //   try {
  //     if (file) {
  //       toast.loading("Uploading...");
        // const formData = new FormData();
  //       formData.append("file", file);

  //       await axios.post(`${backendURL}/api/upload`, formData);
  //       await axios.put(`${backendURL}/api/book/` + id, {
  //         bookpdf: file.name,
  //       });
  //       navigate("/success");
  //       localStorage.clear();
  //     } else {
  //       toast.error("Choose a file to upload!");
  //     }
  //   } catch (error) {
  //      toast.dismiss();
  //     if(error.response.data.type === "jwt"){
  //       toast.error(error.response.data.message);
  //       navigate("/login");
  //       return;
  //       }
  //     toast.error("Something went wrong!");
  //     console.error(error);
  //   }
  // }else{
  //   toast.error("Fill the form properly");
  // }
  // };

  return (
    <div className="upload p-10 d-flex flex-column justify-content-center align-items-center">
      <h2 className="fw-bolder" style={{color:"#3372c1"}}>Upload Book</h2>
      <div className="upload-box my-5 p-10 d-flex flex-column justify-content-center align-items-center">
        <input
          type="file"
          name=""
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={(e)=>{setBookPdf(e.target.files[0]); }}
        />
        <label className="mb-5" htmlFor="upload-btn">
          Select Books To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        {bookPdf && (
          <p className="uploaded m-1">
            {bookPdf.name}
            <CloseIcon
              className="close-icon ml-10 cursor-pointer"
              onClick={() => setBookPdf("")}
            />
          </p>
        )}
      </div>

      <p className="mt-0">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>

      <ToastContainer />
    </div>
  );
};

export default FileUploadComponent;
