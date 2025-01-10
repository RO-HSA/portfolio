import { FC } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa6';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn, shortenText } from '@/lib/utils';

import LinkButton from './link-button';

const projectBannerVariants = cva('w-full h-full from-transparent to-black', {
  variants: {
    variant: {
      leftToRight: 'bg-gradient-to-r',
      rightToLeft: 'bg-gradient-to-l',
    },
  },
  defaultVariants: {
    variant: 'leftToRight',
  },
});

export interface ProjectBannerProps
  extends VariantProps<typeof projectBannerVariants> {
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
  variant,
}) => {
  const MAX_DESCRIPTION_LENGTH = 174;

  const isDefaultVariant = !variant || variant === 'leftToRight';

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className={cn(
        'rounded-lg w-full h-52 bg-cover overflow-clip bg-no-repeat duration-150',
        isDefaultVariant ? 'hover:skew-y-1' : 'hover:-skew-y-1',
      )}
    >
      <div className={cn(projectBannerVariants({ variant }))}>
        <div
          className={cn(
            'flex flex-col gap-3 pt-3',
            isDefaultVariant ? 'items-end pr-8' : 'items-start pl-8',
          )}
        >
          <h6 className="text-2xl font-bold">{title}</h6>
          <span
            className={cn(
              'text-xs opacity-60 max-w-[368px] font-extralight',
              isDefaultVariant ? 'text-right' : 'text-left',
            )}
          >
            {shortenText(description, MAX_DESCRIPTION_LENGTH)}
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
