import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  const bgImage = `url("${project.image}")`
  return (
    // <div className={`bg-[${bgImage}] bg-no-repeat bg-cover`}>
    <div className={`bg-[${bgImage}] bg-no-repeat bg-cover w-full my-2 rounded-xl shadow-lg z-0`}>
      <div className="bg-colour-text bg-opacity-15 w-full rounded-xl min-h-[26vh] flex flex-col relative">
        <h1 className="text-3xl w-full mt-3 p-3 bg-gradient-to-r from-colour-navs via-white to-colour-navs/80 shadow-lg rounded-t-xl">{project.name}</h1>
        <p className="text-lg text-right w-full mt-2 p-2 bg-gradient-to-r from-accent-one via-white to-accent-one/80 shadow-lg">{project.description}</p>
        <div className="absolute bottom-0 flex flex-row w-full justify-between bg-gradient-to-r from-colour-navs via-white to-colour-navs/80 rounded-b-xl">
          <Link className="hover:text-colour-navs hover:bg-colour-text rounded-lg p-3 text-center underline decoration-dotted text-xl font-bold" href={`/projects/?id=${project.id}`}>More detail</Link>
          <a className="hover:text-colour-navs hover:bg-colour-text rounded-lg p-3 text-center underline decoration-dotted" href={project.link}>Live link</a>
          <a className="hover:text-colour-navs hover:bg-colour-text rounded-lg p-3 text-center underline decoration-dotted" href={project.repo}>Github repo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard