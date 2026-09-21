export const defaultLang = "en";

export const languages = {
  es: "Español",
  ca: "Català",
  en: "English",
} as const;

export const ui = {
  es: {
    "site.title": "Bleh.cat | Blehhh",
    "hint.text": "haz click en el gato :)",
    "footer.support": "Apoya el dominio :)",
    "footer.github": "Github",
  },
  ca: {
    "site.title": "Bleh.cat | Blehhh",
    "hint.text": "fes clic al gat :)",
    "footer.support": "Dona suport al domini :)",
    "footer.github": "Github",
  },
  en: {
    "site.title": "Bleh.cat | Blehhh",
    "hint.text": "click the cat :)",
    "footer.support": "Support the domain :)",
    "footer.github": "Github",
  },
} as const;

export type Lang = keyof typeof ui;
