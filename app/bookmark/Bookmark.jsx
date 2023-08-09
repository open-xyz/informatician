"use client";
import Image from "next/image";
import React, { useState } from "react";

const Bookmark = () => {
  const initialBookmarks = [
    {
      id: 1,
      title: "Book 1 Title",
      description: "Book 1 Description",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-bookmark-template_23-2149336542.jpg?w=2000",
    },
    {
      id: 2,
      title: "Book 2 Title",
      description: "Book 2 Description",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-bookmark-template_23-2149336542.jpg?w=2000",
    },
    {
      id: 3,
      title: "Book 3 Title",
      description: "Book 3 Description",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-bookmark-template_23-2149336542.jpg?w=2000",
    },
    // Add more book items here
  ];

  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  const handleRemoveBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="bookmarks-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="border border-gray-300 rounded-md p-4"
          >
            <Image
              src={bookmark.imageUrl}
              alt={bookmark.title}
              style={{
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
              width={100}
              height={100}
            />
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              {bookmark.title}
            </h2>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              {bookmark.description}
            </p>
            <button
              style={{ marginBottom: "0.5rem" }}
              className="bg-red-500 text-white py-2 px-4 mt-2 rounded"
              onClick={() => handleRemoveBookmark(bookmark.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Bookmark;
