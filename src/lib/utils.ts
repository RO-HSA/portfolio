import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenText(text: string, maxLength: number): string {
  return text.length >= maxLength ? text.slice(0, maxLength) + '...' : text;
}
