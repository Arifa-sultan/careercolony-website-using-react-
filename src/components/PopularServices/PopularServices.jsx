import React from 'react'
import './popularservices.css'

const PopularServices = () => {
    const services = [
        {
          image: "/image/web devlopment.jpg",
          title: "Web Development",
          description: "Build modern, responsive websites.",
        },
        {
          image: "/image/graphic design.jpg",
          title: "Graphic Design",
          description: "Create stunning designs for your business.",
        },
        {
          image: "/image/digital.jpg",
          title: "Digital Marketing",
          description: "Promote your brand to a larger audience.",
        },
        
      ];
      
      return (
        <section className="popular-services">
          <h2 className="section-title">Most Popular Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };


export default PopularServices;
