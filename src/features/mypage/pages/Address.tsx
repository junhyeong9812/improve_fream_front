import React, { useState } from "react";
import styled from "styled-components";
import AddAddressModal from "../components/AddAddressModal";

const PageContainer = styled.div`
  padding: 0 20px;
`;

const PageHeader = styled.div`
  display: flex;
  padding-bottom: 16px;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.36px;
  margin: 0;
`;
const Title_box = styled.div`
  font-size: 24px;
  letter-spacing: -0.36px;
`;

const AddressBtnBox = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 30px;

  /* a 태그에 대한 스타일링 */
  a.btn {
    border: 1px solid #222;
    border-radius: 10px;
    font-size: 12px;
    height: 34px;
    letter-spacing: -0.06px;
    line-height: 32px;
    margin-right: 0;
    padding: 0 14px;
    align-items: center;
    display: flex;
    justify-content: center;
    color: rgba(34, 34, 34, 0.8);
    background-color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`;
const AddressBtn_span = styled.span`
  font-size: 12px;
  height: 34px;
  letter-spacing: -0.06px;
  line-height: 32px;
  color: rgba(34, 34, 34, 0.8);
`;

const Address: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <PageContainer>
      {/* 페이지 헤더 */}
      <PageHeader>
        <Title_box>
          <Title>주소록</Title>
        </Title_box>
        <AddressBtnBox>
          <a
            href="#"
            className="btn"
            onClick={(e) => {
              e.preventDefault(); // 기본 앵커 태그 동작 방지
              setIsModalOpen(true); // 모달 상태 변경
            }}
          >
            <AddressBtn_span>+ 새 배송지 추가</AddressBtn_span>
          </a>
        </AddressBtnBox>
      </PageHeader>
      {isModalOpen && <AddAddressModal onClose={() => setIsModalOpen(false)} />}
    </PageContainer>
  );
};

export default Address;
