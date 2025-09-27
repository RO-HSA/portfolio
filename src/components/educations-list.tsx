import { useTranslations } from 'next-intl';
import { PiGraduationCap } from 'react-icons/pi';

import Experience from './ui/experience';
import Section from './ui/section';
import { useEducation } from '@/hooks';

const EducationsList = () => {
  const t = useTranslations('HomePage.EducationList');
  const educations = useEducation();

  return (
    <Section title={t('title')} icon={PiGraduationCap}>
      <div className="flex flex-col gap-4">
        {educations.map(
          ({
            companyName: school,
            role: degree,
            image,
            startDate,
            endDate,
            span,
          }) => (
            <Experience
              key={degree}
              companyName={school}
              role={degree}
              image={image}
              startDate={startDate}
              endDate={endDate}
              span={span}
            />
          ),
        )}
      </div>
    </Section>
  );
};

export default EducationsList;
