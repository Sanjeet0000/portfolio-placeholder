import { motion } from "motion/react";
import { ProjectsList } from "../data/ProjectsList.jsx";
import { SideArrow } from "../data/SideArrow.jsx";

const Projects = () => {
  return (
    <section className="mx-auto grid w-full border-t-2 border-t-slate-950 bg-gradient-to-bl from-black via-slate-900 to-black pb-24">
      <header className="mx-auto mt-20 w-4/5 pl-8 text-3xl font-semibold text-white">
        Projects
      </header>
      <div className="mx-auto my-16 grid w-4/5 place-items-center justify-center gap-y-40 md:grid-cols-2">
        {ProjectsList.map((project) => {
          return (
            <section
              key={project.id}
              className="w-11/12 overflow-hidden rounded-2xl bg-opacity-10 bg-gradient-to-tl from-black/[0.1] via-white/[0.1] to-black/[0.1] px-2 pb-2 pt-4 shadow-custom"
            >
              <p className="py-5 pl-2 font-CairoPlay text-2xl text-gray-200">
                {project.projectName}
              </p>

              <div className="overflow-hidden">
                <motion.img
                  src={project.screenshot}
                  alt="website preview"
                  animate={{
                    scale: 1.0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  }}
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.7,
                    transition: {
                      duration: 0.7,
                      ease: "easeIn",
                    },
                  }}
                />
              </div>
              <div className="bottom relative rounded-b-2xl bg-black/[0.4] bg-opacity-75 p-4 pt-5 text-white">
                <p>{project.description}</p>
                <a
                  href={project.address}
                  target="_blank"
                  className="my-4 inline-block rounded-xl bg-white/[0.1] px-3 py-[2px] hover:bg-black/[0.1] hover:text-white hover:ring-1 hover:ring-white/[0.5]"
                >
                  Go to Website {SideArrow}
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
