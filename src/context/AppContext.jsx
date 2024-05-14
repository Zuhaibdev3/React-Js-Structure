import React, { createContext, useEffect, useRef, useState } from "react";
import Clickoutside from "../utils/Clickoutside";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const sidebarRef = useRef();

    const [toggleSideBar, setToggleSidebar] = useState(true);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setOpen(!isMobile);
        };

        // Initial setup and cleanup
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Check if the screen width is less than 768px
        const isSmallScreen = window.innerWidth < 768;

        // Return early if not a small screen
        if (!isSmallScreen) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleClickOutside = () => {
            setOpen(false);
        };

        const removeClickListener = Clickoutside(sidebarRef.current, handleClickOutside);

        return () => {
            document.body.style.overflow = originalOverflow;
            removeClickListener();
        };
    }, [open, setOpen]);

    const appValue = {
        toggleSideBar,
        setToggleSidebar,
        open,
        setOpen,
        sidebarRef,
    };

    return (
        <AppContext.Provider value={appValue}>
            {children}
        </AppContext.Provider>
    );
};