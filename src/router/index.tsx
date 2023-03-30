import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Layout = lazy(async () => await import('@/components/layouts'));
const Login = lazy(async () => await import('@/pages/login'));
const Project = lazy(async () => await import('@/pages/project'));
const MangeProject = lazy(async () => await import('@/pages/mange'));

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
                element: <Project />
            },
            {
                path: 'project',
                element: <Project />
            },
            {
                path: 'mange',
                element: <MangeProject />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    }
]);

export default router;