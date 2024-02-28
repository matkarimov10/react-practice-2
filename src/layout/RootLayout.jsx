import {NavLink, Outlet} from "react-router-dom";

export function RootLayout() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </>
    )
}