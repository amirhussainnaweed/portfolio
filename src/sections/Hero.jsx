import React from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiPython,
  SiLaravel,
  SiTailwindcss,
  SiGit,
  SiMysql,
} from "react-icons/si";

const Hero = () => {
  const technologies = [
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "Laravel", icon: SiLaravel },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "MySQL", icon: SiMysql },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/amirhussainnaweed",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/amir-hussain-naweed-80a798308",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/amerhussain.naweedaadillzadah",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/amirhussainnaweed",
    },
  ];

  return (
    <section className="responsive sectionDark pt-22">
      <div className="mx-auto grid min-h-[650px] max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Introduction */}
        <div className="flex flex-col items-start gap-6">
          {/* Professional focus */}
          <div className="heroFocusBadge flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Technology
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Finance
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Business
          </div>

          {/* Main headline */}
          <div className="space-y-3">
            <p className="font-Poppins text-lg font-medium text-slate-500 dark:text-slate-400">
              Hello, I'm Amir Hussain Naweed
            </p>

            <h1 className="max-w-[750px] font-Poppins text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Building at the intersection of{" "}
              <span className="text-blue-500">
                technology, finance, and business.
              </span>
            </h1>
          </div>

          {/* Introduction text */}
          <p className="heroDescription max-w-[620px] font-Poppins text-base leading-8 md:text-lg">
            I'm an undergraduate Computer Science student at Kabul University,
            passionate about software engineering and creating meaningful
            digital solutions. I enjoy turning ideas into practical applications
            and continuously exploring new technologies.
          </p>

          {/* Call to action */}
          <Button
            className="mt-2 rounded-xl bg-blue-500 px-7 py-3 font-Poppins text-base font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            label="Hire Me"
            onClick={() => {
              window.location.href = "/contact";
            }}
          />

          {/* Technologies */}
          <div className="mt-6 w-full">
            <p className="heroTechLabel mb-4 font-Poppins text-xs font-semibold tracking-[0.2em]">
              TECHNOLOGIES I WORK WITH
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="heroTechItem flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <Icon className="text-lg text-blue-500" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Portrait and social links */}
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Portrait container */}
          <div className="heroPortrait relative flex w-full items-center justify-center">
            {/* Blue glow behind the portrait */}
            <div className="portraitGlow" />

            {/* Floating particles */}
            <div className="orbitParticle particleOne" />
            <div className="orbitParticle particleTwo" />
            <div className="orbitParticle particleThree" />
            <div className="orbitParticle particleFour" />
            <div className="orbitParticle particleFive" />
            <div className="orbitParticle particleSix" />
            <div className="orbitParticle particleSeven" />

            {/* Your portrait */}
            <motion.img
              src="/images/Nme.png"
              alt="Portrait of Amir Hussain Naweed"
              className="relative z-10 w-full max-w-[538px] object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`socialIcon social-${social.name.toLowerCase()} text-2xl`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
