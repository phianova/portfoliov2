"use client"
import React, { useEffect, useState } from 'react'
import ProjectSection from '../../../components/ProjectSection'
import { motion } from 'framer-motion'
import { FaReact, FaPython, FaJs, FaGithub, FaCode, FaDatabase, FaAws, FaVial, FaRProject, FaLock, FaGoogle, FaCreditCard } from 'react-icons/fa'

const page = () => {

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
        "Aceternity UI": <FaCode />
    }

    useEffect(() => setProjects([
        {
            name: "KettleOn",
            description: "Team-building app for remote workers",
            mainimage: "/project1image.png",
            screenshot1: "/project1shot1.png",
            screenshot2: "/project1shot2.png",
            techstack: ["Node.js", "MongoDB", "Mongoose", "tRPC", "Kinde", "React", "Next.js", "TailwindCSS", "GitHub"],
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
            description: "Travel diary app using Google API",
            mainimage: "/project2image.png",
            screenshot1: "/project2shot1.png",
            screenshot2: "/project2shot2.png",
            techstack: ["Node.js", "MongoDB", "Mongoose", "Express", "Google API", "Supertest", "React", "Next.js", "TailwindCSS", "GitHub"],
            story: `This MERN stack app was built as part of a team - I worked on the backend and Google API integration. 
            We used Supertest to test the API endpoints. The backend is hosted on Render.`,
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
            story: "I built this Next.js app to monitor weather conditions for stargazing using Next.js and OpenWeather API.",
            link: "https://stargazer-puce.vercel.app",
            repo: "https://github.com/phianova/stargazer",
            id: "project3"
        },
        {
            name: "Ninian James Frenguelli",
            description: "Professional online CV/portfolio for academic",
            mainimage: "/project4image.png",
            screenshot1: "/project4shot1.png",
            screenshot2: "/project4shot2.png",
            techstack: ["React", "Next.js", "TailwindCSS", "GitHub"],
            story: `I built this Next.js app for an academic who needed an online CV to showcase his research contributions and recent findings. I used Next.js components to create a responsive container for some very large SVG graphs he wanted to display.`,
            link: "https://ninianjames.github.io",
            repo: "https://github.com/phianova/njf",
            id: "project4"
        },
        {
            name: "DnD Character Quiz",
            description: "HTML/CSS and vanilla JavaScript quiz to help you choose a DnD character class",
            mainimage: "/project5image.png",
            screenshot1: "/project5shot1.png",
            screenshot2: "/project5shot2.png",
            techstack: ["HTML/CSS", "TailwindCSS", "JavaScript", "GitHub"],
            story: "I built this JavaScript quiz as part of a bootcamp, using TailwindCSS for styling.",
            link: "https://phianova.github.io/dnd-quiz/",
            repo: "https://github.com/phianova/dnd-quiz",
            id: "project5"
        },
        {
            name: "Mudlark",
            description: "HTML Canvas, CSS and vanilla JavaScript game about mudlarking.",
            mainimage: "/project6image.png",
            screenshot1: "/project6shot1.png",
            screenshot2: "/project6shot2.png",
            techstack: ["HTML/CSS", "JavaScript", "GitHub"],
            story: "This is the first thing I ever built in HTML/CSS and JavaScript. It was for an application to a bootcamp - I love to look back at it and see how much I've learnt since! But also, I still kind of think it's pretty cool.",
            link: "https://phianova.github.io/mudlark",
            repo: "https://github.com/phianova/mudlark",
            id: "project6"
        }
    ]), [])
    useEffect(() => setUpcoming([
        {
            name: "TamiLang",
            description: "Language-learning app for Tamil alphabet",
            techstack: ["React", "Next.js", "TailwindCSS", "Python", "Django", "GitHub"],
            repo: "https://github.com/phianova/tamilang-back",
        },
        {
            name: "Alamara",
            description: "Online shop for handmade saree business",
            techstack: ["React", "Next.js", "TailwindCSS", "Stripe"],
            repo: "https://github.com/phianova/handpickedsarees",
        },
        {
            name: "Padam productions",
            description: "Portfolio site for videographer and photographer",
            techstack: ["React", "Next.js", "TailwindCSS", "Aceternity UI"],
            repo: "https://github.com/phianova/padam",
        }
    ]), [])


    return (
        <div className="bg-colour-text">
            {projects && projects.map((project) =>
                <div key={project.id} id={project.id}>
                    <ProjectSection project={project}></ProjectSection>
                </div>
            )}
            <div className="h-screen pt-16 sm:pt-32 flex flex-col justify-center">
                <h1 className="text-3xl text-center text-colour-navs">Coming soon:</h1>
                <div className="flex flex-row justify-around">
                    {upcoming && upcoming.map((project, index) =>
                        <div key={index} className="bg-colour-navs p-3 m-5 rounded-lg shadow-lg flex flex-col w-4/12 text-lg sm:text-xl">
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
    )
}

export default page