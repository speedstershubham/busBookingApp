import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ----------------------------------------------------------------------
interface IUseResponsiveParams {
    query?: 'up' | 'down' | 'between'
    start?: Breakpoint
    end?: Breakpoint
}

const useResponsive = ({
    query,
    start = 'lg',
    end = 'xl',
}: IUseResponsiveParams): boolean => {
    const theme = useTheme()

    const mediaUp = useMediaQuery(theme.breakpoints.up(start))

    const mediaDown = useMediaQuery(theme.breakpoints.down(start))

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end))

    const mediaOnly = useMediaQuery(theme.breakpoints.only(start))

    if (query === 'up') {
        return mediaUp
    }

    if (query === 'down') {
        return mediaDown
    }

    if (query === 'between') {
        return mediaBetween
    }

    return mediaOnly
}

export default useResponsive
// ----------------------------------------------------------------------
