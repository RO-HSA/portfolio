import { ExperienceProps } from '@/components/ui/experience';
import { ProjectBannerProps } from '@/components/ui/project-banner';

export const techs = [
  'React',
  'Next.js',
  'Angular',
  'Node.js',
  'Express',
  'TypeScript',
];

export const experiences: ExperienceProps[] = [
  {
    companyName: 'Cloudiabot',
    image: '/cloudiabot.jpg',
    role: 'Estágio Desenvolvimento Full Stack',
    startDate: new Date('2024-10-21'),
  },
  {
    companyName: 'SOWITEC do Brasil',
    image: '/sowitec.jpg',
    role: 'Auxiliar de Contabilidade',
    startDate: new Date('2019-03-05'),
    endDate: new Date('2024-10-18'),
  },
];

export const educations: ExperienceProps[] = [
  {
    companyName: 'Faculdade UNIME',
    image: '/unime.jpg',
    role: 'Análise e Desenvolvimento de Sistemas',
    startDate: new Date('2024-01-01'),
  },
  {
    companyName: 'EBAC',
    image: '/ebac.webp',
    role: 'Desenvolvimento Full Stack',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-01-01'),
  },
  {
    companyName: 'UNIFACS',
    image: '/unifacs.jpg',
    role: 'Ciências Contábeis',
    startDate: new Date('2018-01-01'),
    endDate: new Date('2022-01-01'),
  },
];

export const projects: ProjectBannerProps[] = [
  {
    title: 'eplay',
    backgroundImg: '/projects/eplay.jpg',
    description:
      'Projeto com proposta educacional de uma loja de jogos, com funcionalidades de adicionar e remover itens do carrinho e contendo toda a jornada de compra. Desenvolvido utilizando React e Redux para gerenciamento global de estados.',
    deployUrl: 'https://eplay-steel.vercel.app',
    repositoryUrl: 'https://github.com/RO-HSA/eplay',
  },
];
