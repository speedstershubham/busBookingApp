import { Button } from '@mui/material'
import React from 'react'

interface ICoreButtonProps {
    text: string
    variant: 'text' | 'outlined' | 'contained'
    color:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
}

const CoreButton: React.FC<ICoreButtonProps> = ({ text, variant, color }) => {
    return (
        <Button type="submit" variant={variant} color={color}>
            {text}
        </Button>
    )
}

export default CoreButton
