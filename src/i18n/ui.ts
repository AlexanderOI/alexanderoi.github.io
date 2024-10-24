import spanish from "./es.json";
import english from "./en.json";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "es";

export const ui = {
  en: english,
  es: spanish,
} as const;
