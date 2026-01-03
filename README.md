# 🧑‍💻 Team App

> 👥 원격 팀을 위한 협업 플랫폼  
> 원격 팀을 위한 협업 환경을 컨셉으로 하여, 서비스의 일부 기능인 메인 페이지, 블로그, 회원가입 및 로그인 인터페이스를 구현한 프로젝트입니다.

단순한 UI 퍼블리싱에 그치지 않고, **TypeScript 기반의 블로그 게시물 생성·조회·수정·삭제 로직과 유저 인증 인터페이스**를 직접 구축하며 프론트엔드 개발 지식을 쌓았습니다. 동시에 **HTML 구조의 시맨틱한 설계와 웹 표준 준수**라는 기본기에 집중하여, Lighthouse를 활용한 접근성 최적화, ARIA 속성 적용, 키보드 네비게이션 보장 등 '누구나 제약 없이 접근 가능한 웹'을 만드는 과정을 실천했습니다.

<br/>

## 🌐 배포 주소

-   메인 페이지: [https://ijieun0123.github.io/team-app-ts/](https://ijieun0123.github.io/team-app-ts/)
-   블로그 리스트: [https://ijieun0123.github.io/team-app-ts/blog](https://ijieun0123.github.io/team-app-ts/blog)
-   블로그 상세: [https://ijieun0123.github.io/team-app-ts/blogs](https://ijieun0123.github.io/team-app-ts/blogs)

<br/>

## 🛠️ 기술 스택

| 분야           | 기술                                              |
| -------------- | ------------------------------------------------- |
| **언어**       | TypeScript                                        |
| **프론트엔드** | React, Vite, React Router Dom                     |
| **스타일링**   | SCSS, Styled-components                           |
| **라이브러리** | Swiper, i18next                                   |
| **퍼블리싱**   | Lighthouse 접근성 최적화, 웹 표준 준수, 반응형 웹 |

<br/>

## ✅ 핵심 기술 구현 상세

<details>
<summary><b>1. TypeScript 기반의 Blog 서비스 CRUD 및 인증 기능 개발</b></summary>
<br>

-   **실제적인 데이터 조작:** 블로그 리스트 조회, 상세 보기, 글 쓰기, 수정하기, 삭제하기로 이어지는 CRUD 핵심 로직을 직접 구현하여 프론트엔드 개발 프로세스를 익혔습니다.
-   **사용자 인증 인터페이스:** 회원가입 및 로그인 기능을 구현하여 유저 데이터의 흐름과 폼 핸들링 과정을 경험했습니다.
</details>

<details>
<summary><b>2. react-i18next 라이브러리를 활용한 전역 다국어 관리</b></summary>
<br>

-   **선언적 다국어 처리:** `Trans` 컴포넌트와 `i18nKey`를 사용하여 UI 텍스트를 소스 코드와 분리했습니다. 이를 통해 언어 설정에 따라 앱 전체의 텍스트가 유동적으로 변하는 구조를 설계했습니다.
-   **확장성 있는 데이터 관리:** 번역 텍스트를 JSON 파일로 관리하여, 코드 수정 없이 데이터 추가만으로 새로운 언어 대응이 가능한 환경을 구축했습니다.
</details>

<details>
<summary><b>3. Styled-components와 SCSS의 전략적 병용</b></summary>
<br>

-   **컴포넌트 단위 스타일링:** Header와 Footer는 익숙한 SCSS 방식으로 작업하되, 그 외 모든 공통 컴포넌트(Button, Card, Modal, Input 등)는 Styled-components로 개발하여 독립적인 재사용 구조를 만들었습니다.
-   **테마 및 글로벌 스타일링:** `theme.ts`와 `GlobalStyle.ts`를 통해 프로젝트 전체의 일관된 디자인 시스템(컬러, 폰트 등)을 구축했습니다.
</details>

<details>
<summary><b>4. Lighthouse 진단을 기반으로 한 웹 표준 및 접근성 최적화</b></summary>
<br>

-   **시맨틱 마크업 설계:** `nav`, `section`, `footer` 등 용도에 맞는 태그를 사용하여 구조적인 뼈대를 구축하고 웹 표준을 준수했습니다.
-   **실질적인 접근성 개선:** Lighthouse 검사 도구의 피드백을 수용하여 다음과 같은 수정을 진행했습니다.
_ **ARIA 속성 활용:** 텍스트가 없는 `Link` 태그에 `aria-label` 부여, 모바일 메뉴 버튼에 `aria-expanded` 적용으로 보조 공학 기기의 인식률을 높였습니다.
_ **폼 요소 사용성 강화:** `label`의 `htmlFor`와 `input`의 `id`를 1:1 매칭하여 클릭 영역과 연결성을 최적화했습니다.
</details>

<details>
<summary><b>5. 사용자 이용 편의성을 위한 품질 검증</b></summary>
<br>

-   **키보드 접근성:** 모든 인터랙티브 요소를 키보드 `Tab` 키로 조작 가능하게 설계하고, 모바일 메뉴와 같은 동적 요소가 키보드 포커스에 맞게 동작하는지 확인했습니다.
-   **명도 대비 최적화:** Lighthouse 지표에 따라 텍스트와 배경색의 대비를 조정하여 가독성이 보장되는 시각적 환경을 구현했습니다.
</details>

<details>
<summary><b>6. Custom Hook(useErrorHandler) 기반의 에러 핸들링 모듈화</b></summary>
<br>

-   **로직의 재사용성:** 서버 응답 에러를 정규화하고 상태를 관리하는 로직을 커스텀 훅으로 분리했습니다.
-   **일관된 UX 제공:** 여러 폼 컴포넌트에서 동일한 에러 처리 인터페이스를 공유함으로써, 사용자에게 항상 일관된 에러 모달 피드백을 제공할 수 있도록 구현했습니다.
</details>

<br/>

## 🔍 트러블슈팅

<details>
<summary><b>1. 웹 접근성 실무 개선 과정</b></summary>
<br>

-   **Challenge:** 프로젝트 완성 후 Lighthouse 진단 결과, 접근성 점수가 기대보다 낮게 측정되었습니다. 특히 텍스트 없이 아이콘만 존재하는 링크, 명확하게 연결되지 않은 폼 요소, 그리고 모바일 환경에서 키보드만으로는 메뉴를 열고 닫을 수 없는 '접근성 단절' 문제를 발견했습니다.
-   **Solution:** \* **스크린 리더 가독성 확보:** 텍스트 설명이 부족한 `Link` 태그들에 `aria-label`을 부여하여, 시각 정보 없이도 스크린 리더가 목적지를 정확히 안내할 수 있도록 개선했습니다.
    -   **논리적인 인터랙션 설계:** 모바일 메뉴 버튼에 `aria-expanded` 속성을 동적으로 바인딩하여, 현재 메뉴의 열림 상태를 보조 공학 기기 사용자가 즉각 인지하도록 구현했습니다.
    -   **키보드 접근성 전수 점검:** 모든 클릭 요소가 `Tab` 키로 포커스되는지 확인하고, 폼 요소의 `label(htmlFor)`과 `input(id)`을 1:1로 매칭하여 키보드 조작 및 클릭 편의성을 극대화했습니다.
-   **Result:** Lighthouse 접근성 점수를 크게 향상시켰으며, 단순히 기능을 구현하는 것을 넘어 '보이지 않는 사용자'까지 배려하는 웹 표준의 중요성을 체득했습니다.
</details>

<details>
<summary><b>2. 다국어 지원 라이브러리 도입 및 전역 상태 동기화</b></summary>
<br>

-   **Challenge:** 한글과 영어로 서비스를 제공하기 위해 모든 텍스트를 조건부 렌더링으로 처리하는 것은 비효율적이며, 언어 변경 시 앱 전체의 텍스트가 동시에 바뀌는 일관성이 필요했습니다.
-   **Solution:** `react-i18next`를 도입하여 텍스트 데이터를 외부 JSON으로 격리하고, `i18nKey`를 통해 선언적으로 텍스트를 매칭했습니다. 언어 변경 시 전역 상태가 바뀌며 모든 컴포넌트가 재렌더링되는 구조를 활용했습니다.
-   **Result:** 텍스트 하드코딩을 제거하여 유지보수 효율을 높였으며, 글로벌 서비스 환경을 고려한 프론트엔드 설계 능력을 키웠습니다.
</details>

<br/>

## 🌱 웹 표준 & 웹 접근성

[웹 접근성 및 웹 표준 검사 과정](https://velog.io/@cock321/%ED%8C%80%EC%95%B1-%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1-%EC%B2%B4%ED%81%AC)

<br/>

## 📷 **스크린샷**

<img alt="Image" src="./public/img/home_desktop.png" />

<img alt="Image" src="./public/img/blog_desktop.png" />

<img alt="Image" src="./public/img/blog_detail_desktop.png" />

<img alt="Image" src="./public/img/write_blog_desktop.png" />
