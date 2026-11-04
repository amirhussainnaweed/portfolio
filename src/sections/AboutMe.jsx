import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="aboutSection responsive relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Portrait */}
        <motion.div
          className="aboutPortrait relative flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Ambient glow */}
          <div className="aboutPortraitGlow" />

          {/* Floating particles */}
          <div className="aboutParticle aboutParticleOne" />
          <div className="aboutParticle aboutParticleTwo" />
          <div className="aboutParticle aboutParticleThree" />
          <div className="aboutParticle aboutParticleFour" />
          <div className="aboutParticle aboutParticleFive" />
          <div className="aboutParticle aboutParticleSix" />
          <div className="aboutParticle aboutParticleSeven" />
          <div className="aboutParticle aboutParticleEight" />

          <motion.img
            src="/images/Nme2.png"
            alt="Portrait of Amir Hussain Naweed"
            className="aboutPortraitImage relative z-10 w-full max-w-[480px] object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="aboutIntroduction flex flex-col items-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="aboutEyebrow flex items-center gap-3">
            <span className="aboutEyebrowLine" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="aboutHeading mt-5 font-Poppins text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            Beyond the <span className="aboutHeadingAccent">Code.</span>
          </h2>

          <h3 className="aboutSubtitle mt-6 font-Poppins text-xl font-semibold leading-relaxed sm:text-2xl">
            Technology is my foundation. Curiosity is my direction.
          </h3>

          <p className="aboutDescription mt-5 max-w-[650px] font-Poppins text-base leading-8 sm:text-lg">
            I'm a Computer Science student at Kabul University with a strong
            interest in software engineering and the intersection of technology,
            finance, and business.
          </p>

          <p className="aboutDescription mt-4 max-w-[650px] font-Poppins text-base leading-8 sm:text-lg">
            I enjoy exploring ideas, understanding how systems work, and turning
            concepts into practical digital solutions. Beyond programming, I'm
            interested in continuous learning, sharing knowledge, and
            discovering opportunities to create meaningful impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
