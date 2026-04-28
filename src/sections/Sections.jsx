import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Services from "./Services";
import MyProjects from "./MyProjects";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Sections = ({ theme, toggleTheme }) => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <section id="home">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} toggleTheme={toggleTheme}/>
      </section>
      <section id="aboutme">
        <AboutMe theme={theme} toggleTheme={toggleTheme} />
      </section>
      <section id="services">
        <Services theme={theme} toggleTheme={toggleTheme} />
      </section>
      <section id="myprojects">
        <MyProjects theme={theme} toggleTheme={toggleTheme} />
      </section>
      <section id="testimonials">
        <Testimonial theme={theme} toggleTheme={toggleTheme} />
      </section>
      <section id="contact">
        <Contact theme={theme} toggleTheme={toggleTheme} />
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </section>
    </>
  );
};

export default Sections;
