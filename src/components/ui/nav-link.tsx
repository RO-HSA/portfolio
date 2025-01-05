'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoHome } from 'react-icons/go';

import { cn } from '@/lib/utils';

interface NavLinkProps {
  link: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ children, link }) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'flex justify-start py-2 px-2 max-w-[218px] rounded-md h-12 w-full transition-colors',
        pathname === link
          ? 'bg-foreground/20 text-primary hover:bg-foreground/10 hover:text-primary/90'
          : 'hover:bg-foreground/20 hover:text-primary',
      )}
      href={link}
    >
      <div className="flex items-center gap-1 text-sm">
        <GoHome />
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
