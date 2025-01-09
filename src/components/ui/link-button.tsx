'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const linkButtonVariants = cva('flex justify-start transition-colors w-full', {
  variants: {
    variant: {
      link: 'py-2 px-2 max-w-[218px] rounded-md h-12 text-sm',
      download:
        'flex justify-center items-center py-2 bg-primary rounded-md font-bold text-xs gap-2',
    },
  },
  defaultVariants: {
    variant: 'link',
  },
});

interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  link: string;
  children: ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({
  children,
  link,
  variant,
  className,
}) => {
  const pathname = usePathname();
  const isInternalLink = link.startsWith('/');

  return (
    <Link
      className={cn(
        linkButtonVariants({ variant, className }),
        pathname === link && (!variant || variant === 'link')
          ? 'bg-foreground/20 text-primary hover:bg-foreground/10 hover:text-primary/90'
          : 'hover:bg-foreground/20 hover:text-primary',
      )}
      href={link}
      download={variant === 'download'}
      target={isInternalLink ? undefined : '_blank'}
    >
      <div className="flex items-center gap-1 text-inherit">{children}</div>
    </Link>
  );
};

export default LinkButton;
