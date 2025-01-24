import React from "react";
import styled from "styled-components";

interface FilterModalProps {
  open: boolean; // 모달 오픈 여부
  onClose: () => void; // 닫기 함수
}

const FilterModal: React.FC<FilterModalProps> = ({ open, onClose }) => {
  if (!open) return null; // open이 false면 null 리턴

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalContainer>
          {/* 배경 클릭으로 닫기 */}
          <ModalBackground
            onClick={() => {
              console.log("Background clicked!"); // 클릭 이벤트 확인
              onClose(); // 모달 닫기
            }}
          />
          {/* 실제 컨텐츠 */}
          <ModalInner>
            {/* 닫기 버튼 */}
            <CloseButton onClick={onClose}>X</CloseButton>
            <ModalHeader>
              <h2 className="title">필터</h2>
            </ModalHeader>

            <ModalContent>
              {/* 아래는 예시: 아우터/상의/신발 등 카테고리 섹션 */}
              <div className="filter-section">
                <div className="section-header">
                  <h3>카테고리</h3>
                  <button className="btn_multiple">모두 선택</button>
                </div>
                <div className="section-content">
                  {/* 필터 칩들 */}
                  <label className="bubble">
                    <input type="checkbox" />
                    <div>
                      <button className="filter_button">바람막이</button>
                    </div>
                  </label>
                  <label className="bubble">
                    <input type="checkbox" />
                    <div>
                      <button className="filter_button">롱 코트</button>
                    </div>
                  </label>
                  {/* ... 계속 반복 */}
                </div>
              </div>

              {/* 성별 */}
              <div className="filter-section">
                <div className="section-header">
                  <h3>성별</h3>
                </div>
                <div className="section-content">
                  <label className="bubble">
                    <input type="radio" name="gender" />
                    <div>
                      <button className="filter_button">남성</button>
                    </div>
                  </label>
                  <label className="bubble">
                    <input type="radio" name="gender" />
                    <div>
                      <button className="filter_button">여성</button>
                    </div>
                  </label>
                  <label className="bubble">
                    <input type="radio" name="gender" />
                    <div>
                      <button className="filter_button">키즈</button>
                    </div>
                  </label>
                </div>
              </div>

              {/* 색상 / 혜택/할인 / 브랜드 / 컬렉션 / 사이즈 / 가격대 ... 
                  여기서는 구조만 예시로 표시
              */}
            </ModalContent>

            <ModalFooter>
              <button className="btn_reset">초기화</button>
              <button className="btn_submit">369,088개 상품보기</button>
            </ModalFooter>
          </ModalInner>
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default FilterModal;

/* ===========================
     styled-components
   =========================== */
const ModalOverlay = styled.div`
  /* 전체 화면 덮는 오버레이 */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000; /* 페이지 위를 덮는 가장 큰 z-index */
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ModalContainer = styled.div`
  /* 레이어 자체 위치 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  width: 420px; /* PC 기준 예시 */
  background: transparent;
  display: flex;
  flex-direction: column;
  z-index: 2010; /* 배경(2000)보다 위 */
`;

const ModalBackground = styled.div`
  /* 회색 반투명 배경 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;

const ModalInner = styled.div`
  /* 실제 컨텐츠 부분 */
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 2010; 
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
`;

const ModalHeader = styled.div`
  text-align: center;
  padding: 18px 50px;
  border-bottom: 1px solid #eee;

  h2.title {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    line-height: 22px;
  }
`;

const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;

  .filter-section {
    margin-bottom: 24px;
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;

      h3 {
        font-size: 16px;
        font-weight: 600;
      }
      .btn_multiple {
        border: none;
        background: none;
        cursor: pointer;
        font-size: 14px;
        color: #888;
      }
    }
    .section-content {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      label.bubble {
        display: inline-flex;
        align-items: center;

        input {
          display: none;
        }
        div {
          button.filter_button {
            background-color: #f4f4f4;
            border-radius: 30px;
            color: #4e4e4e;
            cursor: pointer;
            font-size: 13px;
            border: 1px solid #f0f0f0;
            padding: 0 8px;
            height: 30px;
          }
        }
      }
    }
  }
`;

const ModalFooter = styled.div`
  border-top: 1px solid #eee;
  padding: 16px;
  display: flex;
  gap: 8px;

  .btn_reset {
    flex: 0 0 auto;
    background-color: #f4f4f4;
    color: #222;
    border: none;
    border-radius: 18px;
    width: 80px;
    height: 40px;
    cursor: pointer;
  }
  .btn_submit {
    flex: 1;
    border-radius: 18px;
    background-color: #000;
    color: #fff;
    border: none;
    height: 40px;
    cursor: pointer;
  }
`;
