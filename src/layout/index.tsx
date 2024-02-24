import { ReactNode, useState } from 'react'

import Box from '@mui/material/Box'
import Header from '../components/Header'
import Main from './Main'

// ----------------------------------------------------------------------
type DashboardLayoutProp = {
    children: ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProp> = ({ children }) => {
    return (
        <>
            <Header />

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                <Main>{children}</Main>
            </Box>
        </>
    )
}

export default DashboardLayout
