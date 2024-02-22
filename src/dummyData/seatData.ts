const seatData = [
    {
        _id: '1',
        seatType: 'Standard',
        seatNo: 1,
        createdAt: new Date('2024-02-21T08:00:00Z'),
        seatStatus: {
            available: true,
            reserved: false,
            maleSeat: true,
            femaleSeat: false,
        },
    },
    {
        _id: '2',
        seatType: 'Premium',
        seatNo: 2,
        createdAt: new Date('2024-02-20T10:00:00Z'),
        seatStatus: {
            available: false,
            reserved: true,
            maleSeat: false,
            femaleSeat: true,
        },
    },
    {
        _id: '3',
        seatType: 'Standard',
        seatNo: 3,
        createdAt: new Date('2024-02-19T09:00:00Z'),
        seatStatus: {
            available: true,
            reserved: false,
            maleSeat: true,
            femaleSeat: true,
        },
    },
    {
        _id: '4',
        seatType: 'Economy',
        seatNo: 4,
        createdAt: new Date('2024-02-18T11:00:00Z'),
        seatStatus: {
            available: true,
            reserved: false,
            maleSeat: false,
            femaleSeat: true,
        },
    },
    {
        _id: '5',
        seatType: 'Business',
        seatNo: 5,
        createdAt: new Date('2024-02-17T13:00:00Z'),
        seatStatus: {
            available: false,
            reserved: true,
            maleSeat: true,
            femaleSeat: false,
        },
    },
]

export default seatData
