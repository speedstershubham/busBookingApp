import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Yolo Bus
                </Typography>
                <nav>
                    <ul
                        style={{
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            display: 'flex',
                        }}
                    >
                        <li style={{ margin: '0 10px' }}>
                            <Button
                                onClick={() => navigate('/register')}
                                color="inherit"
                            >
                                Register
                            </Button>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Button
                                onClick={() => navigate('/bus')}
                                color="inherit"
                            >
                                Buses
                            </Button>
                        </li>{' '}
                        <li style={{ margin: '0 10px' }}>
                            <Button
                                onClick={() => navigate('/bus/booking')}
                                color="inherit"
                            >
                                Booking
                            </Button>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Button
                                onClick={() => navigate('/')}
                                color="inherit"
                            >
                                Dashboard
                            </Button>
                        </li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Header
