import React from 'react'
import { Grid, Card, CardActionArea } from '@mui/material'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'

// Define the component
const CardGrid: React.FC = () => {
    const cardCount = 20 // Number of cards to display

    return (
        <div style={{ flexGrow: 1, padding: '20px' }}>
            <Grid container>
                <Grid
                    item
                    style={{
                        width: '50px',
                        height: '100%',
                        backgroundColor: '#e0e0e0',
                    }}
                >
                    {/* Sidebar content goes here */}
                </Grid>
                <Grid item container xs>
                    <Grid container justifyContent="flex-start" spacing={2}>
                        {Array.from(Array(cardCount).keys()).map((_, index) => (
                            <Grid item key={index}>
                                {/* <Card
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        margin: '10px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <CardActionArea>
                                    
                                    </CardActionArea>
                                </Card> */}
                                <ChairOutlinedIcon
                                    style={{
                                        transform: 'rotate(-90deg)',
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardGrid
