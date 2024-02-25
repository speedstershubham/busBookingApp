import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Booking from '../components/Booking/Booking'
import User from '../components/User/User'
import DashboardLayout from '../layout'
import { Suspense } from 'react'
const AppRoute: React.FC = () => {
    const router = createBrowserRouter([
        {
            element: (
                <DashboardLayout>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </DashboardLayout>
            ),
            children: [
                { element: <User />, index: true },
                { path: 'booking', element: <Booking /> },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default AppRoute
