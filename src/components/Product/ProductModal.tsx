import { Box, Modal } from '@mui/material'
import React from 'react'
import ProductForm from './ProductForm'

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
interface productProps {
    open: boolean
    setOpen: (isOpen: boolean) => void
}
const ProductModal: React.FC<productProps> = ({ open, setOpen }) => {
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
                    <ProductForm setOpen={setOpen} />
                </Box>
            </Modal>
        </div>
    )
}

export default ProductModal
