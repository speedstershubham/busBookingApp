import { Container } from '@mui/material'
import React, { useState } from 'react'
import CoreTextField from '../../commonComponents/CoreTextField'
import CoreButton from '../../commonComponents/CoreButton'

interface IFormData {
    firstName: string
    lastName: string
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        firstName: '',
        lastName: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log(formData) // or submit data to your backend
    }
    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <CoreTextField
                    name="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <CoreTextField
                    name="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <CoreButton text="Submit" variant="contained" color="primary" />
            </form>
        </Container>
    )
}

export default Register
