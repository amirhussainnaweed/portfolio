import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    label: "Web Development",
    desc: "Building responsive websites and powerful web applications.",
    icon: "code",
    skillGroups: [
      {
        title: "Frontend Development",
        icon: "monitor",
        skills: [
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Vite",
        ],
      },
      {
        title: "Backend Development",
        icon: "server",
        skills: ["Laravel", "PHP", "Django", "Python", "MySQL"],
      },
    ],
  },
  {
    id: 2,
    label: "UI Development",
    desc: "Creating intuitive, responsive, and engaging user interfaces.",
    icon: "layout",
    skillGroups: [
      {
        title: "Interface Design",
        icon: "layout",
        skills: ["Responsive Design", "UI Styling", "Component Design"],
      },
      {
        title: "Interaction & Navigation",
        icon: "workflow",
        skills: ["Framer Motion", "React Router"],
      },
    ],
  },
  {
    id: 3,
    label: "Technical Mentoring",
    desc: "Helping learners develop technical knowledge and problem-solving skills.",
    icon: "graduation",
    skillGroups: [
      {
        title: "Programming & Logic",
        icon: "code",
        skills: [
          "Programming Fundamentals",
          "Java",
          "Python",
          "Problem Solving",
        ],
      },
      {
        title: "Teaching & Education",
        icon: "graduation-cap",
        skills: ["Teaching", "Math", "English"],
      },
    ],
  },
  {
    id: 4,
    label: "Graphic Design",
    desc: "Creating engaging visual materials and digital graphics.",
    icon: "palette",
    skillGroups: [
      {
        title: "Design Tools",
        icon: "palette",
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere"],
      },
      {
        title: "Creative Skills",
        icon: "image",
        skills: ["Poster Design", "Visual Design"],
      },
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  return (
    <section className="responsive mt-16 flex flex-col items-center gap-5">
      <h2 className="headline servicesHeading text-3xl lg:text-5xl">
        Services
      </h2>

      <p className="servicesSubtitle font-Poppins text-center text-sm lg:text-lg">
        Turning knowledge and creativity into practical solutions.
      </p>

      <div className="mt-8 grid w-full grid-cols-1 items-start gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            layout
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
            onClick={() =>
              setActiveService(activeService === service.id ? null : service.id)
            }
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`
  serviceCard group relative flex min-h-[280px] flex-col overflow-visible
  ${activeService === service.id ? "z-30" : "z-0"}
  ${index === 0 || index === 3 ? "md:col-span-2" : ""}
`}
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/25" />

            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <span className="font-Poppins text-sm font-medium tracking-widest text-blue-500">
                  0{service.id} / SERVICES
                </span>

                <h3 className="serviceTitle mt-5 text-2xl font-semibold lg:text-3xl">
                  {service.label}
                </h3>

                <p className="serviceDescription mt-3 max-w-xl font-Poppins text-sm leading-7 lg:text-base">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="serviceExploreLabel text-xs font-medium tracking-wider">
                  EXPLORE MY SKILLS
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/40 text-blue-500 transition-all duration-300 group-hover:rotate-45 group-hover:bg-blue-500 group-hover:text-white">
                  ↗
                </span>
              </div>
            </div>

            <AnimatePresence>
              {activeService === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative z-10 overflow-hidden"
                >
                  <div className="serviceSkillDivider mt-7 border-t pt-6">
                    <div className="mb-5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3B82F6]" />
                      <span className="text-xs font-semibold tracking-[0.2em] text-blue-500">
                        SKILL ECOSYSTEM
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {service.skillGroups.map((group, groupIndex) => (
                        <motion.div
                          key={group.title}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: groupIndex * 0.12,
                          }}
                          className="serviceSkillGroup"
                        >
                          <h4 className="serviceSkillTitle mb-4 flex items-center gap-2 text-sm font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            {group.title}
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.25,
                                  delay: groupIndex * 0.12 + skillIndex * 0.04,
                                }}
                                className="serviceSkillTag"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
