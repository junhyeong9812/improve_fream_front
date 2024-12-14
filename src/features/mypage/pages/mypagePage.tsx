import React from "react";
import styled from "styled-components";
import MyHomePage from "./myHomePage";

// 공통 스타일의 Link 컴포넌트
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

// 컨테이너 스타일
const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 40px 40px 160px;
`;

// 사이드바 스타일
const Sidebar = styled.div`
  margin-right: 20px;
  width: 180px;
`;

// sub_List 스타일
const SubList = styled.div<{ marginTop?: boolean }>`
  margin-top: ${(props) => (props.marginTop ? "40px" : "0")};
`;

// 사이드바 타이틀 스타일
const SidebarTitle = styled.strong`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.27px;
  line-height: 22px;
  margin-bottom: 12px;
  vertical-align: top;
`;

// 리스트 컨테이너
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// 리스트 아이템 스타일
const ListItem = styled.li`
  margin-top: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-size: 15px;
  letter-spacing: -0.15px;
  line-height: 18px;
`;

// 메인 콘텐츠 영역 스타일
const MainContent = styled.div`
  flex: 1;
`;

// Mypage 컴포넌트
const MypagePage: React.FC = () => {
  // 사이드바 메뉴 데이터
  const shoppingMenu = [
    { name: "구매 내역", href: "/mypage/purchase" },
    { name: "판매 내역", href: "/mypage/sales" },
    { name: "보관 판매", href: "/mypage/storage" },
    { name: "관심", href: "/mypage/favorites" },
  ];

  const infoMenu = [
    { name: "로그인 정보", href: "/mypage/login-info" },
    { name: "프로필 관리", href: "/mypage/profile" },
    { name: "주소록", href: "/mypage/address" },
    { name: "결제 정보", href: "/mypage/payment-info" },
    { name: "판매 정상 계좌", href: "/mypage/account" },
    { name: "현금영수증 정보", href: "/mypage/cash-receipt" },
  ];

  return (
    <Container>
      <Sidebar>
        {/* 쇼핑 정보 */}
        <SubList>
          <SidebarTitle>쇼핑 정보</SidebarTitle>
          <List>
            {shoppingMenu.map((item) => (
              <ListItem key={item.href}>
                <StyledLink href={item.href}>{item.name}</StyledLink>
              </ListItem>
            ))}
          </List>
        </SubList>

        {/* 내 정보 */}
        <SubList marginTop>
          <SidebarTitle>내 정보</SidebarTitle>
          <List>
            {infoMenu.map((item) => (
              <ListItem key={item.href}>
                <StyledLink href={item.href}>{item.name}</StyledLink>
              </ListItem>
            ))}
          </List>
        </SubList>
      </Sidebar>
      <MainContent>
        <MyHomePage />
      </MainContent>
    </Container>
  );
};

export default MypagePage;
