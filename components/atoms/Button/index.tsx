import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    styled,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

export interface ButtonProps extends MuiButtonProps {
    label?: string
    loading?: boolean
    rounded?: boolean
    upload?: boolean
    onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void // If the boutton is upload
    inputOptions?: React.InputHTMLAttributes<HTMLInputElement> // Options for input[type=file]
}
const Button = ({
    label = '',
    loading,
    rounded,
    upload,
    onChangeInput,
    ...rest
}: ButtonProps) => {
    if (upload)
        return (
            <Button
                // component="label"
                variant="contained"
                startIcon={<CloudUploadIcon sx={{ mb: '1px' }} />}
                {...rest}
            >
                {label}
                {rest.children}
                <VisuallyHiddenInput
                    type="file"
                    onChange={onChangeInput}
                    {...rest.inputOptions}
                />
            </Button>
        )
    if (loading)
        return (
            <LoadingButton
                loading={loading}
                variant="contained"
                {...rest}
                sx={
                    rounded
                        ? {
                              borderRadius: '100px',
                              ...rest?.sx,
                          }
                        : rest?.sx
                }
            >
                {label}
                {rest.children}
            </LoadingButton>
        )

    return (
        <MuiButton
            variant="contained"
            {...rest}
            sx={
                rounded
                    ? {
                          borderRadius: '100px',
                          ...rest?.sx,
                      }
                    : rest?.sx
            }
        >
            {label}
            {rest.children}
        </MuiButton>
    )
}

export default Button
