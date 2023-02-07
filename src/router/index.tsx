import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Home = lazy(async () => await import('@/pages/home'));
const Login = lazy(async () => await import('@/pages/login'));
const Project = lazy(async () => await import('@/pages/project'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: 'st',
        element: <Home />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
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