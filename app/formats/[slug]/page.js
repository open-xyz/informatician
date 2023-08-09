import React from 'react';
import bookFormatsData from '../bookFormatsData';
import Image from "next/image";

export default function Posts({ params }) {
  const query = params.slug;
  const queryData = bookFormatsData.find((format) => format.slug === query);

  if (!queryData) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginTop: '5rem' }}>
        Format not found
      </h1>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginTop: '5rem' }}>
        {queryData.title}
      </h1>
      <p style={{ fontSize: '1.2rem',marginTop: '2rem', marginBottom: '2rem', padding:'0 20% 0 20%' }}>{queryData.description}</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ width: '250px', height: '200px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}>
          <Image
            loading="lazy"
            src={queryData.image}
            width={450}
            height={400}
          />
        </div>
      </div>
      <ol style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        {queryData.topBooks.map((book, index) => (  
          <li key={index}>{index+1}.  <b>{book.title}</b> | {book.author}</li>
        ))}
      </ol>
    </div>
  );
}
