import { Container, Grid, Paper } from '@mui/material'
import './bus.css'
import BookingModal from '../BookingModal'
import { useState } from 'react'
import UpperDeck from './UpperDeck'
import LowerDeck from './LowerDeck'
import TSeat from '../../types/TSeat'

const Bus: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [seatDetail, setSeatDetail] = useState<TSeat>()
    return (
        <Container maxWidth="lg">
            {/* <Typography variant="h1">Reservation</Typography> */}
            <Grid container spacing={3}>
                <Paper
                    elevation={2}
                    style={{
                        padding: '20px',
                        width: '100%',
                        marginTop: '10px',
                    }}
                >
                    <Grid item xs={12}>
                        <UpperDeck
                            setOpen={setOpen}
                            setSeatDetail={setSeatDetail}
                        />
                    </Grid>
                </Paper>
                <Paper
                    elevation={2}
                    style={{
                        padding: '20px',
                        width: '100%',
                        marginTop: '10px',
                    }}
                >
                    <Grid item xs={12}>
                        <LowerDeck
                            setOpen={setOpen}
                            setSeatDetail={setSeatDetail}
                        />
                    </Grid>
                </Paper>
            </Grid>
            {open && seatDetail ? (
                <BookingModal
                    open={open}
                    setOpen={setOpen}
                    seatDetail={seatDetail}
                />
            ) : null}
        </Container>
    )
}

export default Bus
