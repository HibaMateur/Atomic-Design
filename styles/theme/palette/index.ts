import { ThemeOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

export default {
    primary: {
        main: '#010635',
        light: '#4d9aa3',
        dark: '#00474f',
    },
    secondary: {
        light: '#9400FF',
        main: '#6A35FF',
        dark: '#1C0060',
    },
    error: {
        main: '#f44336',
    },
    success: {
        main: '#4caf50',
    },
    warning: {
        main: '#ff9800',
    },
    info: {
        main: '#2196f3',
    },
    text: {
        primary: '#232423',
        secondary: '#232423',
    },
    grey: {
        50: grey[50], // #fafafa
        100: grey[100], // #f5f5f5
        200: grey[200], // #eeeeee
        300: grey[300], // #e0e0e0
        400: grey[400], // #bdbdbd
        500: grey[500], // #9e9e9e
        600: grey[600], // #757575
        700: grey[700],// #616161
        800: grey[800], // #424242
        900: grey[900], // #212121
        A100: grey.A100, // #d5d5d5
        A200: grey.A200, // #aaaaaa
        A400: grey.A400, // #303030
        A700: grey.A700, // #616161
    },
    common: {
        black: "#232423", // #000
        white: common.white, // #fff
    },
    background: {
        default: '#f2f2f2',
        common: common.white,
    }
} as ThemeOptions['palette']