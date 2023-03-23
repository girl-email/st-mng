import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Layout = lazy(async () => await import('@/components/layouts'));
const Login = lazy(async () => await import('@/pages/login'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/st' />
    },
    {
        path: 'st',
        element: <Layout />,
        children: [
            // {
            //     index: true,
            //     element: <Layout />
            // }
        ]
    },
    {
        path: 'login',
        element: <Login />
    }
]);

export default router;