/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "../locales/translations"

const LanguageContext = createContext()

export const SUPPORTED_LANGUAGES = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿", short: "UZ" },
  { code: "oz", label: "Ўзбек", flag: "🇺🇿", short: "ЎЗ" },
  { code: "ru", label: "Русский", flag: "🇷🇺", short: "RU" },
  { code: "en", label: "English", flag: "🇬🇧", short: "EN" }
]

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("itpark_lang")
    if (saved && ["uz", "oz", "ru", "en"].includes(saved)) {
      return saved
    }
    return "uz"
  })

  useEffect(() => {
    localStorage.setItem("itpark_lang", language)
    document.documentElement.lang = language === "oz" ? "uz-Cyrl" : language
  }, [language])

  // Helper to get nested translation strings like t("hero.applyBtn")
  const t = (path) => {
    const currentLangDict = translations[language] || translations.uz
    const keys = path.split(".")
    let current = currentLangDict

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key]
      } else {
        // Fallback to uz
        let fallback = translations.uz
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey]
          } else {
            return path
          }
        }
        return fallback || path
      }
    }
    return current || path
  }

  const currentLangMeta = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: translations[language] || translations.uz, currentLangMeta }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
