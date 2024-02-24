import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Your Website Name
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
                                onClick={() => navigate('/booking')}
                                color="inherit"
                            >
                                Booking
                            </Button>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Button
                                onClick={() => navigate('/dashboard')}
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
