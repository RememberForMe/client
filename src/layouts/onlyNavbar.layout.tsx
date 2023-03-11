import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/navbar.component"

function OnlyNavbarLayout() {
    return (
        <div className="h-screen">
            <NavbarComponent/>
            <div className="mt-10">
                <Outlet/>
            </div>
        </div>
    )
}

export default OnlyNavbarLayout