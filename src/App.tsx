import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./global/components/header/Header";
import Footer from "./global/components/footer/Footer";
import { UserAccessLogDto } from "./global/types/accessLog";
import { sendAccessLog } from "./global/services/accessLogService";

function App() {
  useEffect(() => {
    // 페이지 접속 시점(컴포넌트 mount)에 로그 전송
    const logData: UserAccessLogDto = {
      pageUrl: window.location.pathname,
      // 여기서 필요한 경우, OS/browser/화면크기 등 추가
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      devicePixelRatio: window.devicePixelRatio || 1,
      browserLanguage: navigator.language,
    };

    sendAccessLog(logData);
  }, []);
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>Kream사이트</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
