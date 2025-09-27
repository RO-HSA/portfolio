import { useTranslations } from 'next-intl';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

const useGetExperienceSpan = () => {
  const t = useTranslations('Span');

  const getExperienceSpan = (startDate: Date, endDate: Date): string => {
    const years = differenceInYears(endDate, startDate);
    const totalMonths = differenceInMonths(endDate, startDate);
    const months = totalMonths % 12;
    const differenceDays = differenceInDays(endDate, startDate);

    if (differenceDays < 30) {
      return t('span_month', { count: 1 });
    }

    const yearsText =
      years > 0
        ? `${years > 1 ? t('span_year_plural', { count: years }) : t('span_year', { count: years })}`
        : '';

    const roundedMonths = Math.round(months);

    const monthsText =
      months > 0
        ? `${months > 1 ? t('span_month_plural', { count: roundedMonths }) : t('span_month', { count: roundedMonths })}`
        : '';

    const experienceSpan = [yearsText, monthsText]
      .filter(Boolean)
      .join(t('span_and'));

    return experienceSpan.trim();
  };

  return { getExperienceSpan };
};

export default useGetExperienceSpan;
