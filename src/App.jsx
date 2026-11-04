import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Sections from "./sections/Sections";
import Certificates from "./pages/Certificates";
import ProjectDetails from "./pages/ProjectDetails";
import Header from "./sections/Header";

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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Sections theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/aboutme"
            element={<Sections theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/services"
            element={<Sections theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/myprojects"
            element={<Sections theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/testimonials"
            element={<Sections theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/contact"
            element={<Sections theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/certificates"
            element={<Certificates theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
