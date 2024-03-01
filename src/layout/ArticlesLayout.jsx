import {Outlet} from "react-router-dom";

export function ArticlesLayout() {
    return (
        <div>
            <h1>My articles</h1>
            <hr/>
            <Outlet/>
        </div>
    )
}