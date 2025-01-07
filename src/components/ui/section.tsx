import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { IconType } from 'react-icons';

interface SectionProps {
  title: string;
  icon: IconType;
  url?: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, icon: Icon, url, children }) => {
  return (
    <section className="flex flex-col gap-6 border border-primary/30 p-8 rounded-lg w-full">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Icon size={25} />
          <h4 className="text-xl font-bold">{title}</h4>
        </div>
        {url && (
          <Link
            href={url}
            className="flex items-center text-primary font-normal text-xs"
          >
            <span>Saiba mais</span>
            <GoArrowUpRight size={18} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
