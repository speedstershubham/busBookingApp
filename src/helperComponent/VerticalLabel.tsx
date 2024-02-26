import React from 'react'
import { Typography } from '@mui/material'

interface VerticalLabelProps {
    label: string
}

const VerticalLabel: React.FC<VerticalLabelProps> = ({ label }) => {
    const characters: string[] = label.split('')

    return (
        <Typography
            align="center"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            {characters.map((char: string, index: number) => (
                <span
                    key={index}
                    style={{
                        transform: 'rotate(360deg)',
                        transformOrigin: 'bottom',
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                        letterSpacing: '5px',
                    }}
                >
                    {char}
                </span>
            ))}
        </Typography>
    )
}

export default VerticalLabel
