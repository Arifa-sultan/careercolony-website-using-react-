import React from 'react';
import './workSection.css'; 

const WorkSection = () => {
  return (
    <section className="work-section">
      <div className="work-content">
        <div className="work-left">
          <h1>Work on your way, Freelance with the largest company</h1>
          <p>
            Meet with new clients everyday, and deliver your talent for reaching high.
            Unleash your skill day by day. Work on your time and build up your career on your
            way. Make a great profit and sharpen your skill.
          </p>
          <div className="work-steps">
            <h2>Here is how Career colony works for Freelancer</h2>
            <ol>
              <li>Sign up to Careercolony and set up your portfolio</li>
              <li>Search for your preferable projects</li>
              <li>Submit quotation on project that matches your skill</li>
              <li>Chat with Client, make the deal, and get start on your project</li>
              <li>After delivering the goods, get your payments through Careercolony</li>
            </ol>
          </div>
          <button className="join-button">Join Now</button>
        </div>
        <div className="work-right">
          <img src="/image/girl.jpg" alt="Freelancer" />
          <div className="congratulation">
            <h3>Congratulations!</h3>
            <p>Keli accepted your delivery. You've earned $250.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
