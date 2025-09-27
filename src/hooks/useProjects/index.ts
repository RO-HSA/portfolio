import { Projects } from '@/interfaces/project';
import { useTranslations } from 'next-intl';

const useProjects = () => {
  const t = useTranslations('Projects');

  return [
    {
      title: t('streaminginteractions.title'),
      backgroundImg: '/projects/streaming_interactions.jpg',
      description: t('streaminginteractions.description'),
      deployUrl:
        'https://chromewebstore.google.com/detail/streaming-interactions/jplcdapcdhmhmgigpeafegjmlnkeechl',
      repositoryUrl: 'https://github.com/RO-HSA/streaming-interactions',
      stack: 'fullstack' as Projects['stack'],
    },
    {
      title: t('eplay.title'),
      backgroundImg: '/projects/eplay.jpg',
      description: t('eplay.description'),
      deployUrl: 'https://eplay-steel.vercel.app',
      repositoryUrl: 'https://github.com/RO-HSA/eplay',
      stack: 'frontend' as Projects['stack'],
    },
    {
      title: t('dtlabs.title'),
      backgroundImg: '/projects/dtlabs.png',
      description: t('dtlabs.description'),
      deployUrl: 'https://dtlabs-challenge.vercel.app',
      repositoryUrl: 'https://github.com/RO-HSA/dtlabs-challenge',
      stack: 'frontend' as Projects['stack'],
    },
  ];
};

export default useProjects;
