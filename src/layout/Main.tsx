import Box from '@mui/material/Box'

import { ReactNode } from 'react'
import useResponsive from '../hooks/useResponsive'
import { HEADER, NAV } from './configLayout'

// ----------------------------------------------------------------------

const SPACING = 8

type MainProps = {
    children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    const lgUp = useResponsive({ query: 'up', start: 'lg' })

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
                py: `${HEADER.H_MOBILE + SPACING}px`,
                ...(lgUp && {
                    px: 2,
                    py: `${HEADER.H_DESKTOP + SPACING}px`,
                    width: `calc(100% - ${NAV.WIDTH}px)`,
                }),
            }}
        >
            {children}
        </Box>
    )
}

export default Main
