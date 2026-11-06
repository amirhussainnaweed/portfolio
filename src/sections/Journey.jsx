import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const journeyItems = [
  {
    date: "2024",
    title: "A Strong Academic Foundation",
    description:
      "Graduated from Etihad High School with outstanding academic results and a consistent record of academic achievement.",
  },
  {
    date: "2024",
    title: "A New Chapter",
    description:
      "Achieved 323/360 in the Kankor examination and earned admission to Kabul University's Computer Science faculty.",
  },
  {
    date: "UNIVERSITY",
    title: "Exploring Computer Science",
    description:
      "Developing a deeper understanding of programming, software engineering, and the principles behind modern technology.",
  },
  {
    date: "BEYOND THE CLASSROOM",
    title: "Sharing Knowledge",
    description:
      "Teaching, mentoring, participating in academic activities, and learning through collaboration.",
  },
  {
    date: "ONGOING",
    title: "Exploring New Horizons",
    description:
      "Expanding my interests across technology, finance, and business, while building practical projects and exploring new ideas.",
  },
];

const experienceItems = [
  {
    id: 1,
    position: "Frontend Developer",
    organization: "Organization / Company Name",
    period: "2025 – Present",
    type: "Professional Experience",
    description:
      "Add a short description of your responsibilities, projects, and achievements here.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    position: "Mathematics & English Instructor",
    organization: "School / Organization Name",
    period: "2025 – 2026",
    type: "Teaching Experience",
    description:
      "Add details about your teaching responsibilities, student engagement, and contributions.",
    technologies: ["Teaching", "Communication", "Mentoring"],
  },
  {
    id: 3,
    position: "Web Developer",
    organization: "Organization / Project Name",
    period: "2024 – 2025",
    type: "Development Experience",
    description:
      "Describe the websites, features, and digital solutions you worked on.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    position: "Mentor & Academic Contributor",
    organization: "Organization / Community Name",
    period: "Ongoing",
    type: "Community Experience",
    description:
      "Describe your mentoring, collaboration, and academic community contributions.",
    technologies: ["Mentoring", "Leadership", "Communication"],
  },
];

const Journey = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });

  const energyPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const activationOffset = 0.025;

    const passedIndex = journeyItems.reduce((last, item, index) => {
      const threshold = (index + 0.5) / journeyItems.length - activationOffset;

      return latest >= threshold ? index : last;
    }, -1);

    setActiveIndex(passedIndex);
  });
  return (
    <section className="journeySection responsive">
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="aboutEyebrow mb-4 flex items-center justify-center gap-3">
            <span className="aboutEyebrowLine" />
            MY JOURNEY
            <span className="aboutEyebrowLine" />
          </div>

          <h2 className="journeyHeading font-Poppins text-3xl font-bold sm:text-4xl lg:text-5xl">
            Every Step Has a <span>Story.</span>
          </h2>

          <p className="journeySubtitle mx-auto mt-5 max-w-[600px] font-Poppins text-base leading-8 sm:text-lg">
            Every milestone is another step toward building something
            meaningful.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="journeyTimeline relative" ref={timelineRef}>
          {/* Timeline track */}
          <div className="journeyTimelineTrack">
            <div className="journeyTimelineBase" />

            {/* Scroll-driven progress */}
            <motion.div
              className="journeyTimelineFill"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
              }}
            />

            {/* Moving energy point */}
            <motion.div
              className="journeyEnergyPoint"
              style={{ top: energyPosition }}
            >
              <div className="journeyEnergyCore" />

              {/* Magical sparks */}
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className={`journeySpark journeySpark${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {journeyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="journeyItem relative"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Timeline indicator */}
              <div
                className={`journeyDot ${index <= activeIndex ? "active" : ""}`}
              />

              {/* Milestone card */}
              <div className="journeyCard">
                <span className="journeyDate">{item.date}</span>

                <h3 className="journeyCardTitle">{item.title}</h3>

                <p className="journeyCardDescription">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Experience */}
        <section className="experienceSection mt-28">
          {/* Experience heading */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aboutEyebrow mb-4 flex items-center justify-center gap-3">
              <span className="aboutEyebrowLine" />
              PROFESSIONAL EXPERIENCE
              <span className="aboutEyebrowLine" />
            </div>

            <h2 className="experienceHeading font-Poppins text-3xl font-bold sm:text-4xl lg:text-5xl">
              Where Ideas Meet <span>Experience.</span>
            </h2>

            <p className="experienceSubtitle mx-auto mt-5 max-w-[600px] font-Poppins text-base leading-8 sm:text-lg">
              Every opportunity is a chance to learn, contribute, and grow.
            </p>
          </motion.div>

          {/* Experience cards and connectors ========================================================================*/}

          <div className="experienceTimeline">
            {experienceItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* Experience card */}
                <motion.div
                  className="experienceItem"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="experienceCard">
                    <div className="experienceCardTop">
                      <span className="experienceNumber">
                        EXPERIENCE 0{item.id}
                      </span>

                      <span className="experienceType">{item.type}</span>
                    </div>

                    <h3 className="experiencePosition">{item.position}</h3>

                    <p className="experienceOrganization">
                      {item.organization}
                    </p>

                    <span className="experiencePeriod">{item.period}</span>

                    <p className="experienceDescription">{item.description}</p>

                    <div className="experienceTechnologies">
                      {item.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Connector between experiences */}
                {index !== experienceItems.length - 1 && (
                  <div className="experienceConnector">
                    <span className="experienceConnectorLine" />
                    <span className="experienceConnectorArrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Final journey CTA */}
          <div className="experienceFinalConnector">
            <span className="experienceFinalLine" />
            <span className="experienceFinalArrow" />
          </div>

          <motion.div
            className="experienceCTA"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="experienceCTAGlow" />

            <div className="experienceCTAContent">
              <span className="experienceCTALabel">THE NEXT CHAPTER</span>

              <h3>
                Let's Write the <span>Next Chapter</span> Together.
              </h3>

              <p>
                Have an opportunity, project, or collaboration in mind? I'd love
                to hear from you. Maybe our next journey starts here.
              </p>

              <Link to="/contact" className="experienceCTAButton">
                Let's Connect
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Journey;
