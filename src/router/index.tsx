import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Layout = lazy(async () => await import('@/pages/layout'));
const Login = lazy(async () => await import('@/pages/login'));
const Project = lazy(async () => await import('@/pages/project'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/st' />
    },
    {
        path: 'st',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Layout />
            },
            {
                path: 'home',
                element: <Layout />
            },
            {
                path: 'project',
                element: <Project />
            },
        ]
    },
    {
        path: 'login',
        element: <Login />
    }
]);

export default router;