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

  //모달의 외부 영역을 클릭하면 모달을 닫는다.
  const handleModalClick = (e: React.MouseEvent) => {
    console.log("와다다다다다"); // 클릭 로그
    e.stopPropagation();  // 이벤트 버블링 방지
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
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
// position: absolute; /* 부모 컨테이너 기준 위치 고정 */
  // top: 110px; /* 원하는 위치 조정 */
  // left: 90%; /* 중앙 정렬 (수평) */
  // transform: translateX(-50%); /* 중앙 정렬 보정 */
  // width: 170px;
//   z-index: 999; /* 화면 위로 */


position: fixed; /* 화면 전체에 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0); /* 투명 배경 */
  z-index: 999; /* 모달 위로 */
`;

const ModalContainer = styled.div`
// background-color: #fff;
// border: 1px solid #ebebeb;
// border-radius: 10px;
// box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// overflow: hidden;


position: fixed; /* 화면(Viewport) 기준으로 위치 고정 */
  top: 110px; /* 원하는 위치 조정 */
  left: 50%; /* 화면의 중앙 정렬 */
  transform: translateX(-50%); /* 중앙 정렬 보정 */
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  width: 170px;
  z-index: 1000; /* 모달 컨텐츠가 오버레이 위에 표시 */



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