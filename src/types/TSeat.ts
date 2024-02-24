import DeckTypes from '../components/Bus/DeckTypes'

type TSeat = {
    _id: string
    seatType: string
    seatNumber: number
    userId: string
    createdAt: Date
    available: boolean
    seatStatus: {
        maleSeat: boolean
        femaleSeat: boolean
    }
    deck: DeckTypes
}

export default TSeat
