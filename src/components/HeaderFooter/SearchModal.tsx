import React, { useState } from "react";
import styled from "styled-components";

const FullScreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff; /* 모달이 전체 화면을 덮음 */
  z-index: 9999;
  overflow-y: auto;
`;

const SearchHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-bottom: 2px solid #000;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Section = styled.div`
  margin: 30px 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 14px;
  color: #333;

  button {
    background: none;
    border: none;
    font-size: 12px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  font-size: 14px;
  color: #333;
`;

const ListItem = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 14px;

  span {
    font-size: 12px;
    color: red;
    margin-left: 5px;
  }
`;

interface SearchModalProps {
  closeModal: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ closeModal }) => {
  const [recentSearches, setRecentSearches] = useState(["아이템 포켓몬"]);
  const recommendedSearches = [
    "스테이지 파이터",
    "나이키 에어포스",
    "검정 패팅",
    "에어포스 카카오",
  ];
  const popularSearches = [
    { text: "팔라스 어그", isNew: false },
    { text: "킨", isNew: false },
    { text: "바지", isNew: false },
    { text: "뉴발", isNew: true },
    { text: "사카이", isNew: true },
  ];
  const popularCollabs = [
    "슈프림 x 조던",
    "플레르 x 베르세르크",
    "나이키 x 녹타",
  ];

  const handleTagClick = (tag: string) => {
    console.log("Search:", tag);
  };

  const handleDeleteTag = (tag: string) => {
    setRecentSearches(recentSearches.filter((item) => item !== tag));
  };

  return (
    <FullScreenModal>
      <SearchHeader>
        <SearchInput placeholder="브랜드, 상품, 프로필, 태그 등" />
        <CloseButton onClick={closeModal}>✖</CloseButton>
      </SearchHeader>
      <Section>
        <h3>
          최근 검색어{" "}
          <button onClick={() => setRecentSearches([])}>지우기</button>
        </h3>
        <TagContainer>
          {recentSearches.map((tag) => (
            <Tag key={tag}>
              {tag}
              <button onClick={() => handleDeleteTag(tag)}>✖</button>
            </Tag>
          ))}
        </TagContainer>
      </Section>
      <Section>
        <h3>추천 검색어</h3>
        <TagContainer>
          {recommendedSearches.map((tag) => (
            <Tag key={tag} onClick={() => handleTagClick(tag)}>
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </Section>
      <Section>
        <h3>인기 검색어</h3>
        <GridContainer>
          {popularSearches.map((item, index) => (
            <ListItem key={index}>
              {index + 1}. {item.text}
              {item.isNew && <span>NEW</span>}
            </ListItem>
          ))}
        </GridContainer>
      </Section>
      <Section>
        <h3>인기 콜라보</h3>
        <GridContainer>
          {popularCollabs.map((text, index) => (
            <div key={index}>
              {index + 1}. {text}
            </div>
          ))}
        </GridContainer>
      </Section>
    </FullScreenModal>
  );
};

export default SearchModal;
