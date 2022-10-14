# 원티드 프리온보딩 프론트엔드

# 지원자

### 송슬기

### 이메일: [song.frontend@gmail.com](song.frontend@gmail.com)

---

# 🛠 tools

![리액트아이콘](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white '리액트아이콘') <br/>
![JS아이콘](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white 'JS아이콘') <br/>
![html5아이콘](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white 'html아이콘') <br/>
![스타일컴포넌트아이콘](https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white '스타일컴포넌트아이콘')

---

### 폴더구조

```
📦 src
┣ 📂 components
┃ ┣ 📂 Footer
┃ ┃ ┗ 📜 Footer.js
┃ ┣ 📂 Home
┃ ┃ ┣ 📜 data.js
┃ ┃ ┗ 📜 Home.js
┃ ┃ ┣ 📜 LoginBtn.js
┃ ┃ ┣ 📜 RegisterBtn.js
┃ ┣ 📂 Nav
┃ ┃ ┗ 📜 Heading.js
┃ ┣ 📂 Todo
┃ ┃ ┣ 📜 Template.js
┃ ┃ ┗ 📜 TodoInsert.js
┃ ┃ ┣ 📜 TodoItem.js
┃ ┃ ┣ 📜 TodoList.js
┃ ┗ 📂 User
┃ ┣ 📜 SignIn.js
┃ ┗ 📜 SignUp.js
┣ 📂 Pages
┃ ┣ 📜 HomePage.js
┃ ┗ 📜 TodoListPage.js
┣ 📜 App.js
┗ 📜 index.js
```

---

# 프로젝트의 실행 방법

> 개발 모드

```
- npm i
- npm start

```

---

> 배포 사이트

## [👩🏼‍💻👩🏼‍💻👩🏼‍💻](https://magical-kringle-b05b00.netlify.app/)

---

## 오늘의 할일 실행 방법

### 회원가입

#### 이메일과 패스워드 양식을 받으며 이메일은 @가 포함된 이메일 형식으로 작성 해야 합니다.

#### 패스워드는 숫자와 문자 상관 없이 8글자 이상으로 작성 해야 합니다.

![회원가입](https://user-images.githubusercontent.com/104307213/195785305-7e508d9d-643c-4189-ab88-3bcfea1c7e0c.gif)

---

### Todo List

#### 회원가입후에 로그인에 성공시 바로 오늘의 할일 페이지로 이동 합니다.

### Todo List\_업로드

#### 리스트를 추가는 하단의 플러스 아이콘을 클릭하여 추가합니다. 추가는 모달의 플러스 버튼 혹은 엔터키를 누르면 추가 됩니다.

![등록](https://user-images.githubusercontent.com/104307213/195785651-ea275ed8-36ca-4660-afeb-8180fa944891.gif)

할일 리스트 좌측에 체크 박스를 클릭시 끝낸 할일로 표시할 수 있습니다.
![할일완료버튼](https://user-images.githubusercontent.com/104307213/195785974-57f09d6b-7c8f-487e-b6ed-3bc1922005bb.gif)

### Todo List\_수정과 삭제

#### 연필 아이콘을 클릭시 수정 모달창이 오픈되고 수정 후 수정 버튼을 클릭하거나 취소를 원하면 취소버튼 혹은 모달 밖을 클릭하면 수정이 취소 됩니다.

![수정,취소버튼](https://user-images.githubusercontent.com/104307213/195786210-b137c8a1-3a64-4cc1-bd6c-d1e7495d30d8.gif)

#### 리스트에서 우측 삭제 버튼을 클릭하면 삭제 할것인지 확인 창이 뜨고 확인을 누르면 삭제가되고 취소를 하면 삭제가 취소 됩니다.

## ![삭제](https://user-images.githubusercontent.com/104307213/195786470-1da51854-1b68-4d86-b48b-deff09c98394.gif)

---

### 리다이렉트 (로그인 유저)

#### 로그인 유저는 '/todo' 경로에 접근이 가능합니다. 홈, 로그인, 회원가입 경로 접근시 '/todo'로 리다이렉트 됩니다.

![로그인시 리다이렉트](https://user-images.githubusercontent.com/104307213/195786571-853ac8ba-a474-4076-8851-6f50d95ca21c.gif)

![로그인시 접근 리다이렉트](https://user-images.githubusercontent.com/104307213/195786982-c2dc6bd3-780a-4669-a390-5e1aef81c697.gif)

### 리다이렉트 (비 로그인 유저)

#### 로그인 하지 않은 유저의 경우 '/todo' 주소로 접근시 '/'으로 리다이렉트 됩니다.

![로그아웃시 리다이랙트](https://user-images.githubusercontent.com/104307213/195787066-fbfe254f-f060-424d-a262-e59f63e9db77.gif)

#### 비로그인 유저는 홈, 로그인, 회원가입에 접근 가능하며 '/todo'로 접근 불가능 합니다.

![로그아웃시 접근가능한 경로](https://user-images.githubusercontent.com/104307213/195787029-bcfbae9e-929e-4c82-a7f8-246fdcf8de74.gif)
