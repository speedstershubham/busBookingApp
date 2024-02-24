import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Button
                            onClick={() => navigate('/booking')}
                            color="inherit"
                        >
                            Booking
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={() => navigate('/Dashboard')}
                            color="inherit"
                        >
                            Dashboard
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
