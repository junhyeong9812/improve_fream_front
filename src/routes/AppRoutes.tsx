import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Style from "../pages/Style";
import Cart from "../pages/Cart";
import Support from "../pages/Support";
import Favorites from "../pages/Favorites";
import Notifications from "../pages/Notifications";

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/style" element={<Style />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/support" element={<Support />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/notifications" element={<Notifications />} />
        {/* 추가 페이지를 여기에 추가 */}
      </Routes>
  );
};

export default AppRoutes;
