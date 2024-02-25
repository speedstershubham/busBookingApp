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
import IFormData from '../../types/IFormData'
import useBooking from '../../hooks/useBooking'
import { useNavigate } from 'react-router-dom'

interface IUserTableProps {
    setBookingDetail: (data: IFormData) => void
    setOpen: (isOpen: boolean) => void
}

const UserTable: React.FC<IUserTableProps> = ({
    setBookingDetail,
    setOpen,
}) => {
    const navigate = useNavigate()
    const { formList, deleteFormDataById } = useBooking()
    const fields: { name: string; label: string }[] = [
        { name: '_id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'contactNumber', label: 'Contact Number' },
        { name: 'email', label: 'Email' },
        { name: 'gender', label: 'Gender' },
        { name: 'seatNumber', label: 'Seat Number' },
        { name: 'bookingDate', label: 'Booking Date' },
        { name: 'from', label: 'From' },
        { name: 'to', label: 'To' },
        { name: 'age', label: 'Age' },
    ]
    return (
        <Box>
            {formList?.length === 0 ? (
                <Button
                    variant="contained"
                    onClick={() => navigate('/booking')}
                >
                    {' '}
                    Book Your Seat
                </Button>
            ) : (
                <TableContainer component={Paper} style={{ maxHeight: 400 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {fields?.map((field) => (
                                    <TableCell key={field.name}>
                                        {field.label}
                                    </TableCell>
                                ))}
                                <TableCell>Action</TableCell>{' '}
                                {/* New cell for actions */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Render todoList items in table rows */}
                            {formList?.map((dat) => (
                                <TableRow key={dat._id}>
                                    <TableCell>
                                        {dat._id.slice(0, 4) +
                                            '...' +
                                            dat._id.slice(-4)}
                                    </TableCell>
                                    <TableCell>{dat.name}</TableCell>
                                    <TableCell>{dat.contactNumber}</TableCell>
                                    <TableCell>{dat.email}</TableCell>
                                    <TableCell>{dat.gender}</TableCell>
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
                                            sx={{ marginRight: '10px' }}
                                            variant="contained"
                                            onClick={() => {
                                                setBookingDetail(dat)
                                                setOpen(true)
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() =>
                                                deleteFormDataById(
                                                    dat._id,
                                                    dat.seatNumber
                                                )
                                            }
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
