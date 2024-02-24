import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import userData from '../../dummyData/userData'
import UserTable from './UserTable'

const User: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="20vh"
        >
            <Paper elevation={3} style={{ padding: '20px', width: '80%' }}>
                <UserTable />
                {/* <Grid container spacing={3}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <UserTable data={userData} />
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
            </Paper>
        </Box>
    )
}

export default User
