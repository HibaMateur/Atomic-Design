// use typography from material-ui
// for theme purpose

import { ThemeOptions } from "@mui/material"

const lg = '1536px'

export default {
    h1: {
        fontSize: '32px',
        fontFamily: 'Nunito',
        '@media (max-width:1536px)': {
            fontSize: '28px !important',
        }
    },
    h2: {
        fontSize: '28px',
        fontFamily: 'Nunito',
        '@media (max-width:1536px)': {
            fontSize: '24px !important',
        }
    },
    h3: {
        fontSize: '24px',
        fontFamily: 'Nunito',
        '@media (max-width:1536px)': {
            fontSize: '20px !important',
        }
    },
    h4: {
        fontSize: '20px',
        fontFamily: 'Nunito',
        '@media (max-width:1536px)': {
            fontSize: '16px !important',
        }
    },
    h5: {
        fontSize: '18px',
        fontFamily: 'Nunito',
        '@media (max-width:1536px)': {
            fontSize: '14px !important',
        }
    },
    h6: {
        fontSize: '16px',
        fontFamily: 'Nunito',
    },
    body1: {
        fontSize: '14px',
        fontFamily: 'Nunito',
    },
    body2: {
        fontSize: '14px',
        fontFamily: 'Nunito',
    },
    subtitle1: {
        fontSize: '16px',
        fontFamily: 'Nunito',
    },
    subtitle2: {
        fontSize: '14px',
        fontFamily: 'Nunito',
    },
    caption: {
        fontSize: '12px',
        fontFamily: 'Nunito',
    },
    overline: {
        fontSize: '10px',
        fontFamily: 'Nunito',
    },
} as ThemeOptions['typography']