import React from "react";
import { useFetch } from "./FetchProject";

const Projects = () => {
  const { loading, projects } = useFetch();

  if (loading) {
    return (
      <section className='projects'>
        <h3>Loading.........</h3>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((item) => {
          const { id, url, img, title } = item;
          return (
            <a
              href={url}
              key={id}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
