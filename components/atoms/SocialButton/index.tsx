// Mui
import {
    BoxProps,
    IconButton,
    IconButtonProps,
    IconProps,
    styled,
} from '@mui/material'
// Icons
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

import colors from '@theme/colors'

const CONTAINER_SIZE = '45px'
const ICON_SIZE = '18px'

/**
 * Styled Components
 */
const PrimaryIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: `${colors.purple[50]}50`,
    color: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey[50],
    },
    borderRadius: '8px',
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
}))

const SecondaryIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: `${colors.blue[50]}50`, // i.e: #E5F3FF50 (50% opacity)
    color: theme.palette.primary.main,
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
}))

interface SocialButtonProps {
    variant?: 'primary' | 'secondary' | 'default'
    icon: 'facebook' | 'youtube' | 'linkedin' | 'instagram'
    onClick?: () => void
    href?: string
    iconButtonProps?: IconButtonProps // TODO: Edit later
    iconProps?: IconProps
    boxProps?: BoxProps
}

const useController = ({
    variant = 'primary',
    icon,
    ...props
}: SocialButtonProps) => {
    const iconSize = { height: ICON_SIZE, width: ICON_SIZE }
    let iconDisplay = <FacebookIcon sx={iconSize} />
    switch (icon) {
        case 'facebook':
            iconDisplay = <FacebookIcon sx={iconSize} />
            break
        case 'youtube':
            iconDisplay = <YouTubeIcon sx={iconSize} />
            break
        case 'linkedin':
            iconDisplay = <LinkedInIcon sx={iconSize} />
            break
        case 'instagram':
            iconDisplay = <InstagramIcon sx={iconSize} />
            break
        default:
            break
    }

    return {
        variant,
        iconDisplay,
        icon,
        ...props,
    }
}

const view = ({
    variant,
    iconDisplay,
    icon,
    onClick,
    href,
}: ReturnType<typeof useController>) => {
    if (variant === 'primary') {
        return <PrimaryIconButton>{iconDisplay}</PrimaryIconButton>
    }

    if (variant === 'secondary') {
        return <SecondaryIconButton>{iconDisplay}</SecondaryIconButton>
    }
    return (
        <IconButton
            href={href ?? ''}
            aria-label={`social-icon-${icon}`}
            onClick={onClick}
        >
            {iconDisplay}
        </IconButton>
    )
}

/**
 * @name SocialButton
 * @description Social Button for Facebook, Youtube, LinkedIn, Instagram
 * @author Hiba Mateur <mateurhiba@gmail.com>
 * @version 1.0.0
 */
const SocialButton = (props: SocialButtonProps) => view(useController(props))

export default SocialButton
