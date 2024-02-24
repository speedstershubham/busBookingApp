import { Grid } from '@mui/material'
import './bus.css'
import BusDeck from './BusDeck'
import useSeats from '../../hooks/useSeat'
import DeckTypes from './DeckTypes'
import TSeat from '../../types/TSeat'

interface upperDeckProps {
    setSeatDetail: (seat: TSeat) => void
    setOpen: (isOpen: boolean) => void
}

const UpperDeck: React.FC<upperDeckProps> = ({ setSeatDetail, setOpen }) => {
    const { seats } = useSeats({
        deckType: DeckTypes.UPPER_DECK,
    })
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <BusDeck
                    data={seats}
                    setOpen={setOpen}
                    label="Upper Deck"
                    setSeatDetail={setSeatDetail}
                />
            </Grid>
        </Grid>
    )
}

export default UpperDeck
