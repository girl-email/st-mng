import React, { Children, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Layout = lazy(async () => await import('@/components/layouts'));
const Login = lazy(async () => await import('@/pages/login'));
const Project = lazy(async () => await import('@/pages/project'));
const ProjectLayout = lazy(async () => await import('@/components/ProjectLayouts'));
const ProjectList = lazy(async () => await import('@/pages/mange'));
const AddProject = lazy(async () => await import('@/pages/addProject'));

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
                element: <ProjectLayout />,
                children: [
                    {
                        index: true,
                        element: <ProjectList />
                    },
                    {
                        path: 'list',
                        element: <ProjectList />
                    },
                    {
                        path: 'add',
                        element: <AddProject />
                    },
                ]
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    }
]);

export default router;