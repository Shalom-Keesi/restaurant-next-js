'use client';
import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    name: "Mitchell Marsh",
    position: "CEO, Bexon Agency",
    image: "/Images/zendaya.jpeg"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    name: "Jhene Aiko",
    position: "Artist",
    image: "/Images/jhene-aiko.webp"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    name: "Madam",
    position: "Manager",
    image: "/Images/madam.jpg"
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    name: "Rihanna",
    position: "Singer",
    image: "/Images/rihanna.webp"
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    name: "Jhene Aiko",
    position: "Artist",
    image: "/Images/jhene-aiko.webp"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center mb-16">
      <h3 className="text-xl mb-2">Testimonials</h3>
      <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
      
      <div className="mb-8">
        <span className="text-6xl text-yellow-400">"</span>
        <p className="text-black mb-8">{testimonials[0].text}</p>
      </div>
      
      <div className="flex justify-center mb-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-12 h-12 rounded-full mx-2 overflow-hidden">
            <Image
              src={testimonial.image}
              alt={`Client ${index + 1}`}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h4 className="font-bold">{testimonials[0].name}</h4>
        <p className="text-gray-600">{testimonials[0].position}</p>
      </div>
    </section>
  );
};

export default Testimonials;