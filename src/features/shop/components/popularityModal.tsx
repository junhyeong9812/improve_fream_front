import React from "react";
import styled from "styled-components";

interface PopularityModalProps {
  open: boolean; // 모달 오픈 여부
  onClose: () => void; // 닫기 함수
}

const popularityList = [
  "인기순", "남성 인기순", "여성 인기순", "할인물순", "프리미엄 높은순",
  "프리미엄 낮은순", "낮은 구매가순", "높은 구매가순", "높은 판매가순",
  "관심 많은순", "스타일 많은순", "발매일순"
];

const PopularityModal: React.FC<PopularityModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  // 모달의 외부 영역을 클릭하면 모달을 닫는다.
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // 이벤트 버블링 방지
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={handleModalClick}>
        <div className="popularity">
          {popularityList.map((item, index) => (
            <div key={index} className="popularity-item">
              {item}
            </div>
          ))}
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
position: fixed;
top: 0; /* 화면 상단 */
left: 0; /* 화면 왼쪽 */
width: 100%;
height: 100%;
display: flex;
z-index: 9999; 
`;

const ModalContainer = styled.div`
background-color: #fff;
border: 1px solid #ebebeb;
border-radius: 10px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
overflow: hidden;
position: absolute;

position: fixed;
top: 42.6%;
left: 82.7%;
transform: translate(-50%, -50%); /* 정확하게 중앙 정렬 */

  .popularity {
    display: block;
    font-size: 14px;
  }
  
  .popularity-item {
    padding: 12px 48px 12px 16px;
    cursor: pointer;
    margin: 0;
  }
  .popularity-item:hover {
    background-color: #f0f0f0; /* 커서 올렸을 때 연회색 배경 */
  }
`;

export default PopularityModal;