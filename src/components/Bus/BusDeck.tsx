import React from 'react'
import { Grid } from '@mui/material'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'
import VerticalLabel from '../../helperComponent/VerticalLabel'
import TSeat from '../../types/TSeat'

interface BusDeckProps {
    data: TSeat[]
    setOpen: (isOpen: boolean) => void
    label: string
    setSeatDetail: (seat: TSeat) => void
}

const BusDeck: React.FC<BusDeckProps> = ({
    data,
    setOpen,
    label,
    setSeatDetail,
}) => {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <VerticalLabel label={label} />
            </Grid>
            <Grid item xs={11}>
                <Grid container justifyContent="center" spacing={1}>
                    {data?.map((seat, index) => (
                        <Grid key={index} item xs={3}>
                            <ChairOutlinedIcon
                                onClick={() => {
                                    if (seat.available) {
                                        setOpen(true)
                                        setSeatDetail(seat)
                                    }
                                }}
                                style={{
                                    transform: 'rotate(-90deg)',
                                    color:
                                        seat.seatStatus.femaleSeat &&
                                        seat.available
                                            ? 'pink'
                                            : !seat.available
                                              ? 'grey'
                                              : 'black',
                                    padding: '5px',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BusDeck
