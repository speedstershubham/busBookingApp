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
import React from 'react'
import TUser from '../types/TUser'

type tableProp = {
    data: TUser[]
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
                                    <TableCell key={key}>{key}</TableCell>
                                ))}
                                <TableCell>Action</TableCell>{' '}
                                {/* New cell for actions */}
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
                                    <TableCell>{dat.firstName}</TableCell>
                                    {/* Add more cells for additional fields */}
                                    {/* <TableCell>{todo.routineTime}</TableCell> */}
                                    {/* Action buttons */}
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

export default TableMui
