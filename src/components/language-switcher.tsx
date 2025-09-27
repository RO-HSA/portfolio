'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { ChevronDown, Globe } from 'lucide-react';

import { setLocaleCookie } from '@/actions';
import { cn } from '@/lib/utils';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Language | null>(null);
  const locale = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);

  const fallbackLanguage = languages.find(lang => lang.code === 'en');
  const browserPreferredLanguage = languages.find(lang => lang.code === locale);
  const selectedLanguage = languages.find(lang => lang.code === selected?.code);
  const currentLanguage =
    selectedLanguage || browserPreferredLanguage || fallbackLanguage!;

  const handleLanguageChange = (lang: Language) => {
    setLocaleCookie(lang.code);
    setSelected(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative self-start" ref={containerRef}>
      <button
        className="flex items-center gap-3 px-4 py-2.5 bg-card border border-border rounded-xl hover:bg-secondary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>

        <div
          className={cn(
            'rotate-0 transition-all duration-200',
            isOpen && 'rotate-180 transition-all duration-200',
          )}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>

      <div
        className={cn(
          'absolute top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden backdrop-blur-xl',
          'opacity-0  transition-all duration-200 pointer-events-none translate-y-[-10px]',
          isOpen &&
            'opacity-1 transition-all duration-200 pointer-events-auto translate-y-0',
        )}
      >
        {languages.map(lang => (
          <button
            key={lang.code}
            className="w-full px-4 py-3 flex items-center gap-3 text-sm transition-color hover:bg-secondary"
            onClick={() => handleLanguageChange(lang)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {currentLanguage.code === lang.code && (
              <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
