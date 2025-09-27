import LinkButton from '@/components/ui/link-button';
import { MAX_DESCRIPTION_LENGTH } from '@/constants';
import { shortenText } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa6';

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  deployUrl: string;
  repositoryUrl: string;
}

const Project: FC<ProjectProps> = ({
  name,
  description,
  image,
  deployUrl,
  repositoryUrl,
}) => {
  const t = useTranslations('ProjectBanner');

  return (
    <div className="flex flex-col gap-4 justify-between p-8 border border-primary/30 rounded-lg w-[340px]">
      <div className="flex flex-col gap-4">
        <div
          className="rounded-md w-64 h-[170px] bg-cover overflow-clip bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h5 className="text-xl font-bold">{name}</h5>
        <p className="opacity-60 text-base">
          {shortenText(description, MAX_DESCRIPTION_LENGTH)}
        </p>
      </div>
      <div className="flex gap-4">
        <div>
          <LinkButton variant="linkOutline" link={repositoryUrl}>
            <FaGithub size={18} />
            {t('repository')}
          </LinkButton>
        </div>
        <div>
          <LinkButton link={deployUrl} variant="link">
            <FaLink size={18} />
            {t('visit')}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Project;
