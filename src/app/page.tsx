import AboutMe from '@/components/about-me';
import EducationsList from '@/components/educations-list';
import ExperiencesList from '@/components/experiences-list';
import Header from '@/components/header';
import ProjectsList from '@/components/projects-list';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Header />

      <AboutMe />

      <div className="grid grid-cols-2 gap-4">
        <ExperiencesList />

        <EducationsList />
      </div>

      <ProjectsList />
    </div>
  );
}
