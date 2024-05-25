import {
    Typography as MuiTypography,
    TypographyProps as MUITypographyProps,
} from '@mui/material'
import { useIntl } from 'react-intl'

export interface TypographyProps extends MUITypographyProps {
    t?: string
    childrenPosition?: 'before' | 'after'
}

/**
 * Component MuiTypography with translation
 * @param t: translation key
 * @example
 * <Typography t="app.description" />
 * or
 * <Typography variant="h1"/>Hello world</Typography>
 * @see https://mui.com/components/typography/#api
 */
const Typography = ({
    t,
    childrenPosition = 'after',
    ...props
}: TypographyProps) => {
    const { formatMessage: f } = useIntl()
    if (t)
        return (
            <MuiTypography {...props}>
                {props?.children &&
                    childrenPosition === 'before' &&
                    props?.children}
                {f({ id: t })}
                {props?.children &&
                    childrenPosition === 'after' &&
                    props?.children}
            </MuiTypography>
        )
    return <MuiTypography {...props} />
}

export default Typography
