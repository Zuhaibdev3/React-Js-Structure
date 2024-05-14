import React from 'react'
import { Outlet } from "react-router-dom";

export default function Loginlayout({ children }) {
    return (
        <Outlet>
            {children}
        </Outlet>
    );
}