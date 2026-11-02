import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiAward,
  FiMessageCircle,
  FiMail,
  FiDownload,
} from "react-icons/fi";

const NavigationButtons = () => {
  const navigationItems = [
    { label: "Home", path: "/", icon: FiHome },
    { label: "About Me", path: "/aboutme", icon: FiUser },
    { label: "Services", path: "/services", icon: FiBriefcase },
    { label: "Projects", path: "/myprojects", icon: FiCode },
    { label: "Certificates", path: "/certificates", icon: FiAward },
    // {
    //   label: "Testimonials",
    //   path: "/testimonials",
    //   icon: FiMessageCircle,
    // },
    { label: "Contacts", path: "/contact", icon: FiMail },
  ];

  return (
    <div className="hidden lg:flex items-center gap-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link key={item.path} to={item.path} className="navBtns">
            <Icon className="text-base" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <Button
        className="navBtns downloadBtn"
        label={
          <>
            <FiDownload className="text-base" />
            <span>Download CV</span>
          </>
        }
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
