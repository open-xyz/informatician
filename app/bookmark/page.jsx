"use client"
import React, { useState } from 'react';

const Bookmark = () => {
    const initialBookmarks = [
        {
            id: 1,
            title: 'Book 1 Title',
            description: 'Book 1 Description',
            imageUrl: 'https://example.com',
        },
        {
            id: 2,
            title: 'Book 2 Title',
            description: 'Book 2 Description',
            imageUrl: 'https://example.com',
        },
        {
            id: 3,
            title: 'Book 3 Title',
            description: 'Book 3 Description',
            imageUrl: 'https://example.com',
        },
        // Add more book items here
    ];

    const [bookmarks, setBookmarks] = useState(initialBookmarks);

    const handleRemoveBookmark = (id) => {
        const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
        setBookmarks(updatedBookmarks);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginTop: '5rem' }}>
                Bookmarks
            </h1>
            <div className="container mx-auto px-4">
                <div className="bookmarks-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookmarks.map((bookmark) => (
                        <div key={bookmark.id} className="border border-gray-300 rounded-md p-4">
                            <img
                                src={bookmark.imageUrl}
                                alt={bookmark.title}
                                style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', marginBottom: '1rem' }}
                            />
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                {bookmark.title}
                            </h2>
                            <p style={{ fontSize: '1rem', color: '#555' }}>
                                {bookmark.description}
                            </p>
                            <button
                                style={{ marginBottom: '0.5rem' }}
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
        </div>
    );
};

export default Bookmark;
