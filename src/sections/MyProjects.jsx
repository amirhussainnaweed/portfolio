import React, { useState } from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";

const All = [
  {
    id: 1,
    src: "images/webDesign/firstWeb.png",
    part: "Web Design",
    about: "Calm Landing Page",
  },
  {
    id: 2,
    src: "images/webDesign/secondWeb.png",
    part: "Web Design",
    about: "Photography website",
  },
  {
    id: 3,
    src: "images/mentoring/firstMentoring.png",
    part: "Mentoring",
    about: "English Instructor",
  },
  {
    id: 4,
    src: "images/mentoring/secondMentoring.png",
    part: "Mentoring",
    about: "Work experience",
  },
  {
    id: 5,
    src: "images/graphicDesign/graphic.png",
    part: "Graphic Design",
    about: "Eid Brochure",
  },
  {
    id: 6,
    src: "images/drawing/firstDrawing.png",
    part: "Drawing",
    about: "Portrait of Ronaldo",
  },
  {
    id: 7,
    src: "images/drawing/secondDrawing.png",
    part: "Drawing",
    about: "Portraits",
  },
  {
    id: 8,
    src: "images/drawing/thirdDrawing.png",
    part: "Drawing",
    about: "Little cute girl",
  },
];

const MyProjects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All" ? All : All.filter((item) => item.part === selected);

  return (
    <div className="responsive mt-[40px] flex flex-col items-center gap-9">
      <h2 className="headline sectionDark">My Projects</h2>

      <div className="flex gap-2 flex-wrap justify-center">
        <Button
          className={`buttonStyle ${
            selected === "All" ? "bg-blue-500 text-white" : ""
          }`}
          label="All"
          onClick={() => setSelected("All")}
        />
        <Button
          className={`buttonStyle ${
            selected === "Web Design" ? "bg-blue-500 text-white" : ""
          }`}
          label="Web Design"
          onClick={() => setSelected("Web Design")}
        />
        <Button
          className={`buttonStyle ${
            selected === "Mentoring" ? "bg-blue-500 text-white" : ""
          }`}
          label="Mentoring"
          onClick={() => setSelected("Mentoring")}
        />
        <Button
          className={`buttonStyle ${
            selected === "Graphic Design" ? "bg-blue-500 text-white" : ""
          }`}
          label="Graphic Design"
          onClick={() => setSelected("Graphic Design")}
        />
        <Button
          className={`buttonStyle ${
            selected === "Drawing" ? "bg-blue-500 text-white" : ""
          }`}
          label="Drawing"
          onClick={() => setSelected("Drawing")}
        />
      </div>

      <div className="flex flex-wrap gap-7 justify-center">
        {filteredProjects.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={item.src} alt={item.about} className="rounded-[12px]" />
            <h3 className="font-Poppins font-normal text-[19px] text-blue-500 leading-[auto] tracking-[3%]">
              {item.part}
            </h3>
            <p className="sectionDark font-Poppins font-bold text-[24px] leading-[auto] tracking-[3%]">
              {item.about}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
