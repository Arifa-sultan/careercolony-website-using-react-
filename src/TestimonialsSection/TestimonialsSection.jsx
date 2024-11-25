import React from "react";
import "./TestimonialsSection.css";


const testimonials = [
  {
    image: "image/mann1.jpg", 
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    name: "Amanda Smith",
    position: "CEO, Behance",
    rating: 5,
  },
  {
    image: "image/girrll.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    name: "Amanda Smith",
    position: "CEO, Behance",
    rating: 5,
  },
  {
    image: "image/mann.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    name: "Amanda Smith",
    position: "CEO, Behance",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What are they saying about Carrercolony</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <blockquote className="testimonial-text">"{testimonial.text}"</blockquote>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-position">{testimonial.position}</p>
            <div className="testimonial-rating">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
