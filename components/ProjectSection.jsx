import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaPython, FaJs, FaGithub, FaCode,  FaDatabase, FaAws, FaVial, FaRProject, FaLock, FaGoogle } from 'react-icons/fa'

const ProjectSection = ({ project }) => {
    const icons = {
        "React": <FaReact />,
        "Next.js": <FaJs/>,
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
        "TypeScript": <FaJs/>,
        "Express": <FaDatabase/>,
        "Google API": <FaGoogle/>
    }
    const techstack = []
    project.techstack.forEach((tech) => techstack.push({name: tech, icon: icons[tech]}))
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full sm:min-h-screen bg-gradient-to-br from-colour-text to-black text-colour-navs text-xl pt-10 px-6 sm:pt-36 sm:px-8">
            <div className="col-span-1">
                <h1 className="text-5xl">{project.name}</h1>
                <p className="text-3xl pr-2">{project.description}</p>
                <div className="flex flex-row text-colour-text bg-gradient-to-r from-accent-one via-accent-one to-white w-fit p-3 my-2 rounded-lg">
                    <a href={project.link} target="_blank" className="hover:font-bold">Live link</a>
                    <p className="px-6">|</p>
                    <a href={project.repo} target="_blank" className="hover:font-bold">Github repo</a>
                </div>
                <div className="mx-auto sm:mx-0 bg-gradient-to-tr from-colour-navs via-colour-navs to-white text-colour-text p-5 sm:p-10 my-5 rounded-xl shadow-lg w-full sm:w-11/12">
                <div>{project.story}</div>
                <div className="flex flex-row flex-wrap">
                    {techstack && techstack.map((tech, index) => (
                        <motion.div 
                            initial={{x:60}} whileInView={{x:[60, 0, -10, 0]}} transition={{duration: 0.6, once: true, delay: index * 0.1}}
                            key={index} 
                            className="w-fit flex flex-row text-colour-text bg-gradient-to-r from-accent-one via-accent-one to-white p-3 mr-4 my-2 rounded-lg">
                            {tech.icon}
                            <p className="px-2">{tech.name}</p>
                        </motion.div>
                    ))}
                </div>
                </div>

            </div>
            <div className="col-span-1 rounded-lg overflow-scroll max-h-[80vh] p-2 border-2 m-3 border-colour-text bg-gradient-to-tr from-colour-text/80 via-black/80 to-black">
                <img src={project.mainimage} alt={project.name} className="overflow-scroll mb-1 rounded-t-lg mx-auto"/>
                <img src={project.screenshot1} alt={project.name} className="overflow-scroll my-1 mx-auto"/>
                <img src={project.screenshot2} alt={project.name} className="overflow-scroll mt-1 rounded-b-lg mx-auto"/>
            </div>

        </div>
    )
}

export default ProjectSection