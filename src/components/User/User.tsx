import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserTable from './UserTable'
import BookingModal from '../Booking/BookingModal'
import IFormData from '../../types/IFormData'
import TSeat from '../../types/TSeat'
import DeckTypes from '../Bus/DeckTypes'

const User: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [bookingDetail, setBookingDetail] = useState<IFormData>()
    const [seatList, setSeatList] = useState<TSeat[]>([]) // Initialize as an empty array

    useEffect(() => {
        const storedSeatData: string | null = localStorage.getItem('seatData')
        if (storedSeatData) {
            const seatDataArray: TSeat[] = JSON.parse(storedSeatData)
            setSeatList(seatDataArray)
        }
    }, []) // Run once on component mount

    const seatDetail = seatList?.find(
        (seat) => seat.seatNumber === bookingDetail?.seatNumber
    )

    const defaultSeatDetail: TSeat = {
        _id: '1',
        seatType: 'Standard',
        userId: '',
        seatNumber: 1,
        createdAt: new Date('2024-02-21T08:00:00Z'),
        available: true,
        seatStatus: {
            maleSeat: true,
            femaleSeat: false,
        },
        deck: DeckTypes.UPPER_DECK,
    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="20vh"
        >
            <UserTable setBookingDetail={setBookingDetail} setOpen={setOpen} />

            {open && bookingDetail && (
                <BookingModal
                    open={open}
                    setOpen={setOpen}
                    bookingDetail={bookingDetail}
                    seatDetail={seatDetail || defaultSeatDetail}
                />
            )}
        </Box>
    )
}

export default User
