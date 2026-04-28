import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const NavigationButtons = () => {
  return (
    <div className="hidden lg:flex items-center xl:gap-1">
      <Link className="navBtns" to="/">
        Home
      </Link>
      <Link className="navBtns" to="/aboutme">
        About Me
      </Link>
      <Link className="navBtns" to="/services">
        Services
      </Link>
      <Link className="navBtns" to="/myprojects">
        Projects
      </Link>
      <Link className="navBtns" to="/testimonials">
        Testimonials
      </Link>
      <Link className="navBtns" to="/contact">
        Contacts
      </Link>
      <Button
        className="hover:text-white md:text-[16px] lg:text-[17px] xl:text-[21px] bg-blue-400 hover:bg-blue-500 rounded-[5px] px-4 py-2 hover:shadow-gray-400 hover:shadow-md font-Poppins tracking-[3%] leading-[auto]"
        label="Download CV"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/cv.pdf";
          link.download = "Amir-Hussain-cv.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />
    </div>
  );
};

export default NavigationButtons;
