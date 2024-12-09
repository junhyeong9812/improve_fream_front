import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import NotificationModal from "./NotificationModal";
import SearchModal from "./SearchModal"; // SearchModal 추가

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  //   background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 20px;
  background-color: #f8f8f8;

  a {
    text-decoration: none;
    color: #555;
    font-size: 12px; /* 글자 크기 절반으로 줄임 */
    margin-left: 15px;
    font-weight: 500;

    &:hover {
      color: #000;
    }
  }
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: none; /* 배경 제거 */

  a {
    text-decoration: none;
    color: #222;
    font-weight: bold;
    margin: 0 10px;

    &:hover {
      color: #000;
    }
  }
`;

const Logo = styled.div`
  img {
    width: 100px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

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
const LogoImage = styled.img`
  width: 100px;
  background: none;
  display: block;
`;

const Header: React.FC = () => {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false); // SearchModal 상태 추가

  return (
    <HeaderContainer>
      {/* 상단 네비게이션 */}
      <TopNav>
        <Link to="/support">고객센터</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/favorites">관심</Link>
        <Link to="#" onClick={() => setNotificationModalOpen(true)}>
          알림
        </Link>
        <Link to="/login">로그인</Link>
      </TopNav>

      {/* 하단 네비게이션 */}
      <BottomNav>
        <Logo>
          <Link to="/">
            {/* <img src="/Fream.png" alt="KREAM Logo" /> */}
            <LogoImage src="/Fream.png" alt="KREAM Logo" />
          </Link>
        </Logo>
        <Nav>
          <Link to="/">HOME</Link>
          <Link to="/style">STYLE</Link>
          <Link to="/shop">SHOP</Link>
          <Icon onClick={() => setSearchModalOpen(true)}>
            {" "}
            {/* 돋보기 클릭 */}
            <FiSearch />
          </Icon>
          <Icon>
            <FiShoppingBag />
          </Icon>
        </Nav>
      </BottomNav>

      {isNotificationModalOpen && (
        <NotificationModal closeModal={() => setNotificationModalOpen(false)} />
      )}
      {isSearchModalOpen && (
        <SearchModal closeModal={() => setSearchModalOpen(false)} />
      )}
    </HeaderContainer>
  );
};

export default Header;
