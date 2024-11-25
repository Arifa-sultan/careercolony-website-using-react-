import React from "react";
import './categerios.css'
import { FaCode, FaPaintBrush, FaBullhorn, FaPenAlt } from "react-icons/fa";

const Categerios =()=>{
  const categerios =[
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Build modern websites using the latest technologies.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description: "Design logos, websites, and visuals.",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing",
      description: "Promote your brand with proven strategies.",
    },
    {
      icon: <FaPenAlt />,
      title: "Content Writing",
      description: "Create engaging content for blogs and websites.",
    },
  ];
  return(
<section className="categerios-section">
  <h2 className="section-title">Categerios</h2>
  <div className="categerios-grid">
    {categerios.map((category,index)=>(
      <div className="category-card" key={index}>
        <div className="category-icon">{category.icon}</div>
        <h3>{category.title}</h3>
        <p>{category.description}</p>
      </div>
    ))}
  </div>
  <button className="btn1">Browser All</button>
</section>
  )
}
export default Categerios;