import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="responsive bg-[#F8F8F8] footerdark mt-[40px] flex flex-col items-center gap-9 pt-[70px]">
        <h2 className="font-Fredoka text-2xl lg:font-semibold lg:text-[22px] xl:text-[28px] 2xl:text-[32px]">
          Amir Hussain
        </h2>
        <div className="flex gap-7 flex-wrap justify-center mt-[24px]">
          <Link className="navBtnsfooter" to="/">
            Home
          </Link>
          <Link className="navBtnsfooter" to="/aboutme">
            About Me
          </Link>
          <Link className="navBtnsfooter" to="/services">
            Services
          </Link>
          <Link className="navBtnsfooter" to="/myprojects">
            Projects
          </Link>
          <Link className="navBtnsfooter" to="/testimonials">
            Testimonials
          </Link>
          <Link className="navBtnsfooter" to="/contact">
            Contacts
          </Link>
        </div>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/amirhussainnaweed" target="_blank">
            <img
              className="cursor-pointer imgicons"
              src="images/github.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amir-hussain-naweed-80a798308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img
              className="cursor-pointer imgicons"
              src="images/linkedin.png"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/amerhussain.naweedaadillzadah"
            target="_blank"
          >
            <img
              className="cursor-pointer imgicons"
              src="images/facebook.png"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/amirhussainnaweed?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
          >
            <img
              className="cursor-pointer imgicons"
              src="images/instagram.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[84px] bg-[#545454] footerEnd">
        <p className="font-Poppins font-normal leading-[auto] tracking-[3%] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px] text-white">
          &copy; 2026 &nbsp; <span className="text-blue-400">Amir Hussain</span>{" "}
          &nbsp; | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
