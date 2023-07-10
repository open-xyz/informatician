import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: 'Rohan',
    job: '- Project Admin',
    image: 'https://avatars.githubusercontent.com/u/33249782?v=4',
    quote:
      "This application is excellent! It's like the Netflix of books! As a college student, this app has greatly aided me in reading science and mathematics. I have encountered no issues and found most of the books I needed. Thanks! I genuinely adore this app!",
  },
  {
    id: 2,
    name: 'Deepak',
    job: '- Project Collaborator',
    image: 'https://avatars.githubusercontent.com/u/96341431?v=4',
    quote:
      "The assortment of ebooks and audiobooks is abundant. I have discovered and saved numerous books to read and listen to that would have otherwise cost me a fortune elsewhere. There's no comparison at all!",
  },
  {
    id: 3,
    name: 'Siddhant',
    job: '- Project Mentor',
    image: 'https://avatars.githubusercontent.com/u/85052056?v=4',
    quote:
      "From significant literary works and comprehensive historical and scientific studies to popular fiction and self-help books, it's remarkable how much there is to discover on Informatician. Fantastic!",
  },
  // Add more testimonials here
];

// text-color - 1857A0  bg-192734


export default function Testimonial({theme}) {
  return (
    <div className="mt-20 mb-28 titles">
      <h1 className="heading text-center fw-bold fs-1">Our Core Team</h1>
      <p className="text-center mt-2 mb-5">
        What Our Core Team Say About The Books.
      </p>
      <div className="con_container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimoonial_card"
              style={{backgroundColor: theme === 'dark' ? '#161313' : '#fff',color: theme === 'dark' ? '#1857A0' : "black"}}>
            <img
              loading='lazy'
              className="testimoonial_profile"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="testimoonial_content">
              <p className="testimoonial_text" style={{color: theme === 'dark' ? '#fff' : "black"}}>{testimonial.quote}</p>
            </div>
              <div className="testimoonial_details">
                <span className="testimoonial_name" style={{color: theme === 'dark' ? '#fff' : "black"}}>{testimonial.name}</span>
                <span className="testimoonial_job">{testimonial.job}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
