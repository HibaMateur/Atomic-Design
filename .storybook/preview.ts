import type { Preview } from '@storybook/react'

import {reactIntl} from './reactIntl';

// theme
import theme from '../styles/theme/index'

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import your fontface CSS files here
// Don't have any? We recommend installing and using @fontsource/roboto

const preview: Preview = {
    globals: {
        locale: reactIntl.defaultLocale,
        locales: {
            fr: '🇫🇷 Français',
            en: '🇬🇧 Anglais',
            de: '🇩🇪 Allemand',
            es: '🇪🇸 Español',
            it: '🇮🇹 Italien', 
        },
    },
    parameters: {
        reactIntl,
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [
        withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        // Provide your custom themes here
        // light: theme,
        // dark: theme,
        default: theme
      },
      defaultTheme: 'default',
    })],
}

export default preview
