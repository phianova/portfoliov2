"use client"
import { useState, useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import { motion } from "framer-motion";
import { FaArrowUp, FaCloudRain, FaReact, FaArrowDown, FaPython, FaJs, FaRProject, FaGithub, FaChartPie, FaDatabase, FaLock, FaAws, FaGoogle, FaCreditCard, FaChartBar, FaCode, FaVial, FaComment, FaPen } from 'react-icons/fa'

export default function Home() {

  const openAccordionSection = (id) => {
    const section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }

  const [projects, setProjects] = useState(null);
  const [upcoming, setUpcoming] = useState(null);

  useEffect(() => {
    const scrollToProject = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('id');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    scrollToProject();
  }, [projects]);

  const myStack = [
    "MongoDB",
    "Node.js",
    "Express",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "+ more!"
  ]

  const icons = {
    "React": <FaReact />,
    "Next.js": <FaJs />,
    "Python": <FaPython />,
    "Django": <FaPython />,
    "JavaScript": <FaJs />,
    "GitHub": <FaGithub />,
    "Git": <FaGithub />,
    "Figma": <FaCode />,
    "VSCode": <FaCode />,
    "Node.js": <FaJs />,
    "HTML/CSS": <FaCode />,
    "TailwindCSS": <FaCode />,
    "SQL": <FaDatabase />,
    "PostgresSQL": <FaDatabase />,
    "MongoDB": <FaDatabase />,
    "Mongoose": <FaDatabase />,
    "AWS": <FaAws />,
    "Jest": <FaVial />,
    "R": <FaRProject />,
    "Supertest": <FaVial />,
    "Kinde": <FaLock />,
    "tRPC": <FaDatabase />,
    "TypeScript": <FaJs />,
    "Express": <FaDatabase />,
    "Google API": <FaGoogle />,
    "Stripe": <FaCreditCard />,
    "Aceternity UI": <FaCode />,
    "OpenWeather API": <FaCloudRain />
  }

  useEffect(() => setProjects([
    {
      name: "KettleOn",
      description: "Next.js & TypeScript - team-building app for remote workers",
      mainimage: "/project1image.png",
      screenshot1: "/project1shot1.png",
      screenshot2: "/project1shot2.png",
      techstack: ["Node.js", "MongoDB", "Mongoose", "tRPC", "TypeScript","Kinde", "React", "Next.js", "TailwindCSS", "GitHub"],
      story: `I built this Next.js full-stack app as part of a team, focusing on the backend and authentication.
          I used Kinde and tRPC, connecting to a MongoDB noSQL database. 
          KettleOn contains a range of scored team-building activities.
          Managers can register their team and add members using a form I built to interact with the Kinde API.`,
      link: "https://kettle-on.vercel.app",
      repo: "https://github.com/phianova/KettleOn",
      id: "project1"
    },
    {
      name: "Wanderlog",
      description: "MERN stack travel diary app using Google API",
      mainimage: "/project2image.png",
      screenshot1: "/project2shot1.png",
      screenshot2: "/project2shot2.png",
      techstack: ["Node.js", "MongoDB", "Mongoose", "Express", "Google API", "Supertest", "React", "Next.js", "TailwindCSS", "GitHub"],
      story: `This MERN stack app was built as part of a team - I worked on the backend and Google API integration. 
          I used Supertest to test the API endpoints. The backend is hosted on Render.`,
      link: "https://wanderlogfront.vercel.app",
      repo: "https://github.com/DonPuffin/Wanderlogback",
      id: "project2"
    },
    {
      name: "Stargazer",
      description: "Next.js app using OpenWeather API",
      mainimage: "/project3image.png",
      screenshot1: "/project3shot1.png",
      screenshot2: "/project3shot2.png",
      techstack: ["React", "Next.js", "TailwindCSS", "OpenWeather API", "GitHub"],
      story: "I built this app to monitor weather conditions for stargazing, connecting a Next.js frontend to the OpenWeather API.",
      link: "https://stargazer-puce.vercel.app",
      repo: "https://github.com/phianova/stargazer",
      id: "project3"
    },
    {
      name: "Ninian James Frenguelli",
      description: "Next.js & TailwindCSS - online CV/portfolio for academic",
      mainimage: "/project4image.png",
      screenshot1: "/project4shot1.png",
      screenshot2: "/project4shot2.png",
      techstack: ["React", "Next.js", "TailwindCSS", "GitHub"],
      story: `I built this Next.js app for an academic who needed an online CV to showcase his research contributions and recent findings. I used Next.js components to create a responsive container for some very large SVG graphs he wanted to display.`,
      link: "https://ninianjames.github.io",
      repo: "https://github.com/phianova/njf",
      id: "project4"
    },
    // {
    //     name: "DnD Character Quiz",
    //     description: "HTML/CSS and vanilla JavaScript quiz to help you choose a DnD character class",
    //     mainimage: "/project5image.png",
    //     screenshot1: "/project5shot1.png",
    //     screenshot2: "/project5shot2.png",
    //     techstack: ["HTML/CSS", "TailwindCSS", "JavaScript", "GitHub"],
    //     story: "I built this JavaScript quiz as part of a bootcamp, using TailwindCSS for styling.",
    //     link: "https://phianova.github.io/dnd-quiz/",
    //     repo: "https://github.com/phianova/dnd-quiz",
    //     id: "project5"
    // },
    // {
    //     name: "Mudlark",
    //     description: "HTML Canvas, CSS and vanilla JavaScript game about mudlarking.",
    //     mainimage: "/project6image.png",
    //     screenshot1: "/project6shot1.png",
    //     screenshot2: "/project6shot2.png",
    //     techstack: ["HTML/CSS", "JavaScript", "GitHub"],
    //     story: "This is the first thing I ever built in HTML/CSS and JavaScript. It was for an application to a bootcamp - I love to look back at it and see how much I've learnt since! But also, I still kind of think it's pretty cool.",
    //     link: "https://phianova.github.io/mudlark",
    //     repo: "https://github.com/phianova/mudlark",
    //     id: "project6"
    // }
  ]), [])
  useEffect(() => setUpcoming([
    {
      name: "TamiLang",
      description: "Language-learning app for Tamil alphabet",
      techstack: ["Python", "Django", "React", "Next.js", "PostgreSQL", "TailwindCSS", "GitHub"],
      repo: "https://github.com/phianova/tamilang-back",
    },
    {
      name: "Alamara",
      description: "Online shop for handmade saree business",
      techstack: ["React", "Next.js", "TailwindCSS", "Stripe", "GitHub"],
      repo: "https://github.com/phianova/handpickedsarees",
    },
    {
      name: "Padam productions",
      description: "Portfolio site for videographer and photographer",
      techstack: ["React", "Next.js", "TailwindCSS", "Aceternity UI", "GitHub"],
      repo: "https://github.com/phianova/padam",
    }
  ]), [])


  return (
    <main className="w-full z-0">
      <div id="home" className="pt-16 sm:pt-32 flex flex-col items-center justify-between min-h-screen bg-[url('/avatar2.png')] bg-no-repeat bg-right-bottom z-0">
        <div className="text-center w-full">
          <motion.div initial={{ opacity: 0, x: -200, z: 0 }} whileInView={{ opacity: 1, x: 0, z: 0 }} transition={{ duration: 1.1 }}
            className="text-3xl sm:text-4xl bg-gradient-to-l from-white/90 to-accent-one/90 bg-opacity-80 border border-accent-one rounded-full px-10 py-10 md:p-10 mt-2 sm:mt-6 shadow-lg w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mb-5">
            <h1 className="p-3">Hi! I'm Sophia.</h1>
            <p className="text-xl sm:text-2xl my-3">I'm a full-stack developer based in London. I use:</p>
            <div className="w-full flex flex-row flex-wrap items-center justify-center">
              {myStack && myStack.map((tech, index) => (
                <motion.div
                  initial={{ x: 60 }} whileInView={{ x: [60, 0, -10, 0] }} transition={{ duration: 0.6, once: true, delay: index * 0.1 }}
                  key={index}
                  className="text-lg lg:text-xl w-fit flex flex-row items-center text-colour-text bg-gradient-to-r from-accent-one via-accent-one to-white p-3 mr-4 my-2 rounded-lg">
                  {icons[tech]}
                  <p className="px-2">{tech}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 200, z: 0 }} whileInView={{ opacity: 1, x: 0, z: 0 }} transition={{ duration: 1.1 }}
            className="text-3xl bg-gradient-to-tr from-accent-two/80 to-accent-two/90 bg-opacity-80 border border-accent-two rounded-full p-10 2xl:mt-10 shadow-lg w-8/12 lg:w-5/12 mx-auto">
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
              <p className="py-5 sm:p-5 text-lg md:text-2xl"><a href="./SophiaWarrenCV.pdf" target="_blank" className="font-bold hover:text-white hover:bg-colour-text rounded-xl border-colour-text border-2 p-3">Download CV</a></p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 0, z: 0 }} animate={{ y: [0, -8, 0], z: 0 }} transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
            className="bg-gradient-radial from-white via-white/10 to-transparent w-full sm:w-1/2 mx-auto rounded-full p-4 right-1/2">
            <a
              className="text-colour-link text-lg sm:text-xl underline decoration-dotted px-16 py-6"
              href="#projects" id="projectslink">
              <p>See examples of my work</p>
              <FaArrowDown className="text-colour-link text-3xl sm:text-5xl mx-auto" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="bg-colour-text" id="projects">
        {projects && projects.map((project) =>
          <div key={project.id} id={project.id}>
            <ProjectSection project={project}></ProjectSection>
          </div>
        )}
        <div className="h-full sm:h-screen pt-16 sm:pt-32 flex flex-col justify-center">
          <h1 className="text-3xl text-center text-colour-navs">Coming soon:</h1>
          <div className="flex flex-col sm:flex-row sm:justify-around">
            {upcoming && upcoming.map((project, index) =>
              <div key={index} className="bg-colour-navs p-3 m-5 rounded-lg shadow-lg flex flex-col sm:w-4/12 text-lg sm:text-xl">
                <h1 className="text-xl sm:text-2xl">{project.name}</h1>
                <p>{project.description}</p>
                <a href={project.repo} className="m-2 bg-accent-two p-3 rounded-lg hover:font-bold">Github repo</a>
                <div className="flex flex-row flex-wrap">
                  {project.techstack && project.techstack.map((tech, index) => (
                    <motion.div
                      initial={{ x: 60 }} whileInView={{ x: [60, 0, -10, 0] }} transition={{ duration: 0.6, once: true, delay: index * 0.1 }}
                      key={index}
                      className="w-fit flex flex-row text-colour-text bg-gradient-to-r from-accent-one via-accent-one to-white p-3 mr-4 my-2 rounded-lg">
                      {icons[tech]}
                      <p className="px-2">{tech}</p>
                    </motion.div>
                  ))}
                </div>
              </div>)}
          </div>
        </div>
      </div>


      <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 min-h-screen pt-16 sm:pt-32 z-0 mx-auto w-full bg-gradient-to-br from-accent-one via-accent-one/80 to-colour-link/80">
        <div className="col-span-1 w-11/12">
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">Proficient in:</h3>
          <button onClick={() => openAccordionSection("react")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">React & Next.js</p>
          </button>
          <div id="react" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">6 months' experience building full-stack MERN stack applications and Next.js full-stack applications.</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/?id=project1">KettleOn</a> | <a className="text-colour-link hover:font-bold" href="/?id=project2">WanderLog</a> | <a className="text-colour-link hover:font-bold" href="/?id=project3">Stargazer</a> | <a className="text-colour-link hover:font-bold" href="/?id=project4">NJF</a></p>
          </div>
          <button onClick={() => openAccordionSection("mongo")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">MongoDB & Mongoose</p>
          </button>
          <div id="mongo" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">6 months' experience building full-stack MERN stack applications</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/?id=project1">KettleOn</a> | <a className="text-colour-link hover:font-bold" href="/?id=project2">WanderLog</a></p>
          </div>
          <button onClick={() => openAccordionSection("express")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Express</p>
          </button>
          <div id="express" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">6 months' experience building full-stack MERN stack applications</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/?id=project1">KettleOn</a> | <a className="text-colour-link hover:font-bold" href="/?id=project2">WanderLog</a></p>
          </div>
          <button onClick={() => openAccordionSection("html")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaCode className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">HTML/CSS & TailwindCSS</p>
          </button>
          <div id="html" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">9 months' experience building Next.js sites and HTML pages using TailwindCSS and other libraries</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/?id=project1">KettleOn</a> | <a className="text-colour-link hover:font-bold" href="/?id=project2">WanderLog</a> | <a className="text-colour-link hover:font-bold" href="/?id=project3">Stargazer</a> | <a className="text-colour-link hover:font-bold" href="/?id=project4">NJF</a></p>
          </div>
          <button onClick={() => openAccordionSection("javascript")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">JavaScript</p>
          </button>
          <div id="javascript" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">9 months' experience building MERN stack applications and Next.js sites. 6 kyu on CodeWars.</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/?id=project1">KettleOn</a> | <a className="text-colour-link hover:font-bold" href="/?id=project2">WanderLog</a> | <a className="text-colour-link hover:font-bold" href="/?id=project3">Stargazer</a> | <a className="text-colour-link hover:font-bold" href="/?id=project4">NJF</a> | <a className="text-colour-link hover:font-bold" href="https://www.codewars.com/users/phianova" target="_blank">CodeWars</a></p>
          </div>
          <button onClick={() => openAccordionSection("git")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaGithub className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Git & GitHub</p>
          </button>
          <div id="git" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience using Git and GitHub version control in a professional context</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="https://github.com/phianova" target="_blank">GitHub</a> | <a className="text-colour-link hover:font-bold" href="/SophiaWarrenCV.pdf" target="_blank">CV</a></p>
          </div>
          <button onClick={() => openAccordionSection("sql")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">SQL & PostgreSQL</p>
          </button>
          <div id="sql" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience using PostgreSQL to analyse large administrative datasets</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/SophiaWarrenCV.pdf" target="_blank">CV</a></p>
          </div>
          <button onClick={() => openAccordionSection("stata")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaChartBar className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Stata</p>
          </button>
          <div id="stata" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience using Stata to analyse large administrative datasets</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/SophiaWarrenCV.pdf" target="_blank">CV</a></p>
          </div>
          <button onClick={() => openAccordionSection("typescript")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">TypeScript</p>
          </button>
          <div id="typescript" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience maintaining part of a TypeScript rules engine. 3 months' experience building full-stack applications in TypeScript</p>
            <p className="px-5 py-3 text-lg">See: <a className="text-colour-link hover:font-bold" href="/?id=project1">KettleOn</a> | <a className="text-colour-link hover:font-bold" href="/SophiaWarrenCV.pdf" target="_blank">CV</a></p>
          </div>
        </div>
        <div className="col-span-1 w-11/12">
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">Soft skills:</h3>
          <button onClick={() => openAccordionSection("writing")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaPen className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Technical writing</p>
          </button>
          <div id="writing" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience explaining complex welfare policy details and software development updates to a range of audiences both external and internal</p>
          </div>
          <button onClick={() => openAccordionSection("communication")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaComment className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Communication</p>
          </button>
          <div id="communication" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience in the advice sector, followed by 3 years' experience running training sessions, producing publishable written work, and presenting technical findings to a range of audiences</p>
          </div>
          <button onClick={() => openAccordionSection("testing")} className="flex flex-row items-center px-5 hover:font-bold duration-200">
            <FaVial className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Software testing</p>
          </button>
          <div id="testing" className="hidden flex flex-col items-center w-11/12 z-0">
            <p className="px-5 py-3 text-lg">3 years' experience manually testing software and contributing to integration testing of rules engine</p>
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
        <motion.img initial={{ x: 200 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-1/2 sm:w-3/12 md:w-1/12 sm:pt-4" src="/favicon.ico" alt="profile" />
        <motion.div initial={{ x: -200 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col items-center p-8 my-2 sm:my-5 text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-white/40 to-white/20 rounded-xl">
          I moved into software development after working in welfare benefits policy and data analysis.
          I'm passionate about "tech for good" and using my skills to solve social problems.
          <br></br><br></br>When I'm not tapping away at a keyboard, I can be found tapping away at a piano or strumming away at a guitar.
          I'm also a big foodie, and a fan of tabletop RPGs.
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
