import { useTranslation } from "react-i18next";

const LanguageToggleBtn = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === "en" ? "ko" : "en";
        i18n.changeLanguage(nextLang);
    };

    return (
        <button className="langToggleBtn" onClick={toggleLanguage}>
            {i18n.language === "en" ? "Korean" : "English"}
        </button>
    );
};

export default LanguageToggleBtn;
