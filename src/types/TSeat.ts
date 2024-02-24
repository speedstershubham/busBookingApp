import DeckTypes from '../components/Bus/DeckTypes'

type TSeat = {
    _id: string
    seatType: string
    seatNo: number
    createdAt: Date
    seatStatus: {
        available: boolean
        reserved: boolean // Changed 'Reserved' to 'reserved'
        maleSeat: boolean
        femaleSeat: boolean
    }
    deck: DeckTypes
}

export default TSeat
