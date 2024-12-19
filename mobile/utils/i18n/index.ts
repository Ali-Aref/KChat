import store from "@/store";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: require("@/utils/i18n/en.json") },
  fa: { translation: require("@/utils/i18n/fa.json") },
  ps: { translation: require("@/utils/i18n/ps.json") },
  ar: { translation: require("@/utils/i18n/ar.json") },
  it: { translation: require("@/utils/i18n/it.json") },
};

i18n.use(initReactI18next).init({
  resources,
  lng: store.getState().app.language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
export const RTLLanguages = ["fa", "ps"];
export type SupportedLanguages = keyof typeof resources;
