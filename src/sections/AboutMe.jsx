import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Web Development", value: 90 },
  { name: "Mentoring", value: 92 },
  { name: "Graphic Design", value: 82 },
  { name: "Drawing", value: 85 },
];

const AboutMe = () => {
  return (
    <div className="mt-10 responsive flex flex-col lg:flex-row lg:justify-between items-center sectionDark">
      <div className="lg:hidden">
        <h2 className="font-semibold leading-[auto] tracking-[3%] font-Poppins text-[40px]">
          About Me
        </h2>
        <p className="font-normal font-Poppins md:text-[16px] lg:text-[18px] xl:text-[21px]">
          I am a passionate developer with experience in building web
          applications using React and other modern technologies.
        </p>
        <div className="flex flex-col w-full gap-5 mt-7">
          {skills.map((skill, index) => {
            return (
              <div key={skill.name}>
                <p className="aboutMeslider">{skill.name}</p>
                <div className="relative w-full h-2 bg-[#EDECEC] rounded-[6px]">
                  <motion.div
                    className="h-2 bg-blue-500 rounded-[6px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#EDECEC] border-[3px] border-blue-500 rounded-full shadow"
                    initial={{ left: "0%" }}
                    whileInView={{ left: `calc(${skill.value}% - 10px)` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <img
        className="md:max-w-[393px] xl:max-w-[538px] xl:max-h-[687px] mt-[70px] lg:mt-[0]"
        src="images/Nme2.png"
        alt=""
      />
      <div className="hidden lg:flex lg:flex-col justify-center lg:w-[553px] xl:w-[653px] 2xl:w-[753px]">
        <h2 className="font-semibold leading-[auto] tracking-[3%] font-Poppins text-[40px]">
          About Me
        </h2>
        <p className="font-normal font-Poppins md:text-[16px] lg:text-[18px] xl:text-[21px]">
          I am a passionate developer with experience in building web
          applications using React and other modern technologies.
        </p>
        <div className="flex flex-col w-full gap-5 mt-7">
          {skills.map((skill, index) => {
            return (
              <div key={skill.name}>
                <p className="aboutMeslider">{skill.name}</p>
                <div className="relative w-full h-2 bg-[#EDECEC] rounded-[6px]">
                  <motion.div
                    className="h-2 bg-blue-500 rounded-[6px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#EDECEC] border-[3px] border-blue-500 rounded-full shadow"
                    initial={{ left: "0%" }}
                    whileInView={{ left: `calc(${skill.value}% - 10px)` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
