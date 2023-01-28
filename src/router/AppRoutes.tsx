import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ArticlePage from "../pages/ArticlePage";
import MainPage from "../pages/MainPage";
import UserProfile from "../pages/UserProfile";
import SellerProfile from "../pages/SellerProfile";

const AppRoutes = ():ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="article/:id" element={<ArticlePage />} />
                <Route path="seller" element={<SellerProfile />} />
            </Route>
        </Routes>
    ) 
}

export default AppRoutes