import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";
import AuthSymmetryLayout from "./layouts/authSymmetry.layout";
import OnlyNavbarLayout from "./layouts/onlyNavbar.layout";
import HobbiesPage from "./pages/hobbies/hobbies.page";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import RegisterPage from "./pages/register/register.page";

export default createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route element={<AuthSymmetryLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage/>}/>
            </Route>
            <Route element={<OnlyNavbarLayout/>}>
                <Route path="hobbies" element={<HobbiesPage/>}/>
            </Route>
        </Route>
    )
);