import { IoBriefcaseOutline } from 'react-icons/io5';

import Section from './ui/section';
import LinkButton from './ui/link-button';
import Experience from './ui/experience';
import { useTranslations } from 'next-intl';
import { useExperiences } from '@/hooks';

const ExperiencesList = () => {
  const t = useTranslations('HomePage.ExperiencesList');

  const experiences = useExperiences();

  return (
    <Section title={t('title')} icon={IoBriefcaseOutline}>
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="flex flex-col gap-4">
          {experiences.map(
            ({ companyName, image, role, startDate, endDate, span }) => (
              <Experience
                key={role}
                companyName={companyName}
                image={image}
                role={role}
                startDate={startDate}
                endDate={endDate}
                span={span}
              />
            ),
          )}
        </div>
        <LinkButton variant="download" link="/curriculo_robert_santos.pdf">
          {t('resumeButton')}
        </LinkButton>
      </div>
    </Section>
  );
};

export default ExperiencesList;
