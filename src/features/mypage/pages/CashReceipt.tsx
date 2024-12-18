import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 0 20px;
`;

const PageHeader = styled.div`
  display: flex;
  border-bottom: 3px solid #222;
  padding-bottom: 16px;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.36px;
  margin: 0;
`;
const CashReceipt: React.FC = () => {
  return (
    <PageContainer>
      {/* 페이지 헤더 */}
      <PageHeader>
        <Title>현금영수증 정보</Title>
      </PageHeader>
    </PageContainer>
  );
};

export default CashReceipt;
