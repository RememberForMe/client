import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import AuthSymmetryLayout from "./layouts/authSymmetry.layout";
import LoginPage from "./pages/login/login.page";
import RegisterPage from "./pages/register/register.page";

export default createBrowserRouter(
    createRoutesFromElements(
        <Route path='auth' element={<AuthSymmetryLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage/>}/>
        </Route>
    )
);