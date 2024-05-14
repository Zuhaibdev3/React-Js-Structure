import React, { useContext, useState } from 'react'
import { Outlet } from "react-router-dom";

export default function Rootlayout({ children }) {

    return (
        <>
            <Outlet>
                {children}
            </Outlet>
        </>
    );
}