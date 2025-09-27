import {
  type DateTimeFormatOptions,
  useFormatter,
  useTranslations,
} from 'next-intl';
import useGetExperienceSpan from '../useGetExperienceSpan';

const useExperiences = () => {
  const t = useTranslations('Experiences');
  const format = useFormatter();
  const { getExperienceSpan } = useGetExperienceSpan();

  const formatOptions: DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
  };

  return [
    {
      companyName: t('cloudiabotFull.company'),
      image: '/cloudiabot.jpg',
      role: t('cloudiabotFull.role'),
      startDate: format.dateTime(new Date('2025-04-21'), formatOptions),
      span: getExperienceSpan(new Date('2025-04-21'), new Date()),
    },
    {
      companyName: t('cloudiabotIntern.company'),
      image: '/cloudiabot.jpg',
      role: t('cloudiabotIntern.role'),
      startDate: format.dateTime(new Date('2024-10-21'), formatOptions),
      endDate: format.dateTime(new Date('2025-04-20'), formatOptions),
      span: getExperienceSpan(new Date('2024-10-21'), new Date('2025-04-20')),
    },
    {
      companyName: t('sowitec.company'),
      image: '/sowitec.jpg',
      role: t('sowitec.role'),
      startDate: format.dateTime(new Date('2019-03-05'), formatOptions),
      endDate: format.dateTime(new Date('2024-10-18'), formatOptions),
      span: getExperienceSpan(new Date('2019-03-05'), new Date('2024-10-18')),
    },
  ];
};

export default useExperiences;
