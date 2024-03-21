import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useProduct from '../../hooks/useProduct'
import IBusData from '../../types/IBusData'

interface productFormProps {
    setOpen: (isOpen: boolean) => void
}

const ProductForm: React.FC<productFormProps> = ({ setOpen }) => {
    const [formFieldData, setFormFieldData] = useState<IBusData>({
        _id: uuidv4(),
        title: '',
        content: '',
        date: new Date(),
        noOfSeat: 0,
        imageUrls: [
            'https://via.placeholder.com/156',
            'https://via.placeholder.com/157',
            'https://via.placeholder.com/158',
        ],
    })
    // const { saveBooking } = useBooking()
    // const navigate = useNavigate()
    const { saveBus } = useProduct()

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
        // saveBooking(formFieldData, seatDetail)
        setOpen(false)
        // navigate('/')
        saveBus(formFieldData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="title"
                name="title"
                value={formFieldData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="content Number"
                name="content"
                value={formFieldData.content}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="No of Seat"
                name="noOfSeat"
                value={formFieldData.noOfSeat}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                // disabled={
                //     !formFieldData.name ||
                //     !formFieldData.email ||
                //     typeof formFieldData.contactNumber !== 'string' ||
                //     formFieldData.contactNumber.length !== 10
                // }
            >
                Submit
            </Button>
        </form>
    )
}

export default ProductForm
