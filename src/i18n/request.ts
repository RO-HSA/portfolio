import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

const supportedLocales = ['en', 'pt', 'de'];
const fallbackLocale = 'en';

function parseAcceptLanguage(
  header: string,
  supported: string[],
  fallback: string,
) {
  if (!header) return fallback;

  const languages = header.split(',').map(lang => {
    const [code, qValue] = lang.split(';q=');
    return {
      code: code.trim(),
      q: parseFloat(qValue) || 1.0,
    };
  });

  languages.sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if (supported.includes(lang.code)) return lang.code;

    const base = lang.code.split('-')[0];
    if (supported.includes(base)) return base;
  }

  return fallback;
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get('locale')?.value;

  let locale = cookieLocale;

  if (!locale) {
    const acceptLang = (await headers()).get('accept-language') || '';
    locale = parseAcceptLanguage(acceptLang, supportedLocales, fallbackLocale);
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
