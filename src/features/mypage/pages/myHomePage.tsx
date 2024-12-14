import React from "react";
import styled from "styled-components";

// 메인 컨테이너 스타일
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// my_home 컨테이너 스타일
const MyHome = styled.div`
  flex: 1;
`;

// user_membership 스타일
const UserMembership = styled.div`
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 110px;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center; /* 반응형에서도 세로 정렬 유지 */
    justify-content: space-between; /* 내부 요소 간격 분배 */
  }
`;

// user_detail 스타일
const UserDetail = styled.div`
  border-bottom: 8px solid #f0f0f0;
  display: flex;
  flex: 1;
  padding: 16px 24px;

  @media (min-width: 768px) {
    border-bottom: none;
  }
`;

// user_thumb 스타일
const UserThumb = styled.div`
  border-radius: 50%;
  flex-shrink: 0;
  height: 60px;
  margin-right: 12px;
  position: relative;
  width: 60px;

  &::after {
    border: 1px solid rgba(34, 34, 34, 0.05);
    border-radius: 50%;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

// thumb_img 스타일
const ThumbImg = styled.img`
  border-radius: 100%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

// user_info 스타일
const UserInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

// info_box 스타일
const InfoBox = styled.div`
  flex: 1;
`;

// info_buttons 스타일
const InfoButtons = styled.div`
  padding-top: 12px;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

// Name 스타일
const Name = styled.strong`
  color: #000;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.27px;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Email 스타일
const Email = styled.p`
  color: rgba(34, 34, 34, 0.5);
  font-size: 14px;
  letter-spacing: -0.05px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 버튼 스타일
const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: rgba(34, 34, 34, 0.8);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid #d3d3d3;
  height: 36px;
  line-height: 34px;
  border-radius: 10px;
  font-size: 12px;
  padding: 0 14px;

  &.btn_my_style {
    margin-left: 7px;
    align-self: flex-start;
  }
`;

// MyHomePage 컴포넌트
const MyHomePage: React.FC = () => {
  return (
    <MainContent>
      <MyHome>
        <UserMembership>
          <UserDetail>
            {/* 사용자 썸네일 */}
            <UserThumb>
              <ThumbImg
                src="https://via.placeholder.com/90" // Placeholder 이미지
                alt="User Thumbnail"
              />
            </UserThumb>

            {/* 사용자 정보 */}
            <UserInfo>
              <InfoBox>
                <Name>홍길동</Name>
                <Email>hong@example.com</Email>
              </InfoBox>
              <InfoButtons>
                <Button href="/mypage/profile">프로필 관리</Button>
                <Button href="/mypage/style" className="btn_my_style">
                  내 스타일
                </Button>
              </InfoButtons>
            </UserInfo>
          </UserDetail>
        </UserMembership>
      </MyHome>
    </MainContent>
  );
};

export default MyHomePage;
