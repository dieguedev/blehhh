import { ui, defaultLang, type Lang } from "./ui";

export function useTranslations(lang: Lang) {
  const dict = ui[lang] ?? ui[defaultLang];

  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return dict[key] ?? ui[defaultLang][key];
  };
}

export function interpolate(template: string, vars: Record<string, string>) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
}
