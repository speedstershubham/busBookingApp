import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import TSeat from '../../types/TSeat'

interface busDeckProps {
    data: TSeat[]
    setOpen: (isOpen: boolean) => void
    label: string
    setSeatDetail: (seat: TSeat) => void
}
const BusDeck: React.FC<busDeckProps> = ({
    data,
    setOpen,
    label,
    setSeatDetail,
}) => {
    return (
        <Grid container spacing={1}>
            <Typography variant="h4" gutterBottom align="center">
                {label}
            </Typography>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                    {data.slice(0, 4).map((seat, index) => (
                        <Grid key={index} item xs={3}>
                            <Paper
                                className={`seat ${seat ? 'occupied' : ''}`}
                                onClick={() => {
                                    if (seat.seatStatus.available) {
                                        setOpen(true)
                                        setSeatDetail(seat)
                                    }
                                }}
                                style={{
                                    backgroundColor:
                                        seat.seatStatus.femaleSeat &&
                                        seat.seatStatus.available
                                            ? 'pink'
                                            : !seat.seatStatus.available
                                              ? 'grey'
                                              : 'white',
                                    padding: '5px',
                                    textAlign: 'center',
                                }}
                            >
                                {seat.seatNo}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            {/* Gap */}
            <Grid item xs={12}>
                <div style={{ height: '50px' }} />{' '}
                {/* Adjust the height as needed */}
            </Grid>
            {/* Second Row */}
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                    {data.slice(5).map((seat, index) => (
                        <Grid key={index + 5} item xs={3}>
                            <Paper
                                className={`seat ${seat ? 'occupied' : ''}`}
                                onClick={() => {
                                    if (seat.seatStatus.available) {
                                        setOpen(true)
                                        setSeatDetail(seat)
                                    }
                                }}
                                style={{
                                    backgroundColor:
                                        seat.seatStatus.femaleSeat &&
                                        seat.seatStatus.available
                                            ? 'pink'
                                            : !seat.seatStatus.available
                                              ? 'grey'
                                              : 'white',
                                    padding: '5px',
                                    textAlign: 'center',
                                }}
                            >
                                {seat.seatNo}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BusDeck
