import { createContext } from "react";

const sidebarLengthOpen: string = '300px';

export const sidebarState = {
    open: {
        sideBarWidth: sidebarLengthOpen,
        displaySideBar: 'flex',
        togglePlayPause: () => {},
    },
    closed: {
        sideBarWidth: '0px',
        displaySideBar: 'none',
        togglePlayPause: () => {},
    },
};

export const SidebarContenxt = createContext(
    sidebarState.open,
);