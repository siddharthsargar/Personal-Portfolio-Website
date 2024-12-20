import React, { useState, useEffect} from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = [
        {id: 1, name: 'Project One', description: 'This is project One description'},
        {id: 2, name: 'Project Two', description: 'This is project Two description'}
    ];
    setProjects(fetchProjects);
  }, []);
  return (
    <div>
        <h2>Projects</h2>
        <ul>
            {projects.map((project) => {
                return (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </li>
            );
            })}
        </ul>
    </div>
  );
};

export default Projects;