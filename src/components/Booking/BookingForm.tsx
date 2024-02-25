import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import TSeat from '../../types/TSeat'
import { Autocomplete, MenuItem } from '@mui/material'
import IFormData from '../../types/IFormData'
import { useNavigate } from 'react-router-dom'
import useBooking from '../../hooks/useBooking'
import getCurrentDate from '../../helpers/getCurrentDate'

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
    const [formFieldData, setFormFieldData] = useState<IFormData>({
        _id: bookingDetail?._id || uuidv4(),
        name: bookingDetail?.name || '',
        contactNumber: bookingDetail?.contactNumber || '',
        email: bookingDetail?.email || '',
        seatNumber: bookingDetail?.seatNumber || seatDetail?.seatNumber,
        bookingDate: bookingDetail?.bookingDate || '',
        gender: seatDetail?.seatStatus?.femaleSeat
            ? 'Female'
            : bookingDetail?.gender || '',
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
        setFormFieldData({
            ...formFieldData,
            [name]: value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        //here i am not handle the api that why I not use try and catch other it will come inside tryCatch block
        e.preventDefault()
        saveBooking(formFieldData, seatDetail)
        setOpen(false)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={formFieldData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contact Number"
                name="contactNumber"
                type="number"
                value={formFieldData.contactNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                name="email"
                value={formFieldData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            {!bookingDetail?.gender && (
                <TextField
                    label="Gender"
                    name="gender"
                    value={formFieldData.gender}
                    onChange={handleChange}
                    select
                    fullWidth
                    disabled={seatDetail?.seatStatus?.femaleSeat}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    {['Male', 'Female'].map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            )}
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
                value={formFieldData.from}
                onChange={(event, newValue) => {
                    setFormFieldData({
                        ...formFieldData,
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
                value={formFieldData.to}
                onChange={(event, newValue) => {
                    setFormFieldData({
                        ...formFieldData,
                        to: newValue || '',
                    })
                }}
            />
            <TextField
                label="Age"
                name="age"
                type="number"
                value={formFieldData.age}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{ min: '0', step: '1' }}
            />
            <TextField
                label="Date of Booking"
                name="bookingDate"
                type="date"
                value={formFieldData.bookingDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    min: getCurrentDate(), // Set minimum date to the current date
                }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={
                    !formFieldData.name ||
                    !formFieldData.email ||
                    typeof formFieldData.contactNumber !== 'string' ||
                    formFieldData.contactNumber.length !== 10
                }
            >
                Submit
            </Button>
        </form>
    )
}
export default BookingForm
