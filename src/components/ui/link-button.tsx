'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const linkButtonVariants = cva(
  'flex items-center justify-start py-2 px-2 transition-colors w-full',
  {
    variants: {
      variant: {
        default: 'gap-1 max-w-[218px] rounded-md h-12 text-sm',
        download:
          'justify-center items-center bg-primary hover:bg-primary/80 hover:text-foreground/80 rounded-md font-bold text-xs gap-2',
        link: 'justify-center items-center bg-primary hover:bg-primary/80 hover:text-foreground/80 rounded-md font-bold text-xs gap-2',
        linkOutline:
          'justify-center items-center bg-background hover:bg-background/80 hover:text-foreground/80 border border-primary/80 rounded-md font-bold text-xs gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

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

  const isDefault = !variant || variant === 'default';

  return (
    <Link
      className={cn(
        linkButtonVariants({ variant, className }),
        pathname === link && isDefault
          ? 'bg-foreground/20 text-primary hover:bg-foreground/10 hover:text-primary/90'
          : isDefault && 'hover:bg-foreground/20 hover:text-primary',
      )}
      href={link}
      download={variant === 'download'}
      target={isInternalLink ? undefined : '_blank'}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
