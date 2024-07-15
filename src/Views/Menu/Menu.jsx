import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

export function Menu({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    let location = useLocation();
    useEffect(() => {
        /** Whenever route changes, close the menu */
        setMenuOpen(false);
    }, [location]);

    const menuIcon = String.fromCodePoint(parseInt(menuOpen ? 2715 : 2261, 16));

    return <>
        <input
            type="checkbox"
            id="menu-bar"
            checked={menuOpen}
            onChange={(e) => { setMenuOpen(!menuOpen) }} />
        <label htmlFor="menu-bar" className={"menu-bar-icon " + (menuOpen ? 'close' : '')}>{menuIcon}</label>
        <nav className="navbar">
            <ul>
                {children}
            </ul>
        </nav>
    </>

}