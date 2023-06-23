import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonial.css';

AOS.init();

const testimonials = [
  {
    id: 1,
    name: 'Rohan',
    job: '- Project Admin',
    image: 'https://avatars.githubusercontent.com/u/33249782?v=4',
    quote:
    "This application is excellent! It's like the Netflix of books! As a college student, this app has greatly aided me in reading science and mathematics. I have encountered no issues and found most of the books I needed. Thanks! I genuinely adore this app!"  },
  {
    id: 2,
    name: 'Deepak',
    job: '- Project Collaborator',
    image: 'https://avatars.githubusercontent.com/u/96341431?v=4',
    quote:
    "The assortment of ebooks and audiobooks is abundant. I have discovered and saved numerous books to read and listen to that would have otherwise cost me a fortune elsewhere. There's no comparison at all!"  },
  {
    id: 3,
    name: 'Siddhant',
    job: '- Project Mentor',
    image: 'https://avatars.githubusercontent.com/u/85052056?v=4',
    quote:
    "From significant literary works and comprehensive historical and scientific studies to popular fiction and self-help books, it's remarkable how much there is to discover on Informatician. Fantastic!"  },
  //add more testimonials here
];

export default function Testimonial() {
  return (
    <div className="mt-20 mb-28 titles">
      <h1 className="heading text-center fw-bold fs-1">Our Core Team</h1>
      <p className="text-center mt-2 mb-5">
        What Our Core Team Say About The Books.
      </p>
      <div className="con_container">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="card"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img
              className="profile"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="content">
              <p className="text">{testimonial.quote}</p>
              <div className="details">
                <span className="name">{testimonial.name}</span>
                <span className="job">{testimonial.job}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
