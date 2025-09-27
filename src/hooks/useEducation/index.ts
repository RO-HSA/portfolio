import { useFormatter } from 'next-intl';
import { type DateTimeFormatOptions, useTranslations } from 'next-intl';
import useGetExperienceSpan from '../useGetExperienceSpan';

const useEducation = () => {
  const t = useTranslations('Education');
  const format = useFormatter();
  const { getExperienceSpan } = useGetExperienceSpan();

  const formatOptions: DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
  };

  return [
    {
      companyName: t('unime.institution'),
      image: '/unime.jpg',
      role: t('unime.degree'),
      startDate: format.dateTime(new Date('2024-01-01'), formatOptions),
      endDate: format.dateTime(new Date('2026-06-30'), formatOptions),
      span: getExperienceSpan(new Date('2024-01-01'), new Date('2026-07-30')),
    },
    {
      companyName: t('ebac.institution'),
      image: '/ebac.webp',
      role: t('ebac.degree'),
      startDate: format.dateTime(new Date('2023-01-01'), formatOptions),
      endDate: format.dateTime(new Date('2024-01-01'), formatOptions),
      span: getExperienceSpan(new Date('2023-01-01'), new Date('2024-01-01')),
    },
    {
      companyName: t('unifacs.institution'),
      image: '/unifacs.jpg',
      role: t('unifacs.degree'),
      startDate: format.dateTime(new Date('2018-01-01'), formatOptions),
      endDate: format.dateTime(new Date('2022-01-01'), formatOptions),
      span: getExperienceSpan(new Date('2018-01-01'), new Date('2022-01-31')),
    },
  ];
};

export default useEducation;
