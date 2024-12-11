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
import Explore from "../features/style/components/Explore";
import Following from "../features/style/components/Following";
import Ranking from "../features/style/components/Ranking";
import Kicks from "../features/style/components/Kicks";
import Trend from "../features/style/components/Trend";
import Winter from "../features/style/components/Winter";
import Sneakers from "../features/style/components/Sneakers";
import Luxury from "../features/style/components/Luxury";
import Clothing from "../features/style/components/Clothing";
import Bags from "../features/style/components/Bags";
import Celebrity from "../features/style/components/Celebrity";
import Collectibles from "../features/style/components/Collectibles";
import Accessories from "../features/style/components/Accessories";
import SupportPage from "../features/support/pages/supportPage";
import NoticePage from "../features/support/pages/NoticePage";
import FAQPage from "../features/support/pages/FAQPage";
import InspectionPage from "../features/support/pages/InspectionPage";
import NoticeDetail from "../features/support/components/notice/SupportDetail";

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
        <Route path="/style" element={<Style />}>
          <Route index element={<Explore />} /> {/* 기본 탭 */}
          <Route path="explore" element={<Explore />} />
          <Route path="kicks" element={<Kicks />} />
          <Route path="following" element={<Following />} />
          <Route path="explore" element={<Explore />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="trend" element={<Trend />} />
          <Route path="winter" element={<Winter />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="luxury" element={<Luxury />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="bags" element={<Bags />} />
          <Route path="celebrity" element={<Celebrity />} />
          <Route path="collectibles" element={<Collectibles />} />
          <Route path="accessories" element={<Accessories />} />
          {/* 다른 탭도 동일한 방식으로 추가 */}
        </Route>
        <Route path="/cart" element={<Cart />} />
        {/* /support 메인 경로 */}
        <Route path="/support" element={<SupportPage />}>
          {/* 하위 경로 설정 */}
          <Route path="notice" element={<NoticePage />}>
            {/* 상세 페이지 경로 */}
            <Route path=":id" element={<NoticeDetail />} />
          </Route>
          <Route path="faq" element={<FAQPage />} />
          <Route path="inspection" element={<InspectionPage />} />
        </Route>
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
