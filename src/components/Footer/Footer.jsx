import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <div className="footer-logo">
<h1>Carrercolony</h1>
          </div>
          <p className="footer-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.
          </p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Website Development</a></li>
            <li><a href="#">Search Engine Optimization</a></li>
            <li><a href="#">Google Advertising</a></li>
            <li><a href="#">Website Intake Form</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Helpful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>

      
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Phone: (123) 498-9001</p>
          <p>Email: Info@Colony.Com</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Carrercolony © Copyright 2021. ARIFA SULTAN😊
      </div>
    </footer>
  );
};

export default Footer;
