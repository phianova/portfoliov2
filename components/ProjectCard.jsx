import React from 'react'

const ProjectCard = ({project}) => {
  const bgImage = `url("${project.image}")`
  console.log(project.image)
  console.log(bgImage)
  return (
    <div className={`bg-[${bgImage}] bg-no-repeat bg-cover`}>
    <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.link}>View Project</a>
      <a href={project.repo}>View Repo</a>
    </div>
  )
}

export default ProjectCard