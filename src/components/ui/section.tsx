import { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface SectionProps {
  title: string;
  icon: IconType;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, icon: Icon, children }) => {
  return (
    <section className="flex flex-col gap-6 border border-secondary p-8 rounded-lg w-full">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Icon size={25} />
          <h4 className="text-xl font-bold">{title}</h4>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
