import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getExperienceSpan(startDate: Date, endDate: Date): string {
  const years = differenceInYears(endDate, startDate);
  const totalMonths = differenceInMonths(endDate, startDate);
  const months = totalMonths % 12;
  const differenceDays = differenceInDays(endDate, startDate);

  if (differenceDays < 30) {
    return '1 mês';
  }

  const yearsText = years > 0 ? `${years} ${years > 1 ? 'anos' : 'ano'}` : '';
  const monthsText =
    months > 0 ? `${Math.round(months)} ${months > 1 ? 'meses' : 'mês'}` : '';

  const experienceSpan = [yearsText, monthsText].filter(Boolean).join(' e ');

  return experienceSpan.trim();
}

export function shortenText(text: string, maxLength: number): string {
  return text.length >= maxLength ? text.slice(0, maxLength) + '...' : text;
}
