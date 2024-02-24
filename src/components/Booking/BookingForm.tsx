import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import TSeat from '../../types/TSeat'
import { Autocomplete } from '@mui/material'
import IFormData from '../../types/IFormData'
import useSeats from '../../hooks/useSeat'
import { useLocation, useNavigate } from 'react-router-dom'
import useBooking from '../../hooks/useBooking'

interface bookingFormProps {
    setOpen: (isOpen: boolean) => void
    seatDetail: TSeat
    bookingDetail?: IFormData
}

const BookingForm: React.FC<bookingFormProps> = ({
    setOpen,
    seatDetail,
    bookingDetail,
}) => {
    console.log('bookingDetail', bookingDetail)
    const [formData, setFormData] = useState<IFormData>({
        _id: bookingDetail?._id || uuidv4(),
        name: bookingDetail?.name || '',
        contactNumber: bookingDetail?.contactNumber || '',
        email: bookingDetail?.email || '',
        seatNumber: bookingDetail?.seatNumber || seatDetail?.seatNumber,
        bookingDate: bookingDetail?.bookingDate || '',
        from: bookingDetail?.from || '',
        to: bookingDetail?.to || '',
        age: bookingDetail?.age || '',
    })
    const { saveBooking } = useBooking()
    const navigate = useNavigate()
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ): void => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        saveBooking(formData, seatDetail)
        setOpen(false)
        navigate('/Dashboard')
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contact Number"
                name="contactNumber"
                type="number"
                value={formData.contactNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Autocomplete
                options={[
                    'New York',
                    'Los Angeles',
                    'Chicago',
                    'Houston',
                    'Phoenix',
                    'Philadelphia',
                ]} // Example options
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="From"
                        name="from"
                        margin="normal"
                    />
                )}
                value={formData.from}
                onChange={(event, newValue) => {
                    setFormData({
                        ...formData,
                        from: newValue || '',
                    })
                }}
            />
            <Autocomplete
                options={[
                    'New York',
                    'Los Angeles',
                    'Chicago',
                    'Houston',
                    'Phoenix',
                    'Philadelphia',
                ]} // Example options
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="To"
                        name="to"
                        margin="normal"
                    />
                )}
                value={formData.to}
                onChange={(event, newValue) => {
                    setFormData({
                        ...formData,
                        to: newValue || '',
                    })
                }}
            />
            <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Date of Booking"
                name="bookingDate"
                type="date"
                value={formData.bookingDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    )
}
export default BookingForm
