import ProjectsList from './components/projects-list';
import { projects } from '@/configs/main-items';

const Projects = () => {
  const frontEndProjects = projects.filter(
    project => project.stack === 'frontend',
  );

  const backEndProjects = projects.filter(
    project => project.stack === 'backend',
  );

  const fullStackProjects = projects.filter(
    project => project.stack === 'fullstack',
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Meus projetos</h2>
        <p className="opacity-60 text-base">
          Nesta pagina estão listados alguns dos projetos que desenvolvi, se
          quiser ver mais, é só acessar meu{' '}
          <a
            href="https://github.com/RO-HSA/"
            target="_blank"
            className="text-indigo-600 underline"
          >
            Github
          </a>
        </p>
      </div>

      {fullStackProjects.length > 0 && (
        <ProjectsList title="Full Stack" projects={fullStackProjects} />
      )}

      {frontEndProjects.length > 0 && (
        <ProjectsList title="Front-end" projects={frontEndProjects} />
      )}

      {backEndProjects.length > 0 && (
        <ProjectsList title="Back-end" projects={backEndProjects} />
      )}
    </div>
  );
};

export default Projects;
