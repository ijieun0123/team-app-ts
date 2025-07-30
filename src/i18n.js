import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ko from "./locales/ko.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector) // 1. 언어 감지기
    .use(initReactI18next) // 2. 리액트 연동기
    .init({
        // 3. 설정 초기화
        resources: {
            en: { translation: en },
            ko: { translation: ko },
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
