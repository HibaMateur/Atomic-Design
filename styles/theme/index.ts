import { createTheme, responsiveFontSizes } from '@mui/material'
import Typography from './typography'
import palette from './palette'
import components from './components'

textPrimary: '#232423'
textSecondary: '#232423'

/**
 * Base creation of the theme
 */
let theme = createTheme({
    palette: palette,
    typography: Typography,
    components: components,
})

/* 
Add the responsive font sizes
@see https://mui.com/customization/theming/#responsivefontsizes-theme-options-theme
**/
theme = responsiveFontSizes(theme)

export default theme