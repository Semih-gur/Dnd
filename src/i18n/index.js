import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import tr from "@/locales/tr.json";

const savedLocale = localStorage.getItem("locale") || "en";

export default createI18n({
  legacy: true,
  locale: savedLocale,
  fallbackLocale: "en",
  messages: { en, tr },
});
