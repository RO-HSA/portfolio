import { PiGraduationCap } from 'react-icons/pi';

import { educations } from '@/configs/main-items';
import Experience from './ui/experience';
import Section from './ui/section';

const EducationsList = () => {
  return (
    <Section title="Formações" icon={PiGraduationCap}>
      <div className="flex flex-col gap-4">
        {educations.map(
          ({
            companyName: school,
            role: degree,
            image,
            startDate,
            endDate,
          }) => (
            <Experience
              key={degree}
              companyName={school}
              role={degree}
              image={image}
              startDate={startDate}
              endDate={endDate}
            />
          ),
        )}
      </div>
    </Section>
  );
};

export default EducationsList;
