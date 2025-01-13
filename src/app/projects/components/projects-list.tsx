import { Projects } from '@/configs/main-items';
import { FC } from 'react';
import Project from './project';

interface ProjectsListProps {
  title: string;
  projects: Projects[];
}

const ProjectsList: FC<ProjectsListProps> = ({ title, projects }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {projects.map(
          ({ title, description, backgroundImg, deployUrl, repositoryUrl }) => (
            <Project
              key={title}
              name={title}
              image={backgroundImg}
              description={description}
              deployUrl={deployUrl}
              repositoryUrl={repositoryUrl}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
