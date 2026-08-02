import { projects, projectsSection } from '../config/site'

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">{projectsSection.title}</h2>
          <span className="section__numeral">{projectsSection.numeral}</span>
        </div>

        {projects.map((project, index) => (
          <article className="project" key={project.id}>
            <div className={`project__visual project__visual--${project.tone}`}>
              {project.icon}
            </div>

            <div>
              <span className="project__index">
                Proyecto {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>

              <ul className="tags">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project__links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver en vivo
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Código fuente
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}