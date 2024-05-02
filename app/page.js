"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
export default function Home() {
  const [col1projects, setCol1Projects] = useState(null);
  const [col2projects, setCol2Projects] = useState(null);
  useEffect(() => setCol1Projects([
    {
      name: "Project 1",
      description: "Project 1 description",
      image: "/project1image.png",
      link: "https://project1.com",
      repo: "https://github.com/project1"
    },
    {
      name: "Project 2",
      description: "Project 2 description",
      image: "/project2image.png",
      link: "https://project2.com",
      repo: "https://github.com/project2"
    },
    {
      name: "Project 3",
      description: "Project 3 description",
      image: "/project3image.png",
      link: "https://project3.com",
      repo: "https://github.com/project3"
    },
  ]), [])

    useEffect(() => setCol1Projects([

    {
      name: "Project 4",
      description: "Project 4 description",
      image: "/project4image.png",
      link: "https://project4.com",
      repo: "https://github.com/project4"
    },
    {
      name: "Project 5",
      description: "Project 5 description",
      image: "/project5image.png",
      link: "https://project5.com",
      repo: "https://github.com/project5"
    },
    {
      name: "Project 6",
      description: "Project 6 description",
      image: "/project6image.png",
      link: "https://project6.com",
      repo: "https://github.com/project6"
    }
  ]), [])

  return (
    <main className="">
      <div id="home" className="sm:pt-32 flex flex-col items-center h-screen bg-[url('/avatar2.png')] bg-no-repeat bg-right-bottom">
        <div className="text-center w-full">
          <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}
            className="text-5xl bg-gradient-to-l from-white/90 to-accent-one/90 bg-opacity-80 border border-accent-one rounded-full p-16 sm:mt-12 shadow-lg w-11/12 sm:w-10/12 mx-auto mb-5">
            <h1 className="p-3">Hi! I'm Sophia.</h1>
            <p className="text-3xl mt-5">I'm a full-stack developer based in London.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}
            className="text-3xl bg-gradient-to-tr from-accent-two/80 to-accent-two/90 bg-opacity-80 border border-accent-two rounded-full p-10 sm:mt-20 shadow-lg w-8/12 mx-auto">
            <p className="text-lg md:text-2xl">Find me here:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="flex flex-row">
                <a href="https://www.linkedin.com/in/sophia-warren-48207913b/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <span className="p-3"></span>
                <a href="https://github.com/phianova" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <span className="p-3"></span>
                <a href="mailto:sophia.m.warren@gmail.com" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
                  </svg>
                </a>
              </div>
              <p className="p-5 text-lg md:text-2xl"><a href="./SophiaWarrenCV2024.pdf" target="_blank" className="font-bold hover:text-white hover:bg-colour-text rounded-xl border-colour-text border-2 p-3">Download CV</a></p>
            </div>
          </motion.div>
          <div className="bg-gradient-radial from-stone-950/80 via-transparent to-transparent w-full sm:w-1/2 mx-auto mt-10 sm:mt-0 rounded-full p-8">
            <motion.a animate={{ color: ["accent-one", "white", "accent-one"] }} transition={{ duration: 1.5, repeat: Infinity }}
              className="text-accent-one text-lg sm:text-xl underline decoration-dotted px-16 py-6"
              href="#projects">Click here for examples of my work</motion.a>
          </div>
        </div>
      </div>
      <div id="projects" className="flex flex-col items-center h-screen p-10 sm:pt-32">
        <div className="flex sm:hidden flex-col items-center">
        {col1projects && col1projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
        {col2projects && col2projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
        </div>
        <div className="hidden sm:flex flex-row items-center">
        {col1projects && col1projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
        {col2projects && col2projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
        </div>

      </div>
    </main>
  )
}
