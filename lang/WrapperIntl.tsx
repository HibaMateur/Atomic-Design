// TODO : Fix this file
// @ts-nocheck
/* eslint-disable */
import React, { useState, createContext, useEffect, useMemo } from 'react'
import { IntlProvider } from 'react-intl'
import cookies from 'js-cookie'
import { useRouter } from 'next/router'

// INTL
import { fr, en, de, it, es } from '.'
import DEFAULT_LOCALE from './defaultLocale'
// import { Locale, useLocale } from './useLocale'
import { INestedMessages, flattenMessages } from './flattenMessages'

// MUI-X
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

interface LangContextProps {
    locale: string
    selectLanguage: (langKey: string) => void
}

// Union type
export type Locale = 'fr' | 'es' | 'en' | 'de' | 'it'

export const LanguageContext = createContext({} as LangContextProps)

// * Default language 'en'
const local = cookies.get('lang') || DEFAULT_LOCALE

let lang: any
if (local === 'fr') {
    lang = fr
} else if (local === 'de') {
    lang = de
} else if (local === 'it') {
    lang = it
} else if (local === 'es') {
    lang = es
} else {
    lang = en
}
// or other language

const langs: Record<Locale, INestedMessages> = {
    fr,
    es,
    it,
    en,
    de,
}

const Wrapper = (props: any) => {
    const router = useRouter()

    // * Use router.locale in order to avoid desynchronisation with server/client
    // If you want to test, remove the router.locale, and you will see that the
    // locale is not the same on the server and the client
    // it will trigger an error
    // ! Do not remove the router.locale
    const [locale, setLocale] = useState(router.locale || local)
    const [messages, setMessages] = useState(langs)

    console.log('intl')

    // Get the lanKey in the cookies first
    useEffect(() => {
        const langKey = cookies.get('lang')

        if (langKey) {
            setLocale(langKey)
        }
        if (langKey !== locale) {
            setLocale(langKey || locale)
        }
    }, [locale])

    // Use this to flatten the messages into a single level object
    // ie: { 'a.b': 'c' } instead of { a: { b: 'c' } }
    const flattenedMessages = useMemo(
        () => flattenMessages(messages[locale as keyof typeof messages]),
        [locale]
    )

    const selectLanguage = (langKey: string) => {
        const newLocale = langKey
        setLocale(newLocale)

        cookies.remove('lang')

        switch (newLocale) {
            case 'en':
                cookies.set('lang', 'en')
                break
            case 'de':
                cookies.set('lang', 'de')
                break
            case 'es':
                cookies.set('lang', 'es')
                break
            case 'it':
                cookies.set('lang', 'it')
                break
            case 'fr':
                cookies.set('lang', 'fr')
                break
            default:
                cookies.set('lang', 'fr')
        }
    }

    return (
        <LanguageContext.Provider value={{ locale, selectLanguage }}>
            <IntlProvider
                key={locale}
                messages={flattenedMessages}
                locale={locale}
            >
               <LocalizationProvider
                   adapterLocale={locale}
                   dateAdapter={AdapterDayjs}
                >
                    {props.children}
                </LocalizationProvider>   
            </IntlProvider>
        </LanguageContext.Provider>
    )
}

export default Wrapper