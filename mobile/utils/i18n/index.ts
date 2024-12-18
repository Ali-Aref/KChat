import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const languages = {
  en: require("@/i18n/en.json"),
  it: require("@/i18n/it.json"),
  fa: require("@/i18n/fa.json"),
};


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: require("@/utils/i18n/en.json")
  },
  fa: {
    translation: require("@/utils/i18n/fa.json")
  },
  it: {
    translation: require("@/utils/i18n/it.json")
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa",
		fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
export const RTLLanguages = ["fa", "ps"];
export type SupportedLanguages = keyof typeof languages

