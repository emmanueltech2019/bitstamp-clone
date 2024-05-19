import React, { createContext, useState } from 'react'; // Correcting import style


interface NavBarContextState {
    isCollapsed: boolean;
}

interface NavBarContextValue extends NavBarContextState {
    toggleSidebar: () => void;
    isCollapsed: boolean;
}

const initialContextValue: NavBarContextValue = {
    isCollapsed: false,
    toggleSidebar: () => {} 
};


export const NavBarContext = createContext<NavBarContextValue>(initialContextValue)


export const NavBarContextProvider: React.FC = ({ children }: any) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    console.log(isCollapsed)


    const toggleSidebar = () => {
        console.log("Toggle"); // Keep this to confirm if the function is called
        setIsCollapsed(!isCollapsed);
    };

    return (
        <NavBarContext.Provider value={{ isCollapsed, toggleSidebar }}>
            {children}
        </NavBarContext.Provider>
    );
};

export default NavBarContextProvider; // Exporting at the end of the file
