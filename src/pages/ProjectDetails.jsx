import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link
          to="/myprojects"
          className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="sectionDark min-h-screen bg-white px-5 py-12 text-slate-900 pt-24">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/myprojects"
          className="mb-8 inline-flex items-center gap-2 font-medium text-blue-500 hover:text-blue-600"
        >
          ← Back to Projects
        </Link>

        <div className="mb-8">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-500">
            {project.part}
          </p>

          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            {project.about}
          </h1>

          <p className="projectDescription max-w-3xl text-lg leading-8">
            {project.description}
          </p>
        </div>

        <img
          src={project.src}
          alt={project.about}
          className="mb-12 w-full rounded-3xl object-cover shadow-lg"
        />

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
          <p className="projectDescription leading-8">
            {project.overview || project.description}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Technologies & Skills</h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="technologyBadge rounded-full border px-4 py-2 text-sm font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Challenges & Solutions</h2>

          {project.challenges.length > 0 ? (
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index}>
                  <h3 className="mb-2 font-semibold">{challenge.title}</h3>
                  <p className="leading-7 text-slate-600 dark:text-slate-300">
                    {challenge.solution}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              Project details will be added soon.
            </p>
          )}
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Project Gallery</h2>

          {project.gallery.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.about} screenshot ${index + 1}`}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              Additional screenshots will be added soon.
            </p>
          )}
        </section>

        <section className="flex flex-wrap gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
            >
              Live Preview ↗
            </a>
          )}

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:border-blue-500 hover:text-blue-500 dark:border-slate-700"
            >
              Source Code ↗
            </a>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;
