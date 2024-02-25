import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import BookingForm from './BookingForm'
import TSeat from '../../types/TSeat'
import { Typography } from '@mui/material'
import IFormData from '../../types/IFormData'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

interface bookingProps {
    open: boolean
    setOpen: (isOpen: boolean) => void
    seatDetail: TSeat
    bookingDetail?: IFormData
}
const BookingModal: React.FC<bookingProps> = ({
    open,
    setOpen,
    seatDetail,
    bookingDetail,
}) => {
    const handleClose = (): void => setOpen(false)
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Typography variant="h6">
                                Book Seat {seatDetail?.seatNumber}
                            </Typography>
                        </Box>
                        {seatDetail?.seatStatus?.femaleSeat && (
                            <Box>
                                <Typography variant="h6">For Women</Typography>
                            </Box>
                        )}
                    </Box>

                    <BookingForm
                        setOpen={setOpen}
                        seatDetail={seatDetail}
                        bookingDetail={bookingDetail}
                    />
                </Box>
            </Modal>
        </div>
    )
}

export default BookingModal
