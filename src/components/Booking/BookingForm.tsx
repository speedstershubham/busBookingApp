import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import TSeat from '../../types/TSeat'
import { Autocomplete } from '@mui/material'
import IFormData from '../../types/IFormData'

interface bookingFormProps {
    setOpen: (isOpen: boolean) => void

    seatDetail: TSeat
}

const BookingForm: React.FC<bookingFormProps> = ({ setOpen, seatDetail }) => {
    const [formData, setFormData] = useState<IFormData>({
        _id: uuidv4(),
        name: '',
        contactNumber: '',
        email: '',
        seatNumber: seatDetail.seatNo,
        bookingDate: '',
        from: '',
        to: '',
        age: '',
    })

    // useEffect(() => {
    //     const storedFormData = localStorage.getItem('formData')
    //     if (storedFormData) {
    //         setFormData(JSON.parse(storedFormData))
    //     }
    // }, [])

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

        let storedFormData: IFormData[] = []
        const existingFormData = localStorage.getItem('formData')
        console.log('existingFormData', existingFormData)
        if (existingFormData) {
            storedFormData = JSON.parse(existingFormData)
        }

        // Push each form data separately instead of pushing the whole array
        storedFormData.push(formData)

        localStorage.setItem('formData', JSON.stringify(storedFormData))
        setOpen(false)
        // Here you can handle form submission, for now, let's just log the data
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
