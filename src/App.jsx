import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Sections from "./sections/Sections";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const windowTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e) => {
      const saved = localStorage.getItem("theme");
      if (!saved) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    windowTheme.addEventListener("change", handleSystemChange);
    return () => windowTheme.removeEventListener("change", handleSystemChange);
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sections theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/aboutme" element={<Sections theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/services" element={<Sections theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/myprojects" element={<Sections theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/testimonials" element={<Sections theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/contact" element={<Sections theme={theme} toggleTheme={toggleTheme} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
