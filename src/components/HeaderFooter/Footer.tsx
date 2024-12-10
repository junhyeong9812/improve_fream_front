import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

const FooterContainer = styled.footer`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 50px 40px;
  border-top: 1px solid #ebebeb;
  width: 100%;

  @media (max-width: 960px) {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  @media (max-width: 960px) {
    display: none; /* 960px 이하에서 숨김 */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 16px;
    letter-spacing: -0.16px;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
  }

  ul {
    padding-top: 16px;
    list-style: none;
  }

  li {
    a {
      color: rgba(34, 34, 34, 0.5);
      font-size: 14px;
      letter-spacing: -0.21px;
      text-decoration: none;

      &:hover {
        color: #000;
      }
    }
  }
`;

const CustomerCenter = styled.div`
  text-align: left;

  h4 {
    font-size: 16px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;
  }

  p {
    margin: 5px 0;
    font-size: 12px;
  }

  .phone-number {
    margin-left: 4px;
    letter-spacing: normal;
  }

  button {
    background-color: #222;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }
`;

const LinksSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #222;
    font-size: 14px;
    margin-right: 15px;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 960px) {
    display: none; /* 960px 이하에서 숨김 */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #555;
    font-size: 20px;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 960px) {
    display: none; /* 960px 이하에서 숨김 */
  }
`;

const BottomInfo = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #999;

  p {
    line-height: 1.6;
    margin: 5px 0;

    a {
      text-decoration: none;
      color: #222;

      &:hover {
        color: #000;
      }
    }
  }

  @media (max-width: 960px) {
    display: none; /* 960px 이하에서 숨김 */
  }
`;

const CopyRight = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #222;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* 기본 Footer 섹션 */}
      <Section>
        <Column>
          <h4>이용안내</h4>
          <ul>
            <li>
              <a href="/review-standards">검수 기준</a>
            </li>
            <li>
              <a href="/policy">이용정책</a>
            </li>
            <li>
              <a href="/penalty-policy">패널티 정책</a>
            </li>
            <li>
              <a href="/community-guidelines">커뮤니티 가이드라인</a>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>고객지원</h4>
          <ul>
            <li>
              <a href="/notices">공지사항</a>
            </li>
            <li>
              <a href="/service-info">서비스 소개</a>
            </li>
            <li>
              <a href="/store-info">스토어 안내</a>
            </li>
            <li>
              <a href="/seller-visit">판매자 방문 접수</a>
            </li>
          </ul>
        </Column>
        <CustomerCenter>
          <h4>
            고객센터
            <span className="phone-number">1588-0000</span>
          </h4>
          <p>운영시간 평일 10:00 - 18:00 (토·일, 공휴일 휴무)</p>
          <p>점심시간 평일 13:00 - 14:00</p>
          <p>1:1 문의하기는 앱에서만 가능합니다.</p>
          <button>자주 묻는 질문</button>
        </CustomerCenter>
      </Section>

      {/* 추가 링크 섹션 */}
      <LinksSection>
        <div>
          <a href="/info">회사소개</a>
          <a href="/recruit">인재채용</a>
          <a href="/proposal">제휴제안</a>
          <a href="/terms">이용약관</a>
          <a href="/privacy">개인정보처리방침</a>
        </div>
        <SocialIcons>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.kakaocorp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiKakaoTalkFill />
          </a>
        </SocialIcons>
      </LinksSection>

      {/* Footer 하단 정보 */}
      <BottomInfo>
        <p>
          크림 주식회사 · 대표 000 | 사업자등록번호: 000-00-00000{" "}
          <a href="/business-info">사업자정보확인</a>
        </p>
        <p>
          통신판매업: 제 2021-00000호 | 사업장소재지: 000시 00구 00동 00길 00{" "}
          <br />
          호스팅서비스: 네이버 클라우드 (주)
        </p>
        <p>
          신한은행 채무지급보증 안내: 당사는 고객님의 현금 결제 금액에 대해
          신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
          <a href="/service-security">서비스 가입 사실 확인</a>
        </p>
      </BottomInfo>

      {/* 모바일 전용 카피라이트 */}
      <CopyRight>© Fream</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
