import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Style from "../pages/Style";
import Cart from "../pages/Cart";
import Support from "../pages/Support";
import Favorites from "../pages/Favorites";
import Notifications from "../pages/Notifications";

// 스타일드 컴포넌트로 Wrapping
const AppRoutesContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  min-width: 960px; /* 최소 너비 설정 */
  box-sizing: border-box;
`;

const AppRoutes: React.FC = () => {
  return (
    <AppRoutesContainer>
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
    </AppRoutesContainer>
  );
};

export default AppRoutes;
