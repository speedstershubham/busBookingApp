import { TextField } from '@mui/material'
import React from 'react'

interface TextFieldProps {
    label: string
    name: string
    margin: string
    type?: string
    value: string | number
    variant?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CoreTextField: React.FC<TextFieldProps> = ({
    label,
    name,
    value,
    onChange,
}) => {
    return (
        <TextField
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
            margin="normal"
            variant="outlined"
        />
    )
}

export default CoreTextField
