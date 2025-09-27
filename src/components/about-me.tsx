import { PiIdentificationBadge } from 'react-icons/pi';
import Section from './ui/section';
import { useTranslations } from 'next-intl';
import { parseTextToHtml } from '@/lib/utils';

const AboutMe = () => {
  const t = useTranslations('HomePage.AboutMe');

  return (
    <Section icon={PiIdentificationBadge} title={t('title')}>
      <div
        className="flex flex-col gap-2 text-[14px] font-light"
        dangerouslySetInnerHTML={{ __html: parseTextToHtml(t('content')) }}
      />
    </Section>
  );
};

export default AboutMe;
