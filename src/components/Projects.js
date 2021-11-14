import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This is a selection of my previous work. Click on the info to link to the live websites. 
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="">
              <div className="">
                <img
                  alt="gallery"
                  className="projects-card"
                  src={project.image}
                />
          
                <div className="z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>        
                  <p className="leading-relaxed text-white">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}