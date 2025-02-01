import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import FooterModal from "./footerModal/FooterModal";
import { policies } from "./policies"; // 예시 데이터
import "./Footer.css";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalContent("");
  };

  const handleClick =
    (title: string, content: string) =>
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); // 기본 이동 막기
      openModal(title, content);
    };

  return (
    <footer className="footer-container">
      {/* 상단 섹션 */}
      <div className="section">
        {/* 고객센터 */}
        <div className="customer-center">
          <h4>
            고객센터
            <span className="phone-number">1588-0000</span>
          </h4>
          <div className="time-box">
            <div>
              <dt className="time-term">운영시간</dt>
              <span>평일 10:00 - 18:00 (토·일, 공휴일 휴무)</span>
            </div>
            <div>
              <dt className="time-term">점심시간</dt>
              <span>평일 13:00 - 14:00</span>
            </div>
          </div>
          <p>1:1 문의하기는 앱에서만 가능합니다.</p>
          <Link to="/support/faq" className="faq-link">
            자주 묻는 질문
          </Link>
        </div>

        {/* 푸터 메뉴 */}
        <div className="footer-menu">
          <div className="menu-box">
            <h4 className="menu-title">이용안내</h4>
            <ul className="menu-list">
              {policies.map((policy) => (
                <li className="menu-item" key={policy.id}>
                  <a
                    href={`#${policy.id}`}
                    onClick={handleClick(policy.title, policy.content)}
                  >
                    {policy.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-box">
            <h4 className="menu-title">고객지원</h4>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/support/notice">공지사항</Link>
              </li>
              <li className="menu-item">
                <Link to="/service-info">서비스 소개</Link>
              </li>
              <li className="menu-item">
                <Link to="/store-info">스토어 안내</Link>
              </li>
              <li className="menu-item">
                <Link to="/seller-visit">판매자 방문 접수</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 추가 링크 섹션 */}
      <div className="links-section">
        <div>
          <Link to="/info">회사소개</Link>
          <Link to="/recruit">인재채용</Link>
          <Link to="/proposal">제휴제안</Link>
          <Link to="/terms">이용약관</Link>
          <Link to="/privacy">개인정보처리방침</Link>
        </div>
        <div className="social-icons">
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
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="bottom-info">
        <p>
          크림 주식회사 · 대표 000 | 사업자등록번호: 000-00-00000{" "}
          <a href="/business-info">사업자정보확인</a>
        </p>
        <p>
          통신판매업: 제 2021-00000호 | 사업장소재지: 000시 00구 00동 00길 00
          <br />
          호스팅서비스: 네이버 클라우드 (주)
        </p>
        <p>
          신한은행 채무지급보증 안내: 당사는 고객님의 현금 결제 금액에 대해
          신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
          <a href="/service-security">서비스 가입 사실 확인</a>
        </p>
      </div>

      {/* 모바일 전용 카피라이트 */}
      <div className="copyright">© Fream</div>

      {/* 모달 */}
      <FooterModal
        isOpen={isModalOpen}
        title={modalTitle}
        content={modalContent}
        onClose={closeModal}
      />
    </footer>
  );
};

export default Footer;
