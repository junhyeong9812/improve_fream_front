import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";
import SearchBar from "../components/notice/SearchBar";
import CategoryTabs from "../components/notice/CategoryTabs";
import SupportList from "../components/notice/SupportList";
import dummyData from "../services/dummyData";

// 스타일 정의
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 40px 40px 160px;
  overflow: hidden;
`;

const Title = styled.div`
  border-bottom: 3px solid #222;
  padding-bottom: 16px;

  h3 {
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.36px;
  }
`;

const Pagination = styled.div`
  padding: 28px 0;
  text-align: center;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;

    &.active {
      font-weight: bold;
      background-color: #000;
      color: #fff;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

const NoDataContainer = styled.div`
  background-color: #fff;
  padding: 120px 0 100px;
  position: relative;
  text-align: center;
`;

const NoDataMessage = styled.p`
  color: rgba(34, 34, 34, 0.8);
  font-size: 16px;
  letter-spacing: -0.16px;
`;

const NoticePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword, category } = queryString.parse(location.search);
  const noticesPerPage = 10; // 한 페이지에 보여줄 데이터 개수

  // 필터링된 데이터 계산
  const filteredNotices = dummyData.content.filter((notice) => {
    if (keyword) {
      return notice.title.includes(keyword as string);
    }
    if (category) {
      return category === "전체" || notice.category === category;
    }
    return true;
  });

  // 현재 페이지에 해당하는 데이터 계산
  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const currentNotices = filteredNotices.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (query: string) => {
    setCurrentPage(1);
    navigate(`?keyword=${query}&list=true`);
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCurrentPage(1);
    navigate(`?category=${selectedCategory}&list=true`);
  };

  return (
    <Container>
      <Title>
        <h3>공지사항</h3>
      </Title>

      {location.pathname === "/support/notice" ? (
        <>
          {/* 검색창 */}
          <SearchBar onSearch={handleSearch} />

          {/* 카테고리 탭 */}
          {!keyword && (
            <CategoryTabs
              categories={["전체", "공지", "이벤트", "서비스 안내", "기타"]}
              activeCategory={category ? (category as string) : "전체"}
              onCategoryChange={handleCategoryChange}
            />
          )}

          {filteredNotices.length === 0 ? (
            <NoDataContainer>
              <NoDataMessage>검색하신 결과가 없습니다.</NoDataMessage>
            </NoDataContainer>
          ) : (
            <>
              <SupportList notices={currentNotices} />
              {/* Pagination */}
              <Pagination>
                <button onClick={() => handlePageChange(1)}>&laquo;</button>
                <button onClick={() => handlePageChange(currentPage - 1)}>
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)}>
                  &gt;
                </button>
                <button onClick={() => handlePageChange(totalPages)}>
                  &raquo;
                </button>
              </Pagination>
            </>
          )}
        </>
      ) : (
        <Outlet />
      )}
    </Container>
  );
};

export default NoticePage;
