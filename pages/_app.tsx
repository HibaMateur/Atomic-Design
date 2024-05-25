import '@styles/globals.css'
import type { AppProps } from 'next/app'

// Locale
import WrapperIntl from '@lang/WrapperIntl'

// Mui Theme
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { EmotionCache, CacheProvider } from '@emotion/react'
import theme from '@theme/index'
import createEmotionCache from '@utils/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface OrionAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function App(props: OrionAppProps) {
    // const { locale, messages } = useLocale()
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props
    return (
        <CacheProvider value={emotionCache}>
            <WrapperIntl>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </WrapperIntl>
        </CacheProvider>
    )
}
