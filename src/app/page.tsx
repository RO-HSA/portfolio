import AboutMe from '@/components/about-me';
import EducationsList from '@/components/educations-list';
import ExperiencesList from '@/components/experiences-list';
import Header from '@/components/header';
import ProjectsList from '@/components/projects-list';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 pb-4 lg:pb-0">
      <Header />

      <AboutMe />

      <div className={cn('flex gap-4 flex-wrap', 'lg:grid lg:grid-cols-2')}>
        <ExperiencesList />

        <EducationsList />
      </div>

      <ProjectsList />
    </div>
  );
}
