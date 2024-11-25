import React from "react";
import "./hero.css"
const Hero =()=>{
  return(
    <section className="hero">
      {/* left content  */}
      <div className="hero-content">
        <h1>Hire the best one for you business</h1>
        <p>Carrercolony is an exclusive network of the top freelance software developer designer, finance experts, product mangers, and project mangers in the world. Top companies hire freelances for their most important projects.</p>
        <div className="hero-button">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
        </div>
     
      <div className="trusted-by">
      <span>Trusted by:</span>
      <img src="/image/drop.png" alt="Trusted company 1" className="trusted-logo" 
      />
      <img src="/image/google.png" alt="Trusted company 2" className="trusted-logo" 
      />
      <img src="/image/MICRO.png" alt="Trusted company 3" className="trusted-logo" 
      />
      </div>
      
 </div>
 {/* right image  */}
 <div className="hero-image">
  <img
  src="/image/MAN.png" alt="" className="hero-image-img" 
  />
 </div>
    </section>
  )
}
export default Hero;