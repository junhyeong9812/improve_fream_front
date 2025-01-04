import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome, FiBell } from "react-icons/fi";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 420px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  font-weight: bold;

  button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;

const ModalNav = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;

  button {
    padding: 8px 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: #222;

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      border-bottom: 2px solid #222;
    }
  }
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 8px;

  button {
    background: #f5f5f5;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #ddd;
    }
  }
`;

const NotificationSettings = styled.div`
  padding: 16px;
  font-size: 14px;
  color: #888;
`;

const NotificationSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;

  h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #ddd;

  svg {
    margin-right: 12px;
    font-size: 16px;
    color: #222;
  }

  div {
    flex: 1;

    p {
      margin: 0 0 8px;
      font-size: 14px;
      font-weight: bold;
    }

    span {
      font-size: 12px;
      color: #888;
    }
  }
`;

const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #888;
  text-align: center;

  svg {
    font-size: 48px;
    margin-bottom: 16px;
  }

  p {
    margin: 4px 0;
  }
`;

interface NotificationModalProps {
  closeModal: () => void;
}

const NoData: React.FC<{ tab: string }> = ({ tab }) => (
  <NoDataContainer>
    <FiBell />
    <p>{tab === "SHOP" ? "쇼핑 알림" : "스타일 알림"}</p>
    <p>
      {tab === "SHOP"
        ? "쇼핑에 대한 알림은 여기에 표시됩니다."
        : "스타일에 대한 알림은 여기에 표시됩니다."}
    </p>
  </NoDataContainer>
);

const NotificationModal: React.FC<NotificationModalProps> = ({
  closeModal,
}) => {
  const [activeTab, setActiveTab] = useState("SHOP");
  const notifications =
    activeTab === "SHOP"
      ? [
          { id: 1, message: "로그인 보안 알림", time: "10시간 전" },
          { id: 2, message: "상품이 추가되었습니다.", time: "2024년 6월 14일" },
        ]
      : []; // 스타일에 데이터가 없을 경우 빈 배열

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <button onClick={closeModal}>✖</button>
          <span>알림</span>
          <Link to="/">
            <FiHome />
          </Link>
        </ModalHeader>
        <ModalNav>
          <button
            className={activeTab === "SHOP" ? "active" : ""}
            onClick={() => setActiveTab("SHOP")}
          >
            쇼핑
          </button>
          <button
            className={activeTab === "STYLE" ? "active" : ""}
            onClick={() => setActiveTab("STYLE")}
          >
            스타일
          </button>
        </ModalNav>
        {activeTab === "SHOP" && (
          <FilterButtons>
            {[
              "전체",
              "거래",
              "입찰",
              "보관판매",
              "관심/발매",
              "혜택",
              "기타",
            ].map((filter) => (
              <button key={filter}>{filter}</button>
            ))}
          </FilterButtons>
        )}
        <NotificationSettings>
          알림 설정 및 삭제는 앱에서 가능합니다.
        </NotificationSettings>
        {notifications.length > 0 ? (
          <NotificationSection>
            <h4>지난 알림</h4>
            {notifications.map((notification) => (
              <NotificationItem key={notification.id}>
                <FiBell />
                <div>
                  <p>{notification.message}</p>
                  <span>{notification.time}</span>
                </div>
              </NotificationItem>
            ))}
          </NotificationSection>
        ) : (
          <NoData tab={activeTab} />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default NotificationModal;
