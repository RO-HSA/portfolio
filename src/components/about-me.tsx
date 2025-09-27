import { PiIdentificationBadge } from 'react-icons/pi';
import Section from './ui/section';
import { useTranslations } from 'next-intl';

const AboutMe = () => {
  const t = useTranslations('HomePage.AboutMe');

  return (
    <Section icon={PiIdentificationBadge} title={t('title')}>
      <p className="text-[14px] font-light">{t('content')}</p>
    </Section>
  );
};

export default AboutMe;
