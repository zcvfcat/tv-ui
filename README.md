# 동영상 플랫폼

## 마크업

피그마에서 들고 오는게 좋을 듯... 만들면 시간 걸림;;

## 사용 기술

### HTTP 클라이언트 - 통신 모듈

1. [axios](https://www.npmjs.com/package/axios)

### 데이터 상태 관리

1. [react-query](https://www.npmjs.com/package/@tanstack/react-query)
2. [swr](https://www.npmjs.com/package/swr)

### 전역 상태 관리

1. [jotai](https://www.npmjs.com/package/jotai)
2. [recoil](https://www.npmjs.com/package/recoil)

### 유틸리티 - 배열, 객체, 함수 등 다양한 기능 편리하게 사용 가능

1. [lodash](https://www.npmjs.com/package/lodash)
2. [underscore](https://www.npmjs.com/package/underscore)
3. [RxJS](https://www.npmjs.com/package/rxjs)

### 동영상

1. [video.js](https://www.npmjs.com/package/video.js)

### 스크롤링

1. [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)

### 폼 태그

1. [react-hook-form](https://www.npmjs.com/package/react-hook-form)

### 검증 (validation)

1. [zod](https://www.npmjs.com/package/zod)

### aws-sdk

1. [aws-sdk](https://www.npmjs.com/package/aws-sdk)

### git-hook

in package.json

"husky": "8.0.0"

tsc 빌드 테스트
코드 문법 체크 및 코드 서식화
문서 파일 서식화

"lint-staged": {
    "**/*.ts?(x)": "bash -c tsc",
    "src/**/*.{js,jsx,ts,tsx}": [
        "eslint --fix",
        "prettier --write"
    ],
    "**/*.{md,json}": "prettier --write"
}