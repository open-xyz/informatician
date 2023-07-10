import React from 'react';
import img1 from '@/public/assets/benefits/benefit-1.webp';
import img2 from '@/public/assets/benefits/benefit-2.webp';
import img3 from '@/public/assets/benefits/benefit-3.webp';
import img4 from '@/public/assets/benefits/benefit-4.webp';
import img5 from '@/public/assets/benefits/benefit-5.webp';
import './Benefits.css'; // Import the CSS file for styling
import Image from 'next/image';

export default function BenefitsOfReading(props) {
  return (
    <div className="benefits-container mt-9">
      <div className="container">
        <h1 className="font-bold text-4xl text-black dark:text-white">
          Benefits of Reading
        </h1>
        <p className="text-neutral-500 dark:text-neutral-300">
          Reading is a wonderful activity that offers numerous benefits to
          individuals of all ages. Whether you prefer fiction, non-fiction, or
          any other genre, here are some key advantages of reading:
        </p>

        <Card
          title="Knowledge Expansion"
          para="Reading exposes you to a wide range of information and ideas. It helps expand your knowledge on various subjects, whether it's history, science, philosophy, or any other topic of interest. The more you read, the more you learn."
          src={img1}
          alt="a book in the air surrounded by many books"
        />
        <Card
          title="Mental Stimulation"
          para="Reading is like a workout for your brain. It stimulates your mind, improves concentration, and enhances critical thinking skills. It can also improve your vocabulary and language comprehension, making you a more effective communicator."
          src={img2}
          alt="a stack of books on a table"
        />
        <Card
          title="Stress Reduction"
          para="Reading can be a great way to relax and unwind. It helps reduce stress by allowing you to escape into different worlds and narratives. Losing yourself in a good book can provide a much-needed break from the pressures of everyday life."
          src={img3}
          alt="a pink mug next to a book"
        />
        <Card
          title="Improved Sleep"
          para="Engaging in reading before bedtime can promote better sleep. It helps relax your mind and prepares your body for rest. However, it's recommended to avoid stimulating content or electronic devices with bright screens that may interfere with sleep quality."
          src={img4}
          alt="a cup of tea and a book with flowers"
        />
        <Card
          title="Personal Growth"
          para="Reading self-help books, biographies, or inspirational literature can foster personal growth. You can gain valuable insights, learn from others' experiences, and find motivation to overcome challenges in your own life."
          src={img5}
          alt="a person reading a book"
        />
        
      </div>
    </div>
  );
}

function Card({title, para, src, alt}) {
  return (
    <div className="benefit border shadow-xl hover:shadow-slate-800 mt-5 bg-neutral-100 dark:bg-neutral-900">
          <div className="benefit-content">
            <div className="benefit-image">
              <Image loading='lazy' src={src} alt={alt} style={{ height: 220, width: 400 }} />
            </div>
            <div className="benefit-details">
              <h2 className='text-center text-black dark:text-white'>{title}</h2>
              <p>{para}</p>
            </div>
          </div>
        </div>
  )
}