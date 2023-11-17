"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'fr';

export type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
});

type LanguageContextProviderProps = {
    children: React.ReactNode;
  };

  export function LanguageContextProvider({ children }: LanguageContextProviderProps) {
    const [language, setLanguage] = useState<Language>('en');
    const { i18n } = useTranslation();
    /* set the initial language state */
    useEffect(() => {
      const localLanguage = window.localStorage.getItem('language') as Language | null;
  
      if (localLanguage) {
        setLanguage(localLanguage);
      } else {
        const userLanguage = navigator.language.slice(0, 2) as Language;
        setLanguage(userLanguage);
      }
    }, []);
    /* update the language state when the user changes the language */
    useEffect(() => {
        window.localStorage.setItem('language', language);
        // Update the i18n language
      i18n.changeLanguage(language);
      }, [i18n, language]);
    
      const value: LanguageContextType = {
        language,
        setLanguage,
      };
      return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
      throw new Error('useLanguage must be used within a LanguageContextProvider');
    }
    return context;
  }