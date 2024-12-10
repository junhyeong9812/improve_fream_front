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
import InfoPage from "../pages/FooterPage/InfoPage";
import RecruitPage from "../pages/FooterPage/RecruitPage";
import ProposalPage from "../pages/FooterPage/ProposalPage";
import TermsPage from "../pages/FooterPage/TermsPage";
import PrivacyPage from "../pages/FooterPage/PrivacyPage";
import ServiceInfoPage from "../pages/FooterPage/ServiceInfoPage";
import StoreInfoPage from "../pages/FooterPage/StoreInfoPage";
import SellerVisitPage from "../pages/FooterPage/SellerVisitPage";

// 스타일드 컴포넌트로 Wrapping
const AppRoutesContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
        {/* footerPage */}
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/service-info" element={<ServiceInfoPage />} />
        <Route path="/store-info" element={<StoreInfoPage />} />
        <Route path="/seller-visit" element={<SellerVisitPage />} />
      </Routes>
    </AppRoutesContainer>
  );
};

export default AppRoutes;
