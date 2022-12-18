import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Home = lazy(async () => await import('@/pages/home'));
const Login = lazy(async () => await import('@/pages/login'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/st' />
    },
    {
        path: 'st',
        element: <Home />
    },
    {
        path: 'login',
        element: <Login />
    }
]);

export default router;