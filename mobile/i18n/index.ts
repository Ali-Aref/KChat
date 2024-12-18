import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { I18nManager } from "react-native";

const en = require("@/i18n/en.json");
const fa = require("@/i18n/fa.json");

const i18n = new I18n({
  en,
  fa,
});

// Set the locale once at the beginning of your app.
//i18n.locale = getLocales()[0].languageCode;

i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true
I18nManager.allowRTL(true);

export const RtlLanguages = [ "fa", "ps" ]

export const changeLanguage = (code: "en" | "fa") => {
	console.log("change language to ", code)
	i18n.locale = code
}

export default i18n;
