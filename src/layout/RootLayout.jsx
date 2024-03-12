import { NavLink, Outlet } from "react-router-dom"
import {BreadCrumbs} from "../components/BreadCrumbs.jsx";
export function RootLayout() {
    return (
        <>
            <nav>
                <h1>My Articles</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <BreadCrumbs/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}