import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import useBus from '../../hooks/useProduct'
import { useNavigate } from 'react-router-dom'

const ProductCard: React.FC = () => {
    const { busList } = useBus()
    const navigate = useNavigate()

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                {busList.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card variant="outlined">
                            <Carousel autoPlay={false}>
                                {card.imageUrls.map((imageUrl, i) => (
                                    <Box key={index} style={{ height: 200 }}>
                                        <img
                                            src={imageUrl}
                                            alt={`Image ${i}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Carousel>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Price {card.content}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Seat {card.noOfSeat}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ marginTop: 1 }}
                                >
                                    Date:{card.date.toLocaleString()}
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        navigate('/bus/booking', {
                                            state: { data: card.noOfSeat },
                                        })
                                    }
                                >
                                    Book your seat
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ProductCard
