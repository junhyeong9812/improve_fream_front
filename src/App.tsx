import React, { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import styled from "styled-components";

// App 전체 컨테이너
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 */
  width: 100%;
  background-color: white;
`;

// Header와 겹치지 않게 컨텐츠에 top-margin 적용
const ContentWrapper = styled.div<{ $headerHeight: number }>`
  margin-top: ${({ $headerHeight }) => $headerHeight}px;
`;

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight); // Header 높이를 상태로 저장
    }
  }, []);

  return (
    <AppContainer>
      <Header /> {/* AppContainer 내부에 위치 */}
      <ContentWrapper $headerHeight={headerHeight}>
        <AppRoutes />
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

export default App;
