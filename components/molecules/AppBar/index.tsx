import Typography from '@atoms/Typography'
import {
    Container,
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Toolbar,
} from '@mui/material'

interface AppBarType {
    AppBarProps?: MuiAppBarProps
    children?: React.ReactNode
}

const useController = (props: AppBarType) => props

const view = ({ children, ...props }: ReturnType<typeof useController>) => (
    <MuiAppBar position="static" {...props?.AppBarProps}>
        <Container>
            <Toolbar>
                <Typography>Hello</Typography>
                {children}
            </Toolbar>
        </Container>
    </MuiAppBar>
)

/**
 * @name AppBar
 * @description A simple AppBar
 * @see https://mui.com/material-ui/react-app-bar/
 * @author Hiba Mateur <mateurhiba@gmail.com>
 * @version 1.0.0
 */
const AppBar = (props: AppBarType) => view(useController(props))

export default AppBar
