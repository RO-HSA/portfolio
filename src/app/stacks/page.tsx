import { backEnd, database, frontEnd, versionControl } from '@/configs/stacks';
import StackList from './components/stack-list';
import { useTranslations } from 'next-intl';

const Stacks = () => {
  const t = useTranslations('StacksPage');

  const stackList = [
    { title: 'Front-end', stack: frontEnd },
    { title: 'Back-end', stack: backEnd },
    { title: t('database'), stack: database },
    { title: t('versioning'), stack: versionControl },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <p className="opacity-60 text-base">{t('description')}</p>
      </div>

      {stackList.map(({ title, stack }) => (
        <StackList key={title} title={title} stack={stack} />
      ))}
    </div>
  );
};

export default Stacks;
