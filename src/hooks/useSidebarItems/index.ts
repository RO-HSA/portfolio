import { useTranslations } from 'next-intl';
import { GoHome } from 'react-icons/go';
import { TbFolderCode, TbBrandWhatsapp } from 'react-icons/tb';
import { MdComputer } from 'react-icons/md';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';

const useSidebarItems = () => {
  const t = useTranslations('Nav');

  return [
    {
      link: '/',
      icon: GoHome,
      title: t('home'),
    },
    {
      link: '/projects',
      icon: TbFolderCode,
      title: t('projects'),
    },
    {
      link: '/stacks',
      icon: MdComputer,
      title: t('stack'),
    },
    {
      link: 'https://www.linkedin.com/in/robertsantosdev/',
      icon: PiLinkedinLogoBold,
      title: 'Linkedin',
    },
    {
      link: 'https://github.com/RO-HSA',
      icon: FaGithub,
      title: 'Github',
    },
    {
      link: 'https://wa.me/5571992560874',
      icon: TbBrandWhatsapp,
      title: 'WhatsApp',
    },
  ];
};

export default useSidebarItems;
