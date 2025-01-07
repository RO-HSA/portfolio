import { PiIdentificationBadge } from 'react-icons/pi';
import Section from './ui/section';

const AboutMe = () => {
  return (
    <Section icon={PiIdentificationBadge} title="Sobre mim">
      <p className="text-[14px] font-light">
        Olá, eu sou o Robert Santos, um Desenvolvedor Full Stack, formando em
        Análise e Desenvolvimento de Sistemas. Sou um entusiasta de tecnologia e
        apaixonado por resolver problemas complexos, nascido e criado em
        Salvador/BA. Especializado em desenvolver sistemas que agregam valor ao
        mercado, tenho 1 ano de experiência tanto como Desenvolvedor Full Stack.
      </p>
    </Section>
  );
};

export default AboutMe;
