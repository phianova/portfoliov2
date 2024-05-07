"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown, FaPython, FaJs, FaRProject, FaGithub, FaChartPie, FaDatabase, FaAws, FaChartBar, FaCode, FaVial, FaComment, FaPen } from 'react-icons/fa'
export default function Home() {
  const [col1projects, setCol1Projects] = useState(null);
  const [col2projects, setCol2Projects] = useState(null);

  const openAccordionSection = (id) => {
    const section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }
  useEffect(() => setCol1Projects([
    {
      name: "KettleOn",
      description: "Next.js full stack team building app for remote workers",
      image: "/project1image.png",
      link: "https://kettle-on.vercel.app",
      repo: "https://github.com/phianova/KettleOn",
      id: "project1"
    },
    {
      name: "WanderLog",
      description: "Full stack (MERN) travel diary app using Google Maps API",
      image: "/project2image.png",
      link: "https://wanderlogfront.vercel.app",
      repo: "https://github.com/DonPuffin/Wanderlogback",
      id: "project2"
    },
    {
      name: "Stargazer",
      description: "Next.js app using OpenWeather API",
      image: "/project3image.png",
      link: "https://stargazer-puce.vercel.app",
      repo: "https://github.com/phianova/stargazer",
      id: "project3"
    },
  ]), [])

  useEffect(() => setCol2Projects([

    {
      name: "Ninian James Frenguelli",
      description: "Next.js online CV for academic",
      image: "/project4image.png",
      link: "https://ninianjames.github.io",
      repo: "https://github.com/phianova/njf",
      id: "project4"
    },
    {
      name: "DnD Character Quiz",
      description: "HTML/CSS, TailwindCSS and JavaScript quiz",
      image: "/project5image.png",
      link: "https://phianova.github.io/dnd-quiz",
      repo: "https://github.com/phianova/dnd-quiz",
      id: "project5"
    },
    {
      name: "Mudlark",
      description: "HTML Canvas, CSS and vanilla JavaScript game",
      image: "/project6image.png",
      link: "https://phianova.github.io/mudlark",
      repo: "https://github.com/phianova/mudlark",
      id: "project6"
    }
  ]), [])

  return (
    <main className="w-full z-0">
      <div id="home" className="pt-20 sm:pt-32 flex flex-col items-center min-h-screen bg-[url('/avatar2.png')] bg-no-repeat bg-right-bottom z-0">
        <div className="text-center w-full">
          <motion.div initial={{ opacity: 0, x: -200, z: 0 }} whileInView={{ opacity: 1, x: 0, z: 0 }} transition={{ duration: 1.1 }}
            className="text-4xl sm:text-5xl bg-gradient-to-l from-white/90 to-accent-one/90 bg-opacity-80 border border-accent-one rounded-full p-16 sm:mt-12 shadow-lg w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mb-5">
            <h1 className="p-3">Hi! I'm Sophia.</h1>
            <p className="text-2xl sm:text-3xl mt-5">I'm a full-stack developer based in London.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 200, z: 0 }} whileInView={{ opacity: 1, x: 0, z: 0 }} transition={{ duration: 1.1 }}
            className="text-3xl bg-gradient-to-tr from-accent-two/80 to-accent-two/90 bg-opacity-80 border border-accent-two rounded-full p-10 sm:mt-10 2xl:mt-20 shadow-lg w-8/12 lg:w-5/12 mx-auto">
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
              <p className="py-5 sm:p-5 text-lg md:text-2xl"><a href="./SophiaWarrenCV2024.pdf" target="_blank" className="font-bold hover:text-white hover:bg-colour-text rounded-xl border-colour-text border-2 p-3">Download CV</a></p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 0, z: 0 }} animate={{ y: [0, -8, 0], z: 0 }} transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
            className="bg-gradient-radial from-white via-white/10 to-transparent w-full sm:w-1/2 mx-auto rounded-full p-8 2xl:mt-20 right-1/2">
            <a
              className="text-colour-link text-lg sm:text-xl underline decoration-dotted px-16 py-6"
              href="#projects" id="projectslink">
              <p>See examples of my work</p>
              <FaArrowDown className="text-colour-link text-3xl sm:text-5xl mx-auto" />
            </a>
          </motion.div>
        </div>
      </div>


      <div id="projects" className="flex flex-col min-h-screen items-center pt-16 sm:pt-32 z-0 mx-auto bg-gradient-to-br from-colour-text via-colour-text to-black">
        <div className="flex sm:hidden flex-col items-center w-11/12 mx-auto z-0">
          {col1projects && col1projects.map((project) => (
            <ProjectCard project={project} key={project.name} className="z-0" />
          ))}
          {col2projects && col2projects.map((project) => (
            <ProjectCard project={project} key={project.name} className="z-0" />
          ))}
        </div>
        <div className="hidden sm:flex flex-row items-center justify-between w-11/12 mx-auto z-0">
          <div className="flex flex-col w-1/2 mx-10">
          {col1projects && col1projects.map((project) => (
            <ProjectCard project={project} key={project.name} className="z-0" />
          ))}
          </div>
          <div className="flex flex-col w-1/2 mx-10">
          {col2projects && col2projects.map((project) => (
            <ProjectCard project={project} key={project.name} className="z-0" />
          ))}
          </div>
        </div>
        <a className="bg-colour-navs rounded-xl w-10/12 sm:w-8/12 mt-4 sm:mt-10 text-center p-5 text-3xl hover:bg-accent-one" href="/projects">
            View all projects
        </a>
        <motion.div
          initial={{ y: 0, z: 0 }} animate={{ y: [0, -8, 0], z: 0 }} transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
          className="bg-gradient-radial from-colour-text via-transparent to-transparent w-full sm:w-1/2 mx-auto rounded-full p-8 sm:mt-20 right-1/2">
          <a
            className="text-colour-navs text-lg sm:text-xl underline decoration-dotted px-16 py-6 text-center"
            href="#skills">
            <p>Find out about my skills</p>
            <FaArrowDown className="text-colour-navs text-3xl sm:text-5xl mx-auto" />
          </a>
        </motion.div>
      </div>


      <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 min-h-screen pt-16 sm:pt-32 z-0 mx-auto w-full bg-gradient-to-br from-accent-one via-accent-one/80 to-colour-link/80">
        <div className="col-span-1 w-11/12">
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">Proficient in:</h3>
          <button onClick={() => openAccordionSection("react")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">React & Next.js</p>
          </button>
          <div id="react" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("mongo")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">MongoDB & Mongoose</p>
          </button>
          <div id="mongo" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("express")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Express</p>
          </button>
          <div id="express" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("html")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaCode className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">HTML/CSS & Tailwind</p>
          </button>
          <div id="html" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("javascript")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">JavaScript</p>
          </button>
          <div id="javascript" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("git")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaGithub className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Git & GitHub</p>
          </button>
          <div id="git" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("sql")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">SQL & PostgreSQL</p>
          </button>
          <div id="sql" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("stata")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaChartBar className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Stata</p>
          </button>
          <div id="stata" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("typescript")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">TypeScript</p>
          </button>
          <div id="typescript" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
        </div>
        <div className="col-span-1 w-11/12">
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">Soft skills:</h3>
          <button onClick={() => openAccordionSection("writing")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaPen className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Technical writing</p>
          </button>
          <div id="writing" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("communication")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaComment className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Communication</p>
          </button>
          <div id="communication" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <button onClick={() => openAccordionSection("testing")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaVial className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Software testing</p>
          </button>
          <div id="testing" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">Description here</p>
          </div>
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">Some knowledge of:</h3>
          <div className="flex flex-row items-center px-5">
            <FaRProject className="text-colour-text text-3xl" />
            <p className="pl-3 text-2xl">R</p>
          </div>
          <div className="flex flex-row items-center px-5">
            <FaChartPie className="text-colour-text text-3xl" />
            <p className="px-2 text-2xl">Tableau</p>
          </div>
          <div className="flex flex-row items-center px-5">
            <FaAws className="text-colour-text text-3xl" />
            <p className="px-2 text-2xl">AWS</p>
          </div>
          <div className="flex flex-row items-center px-5">
            <FaPython className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Python</p>
          </div>
          <div className="flex flex-row items-center px-5">
            <FaPython className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Django</p>
          </div>
        </div>
        <motion.div
          initial={{ y: 0, z: 0 }} animate={{ y: [0, -8, 0], z: 0 }} transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
          className="col-span-1 sm:col-span-2 bg-gradient-radial from-white via-white/5 to-transparent w-full sm:w-1/2 mx-auto rounded-full p-8 sm:mt-20">
          <a
            className="text-colour-link text-lg sm:text-xl underline decoration-dotted px-16 py-6 text-center"
            href="#about">
            <p>Find out more about me</p>
            <FaArrowDown className="text-colour-link text-3xl sm:text-5xl mx-auto" />
          </a>
        </motion.div>
      </div>

      
      <div id="about" className="w-full flex flex-col min-h-screen items-center bg-gradient-to-b from-white via-accent-two/20 to-accent-two pt-16 sm:pt-32">
        <motion.img initial={{ x: 200 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-1/2 sm:w-3/12 xl:w-2/12 sm:pt-4" src="/favicon.ico" alt="profile" />
        <motion.div initial={{ x: -200 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col items-center p-8 my-2 sm:my-5 text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-white/40 to-white/20 rounded-xl">
          I moved into software development after several years working in welfare benefits policy.
          I'm passionate about "tech for good" and using my skills to solve social problems.
          I'm always looking to learn new things and love a challenge.
          <br></br><br></br>When I'm not tapping away at a keyboard, I can often be found tapping away at a piano, strumming away at a guitar or singing my little heart out.
          I'm also a huge foodie and a lover of tabletop RPGs.
        </motion.div>
        <motion.a 
          initial={{ y: 0, z: 0 }} animate={{ y: [0, -8, 0], z: 0 }} transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
          className="bg-accent-two border-white/40 border-4 rounded-full text-2xl my-10 p-5 hover:bg-white"
          href="/contact">
            Get in touch
        </motion.a>
      </div>
    </main >
  )
}
