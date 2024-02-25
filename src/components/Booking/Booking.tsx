import { Box } from '@mui/material'
import React from 'react'
import Bus from '../Bus/Bus'

const Booking: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
            flexDirection="column"
        >
            <Bus />
        </Box>
    )
}

export default Booking
