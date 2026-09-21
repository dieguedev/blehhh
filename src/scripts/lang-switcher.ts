import { ui, languages, defaultLang, type Lang } from "../i18n/ui";

const STORAGE_KEY = "lang";

function detectLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && stored in ui) return stored as Lang;

  const browserLang = navigator.language.slice(0, 2);
  if (browserLang in ui) return browserLang as Lang;

  return defaultLang;
}

function renderSwitcher(current: Lang) {
  const container = document.getElementById("lang-switcher");
  if (!container) return;

  const scopeAttrs = [...container.attributes].filter((attr) =>
    attr.name.startsWith("data-astro-cid-"),
  );

  container.innerHTML = "";

  (Object.keys(languages) as Lang[])
    .filter((lang) => lang !== current)
    .forEach((lang) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = languages[lang];
      scopeAttrs.forEach((attr) => button.setAttribute(attr.name, attr.value));
      button.addEventListener("click", () => applyLang(lang));
      container.appendChild(button);
    });
}

function applyLang(lang: Lang) {
  const dict = ui[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n as keyof typeof dict;
    if (key in dict) el.textContent = dict[key];
  });

  renderSwitcher(lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

applyLang(detectLang());
