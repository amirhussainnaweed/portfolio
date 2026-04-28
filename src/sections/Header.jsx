import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavigationButtons from "../HeaderComponents/NavigationButtons";
import Button from "../Components/Button";

const Header = ({ theme, toggleTheme }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="responsive sectionDark">
      <nav className="flex items-center justify-between">
        <h2 className="font-Fredoka text-2xl lg:font-semibold lg:text-[22px] xl:text-[28px] 2xl:text-[32px]">
          Amir Hussain
        </h2>
        <img
          src="images/menu.svg"
          className="w-[35px] cursor-pointer lg:hidden"
          alt="menu"
          onClick={() => setShow((prev) => !prev)}
        />
        <NavigationButtons />
      </nav>
      <button
        onClick={toggleTheme}
        className="w-[38px] h-[38px] flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          // Sun icon — shown in dark mode to switch to light
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            <path
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
        ) : (
          // Moon icon — shown in light mode to switch to dark
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
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

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden flex flex-col items-center mt-6 gap-4 lg:hidden"
          >
            <Link className="btnRounded" to="/" onClick={() => setShow(false)}>
              Home
            </Link>
            <Link
              className="btnRounded"
              to="/aboutme"
              onClick={() => setShow(false)}
            >
              About Me
            </Link>
            <Link
              className="btnRounded"
              to="/services"
              onClick={() => setShow(false)}
            >
              Services
            </Link>
            <Link
              className="btnRounded"
              to="/myprojects"
              onClick={() => setShow(false)}
            >
              Projects
            </Link>
            <Link
              className="btnRounded"
              to="/testimonials"
              onClick={() => setShow(false)}
            >
              Testimonials
            </Link>
            <Link
              className="btnRounded"
              to="/contact"
              onClick={() => setShow(false)}
            >
              Contacts
            </Link>
            <Button
              className="btnRounded hover:bg-blue-500 bg-blue-400"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
