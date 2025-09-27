import { techs } from '@/configs/main-items';
import Image from 'next/image';
import TechRibbon from './ui/tech-ribbon';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('HomePage.Header');

  return (
    <div className="flex gap-5">
      <div>
        <Image
          src="/avatar.jpg"
          alt=""
          height={100}
          width={100}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Robert Santos</h1>
          <p className="contrast-50 text-foreground">{t('role')}</p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {techs.map(tech => (
            <TechRibbon key={tech} color="rgba(var(--primary), 0.2">
              {tech}
            </TechRibbon>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
