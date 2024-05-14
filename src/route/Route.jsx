import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Loginlayout from '../layout/LoginLayout';
import Rootlayout from '../layout/Rootlayout';
import AuthGuard from '../Guard/AuthGuard';
import GuestGuard from '../Guard/GuestGuard';



const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={"Login"} />
    },
    {
        path: "*",
        element: <Navigate to={"Login"} />
    },
    {
        element: <AuthGuard />,
        children: [
            {
                element: <Rootlayout />,
                children: [
                    {
                        path: "/Dashboard",
                        element: <Dashboard />,
                    },
                ],
            },

        ],
    },
    {
        element: <GuestGuard />,
        children: [
            {
                path: '/',
                element: <Loginlayout />,
                children: [
                    {
                        path: '/Login',
                        element: <Login />,
                    },
                ],
            },
        ],
    },
 
]);