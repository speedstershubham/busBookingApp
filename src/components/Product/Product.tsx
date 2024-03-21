import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { Button, Container } from '@mui/material'
import ProductModal from './ProductModal'

const Product: React.FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Container maxWidth="md" sx={{ marginBottom: '100px' }}>
                <Button onClick={() => setOpen(true)} variant="contained">
                    Add Bus
                </Button>
            </Container>
            <ProductModal open={open} setOpen={setOpen} />
            <ProductCard />
        </>
    )
}

export default Product
