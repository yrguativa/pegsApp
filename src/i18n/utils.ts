import translations from './translations.json';

export type Language = 'en' | 'es';

export function getLangFromUrl(url: URL): Language {
  const lang = url.pathname.split('/')[1];
  if (lang in translations) return lang as Language;
  return 'en';
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: unknown = translations[lang];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };
}

export const languages: Record<Language, string> = {
  en: 'English',
  es: 'Español'
};
