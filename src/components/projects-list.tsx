import { TbFolderCode } from 'react-icons/tb';

import Section from './ui/section';
import ProjectBanner from './ui/project-banner';
import { useTranslations } from 'next-intl';
import useProjects from '@/hooks/useProjects';

const ProjectsList = () => {
  const t = useTranslations('HomePage.ProjectsList');
  const projects = useProjects();

  return (
    <Section title={t('title')} icon={TbFolderCode} url="/projects">
      {projects
        .slice(0, 2)
        .map(
          (
            { title, description, backgroundImg, deployUrl, repositoryUrl },
            index,
          ) => (
            <ProjectBanner
              key={title}
              title={title}
              description={description}
              backgroundImg={backgroundImg}
              deployUrl={deployUrl}
              repositoryUrl={repositoryUrl}
              variant={index % 2 === 0 ? 'leftToRight' : 'rightToLeft'}
            />
          ),
        )}
    </Section>
  );
};

export default ProjectsList;
