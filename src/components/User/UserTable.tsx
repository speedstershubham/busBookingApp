import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import IFormData from '../../types/IFormData'

const UserTable: React.FC = () => {
    const [formData, setFormData] = useState<IFormData[]>([])

    useEffect(() => {
        // Retrieve data from localStorage
        const existingFormData = localStorage.getItem('formData')
        if (existingFormData) {
            // Parse the data if it exists
            const parsedFormData: IFormData[] = JSON.parse(existingFormData)
            setFormData(parsedFormData)
        }
    }, [])

    const keys = Object?.keys(formData[0] || {})
    console.log('formData', formData)
    return (
        <Box>
            {formData?.length === 0 ? (
                <p>
                    Start today to track your work <br /> Create Your Routine{' '}
                </p>
            ) : (
                <TableContainer component={Paper} style={{ maxHeight: 400 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {keys?.map((key) => (
                                    <TableCell key={key}>{key}</TableCell>
                                ))}
                                <TableCell>Action</TableCell>{' '}
                                {/* New cell for actions */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Render todoList items in table rows */}
                            {formData?.map((dat) => (
                                <TableRow key={dat._id}>
                                    <TableCell>
                                        {dat._id.slice(0, 4) +
                                            '...' +
                                            dat._id.slice(-4)}
                                    </TableCell>
                                    <TableCell>{dat.name}</TableCell>
                                    <TableCell>{dat.contactNumber}</TableCell>
                                    <TableCell>{dat.email}</TableCell>
                                    <TableCell>{dat.seatNumber}</TableCell>
                                    <TableCell>
                                        {new Date(
                                            dat.bookingDate
                                        ).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{dat.from}</TableCell>
                                    <TableCell>{dat.to}</TableCell>
                                    <TableCell>{dat.age}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            onClick={() => console.log(dat)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => console.log(dat._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    )
}

export default UserTable
