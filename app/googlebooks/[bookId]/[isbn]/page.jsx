"use client"

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//0415105145
//0738531367
const BookPreview = ({params}) => {
  //   const [isbn, setIsbn] = useState("0738531367"); // Default ISBN
  const { isbn } = params;
 
  // Create a template string for the newsletter HTML with a placeholder for the ISBN
  const newsletterHtmlTemplate = `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
      <style>     
       body, html {
        background-color: rgba(0, 21, 255, 0.45);
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    #viewerCanvas {
        margin: 50px;
        margin-right: 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 90%;
        height: 90%;
    }
    </style>
        <!-- Rest of the head content... -->
        <script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script>
        <script type="text/javascript">
          google.books.load();
          function initialize() {
            var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
            viewer.load('ISBN:${isbn}'); // Replace the placeholder with the actual ISBN
          }
          google.books.setOnLoadCallback(initialize);
        </script>
      </head>
      <body>
      <div id="viewerCanvas" style="height: 700px; width: 1000px;"></div>
      </body>
    </html>
  `;

  // Replace the placeholder in the newsletterHtmlTemplate with the actual ISBN
  const newsletterHtml = newsletterHtmlTemplate.replace("${isbn}", isbn);

  return (
    <div style={{ height: "100vh", overflow: "auto", width: "100%" }}>
      <style>{/* Rest of the style... */}</style>
      <iframe
        srcDoc={newsletterHtml}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          scrolling: "no",
        }}
        title="Embedded HTML Page"
      ></iframe>
    </div>
  );
};

export default BookPreview;