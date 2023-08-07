import React from "react";
import Bookmark from "./Bookmark";

export default function page() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-20">
        Bookmarks
      </h1>
      <Bookmark />
    </div>
  );
}
