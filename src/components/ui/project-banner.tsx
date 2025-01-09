import { FC } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa6';

import LinkButton from './link-button';

export interface ProjectBannerProps {
  title: string;
  backgroundImg: string;
  description: string;
  deployUrl: string;
  repositoryUrl: string;
}

const ProjectBanner: FC<ProjectBannerProps> = ({
  title,
  description,
  backgroundImg,
  deployUrl,
  repositoryUrl,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="rounded-lg w-full h-52 bg-cover overflow-clip bg-no-repeat"
    >
      <div className="w-full h-full bg-gradient-to-r from-transparent to-black">
        <div className="flex flex-col items-end gap-3 pt-3 pr-8">
          <h6 className="text-2xl font-bold">{title}</h6>
          <span className="text-xs opacity-60 max-w-[368px] text-right font-extralight">
            {description}
          </span>
          <div className="flex gap-8 max-w-[242px]">
            <div>
              <LinkButton link={deployUrl} variant="link">
                <FaLink size={18} />
                Visitar
              </LinkButton>
            </div>
            <div>
              <LinkButton link={repositoryUrl} variant="linkOutline">
                <FaGithub size={18} />
                Código-fonte
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
