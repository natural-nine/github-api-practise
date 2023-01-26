# 요약

```bash
    github-api를 활용하여 레포지토리, 유저 검색을 할 수 있습니다.
    typescript와 react-query를 연습하기 위해 만들어 보았습니다.
```
# 시현영상

1. 레포지토리 검색 및 무한스크롤
    - <img src="https://user-images.githubusercontent.com/92094314/207234457-e5e4c9ce-6396-41a2-8039-36018ab586ef.gif" alt="gif-1"/>


2. 레포지토리 sorting 분류
    - <img src="https://user-images.githubusercontent.com/92094314/207235335-c33751cd-9a54-4fbd-ae78-65d2e1f18910.gif" alt="gif-2">


3. 유저 검색 및 페이지네이션
   - <img src="https://user-images.githubusercontent.com/92094314/207234789-a2d6abab-6963-4a02-8315-cbbe21c43fa4.gif" alt="gif-3" />


4. 레포지토리, 유저 localStorage 에 저장
    - <img src="https://user-images.githubusercontent.com/92094314/207234976-f41ae668-715c-4dbc-9c16-8d21012dd60b.gif" alt="gif-4"/>


5. 다크모드
    - <img src="https://user-images.githubusercontent.com/92094314/207235465-09378805-508e-4ec9-ae7d-42405341c9d9.gif" alt="gif-5"/>

    

# 실행방법

```bash
   https://github.com/natural-nine/github-api-practise.git

   npm install

   npm start
```

## 주의사항

```bash
    클론 후 실행 시 토큰이 없기에 github 토큰 발급 후 실행해야 정상적으로 작동 됩니다.
    axios.ts -> Bearer ${개인토큰}
```

# 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3498db?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react"> <img src="https://img.shields.io/badge/reactquery-8e44ad?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/recoil-blue?style=for-the-badge&logo=recoil&logoColor=white"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/axios-FFCA28?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

### TypeScript
    정적타입을 지원하기에 컴파일 타임에 오류를 확인 할 수 있고 코드에 목적을 명시하기 때문에 버그를 사전에 제거할 수 있음
    또한 코드 자동완성이나 실행 전 피드백을 통하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있음
### ReactQuery
    리액트 쿼리의 최대 장점인 캐싱을 제공함 또한 loading, fetching, error 등 핸들링 가능

 

# 구현기능

1. `/` 페이지

    - 검색창 `option` 을 통해 레포지토리 및 유저를 검색합니다.
    - 검색된 레포지토리는 `useInfiniteQuery` 를 활용하여 무한스크롤을 합니다
    - 레포지토리 `오름차순`, `내림차순` 및 `star`, `fork`, `issue`, `update` 순으로 sorting 기능을 합니다.
    - 검색된 유저는 page 순, 최대 50 page 로 `pagination` 을 합니다. (github api 제공하는 결과 수 최대 1000개)
    - 검색된 레포지토리 및 유저는 `localStorage` 에 저장할 수 있습니다. (레포지토리 최대 4개, 유저 최대 3개로 제한)


2. `/save` 페이지

    - 저장 한 레포지토리 및 유저를 확인 할 수 있으며 삭제 할 수 있습니다. 

3. 기타
    - 라이트, 다크모드 구현
    - 검색결과 없을 시, 에러 발생 시 에러핸들링 구현

