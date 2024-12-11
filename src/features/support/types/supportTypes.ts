export interface SupportItem {
  id: string;
  title: string;
  content: string;
}
export interface Notice {
  id: number;
  category: string;
  title: string;
  content: string;
  createdAt: string; // 생성 날짜 (ISO 8601 형식)
  updatedAt: string; // 수정 날짜 (ISO 8601 형식)
  files?: string[]; // 첨부 파일 URL 배열 (옵션)
}

// API 응답에서 사용될 공지사항 데이터 형식
export interface NoticeResponseDto {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: string; // 생성 날짜 (ISO 8601 형식)
  updatedAt: string; // 수정 날짜 (ISO 8601 형식)
  files?: string[]; // 첨부 파일 URL 배열 (옵션)
}

// 공통 페이징 응답 형식
export interface PageResponse<T> {
  content: T[]; // 현재 페이지의 데이터 배열
  totalElements: number; // 전체 데이터 개수
  totalPages: number; // 전체 페이지 수
  size: number; // 페이지당 데이터 개수
  number: number; // 현재 페이지 (0부터 시작)
  first: boolean; // 첫 번째 페이지 여부
  last: boolean; // 마지막 페이지 여부
}

// 공지사항 페이징 응답 형식
export type NoticePageResponse = PageResponse<NoticeResponseDto>;

export interface DummyData {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Notice[];
}

export const categoryMapping: Record<string, string> = {
  전체: "ALL",
  공지: "ANNOUNCEMENT",
  이벤트: "EVENT",
  "서비스 안내": "SERVICE",
  기타: "OTHERS",
};
