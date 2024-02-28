import {NavLink, Outlet} from "react-router-dom";

export function ContactLayout() {
    return (
        <div>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur dignissimos enim facere
                impedit iure nesciunt nobis nostrum obcaecati optio, pariatur provident, quaerat quos, sint. Atque
                beatae dolores, expedita facere iusto minima, modi nulla optio possimus saepe suscipit vitae.</p>
        <nav>
            <NavLink to="form">Form</NavLink>
            <NavLink to="faq">FAQ</NavLink>
        </nav>
        <Outlet/>
        </div>
    )
}