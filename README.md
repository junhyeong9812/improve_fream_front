기존의 kream 클론 프로젝트에서 부족한 점을 고려하여 새롭게 그동안 습득한 내용을 바탕으로
리빌딩하는 프로젝트입니다.
<br>
기존 프로젝트 :
<br>
https://github.com/dlxodud123/fream_front
<br>
이번 프로젝트의 백엔드 주소:
<br>
https://github.com/junhyeong9812/Improve_Fream_Back
<br>

### 프로젝트 인원 및 역할
1차 개발 기간 : 24.12.9~24.12.20
<br>
김준형 : style / shop / search / 장바구니 / 고객센터 /마이페이지 /관심 / 알림 /header/footer
<br>
이태영 : home/ Login 

기본 프로젝트 예상도
```
src/
├── assets/                  # 이미지, 폰트, 아이콘 등 정적 파일
├── components/              # 재사용 가능한 공통 컴포넌트
│   ├── Button/
│   │   ├── Button.tsx       # 공통 버튼 컴포넌트
│   │   └── Button.test.tsx  # 테스트 파일
│   ├── Modal/
│   └── HeaderFooter/
│       ├── Header.tsx
│       └── Footer.tsx
├── features/                # 기능별 도메인 관리
│   ├── style/               # 스타일 페이지 (김준형)
│   │   ├── components/      # 도메인 전용 컴포넌트
│   │   ├── pages/           # 스타일 관련 페이지
│   │   ├── services/        # 스타일 관련 API 호출
│   │   └── types/           # 스타일 관련 타입 정의
│   ├── shop/                # 샵 관련 기능 (김준형)
│   ├── cart/                # 장바구니 기능 (김준형)
│   ├── support/             # 고객센터 (김준형)
│   ├── mypage/              # 마이페이지 (김준형)
│   ├── favorites/           # 관심 상품 페이지 (김준형)
│   ├── notifications/       # 알림 페이지 (김준형)
│   ├── home/                # 홈 페이지 (이태영)
│   │   ├── components/      # 홈 전용 컴포넌트
│   │   ├── pages/           # 홈 페이지 컴포넌트
│   │   └── services/        # 홈 관련 API 호출
│   └── login/               # 로그인/회원가입 페이지 (이태영)
│       ├── components/      # 로그인 전용 컴포넌트
│       ├── pages/           # 로그인 페이지 컴포넌트
│       ├── services/        # 로그인 관련 API 호출
│       └── types/           # 로그인 관련 타입 정의
├── hooks/                   # 공통 커스텀 훅
│   ├── useFetch.ts          # API 호출 커스텀 훅
│   ├── useDebounce.ts       # 검색 필터링을 위한 디바운스 훅
│   └── useLocalStorage.ts   # 로컬 스토리지 관리 훅
├── layouts/                 # 공통 레이아웃 관리
│   ├── MainLayout.tsx       # Header + Footer 포함 레이아웃
│   └── AuthLayout.tsx       # 로그인/회원가입 레이아웃
├── pages/                   # 최상위 라우팅 페이지
│   ├── Home.tsx             # 홈 페이지 (이태영)
│   ├── Login.tsx            # 로그인 페이지 (이태영)
│   ├── Style.tsx            # 스타일 페이지 (김준형)
│   ├── Cart.tsx             # 장바구니 페이지 (김준형)
│   ├── Support.tsx          # 고객센터 페이지 (김준형)
│   ├── Favorites.tsx        # 관심 상품 페이지 (김준형)
│   └── Notifications.tsx    # 알림 페이지 (김준형)
├── routes/                  # 라우터 관리
│   └── AppRoutes.tsx        # 전체 라우트 정의
├── services/                # 공통 API 로직
│   ├── apiClient.ts         # Axios 인스턴스 설정
│   ├── productApi.ts        # 상품 관련 API
│   ├── userApi.ts           # 사용자 관련 API
│   └── cartApi.ts           # 장바구니 관련 API
├── store/                   # 전역 상태 관리
│   ├── index.ts             # Redux store 설정
│   └── slices/              # Redux 슬라이스
│       ├── productSlice.ts  # 상품 관련 상태 관리
│       ├── userSlice.ts     # 사용자 관련 상태 관리
│       └── cartSlice.ts     # 장바구니 상태 관리
├── styles/                  # 글로벌 스타일 및 테마 설정
│   ├── GlobalStyle.ts       # 전역 스타일 설정
│   └── theme.ts             # 테마 파일
├── types/                   # 전역 타입 정의
│   ├── api.d.ts             # API 응답 타입 정의
│   ├── user.d.ts            # 사용자 관련 타입 정의
│   └── product.d.ts         # 상품 관련 타입 정의
├── utils/                   # 유틸리티 함수
│   ├── formatDate.ts        # 날짜 포맷 함수
│   ├── validateForm.ts      # 폼 검증 유틸리티
│   └── debounce.ts          # 디바운스 함수
├── App.tsx                  # 최상위 컴포넌트
├── index.tsx                # ReactDOM 렌더링
└── react-app-env.d.ts       # TypeScript 환경 파일
```
