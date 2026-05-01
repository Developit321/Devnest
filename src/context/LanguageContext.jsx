import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem('language')
    return saved || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let result = translations[language]
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        // Fallback to English
        result = translations['en']
        for (const k2 of keys) {
          if (result && result[k2] !== undefined) {
            result = result[k2]
          }
        }
        break
      }
    }
    
    return typeof result === 'string' ? result : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}



















