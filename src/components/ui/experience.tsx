import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

export interface ExperienceProps {
  companyName: string;
  image: string;
  role: string;
  span: string;
  startDate: Date | string;
  endDate?: Date | string;
}

const Experience: FC<ExperienceProps> = ({
  companyName,
  image,
  role,
  startDate,
  endDate,
  span,
}) => {
  const t = useTranslations('Span');

  return (
    <div className="flex gap-2">
      <div className="flex items-center">
        <Image
          className="rounded-full object-fill border-2 border-primary"
          src={image}
          width={48}
          height={48}
          alt={companyName}
        />
      </div>

      <div className="flex flex-col gap-1 text-[11px]">
        <h5 className="text-xs font-bold">{companyName}</h5>
        <span className="opacity-60">{role}</span>
        <span className="opacity-60 text-wrap">{`${startDate} - ${endDate ?? t('span_current')} | ${span}`}</span>
      </div>
    </div>
  );
};

export default Experience;
