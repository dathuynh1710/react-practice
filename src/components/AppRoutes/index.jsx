import { HashRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                {/* Default Layout */}
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                </Route>

                {/* Auth Layout */}
                <Route element={<AuthLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/register" element={<Register />} /> */}
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
