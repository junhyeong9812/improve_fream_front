import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

// 레이어 배경 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(34, 34, 34, 0.5);
  z-index: 1010;
`;

// 모달 컨테이너
const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  width: 448px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`;

// 닫기 버튼 스타일
const CloseButton = styled(FiX)`
  position: absolute;
  top: 14px;
  right: 20px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

// 제목 스타일
const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

// 인풋박스 스타일
const InputBox = styled.div<{ hasError?: boolean }>`
  padding: 16px 0;
  position: relative;

  h4 {
    font-size: 13px;
    color: ${(props) => (props.hasError ? "#f15746" : "#222")};
    letter-spacing: -0.07px;
  }

  input {
    border: none; /* 모든 방향의 보더 제거 */
    border-bottom: 1px solid
      ${(props) => (props.hasError ? "#f15746" : "#ebebeb")};
    font-size: 15px;
    padding: 8px 0;
    width: 100%;
    outline: none;
    color: #222;
  }

  p {
    color: #f15746;
    font-size: 11px;
    line-height: 16px;
    position: absolute;
    display: ${(props) => (props.hasError ? "block" : "none")};
  }
`;

// 모달 컴포넌트
const AddAddressModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 에러 상태
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateName = () => {
    const isValid = name.length >= 2 && name.length <= 50;
    setNameError(!isValid);
  };

  const validatePhoneNumber = () => {
    const isValid = /^010\d{8}$/.test(phoneNumber);
    setPhoneError(!isValid);
  };

  const handleSubmit = () => {
    validateName();
    validatePhoneNumber();

    if (!nameError && !phoneError) {
      alert("주소가 성공적으로 추가되었습니다.");
      onClose();
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose} />
        <ModalTitle>새 주소 추가</ModalTitle>

        {/* 이름 입력 */}
        <InputBox hasError={nameError}>
          <h4>이름</h4>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />
          <p>올바른 이름을 입력해주세요.(2자~50자)</p>
        </InputBox>

        {/* 휴대폰 번호 입력 */}
        <InputBox hasError={phoneError}>
          <h4>휴대폰 번호</h4>
          <input
            type="text"
            placeholder="01012345678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={validatePhoneNumber}
          />
          <p>정확한 휴대폰 번호를 입력해주세요.</p>
        </InputBox>

        {/* 확인 버튼 */}
        <button
          onClick={handleSubmit}
          style={{ marginTop: "24px", padding: "8px 16px" }}
        >
          추가하기
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddAddressModal;
