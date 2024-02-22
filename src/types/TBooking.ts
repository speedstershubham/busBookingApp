type TBooking = {
    _id: string
    userId: string
    seatId: string
    createdAt: Date
    travelDate: Date
    numOfSeats: number
    bookingRoutes: { to: string; from: string }
}

export default TBooking
