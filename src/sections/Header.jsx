import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavigationButtons from "../HeaderComponents/NavigationButtons";
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

const Header = ({ theme, toggleTheme }) => {
  const [show, setShow] = useState(false);
  const mobileNavigationItems = [
    { label: "Home", path: "/", icon: FiHome },
    { label: "About Me", path: "/aboutme", icon: FiUser },
    { label: "Services", path: "/services", icon: FiBriefcase },
    { label: "Projects", path: "/myprojects", icon: FiCode },
    { label: "Certificates", path: "/certificates", icon: FiAward },
    { label: "Testimonials", path: "/testimonials", icon: FiMessageCircle },
    { label: "Contacts", path: "/contact", icon: FiMail },
  ];
  return (
    <div className="responsive navbarShell fixed top-0 left-0 z-50 w-full py-3.5">
      <nav className="flex items-center justify-between py-1.5">
        {/* Logo */}
        <h2 className="navbarLogo font-Fredoka text-lg font-semibold whitespace-nowrap">
          Amir Hussain
        </h2>

        {/* Desktop navigation */}
        <NavigationButtons />

        {/* Right-side controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 cursor-pointer themeToggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  strokeLinecap="round"
                  d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <img
            src="/images/menu.svg"
            className="w-7 cursor-pointer lg:hidden"
            alt="menu"
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
      </nav>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden flex flex-col items-center mt-4 gap-2 lg:hidden w-full"
          >
            {mobileNavigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="mobileNavLink"
                  onClick={() => setShow(false)}
                >
                  <Icon className="text-lg" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <Button
              className="mobileNavLink mobileDownloadBtn"
              label={
                <>
                  <FiDownload className="text-lg" />
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
                setShow(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
