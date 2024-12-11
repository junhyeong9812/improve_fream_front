import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FiSearch,
  FiShoppingBag,
  FiHome,
  FiBookmark,
  FiUser,
} from "react-icons/fi";
import NotificationModal from "./headerModal/NotificationModal";
import SearchModal from "./headerModal/SearchModal";

// 기본 데스크탑 헤더 컨테이너
const HeaderContainer = styled.header`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  min-width: 960px;
  position: fixed; /* 상단에 고정 */
  z-index: 1000; /* 다른 요소보다 위에 표시 */
  background: write;

  @media (max-width: 960px) {
    display: none; /* 모바일 환경에서는 숨김 */
  }
`;
// Nav 컴포넌트 스타일 정의
const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #222;
    font-weight: bold;
    margin: 0 10px;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 960px) {
    display: none; /* 데스크톱 전용 */
  }
`;

// 모바일 전용 헤더 컨테이너
const MobileHeaderContainer = styled.header`
  display: none;

  @media (max-width: 960px) {
    wdith: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    top: 0;
    left: 0;
    right: 0;
    min-width: 320px;
  }
`;

const TopNav = styled.div`
  display: flex;
  width: 100%;
  height: 22px;
  padding: 8px 40px 0;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    margin-left: 15px;

    a {
      text-decoration: none;
      color: #555;
      font-size: 12px;
      font-weight: 500;

      &:hover {
        color: #000;
      }
    }
  }
`;

const BottomNav = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: space-between;
  min-width: 320px;
  padding: 20px 40px;
  width: 100%;
  box-sizing: border-box;
`;

const MobileNav = styled.nav`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(50px + env(safe-area-inset-bottom));
    background-color: #fff;
    box-shadow: 0 -0.5px 0 0 rgba(34, 34, 34, 0.1);
    padding-bottom: env(safe-area-inset-bottom);
    min-width: 320px;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;
      height: 100%;
    }

    li {
      flex: 1;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #222;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        font-size: 20px;
        margin-bottom: 4px;
      }

      &:hover {
        color: #000;
      }
    }
  }
`;

const LogoImage = styled.img`
  width: 100px;
  background: none;
  display: block;

  @media (max-width: 960px) {
    width: 80px; /* 모바일 로고 크기 조정 */
  }
`;

const MobileLogoImage = styled.img`
  width: 80px; /* 모바일 전용 로고 */
  display: block;
`;

// 아이콘 버튼 스타일
const Icon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #222;
  margin-left: 10px;
`;

// 컴포넌트
const Header: React.FC = () => {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      {/* 기본 데스크탑 헤더 */}
      <HeaderContainer>
        <TopNav>
          <ul>
            <li>
              <Link to="/support">고객센터</Link>
            </li>
            <li>
              <Link to="/mypage">마이페이지</Link>
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
        </TopNav>

        <BottomNav>
          <Link to="/">
            <LogoImage src="/Fream.png" alt="KREAM Logo" />
          </Link>
          <Nav>
            <Link to="/">HOME</Link>
            <Link to="/style/explore">STYLE</Link>
            <Link to="/shop">SHOP</Link>
            <Icon onClick={() => setSearchModalOpen(true)}>
              <FiSearch />
            </Icon>
            <Icon>
              <FiShoppingBag />
            </Icon>
          </Nav>
        </BottomNav>
      </HeaderContainer>

      {/* 모바일 전용 헤더 */}
      <MobileHeaderContainer>
        <Link to="/">
          <MobileLogoImage src="/Fream.png" alt="Mobile Logo" />
        </Link>
        <Icon onClick={() => setNotificationModalOpen(true)}>
          <FiShoppingBag />
        </Icon>
      </MobileHeaderContainer>

      {/* 모바일 전용 하단 네비게이션 */}
      <MobileNav>
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
      </MobileNav>

      {/* 모달 */}
      {isNotificationModalOpen && (
        <NotificationModal closeModal={() => setNotificationModalOpen(false)} />
      )}
      {isSearchModalOpen && (
        <SearchModal closeModal={() => setSearchModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
