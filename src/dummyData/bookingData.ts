const bookingData = [
    {
        _id: '1',
        userId: 'user1',
        seatId: 'A1',
        createdAt: new Date('2024-02-21T08:00:00Z'),
        travelDate: new Date('2024-03-01T12:00:00Z'),
        numOfSeats: 2,
        bookingRoutes: { to: 'Destination1', from: 'Origin1' },
    },
    {
        _id: '2',
        userId: 'user2',
        seatId: 'B3',
        createdAt: new Date('2024-02-20T10:00:00Z'),
        travelDate: new Date('2024-03-05T14:00:00Z'),
        numOfSeats: 1,
        bookingRoutes: { to: 'Destination2', from: 'Origin2' },
    },
    {
        _id: '3',
        userId: 'user3',
        seatId: 'C2',
        createdAt: new Date('2024-02-19T09:00:00Z'),
        travelDate: new Date('2024-03-10T10:00:00Z'),
        numOfSeats: 3,
        bookingRoutes: { to: 'Destination3', from: 'Origin3' },
    },
    {
        _id: '4',
        userId: 'user4',
        seatId: 'D4',
        createdAt: new Date('2024-02-18T11:00:00Z'),
        travelDate: new Date('2024-03-15T16:00:00Z'),
        numOfSeats: 1,
        bookingRoutes: { to: 'Destination4', from: 'Origin4' },
    },
    {
        _id: '5',
        userId: 'user5',
        seatId: 'E5',
        createdAt: new Date('2024-02-17T13:00:00Z'),
        travelDate: new Date('2024-03-20T18:00:00Z'),
        numOfSeats: 2,
        bookingRoutes: { to: 'Destination5', from: 'Origin5' },
    },
]

export default bookingData
