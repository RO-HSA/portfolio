import AboutMe from '@/components/about-me';
import ExperiencesList from '@/components/experiences';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 max-w-[668px]">
      <Header />

      <AboutMe />

      <div className="grid grid-cols-2 gap-2">
        <ExperiencesList />
      </div>
    </div>
  );
}
