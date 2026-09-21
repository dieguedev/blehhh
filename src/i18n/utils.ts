import { ui, defaultLang, type Lang } from "./ui";

export function useTranslations(lang: Lang) {
  const dict = ui[lang] ?? ui[defaultLang];

  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return dict[key] ?? ui[defaultLang][key];
  };
}
