import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en.json";
import translationKo from "./ko.json";

const resource = {
  en: {
    translation: translationEn,
  },
  kr: {
    translation: translationKo,
  },
  
};
i18n.use(initReactI18next).init({
  resources: resource,
  lng: "kr",
  fallbackLng: "en",
  debug: true,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;