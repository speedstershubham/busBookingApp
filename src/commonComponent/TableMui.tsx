/* eslint-disable react/jsx-key */
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import React from 'react'
import BookingTypes from '../types/TBooking'

type tableProp = {
    data: BookingTypes[]
}

const TableMui: React.FC<tableProp> = ({ data }) => {
    const keys = Object?.keys(data[0] || {})
    return (
        <Box>
            {data?.length === 0 ? (
                <p>
                    Start today to track your work <br /> Create Your Routine{' '}
                </p>
            ) : (
                <TableContainer component={Paper} style={{ maxHeight: 400 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {keys?.map((key) => (
                                    <TableCell>{key}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Render todoList items in table rows */}
                            {data?.map((dat) => (
                                <TableRow key={dat._id}>
                                    {/* Display todo item details in table cells */}
                                    <TableCell>
                                        {new Date(
                                            dat.createdAt
                                        ).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{dat.seatId}</TableCell>
                                    {/* <TableCell>{todo.routineTime}</TableCell> */}
                                    {/* <TableCell>
                                        <Button
                                            variant="contained"
                                            onClick={() => setUpdateTodo(todo)}
                                        >
                                            Edit
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    )
}

export default TableMui
