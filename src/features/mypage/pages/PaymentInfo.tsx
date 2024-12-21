import React, { useState } from "react";
import styled from "styled-components";
import AddCardModal from "../components/AddCardModal";

const PageContainer = styled.div`
  padding: 0 20px;
`;

const PageHeader = styled.div`
  display: flex;
  border-bottom: 3px solid #222;
  padding: 5px 0 22px;
`;
const TitleContainer = styled.div`
  display: block;
  unicode-bidi: isolate;
  font-size: 24px;
  letter-spacing: -0.36px;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.36px;
  margin: 0;
`;
const SubTitle = styled.p`
  color: rgba(34, 34, 34, 0.5);
  font-size: 12px;
  letter-spacing: -0.005em;
  margin: 0;
`;
const SubTitleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 30px;
  padding-top: 4px;
`;

const AddButton = styled.a`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  color: rgba(34, 34, 34, 0.8);
  cursor: pointer;
  border: 1px solid #222;
  border-radius: 10px;
  font-size: 12px;
  height: 34px;
  letter-spacing: -0.06px;
  line-height: 32px;
  margin-right: 0;
  padding: 0 14px;
  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const PaymentInfo: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);
  return (
    <PageContainer>
      {/* 페이지 헤더 */}
      <PageHeader>
        <TitleContainer>
          결제 정보
          <SubTitle>
            수수료(페널티, 착불배송비 등)가 정산되지 않을 경우, 별도 고지 없이
            해당 금액을 결제 시도할 수 있습니다.
          </SubTitle>
        </TitleContainer>
        <SubTitleButtonContainer>
          <AddButton onClick={openModal}>
            <span>+ 새 카드 추가하기</span>
          </AddButton>
        </SubTitleButtonContainer>
      </PageHeader>
      {isModalOpened && (
        <AddCardModal isOpened={isModalOpened} onClose={closeModal} />
      )}
    </PageContainer>
  );
};

export default PaymentInfo;
