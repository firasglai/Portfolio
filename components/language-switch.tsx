
"use client";
import React  from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag"
import { useContext } from 'react';
import i18n from '@/i18n';
import { LanguageContext } from '@/context/language-context';
export default function LanguageSwitch() {
    const { t } = useTranslation();
    const { language, setLanguage } = useContext(LanguageContext);

    function handleLanguageChange() {
      const newLanguage = language === 'en' ? 'fr' : 'en';
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
      console.log("Language switched to", newLanguage);
    }
    return (
      <div className="flex space-x-2">
        <button
          className="fixed bottom-5 right-5  mb-14 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
          onClick={handleLanguageChange}
        >
          <ReactCountryFlag
            countryCode={language === 'en' ? 'GB' : 'FR'}
            svg
            style={{ width: '2em', height: '2em' }}
          />
        </button>
      </div>
    );
  }
