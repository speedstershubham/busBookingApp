import { Grid } from '@mui/material'
import './bus.css'
import BusDeck from './BusDeck'
import useSeats from '../../hooks/useSeat'
import DeckTypes from './DeckTypes'
import TSeat from '../../types/TSeat'

interface lowerDeckProps {
    setSeatDetail: (seat: TSeat) => void
    setOpen: (isOpen: boolean) => void
}

const LowerDeck: React.FC<lowerDeckProps> = ({ setSeatDetail, setOpen }) => {
    const { seats } = useSeats({
        deckType: DeckTypes.LOWER_DECK,
    })
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <BusDeck
                    data={seats}
                    setOpen={setOpen}
                    label="Lower Deck"
                    setSeatDetail={setSeatDetail}
                />
            </Grid>
        </Grid>
    )
}

export default LowerDeck
