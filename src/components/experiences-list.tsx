import { IoBriefcaseOutline } from 'react-icons/io5';

import Section from './ui/section';
import { experiences } from '@/configs/main-items';
import LinkButton from './ui/link-button';
import Experience from './ui/experience';

const ExperiencesList = () => {
  return (
    <Section title="Experiências" icon={IoBriefcaseOutline}>
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="flex flex-col gap-4">
          {experiences.map(
            ({ companyName, image, role, startDate, endDate }) => (
              <Experience
                key={role}
                companyName={companyName}
                image={image}
                role={role}
                startDate={startDate}
                endDate={endDate}
              />
            ),
          )}
        </div>
        <LinkButton variant="download" link="/curriculo_robert_santos.pdf">
          Meu Currículo
        </LinkButton>
      </div>
    </Section>
  );
};

export default ExperiencesList;
