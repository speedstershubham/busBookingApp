import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import BookingTable from './BookingTable'
import bookingData from '../../dummyData/bookingData'
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
            {/* <Paper
                elevation={3}
                style={{ padding: '20px', width: '80%', marginTop: '50px' }}
            > */}
            {/* <BookingTable data={bookingData} /> */}
            {/* <Grid container spacing={3}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                        </Box>
                    </Grid>
                </Grid> */}
            {/* </Paper> */}
        </Box>
    )
}

export default Booking
