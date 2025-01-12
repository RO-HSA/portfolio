import { IconType } from 'react-icons';
import { GoHome } from 'react-icons/go';
import { TbFolderCode, TbBrandWhatsapp } from 'react-icons/tb';
import { MdComputer } from 'react-icons/md';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';

interface SidebarItem {
  link: string;
  title: string;
  icon: IconType;
}

export const sidebarItems: SidebarItem[] = [
  {
    link: '/',
    icon: GoHome,
    title: 'Início',
  },
  {
    link: '/projects',
    icon: TbFolderCode,
    title: 'Projetos',
  },
  {
    link: '/stacks',
    icon: MdComputer,
    title: 'Tecnologias e Ferramentas',
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
