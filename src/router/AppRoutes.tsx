import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ArticlePage from "../pages/ArticlePage";
import MainPage from "../pages/MainPage";
import NotFoundPage from '../pages/NotFoundPage'
import UserProfile from "../pages/UserProfile";
import SellerProfile from "../pages/SellerProfile";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = ():ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={
                    <ProtectedRoute>
                        <UserProfile />
                    </ProtectedRoute> 
                } 
                />
                <Route path="article/:id" element={<ArticlePage />} />
                <Route path="seller/:id" element={<SellerProfile />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    ) 
}

export default AppRoutes