# MakeMyAppWithAI 상세 커리큘럼

> 코딩 제로에서 내 앱 배포까지 — AI와 함께하는 단계별 학습

---

# 1강: 개발 환경 세팅 ⚙️
> "코딩을 시작하기 위한 도구 준비" | 12스텝 | 30분

## Step 1: 터미널이란?
**📚 개념**
터미널은 컴퓨터와 텍스트로 대화하는 프로그램이에요. 마우스 클릭 대신 명령어를 입력해서 컴퓨터를 조작합니다.

**🎯 미션**
"터미널이 뭔지 이해했다"라고 말해보세요.

**💡 힌트**
- 영화에서 해커들이 쓰는 검은 화면이 터미널이에요
- GUI(그래픽) vs CLI(텍스트) 차이

---

## Step 2: 터미널 열기
**📚 개념**
운영체제마다 터미널 여는 방법이 달라요.

**🎯 미션**
터미널을 열어보세요!

**Mac:**
```
Cmd + Space → "터미널" 검색 → Enter
```

**Windows:**
```
Win + R → "cmd" 입력 → Enter
또는
Win 키 → "PowerShell" 검색 → Enter
```

**💡 힌트**
- Windows는 PowerShell 추천 (더 강력함)
- 검은색 또는 파란색 창이 뜨면 성공!

---

## Step 3: 기본 명령어 - 현재 위치
**📚 개념**
터미널은 항상 "어딘가"에 있어요. 지금 어디 있는지 확인해봐요.

**🎯 미션**
현재 위치를 확인하세요.

**Mac/Linux:**
```bash
pwd
```

**Windows PowerShell:**
```powershell
pwd
```
또는
```powershell
Get-Location
```

**💡 힌트**
- pwd = "Print Working Directory"
- `/Users/내이름` 또는 `C:\Users\내이름` 같은 결과가 나와요

---

## Step 4: 기본 명령어 - 폴더 보기
**📚 개념**
현재 폴더에 뭐가 있는지 볼 수 있어요.

**🎯 미션**
현재 폴더의 파일/폴더 목록을 보세요.

**Mac/Linux:**
```bash
ls
```

**Windows PowerShell:**
```powershell
ls
```
또는
```powershell
dir
```

**💡 힌트**
- ls = "list"
- 파란색 = 폴더, 흰색 = 파일

---

## Step 5: 기본 명령어 - 폴더 이동
**📚 개념**
다른 폴더로 이동할 수 있어요.

**🎯 미션**
바탕화면(Desktop)으로 이동하세요.

**Mac:**
```bash
cd ~/Desktop
```

**Windows:**
```powershell
cd ~\Desktop
```

**💡 힌트**
- cd = "change directory"
- `~`는 홈 폴더를 의미해요
- `cd ..`은 상위 폴더로 이동

---

## Step 6: Node.js란?
**📚 개념**
Node.js는 JavaScript를 컴퓨터에서 실행하게 해주는 프로그램이에요. 웹 개발의 필수 도구입니다.

**🎯 미션**
"Node.js가 왜 필요한지 이해했다"

**💡 힌트**
- JavaScript = 웹의 언어
- 브라우저 밖에서도 JS를 쓰려면 Node.js 필요
- npm(패키지 매니저)도 함께 설치됨

---

## Step 7: Node.js 설치
**📚 개념**
공식 사이트에서 LTS 버전을 다운로드해요.

**🎯 미션**
Node.js를 설치하세요.

**방법:**
1. https://nodejs.org 접속
2. **LTS** 버전 다운로드 (숫자가 짝수인 것)
3. 설치 파일 실행
4. Next → Next → Install

**💡 힌트**
- LTS = Long Term Support (안정 버전)
- 설치 중 옵션은 기본값 그대로 OK

---

## Step 8: 설치 확인
**📚 개념**
제대로 설치됐는지 버전을 확인해요.

**🎯 미션**
터미널에서 버전을 확인하세요.

```bash
node -v
```
```bash
npm -v
```

**예상 결과:**
```
v20.x.x
10.x.x
```

**💡 힌트**
- 버전 숫자가 나오면 성공!
- "command not found"면 터미널 재시작

---

## Step 9: VS Code 설치
**📚 개념**
VS Code는 코드를 작성하는 편집기예요. 메모장의 프로급 버전!

**🎯 미션**
VS Code를 설치하세요.

**방법:**
1. https://code.visualstudio.com 접속
2. Download 클릭
3. 설치 파일 실행

**💡 힌트**
- 무료예요!
- 설치 시 "PATH에 추가" 옵션 체크 권장

---

## Step 10: Claude Code란?
**📚 개념**
Claude Code는 터미널에서 AI와 대화하며 코딩하는 도구예요. "이런 앱 만들어줘"라고 하면 진짜 만들어줍니다!

**🎯 미션**
Claude Code 공식 페이지 방문해보기.

**💡 힌트**
- Anthropic이 만든 공식 도구
- 월 $20 Claude Pro 구독 필요 (또는 API)

---

## Step 11: Claude Code 설치
**📚 개념**
npm으로 전역 설치해요.

**🎯 미션**
Claude Code를 설치하세요.

```bash
npm install -g @anthropic-ai/claude-code
```

**💡 힌트**
- `-g` = global (어디서든 사용 가능)
- 설치에 1-2분 소요

---

## Step 12: 첫 실행 🎉
**📚 개념**
설치 완료! 실행해볼까요?

**🎯 미션**
Claude Code를 실행하세요.

```bash
claude
```

**💡 힌트**
- 처음 실행 시 로그인 필요
- 이제 AI와 코딩할 준비 완료!

---

# 2강: 웹의 기초 이해 🌐
> "웹사이트가 어떻게 만들어지는지 이해하기" | 10스텝 | 25분

## Step 1: 웹사이트란?
**📚 개념**
웹사이트는 브라우저가 읽어서 보여주는 문서예요. 서버에 저장된 파일을 인터넷으로 받아옵니다.

**🎯 미션**
아무 웹사이트나 열고 `Ctrl+U` (Mac: `Cmd+Option+U`)를 눌러보세요.

**💡 힌트**
- 나오는 코드가 바로 HTML!
- 브라우저가 이 코드를 예쁘게 그려주는 거예요

---

## Step 2: HTML이란?
**📚 개념**
HTML은 웹페이지의 **뼈대**예요. "여기는 제목", "여기는 문단", "여기는 이미지" 같은 구조를 정의합니다.

**🎯 미션**
HTML이 "구조"를 담당한다는 것 이해하기.

**💡 힌트**
- HTML = HyperText Markup Language
- 태그(`<>`)로 내용을 감싸요

---

## Step 3: 첫 HTML 파일 만들기
**📚 개념**
직접 HTML 파일을 만들어봐요.

**🎯 미션**
1. VS Code 열기
2. 새 파일 만들기 (`Ctrl+N`)
3. 아래 코드 입력
4. `index.html`로 저장

```html
<!DOCTYPE html>
<html>
<head>
    <title>내 첫 페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>내가 만든 첫 웹페이지입니다.</p>
</body>
</html>
```

**💡 힌트**
- 바탕화면에 저장하면 찾기 쉬워요

---

## Step 4: 주요 태그 이해하기
**📚 개념**
자주 쓰는 HTML 태그들이에요.

**🎯 미션**
각 태그가 뭘 하는지 매칭해보세요.

| 태그 | 용도 |
|------|------|
| `<h1>~<h6>` | 제목 (h1이 가장 큼) |
| `<p>` | 문단 (paragraph) |
| `<div>` | 구역 나누기 |
| `<a>` | 링크 |
| `<img>` | 이미지 |
| `<button>` | 버튼 |

**💡 힌트**
- 대부분의 태그는 열고(`<태그>`) 닫아요(`</태그>`)

---

## Step 5: 브라우저에서 열기
**📚 개념**
만든 HTML 파일을 브라우저로 열어봐요.

**🎯 미션**
1. 저장한 `index.html` 파일 찾기
2. 더블클릭 또는 브라우저로 드래그

**💡 힌트**
- "안녕하세요!"가 크게 보이면 성공!
- 주소창에 `file://...` 으로 시작해요

---

## Step 6: CSS란?
**📚 개념**
CSS는 웹페이지의 **스타일**이에요. 색상, 크기, 위치, 폰트 등 디자인을 담당합니다.

**🎯 미션**
CSS가 "디자인"을 담당한다는 것 이해하기.

**💡 힌트**
- CSS = Cascading Style Sheets
- HTML이 뼈대면, CSS는 옷과 화장!

---

## Step 7: 첫 CSS 적용
**📚 개념**
HTML에 스타일을 입혀봐요.

**🎯 미션**
`index.html`을 수정하세요:

```html
<!DOCTYPE html>
<html>
<head>
    <title>내 첫 페이지</title>
    <style>
        body {
            background-color: #1a1a2e;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            color: #00d9ff;
        }
    </style>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이제 다크 테마예요!</p>
</body>
</html>
```

**💡 힌트**
- 저장 후 브라우저 새로고침 (F5)
- 배경이 어두워지면 성공!

---

## Step 8: JavaScript란?
**📚 개념**
JavaScript는 웹페이지의 **동작**이에요. 클릭하면 반응하고, 데이터를 처리합니다.

**🎯 미션**
JavaScript가 "동작"을 담당한다는 것 이해하기.

**💡 힌트**
- HTML = 구조, CSS = 디자인, JS = 동작
- 줄여서 JS라고 불러요

---

## Step 9: 첫 JavaScript
**📚 개념**
버튼을 누르면 알림이 뜨게 해봐요.

**🎯 미션**
`index.html`에 추가:

```html
<button onclick="alert('버튼을 눌렀어요!')">
    클릭해보세요
</button>
```

**💡 힌트**
- `onclick` = 클릭하면 실행
- `alert()` = 알림창 띄우기

---

## Step 10: 세 가지 조합 🎉
**📚 개념**
HTML + CSS + JavaScript = 완전한 웹사이트!

**🎯 미션**
지금까지 만든 페이지 완성본 확인하기.

```html
<!DOCTYPE html>
<html>
<head>
    <title>내 첫 페이지</title>
    <style>
        body {
            background-color: #1a1a2e;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 { color: #00d9ff; }
        button {
            background: #00d9ff;
            color: #1a1a2e;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
        }
        button:hover { opacity: 0.8; }
    </style>
</head>
<body>
    <h1>🎉 내 첫 웹페이지</h1>
    <p>HTML, CSS, JavaScript를 모두 사용했어요!</p>
    <button onclick="alert('축하합니다! 2강 완료!')">
        완료 버튼
    </button>
</body>
</html>
```

**💡 힌트**
- 이제 웹의 3요소를 모두 이해했어요!

---

# 3강: Claude Code와 대화하기 💬
> "AI에게 코딩을 부탁하는 방법" | 10스텝 | 20분

## Step 1: 프롬프트란?
**📚 개념**
프롬프트는 AI에게 하는 요청이에요. 어떻게 말하느냐에 따라 결과가 달라집니다.

**🎯 미션**
"프롬프트 = AI에게 하는 요청"이라고 이해하기.

---

## Step 2: 좋은 프롬프트
**📚 개념**
구체적이고 명확할수록 좋아요.

**🎯 미션**
좋은 예시 읽어보기:

```
❌ "앱 만들어줘"
✅ "할 일을 추가하고 삭제할 수 있는 To-Do 앱을 만들어줘. 다크 테마로 해줘."

❌ "버그 고쳐줘"
✅ "버튼을 클릭해도 반응이 없어. handleClick 함수가 실행 안 되는 것 같아."
```

**💡 힌트**
- 뭘 원하는지 / 어떤 스타일인지 / 어떤 문제인지

---

## Step 3: 프로젝트 폴더 만들기
**📚 개념**
새 프로젝트를 시작할 폴더를 만들어요.

**🎯 미션**
```bash
cd ~/Desktop
mkdir my-first-project
cd my-first-project
```

**💡 힌트**
- `mkdir` = make directory (폴더 생성)

---

## Step 4: Claude Code 시작
**📚 개념**
폴더 안에서 Claude를 시작해요.

**🎯 미션**
```bash
claude
```

**💡 힌트**
- Claude가 현재 폴더의 파일들을 볼 수 있어요

---

## Step 5: 파일 생성 요청
**📚 개념**
Claude에게 파일을 만들어달라고 해봐요.

**🎯 미션**
Claude에게 입력:
```
간단한 index.html 파일 만들어줘. "Hello World"라고 표시하는 페이지.
```

**💡 힌트**
- Claude가 파일을 직접 생성해줘요

---

## Step 6: 수정 요청
**📚 개념**
기존 코드를 수정해달라고 할 수 있어요.

**🎯 미션**
Claude에게 입력:
```
배경색을 검은색으로, 글자색을 흰색으로 바꿔줘.
```

**💡 힌트**
- Claude는 이전 대화를 기억해요

---

## Step 7: 에러 해결 요청
**📚 개념**
에러가 나면 Claude에게 물어봐요.

**🎯 미션**
에러 메시지가 있다면:
```
이 에러 해결해줘: [에러 메시지 붙여넣기]
```

**💡 힌트**
- 에러 메시지를 그대로 복사해서 줘요

---

## Step 8: 코드 설명 요청
**📚 개념**
이해 안 되는 코드를 설명해달라고 할 수 있어요.

**🎯 미션**
```
방금 작성한 코드 설명해줘. 초보자가 이해할 수 있게.
```

**💡 힌트**
- 배우면서 이해하는 게 중요해요

---

## Step 9: 되돌리기
**📚 개념**
변경이 마음에 안 들면 되돌릴 수 있어요.

**🎯 미션**
```
방금 변경한 거 취소해줘.
```

**💡 힌트**
- Claude가 이전 버전으로 복구해줘요

---

## Step 10: 대화의 흐름 🎉
**📚 개념**
Claude와의 대화는 맥락을 유지해요. 계속 대화하면서 앱을 발전시켜요.

**🎯 미션**
자유롭게 요청해보기:
```
- "버튼 추가해줘"
- "더 예쁘게 만들어줘"  
- "이 기능 추가해줘"
```

**💡 힌트**
- 마치 같이 일하는 동료와 대화하듯이!

---

# 4강: 첫 웹페이지 만들기 📄
> "AI와 함께 나만의 자기소개 페이지 완성" | 10스텝 | 30분

## Step 1: 프로젝트 시작
**📚 개념**
자기소개 페이지를 만들 새 프로젝트를 시작해요.

**🎯 미션**
```bash
cd ~/Desktop
mkdir my-profile
cd my-profile
claude
```

---

## Step 2: 기본 구조 요청
**🎯 미션**
Claude에게:
```
자기소개 웹페이지를 만들어줘. 
- 다크 테마
- 프로필 사진 영역
- 이름, 한 줄 소개
- 취미 섹션
- SNS 링크 버튼들
모던하고 심플하게 해줘.
```

---

## Step 3: 결과 확인
**🎯 미션**
브라우저에서 `index.html` 열어보기

---

## Step 4: 내 이름으로 변경
**🎯 미션**
```
이름을 "홍길동"으로, 소개를 "AI와 함께 코딩을 배우는 중"으로 바꿔줘.
```

---

## Step 5: 프로필 이미지
**🎯 미션**
```
프로필 이미지 URL을 이걸로 바꿔줘: [이미지 URL]
또는
이미지 파일을 profile.jpg로 저장하고 그걸 쓰게 해줘.
```

---

## Step 6: 취미 추가
**🎯 미션**
```
취미 섹션에 다음 3가지 추가해줘:
1. 🎮 게임
2. 📚 독서  
3. 🎵 음악 감상
각각 이모지와 함께 카드 형태로.
```

---

## Step 7: SNS 링크
**🎯 미션**
```
SNS 버튼들 추가해줘:
- GitHub: https://github.com/내아이디
- Twitter: https://twitter.com/내아이디
버튼 호버하면 색 바뀌게.
```

---

## Step 8: 스타일 커스텀
**🎯 미션**
```
메인 색상을 보라색 계열로 바꿔줘. 그라데이션도 추가해줘.
```

---

## Step 9: 반응형 확인
**🎯 미션**
브라우저 창 크기를 줄여보며 모바일에서도 괜찮은지 확인.
```
모바일에서도 잘 보이게 반응형으로 수정해줘.
```

---

## Step 10: 완성! 🎉
**🎯 미션**
최종 결과물 확인하고 스크린샷 찍어두기!

---

# 5강: 할 일 앱 만들기 ✅
> "동작하는 앱을 처음부터 끝까지" | 12스텝 | 45분

## Step 1: 기획
**📚 개념**
만들기 전에 어떤 기능이 필요한지 정리해요.

**🎯 미션**
필요한 기능 체크리스트:
- [ ] 할 일 입력창
- [ ] 추가 버튼
- [ ] 할 일 목록
- [ ] 완료 체크
- [ ] 삭제 버튼
- [ ] 데이터 저장

---

## Step 2: 프로젝트 시작
**🎯 미션**
```bash
cd ~/Desktop
mkdir todo-app
cd todo-app
claude
```

---

## Step 3: 기본 구조
**🎯 미션**
```
할 일 앱 만들어줘.
- 할 일 입력창 + 추가 버튼
- 할 일 목록
- 각 항목에 완료 체크박스, 삭제 버튼
- 다크 테마
- 모던한 디자인
HTML, CSS, JavaScript로 만들어줘.
```

---

## Step 4: 추가 기능
**🎯 미션**
```
Enter 키를 눌러도 할 일이 추가되게 해줘.
빈 입력은 추가 안 되게 막아줘.
```

---

## Step 5: 완료 표시
**🎯 미션**
```
완료된 할 일은 취소선이 그어지고 흐리게 보이게 해줘.
```

---

## Step 6: 삭제 기능
**🎯 미션**
삭제 버튼 클릭하면 항목이 사라지는지 확인.

---

## Step 7: 로컬 저장
**🎯 미션**
```
localStorage를 사용해서 할 일 목록을 저장해줘.
새로고침해도 데이터가 유지되게.
```

---

## Step 8: 저장 테스트
**🎯 미션**
1. 할 일 3개 추가
2. 1개 완료 체크
3. 브라우저 새로고침
4. 데이터 유지 확인!

---

## Step 9: 스타일 개선
**🎯 미션**
```
좀 더 예쁘게 만들어줘:
- 부드러운 애니메이션
- 호버 효과
- 그림자 효과
- 아이콘 사용
```

---

## Step 10: 다크/라이트 모드
**🎯 미션**
```
다크 모드 / 라이트 모드 전환 버튼 추가해줘.
선택한 테마도 localStorage에 저장해줘.
```

---

## Step 11: 필터 기능
**🎯 미션**
```
필터 버튼 추가해줘:
- 전체 보기
- 완료된 것만
- 미완료만
```

---

## Step 12: 완성! 🎉
**🎯 미션**
모든 기능 테스트:
- [x] 추가
- [x] 완료
- [x] 삭제
- [x] 저장
- [x] 테마
- [x] 필터

---

# 6강: Vercel로 배포하기 🚀
> "내 앱을 인터넷에 올려서 누구나 볼 수 있게" | 12스텝 | 30분

## Step 1: 배포란?
**📚 개념**
배포 = 내 컴퓨터에 있는 파일을 인터넷 서버에 올려서 누구나 접속할 수 있게 하는 것.

**🎯 미션**
현재 상태 이해하기:
- `file://` = 내 컴퓨터에서만 볼 수 있음
- `https://` = 전 세계 누구나 볼 수 있음

---

## Step 2: Vercel이란?
**📚 개념**
Vercel은 무료로 웹사이트를 배포할 수 있는 서비스예요. Next.js를 만든 회사!

**🎯 미션**
Vercel의 장점 이해하기:
- ✅ 무료 (취미 프로젝트)
- ✅ 자동 HTTPS
- ✅ 전 세계 CDN
- ✅ GitHub 연동

---

## Step 3: GitHub 가입
**📚 개념**
GitHub은 코드 저장소예요. Vercel이 여기서 코드를 가져갑니다.

**🎯 미션**
1. https://github.com 접속
2. Sign up 클릭
3. 이메일, 비밀번호 입력
4. 가입 완료

---

## Step 4: Git 기초 - 초기화
**📚 개념**
Git은 코드 버전을 관리하는 도구예요.

**🎯 미션**
프로젝트 폴더에서:
```bash
git init
```

**💡 힌트**
- `.git` 폴더가 생기면 성공

---

## Step 5: Git 기초 - 추가
**🎯 미션**
모든 파일을 Git에 추가:
```bash
git add .
```

**💡 힌트**
- `.` = 모든 파일

---

## Step 6: Git 기초 - 커밋
**🎯 미션**
변경사항을 저장 (스냅샷):
```bash
git commit -m "첫 번째 버전"
```

**💡 힌트**
- `-m` = 메시지
- 커밋 = 저장 지점

---

## Step 7: GitHub 저장소 생성
**🎯 미션**
1. GitHub.com 로그인
2. 오른쪽 상단 `+` → `New repository`
3. Repository name: `todo-app`
4. Public 선택
5. Create repository

---

## Step 8: GitHub에 업로드
**🎯 미션**
GitHub이 알려주는 명령어 실행:
```bash
git remote add origin https://github.com/내아이디/todo-app.git
git branch -M main
git push -u origin main
```

**💡 힌트**
- GitHub 비밀번호 또는 토큰 입력 필요

---

## Step 9: Vercel 가입
**🎯 미션**
1. https://vercel.com 접속
2. `Sign Up` 클릭
3. `Continue with GitHub` 선택
4. GitHub 계정 연동 허용

---

## Step 10: 프로젝트 가져오기
**🎯 미션**
1. Vercel 대시보드에서 `Add New...` → `Project`
2. GitHub 저장소 목록에서 `todo-app` 선택
3. `Import` 클릭

---

## Step 11: 배포 설정
**🎯 미션**
1. Framework Preset: `Other` (순수 HTML인 경우)
2. 나머지 기본값 유지
3. `Deploy` 클릭!

**💡 힌트**
- 배포에 1-2분 소요

---

## Step 12: 완료! 🎉
**🎯 미션**
1. 배포 완료되면 URL 확인 (예: `todo-app-xxx.vercel.app`)
2. 해당 URL 접속
3. 친구에게 링크 공유!

**💡 힌트**
- 이제 전 세계 누구나 내 앱을 볼 수 있어요!

---

# 7강: Netlify로 배포하기 🌐
> "Vercel의 대안, 드래그 앤 드롭 배포" | 10스텝 | 20분

## Step 1: Netlify란?
**📚 개념**
Netlify도 무료 배포 서비스예요. 특징: 폴더를 드래그하면 바로 배포!

**🎯 미션**
Vercel vs Netlify 비교:
- Vercel: GitHub 연동 특화
- Netlify: 드래그 앤 드롭 간편

---

## Step 2: Netlify 가입
**🎯 미션**
1. https://netlify.com 접속
2. `Sign up` 클릭
3. `GitHub`으로 가입

---

## Step 3: 드래그 앤 드롭 배포
**📚 개념**
가장 간단한 방법! 폴더를 끌어다 놓으면 끝.

**🎯 미션**
1. Netlify 대시보드 접속
2. 화면 하단 "drag and drop" 영역 찾기
3. 프로젝트 폴더를 드래그!

---

## Step 4: 배포 확인
**🎯 미션**
1. 자동 생성된 URL 확인 (예: `random-name-123.netlify.app`)
2. 브라우저에서 접속
3. 잘 보이는지 확인!

---

## Step 5: 사이트 이름 변경
**🎯 미션**
1. Site settings → Site details
2. Change site name
3. 원하는 이름 입력 (예: `my-todo-app`)
4. 새 URL: `my-todo-app.netlify.app`

---

## Step 6: GitHub 연동 (선택)
**🎯 미션**
1. Site settings → Build & deploy
2. Link to Git
3. GitHub 저장소 선택

**💡 힌트**
- 연동하면 push할 때마다 자동 배포!

---

## Step 7: 커스텀 도메인 (선택)
**📚 개념**
자신만의 도메인(예: myapp.com)을 연결할 수 있어요.

**🎯 미션**
1. Domain settings
2. Add custom domain
3. 도메인 입력 및 DNS 설정

---

## Step 8: 환경 변수 (고급)
**📚 개념**
API 키 같은 비밀 정보를 안전하게 저장.

**🎯 미션**
1. Site settings → Environment variables
2. Add a variable
3. 키-값 입력

---

## Step 9: 폼 기능 (보너스)
**📚 개념**
Netlify는 폼 제출을 무료로 처리해줘요.

**🎯 미션**
HTML 폼에 `netlify` 속성 추가:
```html
<form netlify>
  <input name="email" type="email">
  <button>Submit</button>
</form>
```

---

## Step 10: 배포 완료! 🎉
**🎯 미션**
두 가지 배포 방법 마스터:
- ✅ Vercel (GitHub 연동)
- ✅ Netlify (드래그 앤 드롭)

---

# 8강: 데이터베이스 연결 🗄️
> "사용자 데이터를 서버에 저장하기" | 10스텝 | 35분

## Step 1: 왜 데이터베이스?
**📚 개념**
localStorage는 내 브라우저에만 저장됨. 다른 기기에서 접속하면 데이터가 없어요!

**🎯 미션**
데이터베이스가 필요한 경우:
- 여러 기기에서 동기화
- 여러 사용자의 데이터
- 데이터 분석/관리

---

## Step 2: Supabase란?
**📚 개념**
Supabase = Firebase의 오픈소스 대안. PostgreSQL 기반.

**🎯 미션**
Supabase 특징:
- ✅ 무료 티어 넉넉함
- ✅ SQL 데이터베이스
- ✅ 실시간 구독
- ✅ 인증 내장

---

## Step 3: Supabase 가입
**🎯 미션**
1. https://supabase.com 접속
2. Start your project
3. GitHub으로 가입

---

## Step 4: 프로젝트 생성
**🎯 미션**
1. New project
2. Name: `todo-app-db`
3. Database Password 설정 (기억해두기!)
4. Region: Northeast Asia (한국과 가까운 곳)
5. Create new project

---

## Step 5: 테이블 만들기
**🎯 미션**
1. Table Editor 클릭
2. Create a new table
3. Name: `todos`
4. 컬럼 추가:
   - `id` (int8, primary key, auto-increment)
   - `text` (text)
   - `completed` (bool, default: false)
   - `created_at` (timestamptz, default: now())

---

## Step 6: API 키 복사
**🎯 미션**
1. Settings → API
2. 복사할 것:
   - Project URL
   - anon public 키

---

## Step 7: 프로젝트에 연결
**🎯 미션**
Claude에게:
```
Supabase를 연결해줘.
URL: [복사한 URL]
Key: [복사한 anon key]
todos 테이블에서 데이터 읽고 쓰게 해줘.
```

---

## Step 8: 데이터 저장
**🎯 미션**
할 일 추가하면 Supabase에 저장되는지 확인:
1. 앱에서 할 일 추가
2. Supabase Table Editor에서 확인

---

## Step 9: 데이터 불러오기
**🎯 미션**
페이지 새로고침해도 Supabase에서 데이터를 가져오는지 확인.

---

## Step 10: 완성! 🎉
**🎯 미션**
- [x] 서버 데이터베이스 연결
- [x] CRUD (Create, Read, Update, Delete)
- [x] 다른 기기에서도 동일한 데이터!

---

# 9강: 나만의 프로젝트 🎨
> "배운 것을 활용해 자유롭게 만들기" | 10스텝 | 60분+

## Step 1: 아이디어 선택
**🎯 미션**
만들고 싶은 프로젝트 선택:
- [ ] 포트폴리오 사이트
- [ ] 메모 앱
- [ ] 타이머/스톱워치
- [ ] 날씨 앱
- [ ] 계산기
- [ ] 퀴즈 앱
- [ ] 나만의 아이디어: ________

---

## Step 2: 기능 정리
**🎯 미션**
필요한 기능 목록 작성:
1. _____________
2. _____________
3. _____________
4. _____________
5. _____________

---

## Step 3: Claude와 기획
**🎯 미션**
```
[프로젝트명] 앱을 만들고 싶어.
필요한 기능:
1. [기능1]
2. [기능2]
...
어떤 구조로 만들면 좋을지 설계해줘.
```

---

## Step 4-8: 구현
**🎯 미션**
Claude와 함께 하나씩 기능 구현!

---

## Step 9: 배포
**🎯 미션**
Vercel 또는 Netlify로 배포!

---

## Step 10: 완료! 🎉
**🎯 미션**
- [x] 나만의 프로젝트 완성
- [x] 인터넷에 배포
- [x] 포트폴리오에 추가

---

# 📊 전체 요약

| 강의 | 제목 | 스텝 | 시간 |
|------|------|------|------|
| 1강 | 개발 환경 세팅 | 12 | 30분 |
| 2강 | 웹의 기초 이해 | 10 | 25분 |
| 3강 | Claude Code와 대화하기 | 10 | 20분 |
| 4강 | 첫 웹페이지 만들기 | 10 | 30분 |
| 5강 | 할 일 앱 만들기 | 12 | 45분 |
| 6강 | Vercel로 배포하기 | 12 | 30분 |
| 7강 | Netlify로 배포하기 | 10 | 20분 |
| 8강 | 데이터베이스 연결 | 10 | 35분 |
| 9강 | 나만의 프로젝트 | 10 | 60분+ |
| **합계** | | **96스텝** | **~6시간** |

---

*최종 업데이트: 2026-02-16*
