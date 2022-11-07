/* eslint-disable prettier/prettier */

import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../pages/login/Login'
import NotFound from '../pages/notFound/NotFound'

// import PrivateRoute from './PrivateRoute'

export default function Routes(): ReactNode {
    return useRoutes([
        // {
        //     path: '/dashboard',
        //     element: <PrivateRoute navLink="/" component={DashboardLayout} />,
        //     children: [
        //         {
        //             path: '',
        //             element: <div />,
        //         },

        //     ],
        // },
        { path: '404', element: <NotFound /> },
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
