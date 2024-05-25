import type { StorybookConfig } from '@storybook/nextjs'
const path = require('path')
const toPath = filePath => path.join(process.cwd(), filePath);

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
        {
            name: '@storybook/addon-styling',
            options: {},
        },
        '@storybook/addon-themes',
        '@storybook/themes',
        '@storybook/addon-mdx-gfm',
        'storybook-react-intl'
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        config.resolve = config.resolve || {};

        config.resolve.alias = {
          ...config?.resolve?.alias,
          '@': path.resolve(__dirname, '.'),
          "@graphql": path.resolve(__dirname, '../graphql/generated'),
          '@atoms': path.resolve(__dirname, '../components/atoms/'),
          '@molecules': path.resolve(__dirname, '../components/molecules/'),
          '@organisms': path.resolve(__dirname, '../components/organisms/'),
          '@templates': path.resolve(__dirname, '../components/templates/'),
          '@assets': path.resolve(__dirname, '../public/assets/'),
          '@utils': path.resolve(__dirname, '../utils/'),
          '@lib': path.resolve(__dirname, '../lib/'),
          '@dictionary': path.resolve(__dirname, '../dictionary/'),
          '@theme': path.resolve(__dirname, '../styles/theme/'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@ts': path.resolve(__dirname, '../types/'),
          '@seo': path.resolve(__dirname, '../SEO/'),
          '@lang': path.resolve(__dirname, '../lang/'),
          '@constants': path.resolve(__dirname, '../constants/'),
        };
        return config;
      },
}
export default config
