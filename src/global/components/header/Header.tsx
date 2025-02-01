import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiHome,
  FiBookmark,
  FiUser,
} from "react-icons/fi";
import NotificationModal from "./headerModal/NotificationModal";
import SearchModal from "./headerModal/SearchModal";
import "./Header.css";

const Header: React.FC = () => {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      {/* 데스크탑 헤더 전체 영역 */}
      <div className="header-all-container">
        {/* 데스크탑 헤더 */}
        <header className="header-container">
          <div className="top-nav">
            <ul>
              <li>
                <Link to="/support/notice">고객센터</Link>
              </li>
              <li>
                <Link to="/my">마이페이지</Link>
              </li>
              <li>
                <Link to="/favorites">관심</Link>
              </li>
              <li>
                <Link to="#" onClick={() => setNotificationModalOpen(true)}>
                  알림
                </Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </ul>
          </div>

          <div className="bottom-nav">
            <Link to="/">
              <img
                className="logo-image"
                src="/Fream.png"
                alt="KREAM Logo"
              />
            </Link>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/style/explore">STYLE</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <button className="icon" onClick={() => setSearchModalOpen(true)}>
                    <FiSearch />
                  </button>
                </li>
                <li>
                  <button className="icon">
                    <FiShoppingBag />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* 모바일 헤더 */}
      <header className="mobile-header-container">
        <Link to="/">
          <img
            className="mobile-logo-image"
            src="/Fream.png"
            alt="Mobile Logo"
          />
        </Link>
        <button className="icon" onClick={() => setNotificationModalOpen(true)}>
          <FiShoppingBag />
        </button>
      </header>

      {/* 모바일 하단 네비게이션 */}
      <nav className="mobile-nav">
        <ul>
          <li>
            <Link to="/">
              <FiHome />
              HOME
            </Link>
          </li>
          <li>
            <Link to="/style">
              <FiBookmark />
              STYLE
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <FiSearch />
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/saved">
              <FiBookmark />
              SAVED
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <FiUser />
              MY
            </Link>
          </li>
        </ul>
      </nav>

      {/* 알림 모달 */}
      {isNotificationModalOpen && (
        <NotificationModal closeModal={() => setNotificationModalOpen(false)} />
      )}
      {/* 검색 모달 */}
      {isSearchModalOpen && (
        <SearchModal closeModal={() => setSearchModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
