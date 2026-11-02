import React, { useState } from "react";
import Button from "../Components/Button";
// import ProjectButton from "../Components/ProjectButton";
import { motion } from "framer-motion";
import ProjectButton from "../Components/ProjectButton";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

const MyProjects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((item) => item.part === selected);

  return (
    <div className="responsive mt-[40px] flex flex-col items-center gap-9">
      <h3 className="headline text-3xl md:text-3xl lg:text-5xl sectionDark">
        My Projects
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {["All", "Web Design", "Mentoring", "Graphic Design", "Drawing"].map(
          (category) => (
            <ProjectButton
              key={category}
              variant="filter"
              label={category}
              active={selected === category}
              onClick={() => setSelected(category)}
            />
          ),
        )}
      </div>

      <div className="flex w-full flex-col gap-8">
        {filteredProjects.map((item, index) => (
          <motion.div
            key={item.id}
            className={`
        flex w-full flex-col overflow-hidden
        rounded-3xl border border-slate-200
        bg-white shadow-sm sectionDark
        transition-shadow duration-300 hover:shadow-lg
        md:flex-row
        ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
      `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Project image */}
            <div className="w-full md:w-1/2">
              <img
                src={item.src}
                alt={item.about}
                className="h-52 w-full object-cover md:h-full md:min-h-[280px]"
              />
            </div>

            {/* Project details */}
            <div className="flex w-full flex-col p-5 sm:p-6 md:w-1/2 md:p-7">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold uppercase tracking-[0.15em] text-blue-600">
                  {item.part}
                </span>

                <span className="hidden text-slate-300 sm:inline">•</span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 technologyBadge border">
                  {item.status}
                </span>
              </div>

              <h3 className="mb-4 font-Poppins text-2xl font-bold text-slate-900 sm:text-3xl sectionDark">
                {item.about}
              </h3>

              <p className="mb-6 text-base leading-7 text-slate-600 sm:text-lg sectionDark">
                {item.description}
              </p>

              {/* Technologies */}
              <div className="mb-8 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-blue-800  technologyBadge border"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* View project button */}
              <div className="mt-auto border-t border-slate-200 pt-6">
                <Link
                  to={`/projects/${item.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"
                >
                  View project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
