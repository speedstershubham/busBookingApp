type TSeat = {
    _id: string
    seatType: string
    seatNo: number
    createdAt: Date
    seatStatus: {
        available: boolean
        Reserved: boolean
        maleSeat: boolean
        femaleSeat: boolean
    }
}

export default TSeat
