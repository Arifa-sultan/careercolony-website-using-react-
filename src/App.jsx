 import React from "react";
 import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularServices from "./components/PopularServices/PopularServices";
import WorkSection from "./components/Worksection/Worksection";
import Categerios from "./components/Categerios/Categerios";
import Employees from "./components/Employees/Employees";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import Footer from "./components/Footer/Footer";
 function App(){
  return(
   <div>
    <Navbar/>
    <Hero/>
   <PopularServices/>
   <WorkSection/>
   <Categerios/>
   <Employees/>
   <ProjectsSection/>
   <TestimonialsSection/>
   <Footer/>
   </div>
  )
}
export default App;