import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Booking from '../components/Booking/Booking'
import User from '../components/User/User'
import DashboardLayout from '../layout'
import { Suspense } from 'react'
import Register from '../components/Register/Register'
import Product from '../components/Product/Product'
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
                { path: '/bus/booking', element: <Booking /> },
                { path: 'register', element: <Register /> },
                { path: 'bus', element: <Product /> },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default AppRoute
