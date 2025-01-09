import { translations, defaultLang, languages } from './translations';

type TranslationKey = keyof typeof translations[typeof defaultLang];
type TranslationValue = typeof translations[typeof defaultLang][TranslationKey];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: TranslationKey): TranslationValue {
    return translations[lang][key] || translations[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: string) {
  // Remove trailing slash and split path into segments
  const cleanPath = path.replace(/\/$/, '');
  const segments = cleanPath.split('/').filter(Boolean);
  
  // Check if the first segment is a language code
  if (segments[0] in languages) {
    segments.shift(); // Remove the language segment
  }
  
  // Reconstruct the path without language code
  const basePath = segments.length ? `/${segments.join('/')}` : '';
  
  // Return the path with appropriate language prefix
  return lang === defaultLang ? basePath || '/' : `/${lang}${basePath || ''}`;
} 