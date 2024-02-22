import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

const Booking = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper elevation={3} style={{ padding: '20px', width: '80%' }}>
                <Grid container spacing={3}>
                    {/* First Column */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* <TodoTable setUpdateTodo={setNewTodo} /> */}
                    </Grid>
                    {/* Second Column */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            {/* <Form updateTodo={updateTodo} /> */}
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Booking
