import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  position: relative;
  overflow-y: auto;
  max-height: 80vh;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
    margin: 0;
    flex-grow: 1; /* 중앙 정렬을 유지하기 위해 공간 차지 */
    text-align: center; /* 텍스트 중앙 정렬 */
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  font-size: 14px;
  line-height: 1.6;
`;

interface FooterModalProps {
  isOpen: boolean;
  title: string;
  content: string | React.ReactNode;
  onClose: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={onClose}>&times;</button>
        </ModalHeader>
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FooterModal;
