import Image from 'next/image';
import { FC } from 'react';
import { getMonth } from 'date-fns';

import { getExperienceSpan } from '@/lib/utils';

export interface ExperienceProps {
  companyName: string;
  image: string;
  role: string;
  startDate: Date;
  endDate?: Date;
}

const Experience: FC<ExperienceProps> = ({
  companyName,
  image,
  role,
  startDate,
  endDate,
}) => {
  const startYear = startDate.getFullYear();
  const startMonth = getMonth(startDate) + 1;
  const startMonthWithZero = startMonth < 10 ? `0${startMonth}` : startMonth;

  const endYear = endDate?.getFullYear() || 'Atual';
  const endMonth = getMonth(endDate || '') + 1;
  const endMonthWithZero = endMonth < 10 ? `0${endMonth}` : endMonth;

  const experienceSpan = getExperienceSpan(startDate, endDate || new Date());
  console.log({ experienceSpan });

  return (
    <div className="flex gap-4">
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
        <span className="opacity-60">{`${startMonthWithZero}/${startYear} - ${endMonth ? endMonthWithZero + '/' : ''}${endYear} | ${experienceSpan}`}</span>
      </div>
    </div>
  );
};

export default Experience;
