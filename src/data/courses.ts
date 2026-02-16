export interface Step {
  id: number;
  title: string;
  concept: string;      // 📚 개념 설명
  mission: string;      // 🎯 미션
  hint?: string;        // 💡 힌트
  code?: string;        // 코드 예시
}

export interface Course {
  id: number;
  title: string;
  emoji: string;
  level: 'beginner' | 'basic' | 'intermediate' | 'advanced';
  description: string;
  steps: Step[];
  estimatedTime: string;
}

export const COURSES: Course[] = [
  // 🌱 입문 레벨 (1-4강)
  {
    id: 1,
    title: "개발 환경 세팅",
    emoji: "⚙️",
    level: "beginner",
    description: "코딩을 시작하기 위한 도구 준비",
    estimatedTime: "30분",
    steps: [
      {
        id: 1,
        title: "터미널이란?",
        concept: "터미널은 컴퓨터와 텍스트로 대화하는 창입니다. GUI(그래픽 사용자 인터페이스) 대신 CLI(명령어 라인 인터페이스)를 사용해 컴퓨터에게 명령을 내릴 수 있어요. 개발자들이 가장 기본적으로 사용하는 도구 중 하나입니다.",
        mission: "터미널의 개념을 이해하고 컴퓨터와 텍스트로 소통하는 방법을 배워보세요.",
        hint: "터미널 = 명령어를 입력하는 검은 화면. Windows의 명령 프롬프트나 PowerShell도 터미널의 일종입니다."
      },
      {
        id: 2,
        title: "터미널 열기",
        concept: "운영체제마다 터미널을 여는 방법이 다릅니다. Windows에서는 여러 가지 방법으로 터미널을 열 수 있어요.",
        mission: "다음 방법 중 하나로 터미널을 열어보세요:\n• Mac: Cmd+Space → Terminal\n• Windows: Win+R → cmd 또는 Win+X → A (PowerShell)",
        hint: "PowerShell이 cmd보다 더 강력한 기능을 제공합니다. Git Bash도 좋은 대안이에요."
      },
      {
        id: 3,
        title: "현재 위치 확인",
        concept: "터미널에서는 항상 어떤 폴더(디렉토리)에 있는지 알아야 합니다. 현재 작업 디렉토리를 확인하는 명령어를 배워보세요.",
        mission: "터미널에서 pwd (Mac/Linux) 또는 echo %cd% (Windows)를 입력해보세요.",
        hint: "pwd = Print Working Directory의 줄임말입니다.",
        code: "# Mac/Linux\npwd\n\n# Windows\necho %cd%"
      },
      {
        id: 4,
        title: "폴더 보기",
        concept: "현재 폴더에 어떤 파일과 폴더가 있는지 확인할 수 있습니다. 이는 파일 탐색기를 텍스트로 보는 것과 같아요.",
        mission: "터미널에서 ls (Mac/Linux) 또는 dir (Windows) 명령어로 현재 폴더의 내용을 확인해보세요.",
        hint: "ls -la 또는 dir /a 하면 숨김 파일까지 볼 수 있어요.",
        code: "# Mac/Linux\nls\nls -la  # 자세한 정보와 숨김 파일까지\n\n# Windows\ndir\ndir /a  # 모든 파일 보기"
      },
      {
        id: 5,
        title: "폴더 이동",
        concept: "cd (Change Directory) 명령어로 다른 폴더로 이동할 수 있습니다. 상대 경로와 절대 경로 개념도 중요해요.",
        mission: "cd 명령어로 다른 폴더로 이동해보세요. cd .. 는 상위 폴더로 이동합니다.",
        hint: ". = 현재 폴더, .. = 상위 폴더를 의미합니다.",
        code: "cd Documents    # Documents 폴더로 이동\ncd ..           # 상위 폴더로 이동\ncd ~            # 홈 폴더로 이동 (Mac/Linux)\ncd /            # 루트 폴더로 이동"
      },
      {
        id: 6,
        title: "Node.js란?",
        concept: "Node.js는 JavaScript를 웹 브라우저 밖에서도 실행할 수 있게 해주는 런타임 환경입니다. 원래 JavaScript는 브라우저에서만 동작했지만, Node.js 덕분에 서버나 데스크탑 애플리케이션도 만들 수 있게 되었어요.",
        mission: "Node.js가 무엇인지 이해하고, 왜 웹 개발에 필요한지 파악해보세요.",
        hint: "Node.js = JavaScript 실행 환경. 브라우저 없이도 JavaScript 코드를 실행할 수 있게 해줍니다."
      },
      {
        id: 7,
        title: "Node.js 설치",
        concept: "nodejs.org에서 Node.js를 다운로드하여 설치할 수 있습니다. LTS(Long Term Support) 버전을 선택하는 것이 안정적이에요.",
        mission: "nodejs.org에 접속하여 LTS 버전을 다운로드하고 설치하세요.",
        hint: "설치 과정에서 모든 기본 설정을 그대로 두세요. npm(Node Package Manager)도 함께 설치됩니다."
      },
      {
        id: 8,
        title: "설치 확인",
        concept: "설치가 완료되었는지 확인하려면 버전을 체크해보면 됩니다. node와 npm이 모두 설치되었는지 확인해보세요.",
        mission: "터미널에서 다음 명령어들을 실행해보세요:\n• node --version 또는 node -v\n• npm --version 또는 npm -v",
        hint: "버전 번호가 나오면 설치 성공! 명령어를 찾을 수 없다면 터미널을 다시 열어보세요.",
        code: "node --version\nnpm --version"
      },
      {
        id: 9,
        title: "VS Code 설치",
        concept: "VS Code는 Microsoft에서 만든 무료 코드 편집기입니다. 강력한 기능과 확장성으로 전 세계 개발자들이 가장 많이 사용하는 에디터예요.",
        mission: "code.visualstudio.com에서 VS Code를 다운로드하고 설치하세요.",
        hint: "설치 후 유용한 확장: Korean Language Pack, Prettier, ES7+ React/Redux/React-Native snippets"
      },
      {
        id: 10,
        title: "Claude Code란?",
        concept: "Claude Code는 Anthropic에서 만든 AI 코딩 어시스턴트입니다. 자연어로 요청하면 코드를 작성하고 수정해주는 강력한 도구예요.",
        mission: "Claude Code가 어떤 도구인지 이해하고 개발에서의 활용 방법을 알아보세요.",
        hint: "AI와 대화하듯이 코딩할 수 있는 혁신적인 도구입니다."
      },
      {
        id: 11,
        title: "Claude Code 설치",
        concept: "Claude Code는 npm을 통해 설치할 수 있습니다. 전역 설치(-g 옵션)를 하면 어디서든 사용할 수 있어요.",
        mission: "터미널에서 npm install -g @anthropic-ai/claude-code 명령어로 설치하세요.",
        hint: "설치 후 claude --help 명령어로 설치가 잘 되었는지 확인해보세요.",
        code: "npm install -g @anthropic-ai/claude-code\nclaude --help"
      },
      {
        id: 12,
        title: "첫 실행",
        concept: "모든 도구 설치가 완료되었습니다! 이제 claude 명령어로 AI 어시스턴트와 대화할 수 있어요.",
        mission: "터미널에서 claude 명령어를 실행하고 AI와 첫 대화를 나눠보세요.",
        hint: "'hello'라고 인사해보거나 'help'로 도움말을 확인해보세요.",
        code: "claude\n# 그 후 'hello' 입력해보기"
      }
    ]
  },

  {
    id: 2,
    title: "웹의 기초 이해",
    emoji: "🌐",
    level: "beginner",
    description: "웹사이트가 어떻게 만들어지는지",
    estimatedTime: "25분",
    steps: [
      {
        id: 1,
        title: "웹사이트란?",
        concept: "웹사이트는 인터넷을 통해 접근할 수 있는 웹 페이지들의 모음입니다. 브라우저가 서버에서 HTML, CSS, JavaScript 파일을 받아와서 사용자에게 보여주는 구조예요.",
        mission: "웹사이트의 기본 작동 원리를 이해해보세요.",
        hint: "클라이언트(브라우저) ↔ 서버 구조로 동작합니다."
      },
      {
        id: 2,
        title: "HTML이란?",
        concept: "HTML(HyperText Markup Language)은 웹페이지의 구조를 담당합니다. 마치 건물의 뼈대와 같은 역할을 해요. 제목, 문단, 이미지, 링크 등의 요소들을 정의합니다.",
        mission: "HTML이 웹페이지에서 어떤 역할을 하는지 이해해보세요.",
        hint: "HTML = 구조 담당 (뼈대). 태그(<tag>)를 사용해서 요소들을 정의합니다."
      },
      {
        id: 3,
        title: "첫 HTML 파일",
        concept: "메모장이나 VS Code로 HTML 파일을 만들 수 있습니다. 확장자는 .html을 사용하고, 가장 기본적인 파일 이름은 index.html이에요.",
        mission: "VS Code로 index.html 파일을 만들고 기본 HTML 구조를 작성해보세요.",
        hint: "VS Code에서 '!' 입력 후 Tab을 누르면 기본 HTML 구조가 자동 완성됩니다.",
        code: "<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>내 첫 웹페이지</title>\n</head>\n<body>\n    <h1>안녕하세요!</h1>\n    <p>이것은 내 첫 번째 웹페이지입니다.</p>\n</body>\n</html>"
      },
      {
        id: 4,
        title: "주요 태그",
        concept: "HTML은 태그(tag)로 구성됩니다. 주요 태그들: h1~h6(제목), p(문단), div(영역), a(링크), img(이미지), button(버튼) 등이 있어요.",
        mission: "위에서 만든 HTML 파일에 다양한 태그를 추가해보세요.",
        hint: "태그는 <태그명>내용</태그명> 형태로 사용합니다.",
        code: "<h1>큰 제목</h1>\n<h2>작은 제목</h2>\n<p>문단입니다.</p>\n<div>영역을 나누는 태그</div>\n<a href=\"https://google.com\">구글 링크</a>\n<img src=\"image.jpg\" alt=\"이미지 설명\">\n<button>버튼</button>"
      },
      {
        id: 5,
        title: "브라우저에서 열기",
        concept: "작성한 HTML 파일을 브라우저에서 볼 수 있습니다. 파일을 더블클릭하거나 브라우저로 드래그하면 됩니다.",
        mission: "만든 index.html 파일을 브라우저에서 열어보세요.",
        hint: "Chrome, Firefox, Safari 등 어떤 브라우저든 괜찮습니다."
      },
      {
        id: 6,
        title: "CSS란?",
        concept: "CSS(Cascading Style Sheets)는 웹페이지의 스타일을 담당합니다. HTML이 뼈대라면 CSS는 디자인이에요. 색상, 폰트, 크기, 레이아웃 등을 설정할 수 있습니다.",
        mission: "CSS가 웹페이지에서 어떤 역할을 하는지 이해해보세요.",
        hint: "CSS = 스타일 담당 (디자인). HTML과 분리해서 관리하는 것이 좋습니다."
      },
      {
        id: 7,
        title: "첫 CSS 적용",
        concept: "CSS는 HTML 내부의 <style> 태그 안에 작성하거나, 별도의 .css 파일로 만들어서 링크할 수 있습니다. 먼저 간단히 <style> 태그를 사용해보세요.",
        mission: "HTML 파일의 <head> 안에 <style> 태그를 추가하고 색상과 폰트를 변경해보세요.",
        hint: "선택자 { 속성: 값; } 형태로 작성합니다.",
        code: "<style>\n    body {\n        background-color: #f0f0f0;\n        font-family: Arial, sans-serif;\n    }\n    h1 {\n        color: blue;\n        text-align: center;\n    }\n    p {\n        color: #333;\n        font-size: 16px;\n    }\n</style>"
      },
      {
        id: 8,
        title: "JavaScript란?",
        concept: "JavaScript는 웹페이지의 동작을 담당합니다. HTML이 뼈대, CSS가 디자인이라면, JavaScript는 인터랙션이에요. 버튼 클릭, 데이터 처리, 애니메이션 등을 만들 수 있습니다.",
        mission: "JavaScript가 웹페이지에서 어떤 역할을 하는지 이해해보세요.",
        hint: "JavaScript = 동작 담당 (인터랙션). 사용자와 상호작용할 수 있게 해줍니다."
      },
      {
        id: 9,
        title: "첫 JavaScript",
        concept: "JavaScript는 <script> 태그 안에 작성하거나 별도의 .js 파일로 만들 수 있습니다. alert() 함수로 간단한 알림창을 만들어보세요.",
        mission: "HTML 파일에 <script> 태그를 추가하고 버튼 클릭 시 alert가 나오도록 해보세요.",
        hint: "onclick 속성을 버튼에 추가하거나 addEventListener를 사용할 수 있습니다.",
        code: "<button onclick=\"alert('안녕하세요!')\">클릭하세요</button>\n\n<script>\n    function sayHello() {\n        alert('JavaScript가 실행되었습니다!');\n    }\n</script>"
      },
      {
        id: 10,
        title: "HTML+CSS+JS",
        concept: "이제 HTML, CSS, JavaScript의 역할을 모두 이해했습니다! 이 세 가지가 조합되어 현대적인 웹사이트가 만들어져요. 구조(HTML) + 스타일(CSS) + 동작(JS) = 완성된 웹사이트",
        mission: "세 기술을 모두 활용한 간단한 웹페이지를 완성해보세요.",
        hint: "지금까지 배운 모든 것을 종합해서 나만의 웹페이지를 만들어보세요!",
        code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body { font-family: Arial; padding: 20px; }\n        .highlight { background: yellow; }\n    </style>\n</head>\n<body>\n    <h1>내 첫 웹사이트</h1>\n    <p id=\"demo\">텍스트가 바뀔 예정입니다</p>\n    <button onclick=\"changeText()\">변경하기</button>\n    \n    <script>\n        function changeText() {\n            document.getElementById('demo').innerHTML = '바뀌었습니다!';\n        }\n    </script>\n</body>\n</html>"
      }
    ]
  },

  {
    id: 3,
    title: "Claude Code 마스터하기",
    emoji: "💬",
    level: "beginner",
    description: "AI에게 코딩을 부탁하는 방법",
    estimatedTime: "25분",
    steps: [
      {
        id: 1,
        title: "프롬프트란?",
        concept: "프롬프트는 AI에게 하는 요청이나 질문입니다. 좋은 프롬프트를 작성하는 것이 AI를 효과적으로 활용하는 핵심이에요.",
        mission: "프롬프트의 개념을 이해하고 AI와 소통하는 기본 방법을 알아보세요.",
        hint: "프롬프트 = AI에게 하는 말. 명확하고 구체적으로 요청하는 것이 중요합니다."
      },
      {
        id: 2,
        title: "좋은 프롬프트",
        concept: "좋은 프롬프트는 구체적이고, 명확하며, 맥락을 제공합니다. '웹사이트 만들어줘' 보다는 '로그인 기능이 있는 간단한 회원제 웹사이트를 HTML, CSS, JavaScript로 만들어줘'가 더 좋아요.",
        mission: "구체적이고 명확한 프롬프트 작성법을 익혀보세요.",
        hint: "구체적 + 명확 + 맥락 = 좋은 프롬프트. 원하는 결과를 자세히 설명하세요."
      },
      {
        id: 3,
        title: "나쁜 프롬프트",
        concept: "나쁜 프롬프트의 예: '뭔가 만들어줘', '좋은 걸로 해줘', '알아서 해줘'. 이런 모호한 요청은 AI도 답변하기 어려워합니다.",
        mission: "피해야 할 나쁜 프롬프트 예시들을 살펴보고 개선 방법을 익혀보세요.",
        hint: "모호하고 추상적인 표현은 피하고, 구체적인 요구사항을 명시하세요."
      },
      {
        id: 4,
        title: "프로젝트 시작",
        concept: "AI에게 새 프로젝트를 만들어달라고 요청할 때는 어떤 종류의 프로젝트인지, 어떤 기술을 사용할지, 어떤 기능이 필요한지 명시하세요.",
        mission: "Claude에게 '새 프로젝트 만들어줘'보다 구체적인 요청을 해보세요.",
        hint: "예: 'Next.js와 TypeScript를 사용해서 블로그 프로젝트를 만들어줘'",
        code: "// 좋은 예시\n'React와 TypeScript로 할일 관리 앱을 만들어줘. 할일 추가, 삭제, 완료 표시 기능이 필요해'\n\n// 나쁜 예시\n'앱 만들어줘'"
      },
      {
        id: 5,
        title: "파일 생성",
        concept: "특정 파일을 만들어달라고 요청할 때는 파일의 목적과 포함되어야 할 내용을 설명하세요.",
        mission: "AI에게 구체적으로 파일 생성을 요청해보세요.",
        hint: "파일명, 목적, 포함될 내용을 명시하면 더 정확한 결과를 얻을 수 있습니다.",
        code: "// 좋은 예시\n'index.html 파일을 만들어줘. 간단한 자기소개 페이지로, 이름, 직업, 취미가 들어가면 좋겠어'\n\n// 나쁜 예시\n'HTML 파일 만들어줘'"
      },
      {
        id: 6,
        title: "코드 수정",
        concept: "기존 코드를 수정하고 싶을 때는 어떤 부분을 어떻게 바꾸고 싶은지 구체적으로 설명하세요.",
        mission: "코드 수정 요청을 구체적으로 해보세요.",
        hint: "변경하고 싶은 부분, 변경 이유, 원하는 결과를 명확히 하세요.",
        code: "// 좋은 예시\n'배경색을 파란색에서 초록색으로 바꿔줘. CSS의 background-color 속성을 수정해야 해'\n\n// 나쁜 예시\n'색깔 바꿔줘'"
      },
      {
        id: 7,
        title: "기능 추가",
        concept: "새로운 기능을 추가하고 싶을 때는 그 기능의 구체적인 동작 방식과 사용자 경험을 설명하세요.",
        mission: "기능 추가를 구체적으로 요청해보세요.",
        hint: "기능의 동작 방식, 사용자 인터랙션, 예상 결과를 설명하세요.",
        code: "// 좋은 예시\n'클릭하면 색상이 무작위로 변하는 버튼을 추가해줘. JavaScript의 Math.random()을 사용해서'\n\n// 나쁜 예시\n'버튼 만들어줘'"
      },
      {
        id: 8,
        title: "에러 해결",
        concept: "에러가 발생했을 때는 에러 메시지, 발생 상황, 시도해본 해결책을 함께 알려주세요.",
        mission: "에러 해결을 위한 효과적인 요청 방법을 익혀보세요.",
        hint: "에러 메시지 전문, 어떤 상황에서 발생했는지, 코드 일부를 함께 제공하세요.",
        code: "// 좋은 예시\n'ReferenceError: document is not defined 에러가 나요. Next.js 프로젝트에서 useEffect 없이 document를 사용했는데 어떻게 고치나요?'\n\n// 나쁜 예시\n'에러 났어요 고쳐주세요'"
      },
      {
        id: 9,
        title: "코드 설명",
        concept: "코드의 동작 원리를 이해하고 싶을 때는 어떤 부분이 궁금한지, 어느 수준의 설명을 원하는지 알려주세요.",
        mission: "코드 설명을 요청하는 효과적인 방법을 배워보세요.",
        hint: "궁금한 특정 부분, 원하는 설명 수준(초보자/중급자)을 명시하세요.",
        code: "// 좋은 예시\n'이 useState 코드가 어떻게 동작하는지 초보자 수준으로 설명해줘. 특히 setState가 비동기인 이유가 궁금해'\n\n// 나쁜 예시\n'이 코드 설명해줘'"
      },
      {
        id: 10,
        title: "되돌리기",
        concept: "이전 상태로 되돌리고 싶을 때는 언제 시점으로 돌아가고 싶은지, 어떤 변경사항을 취소하고 싶은지 명확히 하세요.",
        mission: "변경사항 되돌리기를 요청해보세요.",
        hint: "구체적인 시점이나 변경사항을 명시하면 정확하게 되돌릴 수 있습니다.",
        code: "// 좋은 예시\n'방금 추가한 버튼 클릭 이벤트를 제거해줘. 다른 스타일은 그대로 두고'\n\n// 나쁜 예시\n'이전으로 돌려줘'"
      },
      {
        id: 11,
        title: "리팩토링",
        concept: "코드를 깔끔하게 정리하고 싶을 때는 어떤 방향으로 개선하고 싶은지(성능, 가독성, 재사용성 등) 알려주세요.",
        mission: "코드 리팩토링을 요청해보세요.",
        hint: "개선 목표(성능, 가독성, 재사용성)와 유지하고 싶은 기능을 명시하세요.",
        code: "// 좋은 예시\n'이 React 컴포넌트를 더 읽기 쉽게 리팩토링해줘. 기능은 그대로 유지하면서 함수를 분리하고 싶어'\n\n// 나쁜 예시\n'코드 깔끔하게 해줘'"
      },
      {
        id: 12,
        title: "대화의 흐름",
        concept: "AI와의 대화는 맥락이 중요합니다. 이전 대화 내용을 기억하고 연속적으로 개선해 나가는 것이 효과적이에요.",
        mission: "맥락을 유지하며 단계별로 발전시켜 나가는 대화 방법을 익혀보세요.",
        hint: "한 번에 완벽한 결과를 원하지 말고, 단계적으로 개선해 나가세요.",
        code: "1. '간단한 웹페이지 만들어줘'\n2. '여기에 버튼 추가해줘'\n3. '버튼 클릭시 색상 변경 기능 넣어줘'\n4. '좀 더 예쁘게 스타일링 해줘'\n\n점진적으로 발전시켜 나가는 것이 핵심!"
      }
    ]
  },

  {
    id: 4,
    title: "첫 웹페이지 만들기",
    emoji: "📄",
    level: "beginner",
    description: "나만의 자기소개 페이지",
    estimatedTime: "30분",
    steps: [
      {
        id: 1,
        title: "프로젝트 생성",
        concept: "새로운 프로젝트를 위한 폴더를 만들고 작업 환경을 구성해보세요. 좋은 프로젝트 구조는 나중에 유지보수를 쉽게 만들어줍니다.",
        mission: "데스크톱에 'my-profile' 폴더를 만들고 VS Code로 열어보세요.",
        hint: "폴더명은 영어로, 공백 대신 하이픈(-) 사용을 권장합니다."
      },
      {
        id: 2,
        title: "기본 구조 요청",
        concept: "AI에게 자기소개 페이지의 기본 구조를 요청해보세요. 어떤 섹션들이 필요한지 생각해보고 구체적으로 요청하는 것이 좋습니다.",
        mission: "Claude에게 '자기소개 페이지를 만들어줘. 이름, 사진, 소개글, 연락처 섹션이 있으면 좋겠어'라고 요청해보세요.",
        hint: "필요한 섹션들을 미리 생각해보고 구체적으로 요청하세요."
      },
      {
        id: 3,
        title: "결과 확인",
        concept: "AI가 만들어준 코드를 브라우저에서 확인해보세요. 실제로 어떻게 보이는지 확인하는 것이 중요합니다.",
        mission: "만들어진 HTML 파일을 브라우저에서 열어보고 전체적인 모습을 확인해보세요.",
        hint: "HTML 파일을 브라우저로 드래그하거나 더블클릭하면 열 수 있습니다."
      },
      {
        id: 4,
        title: "내 정보 입력",
        concept: "템플릿을 내 정보로 바꿔보세요. 실제 정보를 사용하거나 연습용 가상 정보를 사용해도 됩니다.",
        mission: "HTML의 이름, 소개글, 연락처 등을 본인의 정보(또는 연습용 정보)로 수정해보세요.",
        hint: "개인정보가 걱정되면 가상의 정보를 사용해도 괜찮습니다.",
        code: "<h1>홍길동</h1>\n<p>안녕하세요! 웹 개발을 배우고 있는 홍길동입니다.</p>\n<p>이메일: hong@example.com</p>"
      },
      {
        id: 5,
        title: "프로필 이미지",
        concept: "이미지를 웹페이지에 추가하는 방법을 배워보세요. 로컬 이미지 파일이나 인터넷의 이미지 URL을 사용할 수 있습니다.",
        mission: "프로필 사진을 추가해보세요. 실제 사진이나 플레이스홀더 이미지를 사용하세요.",
        hint: "이미지 파일은 HTML 파일과 같은 폴더에 두거나, 무료 이미지 사이트(Unsplash 등)의 URL을 사용할 수 있습니다.",
        code: "<img src=\"profile.jpg\" alt=\"프로필 사진\" width=\"200\">\n<!-- 또는 -->\n<img src=\"https://via.placeholder.com/200\" alt=\"플레이스홀더\">"
      },
      {
        id: 6,
        title: "섹션 추가",
        concept: "자기소개 페이지를 더 풍성하게 만들기 위해 추가 섹션들을 넣어보세요. 취미, 경력, 기술 스택 등을 추가할 수 있습니다.",
        mission: "취미, 관심사, 또는 배우고 있는 기술 등의 섹션을 추가해보세요.",
        hint: "각 섹션을 <section> 태그나 <div> 태그로 구분하면 좋습니다.",
        code: "<section>\n    <h2>취미</h2>\n    <ul>\n        <li>독서</li>\n        <li>영화 감상</li>\n        <li>여행</li>\n    </ul>\n</section>"
      },
      {
        id: 7,
        title: "스타일 변경",
        concept: "CSS를 사용해서 페이지의 색상, 폰트, 레이아웃을 개선해보세요. 나만의 개성을 살린 디자인을 만들어보세요.",
        mission: "CSS를 수정해서 배경색, 글자색, 폰트 등을 원하는 대로 바꿔보세요.",
        hint: "Google Fonts를 사용하면 다양한 폰트를 사용할 수 있습니다.",
        code: "body {\n    background-color: #f5f5f5;\n    font-family: 'Arial', sans-serif;\n    color: #333;\n    line-height: 1.6;\n}\n\nh1 {\n    color: #2c3e50;\n    text-align: center;\n}"
      },
      {
        id: 8,
        title: "반응형",
        concept: "모바일에서도 잘 보이도록 반응형 디자인을 적용해보세요. 다양한 화면 크기에 대응하는 것이 현대 웹 개발의 필수입니다.",
        mission: "CSS 미디어 쿼리를 사용해서 모바일에서도 잘 보이도록 수정해보세요.",
        hint: "@media (max-width: 768px) { } 안에 모바일용 CSS를 작성하세요.",
        code: "@media (max-width: 768px) {\n    body {\n        padding: 10px;\n        font-size: 14px;\n    }\n    \n    img {\n        width: 100%;\n        max-width: 150px;\n    }\n}"
      },
      {
        id: 9,
        title: "애니메이션",
        concept: "CSS 애니메이션으로 페이지를 더 생동감 있게 만들어보세요. 호버 효과나 페이드 인 효과를 추가할 수 있습니다.",
        mission: "버튼이나 이미지에 호버 효과를 추가하거나 페이지 로딩 시 애니메이션을 넣어보세요.",
        hint: ":hover 선택자나 @keyframes를 사용해보세요.",
        code: "img:hover {\n    transform: scale(1.1);\n    transition: transform 0.3s ease;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\nbody {\n    animation: fadeIn 1s ease-in;\n}"
      },
      {
        id: 10,
        title: "완성",
        concept: "축하합니다! 나만의 첫 웹페이지를 완성했습니다. 이제 HTML, CSS의 기본기를 익혔고, AI와 협업하는 방법도 배웠어요.",
        mission: "완성된 자기소개 페이지를 다시 한 번 확인하고, 친구나 가족에게 자랑해보세요!",
        hint: "이것은 시작일 뿐입니다. 계속 개선하고 새로운 기능을 추가해보세요!",
        code: "// 축하합니다! 🎉\n// 이제 여러분은:\n// - HTML 구조를 만들 수 있습니다\n// - CSS로 스타일링할 수 있습니다  \n// - AI와 협업할 수 있습니다\n// - 반응형 디자인을 적용할 수 있습니다"
      }
    ]
  },

  // 🌿 초급 레벨 (5-8강) - 스텝 제목만 우선 입력
  {
    id: 5,
    title: "To-Do 앱 만들기",
    emoji: "✅",
    level: "basic",
    description: "첫 번째 인터랙티브 앱",
    estimatedTime: "45분",
    steps: [
      { id: 1, title: "기획", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "기본 구조", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "할 일 추가", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "할 일 삭제", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "완료 체크", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "완료 스타일", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "localStorage", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "다크 모드", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "필터 기능", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "드래그 정렬", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "카테고리", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "완성", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 6,
    title: "배포하기 (Vercel & Netlify)",
    emoji: "🚀",
    level: "basic",
    description: "내 앱을 인터넷에 공개",
    estimatedTime: "30분",
    steps: [
      { id: 1, title: "배포란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "Git이란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "Git 설치", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "Git 기초", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "GitHub 가입", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "저장소 생성", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "코드 업로드", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "Vercel 가입", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "Vercel 배포", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "URL 확인", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "자동 배포", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "Netlify (대안)", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 7,
    title: "API 연동하기",
    emoji: "🔌",
    level: "basic",
    description: "외부 데이터 가져와서 활용하기",
    estimatedTime: "40분",
    steps: [
      { id: 1, title: "API란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "REST API", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "JSON 이해", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "fetch 사용법", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "무료 API 찾기", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "날씨 API", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "날씨 앱 만들기", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "뉴스 API", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "뉴스 리더 만들기", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "로딩 상태", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "에러 처리", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "API 키 관리", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 8,
    title: "데이터베이스 연결",
    emoji: "🗄️",
    level: "basic",
    description: "서버에 데이터 저장하기",
    estimatedTime: "35분",
    steps: [
      { id: 1, title: "왜 DB?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "Supabase 소개", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "프로젝트 생성", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "테이블 만들기", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "API 키 복사", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "연결 설정", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "데이터 저장", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "데이터 조회", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "데이터 수정/삭제", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "실시간 동기화", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  // 🌳 중급 레벨 (9-12강) - 스텝 제목만
  {
    id: 9,
    title: "AI 이미지 생성 앱",
    emoji: "🎨",
    level: "intermediate",
    description: "DALL-E / Stable Diffusion 연동",
    estimatedTime: "45분",
    steps: [
      { id: 1, title: "AI 이미지 생성이란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "서비스 비교", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "OpenAI API", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "API 비용 이해", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "프로젝트 설정", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "기본 UI", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "API 호출", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "결과 표시", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "프롬프트 가이드", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "갤러리 저장", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "다운로드", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "스타일 옵션", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 10,
    title: "AI 챗봇 만들기",
    emoji: "🤖",
    level: "intermediate",
    description: "ChatGPT / Claude API 연동",
    estimatedTime: "50분",
    steps: [
      { id: 1, title: "AI 챗봇이란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "API 선택", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "API 키 발급", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "채팅 UI", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "API 호출", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "응답 표시", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "대화 기록", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "스트리밍", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "시스템 프롬프트", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "프리셋", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "대화 저장", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "내보내기", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 11,
    title: "대시보드 만들기",
    emoji: "📊",
    level: "intermediate",
    description: "데이터 시각화 + 복잡한 레이아웃",
    estimatedTime: "50분",
    steps: [
      { id: 1, title: "대시보드란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "레이아웃 설계", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "사이드바", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "헤더", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "카드 컴포넌트", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "차트 라이브러리", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "라인 차트", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "바 차트", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "파이 차트", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "실시간 업데이트", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "반응형", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "테마", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 12,
    title: "풀스택 메모 앱",
    emoji: "📝",
    level: "intermediate",
    description: "프론트 + 백엔드 + DB 통합",
    estimatedTime: "60분",
    steps: [
      { id: 1, title: "풀스택이란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "Next.js 소개", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "프로젝트 생성", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "폴더 구조", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "메모 목록 UI", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "메모 작성 UI", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "Supabase 연결", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "메모 CRUD", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "마크다운 지원", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "검색 기능", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "태그 기능", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "공유 기능", concept: "Coming soon", mission: "Coming soon" },
      { id: 13, title: "배포", concept: "Coming soon", mission: "Coming soon" },
      { id: 14, title: "도메인 연결", concept: "Coming soon", mission: "Coming soon" },
      { id: 15, title: "완성", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  // 🏆 고급 레벨 (13-16강) - 스텝 제목만
  {
    id: 13,
    title: "사용자 인증",
    emoji: "🔐",
    level: "advanced",
    description: "회원가입 / 로그인 / 소셜 로그인",
    estimatedTime: "45분",
    steps: [
      { id: 1, title: "인증이란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "Supabase Auth", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "회원가입 UI", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "회원가입 로직", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "로그인 UI", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "로그인 로직", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "로그아웃", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "세션 관리", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "보호된 페이지", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "Google 로그인", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "GitHub 로그인", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "프로필 페이지", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 14,
    title: "결제 시스템",
    emoji: "💳",
    level: "advanced",
    description: "Stripe 연동 + 구독 모델",
    estimatedTime: "50분",
    steps: [
      { id: 1, title: "결제 시스템", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "Stripe 소개", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "Stripe 가입", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "API 키 설정", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "상품 생성", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "가격 책정", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "Checkout 세션", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "결제 버튼", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "웹훅 설정", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "결제 확인", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "구독 관리", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "테스트", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 15,
    title: "복잡한 앱 - SaaS 보일러플레이트",
    emoji: "🏗️",
    level: "advanced",
    description: "실전 서비스 구조",
    estimatedTime: "90분",
    steps: [
      { id: 1, title: "SaaS란?", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "필수 기능", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "프로젝트 구조", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "랜딩 페이지", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "가격 페이지", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "인증 연동", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "온보딩", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "대시보드", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "설정 페이지", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "결제 연동", concept: "Coming soon", mission: "Coming soon" },
      { id: 11, title: "관리자 페이지", concept: "Coming soon", mission: "Coming soon" },
      { id: 12, title: "이메일 발송", concept: "Coming soon", mission: "Coming soon" },
      { id: 13, title: "에러 추적", concept: "Coming soon", mission: "Coming soon" },
      { id: 14, title: "분석", concept: "Coming soon", mission: "Coming soon" },
      { id: 15, title: "런칭 체크리스트", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  {
    id: 16,
    title: "나만의 SaaS 출시",
    emoji: "🚀",
    level: "advanced", 
    description: "아이디어 → 실제 서비스",
    estimatedTime: "120분+",
    steps: [
      { id: 1, title: "아이디어 선정", concept: "Coming soon", mission: "Coming soon" },
      { id: 2, title: "시장 조사", concept: "Coming soon", mission: "Coming soon" },
      { id: 3, title: "MVP 정의", concept: "Coming soon", mission: "Coming soon" },
      { id: 4, title: "디자인", concept: "Coming soon", mission: "Coming soon" },
      { id: 5, title: "개발", concept: "Coming soon", mission: "Coming soon" },
      { id: 6, title: "테스트", concept: "Coming soon", mission: "Coming soon" },
      { id: 7, title: "베타 테스트", concept: "Coming soon", mission: "Coming soon" },
      { id: 8, title: "개선", concept: "Coming soon", mission: "Coming soon" },
      { id: 9, title: "마케팅", concept: "Coming soon", mission: "Coming soon" },
      { id: 10, title: "출시", concept: "Coming soon", mission: "Coming soon" }
    ]
  },

  // 🆕 확장 레벨 (17-21강) - 새로 추가된 강의들
  {
    id: 17,
    title: "AI 코딩 도구 비교",
    emoji: "🛠️",
    level: "basic",
    description: "Cursor vs Copilot vs Claude Code 비교 분석",
    estimatedTime: "35분",
    steps: [
      { id: 1, title: "AI 코딩 도구 시대", concept: "AI 코딩 도구는 개발 생산성을 혁신적으로 높여줍니다. 코드 자동완성부터 전체 프로젝트 생성까지, 다양한 도구들이 있어요.", mission: "AI 코딩 도구가 어떻게 개발을 변화시켰는지 이해해보세요.", hint: "AI = 부조종사. 코드를 대신 짜주는 게 아니라 함께 짜는 것!" },
      { id: 2, title: "Claude Code", concept: "Anthropic의 Claude Code는 터미널에서 자연어로 코딩하는 CLI 도구입니다. 파일 생성, 수정, 프로젝트 관리를 대화로 처리해요.", mission: "Claude Code의 주요 기능과 장점을 파악해보세요.", hint: "터미널 기반 = 가볍고 빠름" },
      { id: 3, title: "Cursor", concept: "Cursor는 VS Code 기반의 AI 코드 에디터입니다. 코드베이스를 이해하고 맥락에 맞는 코드를 제안해줘요.", mission: "Cursor의 특징과 VS Code와의 차이점을 알아보세요.", hint: "에디터 통합 = 더 자연스러운 워크플로우" },
      { id: 4, title: "GitHub Copilot", concept: "GitHub Copilot은 VS Code, JetBrains 등에서 사용하는 코드 자동완성 도구입니다. 실시간으로 다음 줄을 예측해요.", mission: "Copilot의 자동완성 방식과 활용법을 배워보세요.", hint: "자동완성 특화 = 타이핑이 빨라짐" },
      { id: 5, title: "Bolt.new & Lovable", concept: "노코드/로우코드 AI 빌더들입니다. 대화만으로 완전한 웹앱을 생성하고 배포까지 가능해요.", mission: "노코드 AI 빌더의 장단점을 파악해보세요.", hint: "빠른 프로토타이핑에 최적" },
      { id: 6, title: "Replit", concept: "Replit은 브라우저 기반 IDE로 AI 코딩 기능을 제공합니다. 설치 없이 바로 코딩하고 공유할 수 있어요.", mission: "Replit의 특징과 협업 기능을 살펴보세요.", hint: "브라우저만 있으면 OK" },
      { id: 7, title: "도구별 비교표", concept: "각 도구의 가격, 기능, 적합한 사용 사례를 비교해봅니다. 상황에 맞는 도구 선택이 중요해요.", mission: "본인의 상황에 맞는 도구를 선택해보세요.", hint: "무료 vs 유료, CLI vs GUI, 초보 vs 숙련" },
      { id: 8, title: "실습: 같은 앱 만들기", concept: "간단한 To-Do 앱을 여러 도구로 만들어보며 차이를 체감합니다.", mission: "최소 2개 도구로 같은 앱을 만들어 비교해보세요.", hint: "직접 해봐야 차이가 느껴짐" },
      { id: 9, title: "도구 조합 전략", concept: "하나의 도구만 쓸 필요 없어요. 상황에 따라 여러 도구를 조합하면 더 효과적입니다.", mission: "본인만의 도구 조합 전략을 세워보세요.", hint: "Claude Code + Cursor 조합 추천" },
      { id: 10, title: "미래 전망", concept: "AI 코딩 도구는 계속 발전 중입니다. 앞으로 어떻게 변할지 예측해봅니다.", mission: "AI 코딩의 미래를 상상해보세요.", hint: "코딩의 민주화가 진행 중!" }
    ]
  },

  {
    id: 18,
    title: "MCP로 실시간 데이터 연결",
    emoji: "🔌",
    level: "intermediate",
    description: "Model Context Protocol로 AI에 실시간 데이터 연결",
    estimatedTime: "45분",
    steps: [
      { id: 1, title: "MCP란?", concept: "Model Context Protocol(MCP)은 AI 모델에 실시간 데이터와 도구를 연결하는 프로토콜입니다. AI가 현재 정보에 접근할 수 있게 해줘요.", mission: "MCP의 개념과 필요성을 이해해보세요.", hint: "AI + 실시간 데이터 = 더 똑똑한 AI" },
      { id: 2, title: "MCP 서버 구조", concept: "MCP는 서버-클라이언트 구조입니다. 서버가 데이터와 도구를 제공하고, AI 클라이언트가 이를 활용해요.", mission: "MCP 서버의 기본 구조를 파악해보세요.", hint: "JSON-RPC 기반 통신" },
      { id: 3, title: "개발 환경 설정", concept: "MCP 서버 개발을 위한 환경을 설정합니다. Node.js와 TypeScript를 사용해요.", mission: "MCP 프로젝트를 생성하고 필요한 패키지를 설치해보세요.", hint: "@modelcontextprotocol/sdk 사용", code: "npm init -y\nnpm install @modelcontextprotocol/sdk typescript\nnpx tsc --init" },
      { id: 4, title: "첫 MCP 서버", concept: "간단한 MCP 서버를 만들어봅니다. 기본 도구 하나를 제공하는 서버부터 시작해요.", mission: "Hello World MCP 서버를 만들어보세요.", hint: "server.setRequestHandler()로 도구 등록" },
      { id: 5, title: "리소스 제공", concept: "MCP 서버에서 리소스를 제공하는 방법을 배웁니다. 파일, 데이터베이스, API 데이터 등을 연결할 수 있어요.", mission: "파일 시스템 리소스를 제공하는 서버를 만들어보세요.", hint: "resources/list, resources/read 핸들러" },
      { id: 6, title: "도구(Tools) 제공", concept: "AI가 호출할 수 있는 도구를 만듭니다. 날씨 조회, 계산, 검색 등 다양한 기능을 구현할 수 있어요.", mission: "날씨 조회 도구를 MCP 서버에 추가해보세요.", hint: "tools/list, tools/call 핸들러" },
      { id: 7, title: "프롬프트 템플릿", concept: "자주 사용하는 프롬프트를 템플릿으로 제공할 수 있습니다. AI 사용 패턴을 표준화해요.", mission: "코드 리뷰용 프롬프트 템플릿을 만들어보세요.", hint: "prompts/list, prompts/get 핸들러" },
      { id: 8, title: "Claude Desktop 연동", concept: "만든 MCP 서버를 Claude Desktop에 연결합니다. 설정 파일을 수정하면 돼요.", mission: "Claude Desktop에서 본인의 MCP 서버를 사용해보세요.", hint: "claude_desktop_config.json 수정" },
      { id: 9, title: "실전 프로젝트", concept: "실용적인 MCP 서버를 만들어봅니다. 예: Notion 연동, GitHub 연동, 데이터베이스 연동 등.", mission: "본인에게 유용한 MCP 서버를 만들어보세요.", hint: "일상에서 반복하는 작업 자동화" },
      { id: 10, title: "배포 & 공유", concept: "만든 MCP 서버를 다른 사람들과 공유하는 방법을 배웁니다. npm에 패키지로 배포할 수 있어요.", mission: "MCP 서버를 npm에 배포하거나 GitHub에 공개해보세요.", hint: "오픈소스 기여의 시작" },
      { id: 11, title: "AI Agent Mode", concept: "MCP를 활용한 AI Agent 패턴을 배웁니다. AI가 여러 도구를 자율적으로 조합해서 복잡한 작업을 수행해요.", mission: "여러 MCP 도구를 조합하는 Agent를 설계해보세요.", hint: "계획 → 실행 → 검증 루프" },
      { id: 12, title: "완성", concept: "MCP의 전체 그림을 이해했습니다. AI에 실시간 데이터와 도구를 연결하는 방법을 배웠어요!", mission: "본인만의 MCP 서버 아이디어를 정리해보세요.", hint: "가능성은 무한대!" }
    ]
  },

  {
    id: 19,
    title: "AI로 게임 만들기",
    emoji: "🎮",
    level: "intermediate",
    description: "인터랙티브 게임 개발",
    estimatedTime: "50분",
    steps: [
      { id: 1, title: "게임 개발 개요", concept: "웹 기술로 게임을 만들 수 있습니다. HTML5 Canvas, JavaScript, 그리고 AI의 도움으로 재밌는 게임을 만들어봐요.", mission: "웹 게임 개발의 기초 개념을 이해해보세요.", hint: "Canvas API가 핵심" },
      { id: 2, title: "Canvas 기초", concept: "HTML5 Canvas는 그래픽을 그리는 도화지입니다. 도형, 이미지, 애니메이션을 만들 수 있어요.", mission: "Canvas에 간단한 도형을 그려보세요.", hint: "getContext('2d')로 그리기 시작", code: "const canvas = document.getElementById('game');\nconst ctx = canvas.getContext('2d');\nctx.fillRect(10, 10, 50, 50);" },
      { id: 3, title: "게임 루프", concept: "게임은 계속 화면을 갱신해야 합니다. requestAnimationFrame()으로 부드러운 애니메이션을 만들어요.", mission: "60FPS 게임 루프를 구현해보세요.", hint: "update() → render() → repeat" },
      { id: 4, title: "키보드 입력", concept: "사용자 입력을 받아 게임을 조작합니다. 화살표 키, WASD 등으로 캐릭터를 움직여요.", mission: "키보드로 사각형을 움직이는 코드를 만들어보세요.", hint: "addEventListener('keydown', ...)" },
      { id: 5, title: "충돌 감지", concept: "게임 오브젝트들이 부딪혔는지 확인합니다. 사각형 충돌 감지가 가장 기본이에요.", mission: "두 사각형의 충돌을 감지하는 함수를 만들어보세요.", hint: "AABB 충돌 감지" },
      { id: 6, title: "첫 게임: 피하기 게임", concept: "위에서 떨어지는 장애물을 피하는 게임을 만듭니다. 지금까지 배운 것을 조합해요.", mission: "장애물 피하기 게임을 완성해보세요.", hint: "점수 시스템도 추가해보세요" },
      { id: 7, title: "스프라이트 & 이미지", concept: "이미지를 사용해서 게임을 더 예쁘게 만듭니다. 스프라이트 시트로 애니메이션도 가능해요.", mission: "캐릭터에 이미지를 적용해보세요.", hint: "drawImage()로 이미지 그리기" },
      { id: 8, title: "사운드 효과", concept: "효과음과 배경음악을 추가합니다. Audio API로 소리를 재생해요.", mission: "점프, 충돌 효과음을 추가해보세요.", hint: "new Audio('sound.mp3').play()" },
      { id: 9, title: "점수 & 레벨", concept: "게임에 점수 시스템과 난이도 레벨을 추가합니다. 진행할수록 어려워지게 만들어요.", mission: "점수에 따라 난이도가 올라가는 시스템을 만들어보세요.", hint: "localStorage로 최고 점수 저장" },
      { id: 10, title: "AI로 게임 확장", concept: "Claude에게 새로운 기능을 요청해보세요. 적 AI, 파워업, 보스전 등을 추가할 수 있어요.", mission: "AI의 도움으로 게임에 새 기능을 추가해보세요.", hint: "구체적인 요청 = 좋은 결과" },
      { id: 11, title: "게임 배포", concept: "만든 게임을 인터넷에 공개합니다. 친구들에게 자랑하고 피드백을 받아보세요.", mission: "게임을 Vercel/Netlify에 배포해보세요.", hint: "itch.io에도 올릴 수 있어요" },
      { id: 12, title: "완성", concept: "웹 게임 개발의 기초를 익혔습니다. 아이디어만 있다면 어떤 게임이든 만들 수 있어요!", mission: "다음에 만들고 싶은 게임 아이디어를 정리해보세요.", hint: "간단한 것부터 시작하세요" }
    ]
  },

  {
    id: 20,
    title: "모바일 앱 만들기",
    emoji: "📱",
    level: "advanced",
    description: "React Native로 iOS/Android 앱 개발",
    estimatedTime: "60분",
    steps: [
      { id: 1, title: "모바일 앱 개발 방식", concept: "네이티브, 하이브리드, 크로스플랫폼 등 모바일 앱 개발 방식을 비교합니다.", mission: "각 방식의 장단점을 이해해보세요.", hint: "React Native = 크로스플랫폼" },
      { id: 2, title: "React Native 소개", concept: "React Native는 React로 iOS/Android 앱을 만드는 프레임워크입니다. 한 번 작성으로 두 플랫폼을 지원해요.", mission: "React Native의 작동 방식을 이해해보세요.", hint: "JavaScript → Native 브릿지" },
      { id: 3, title: "Expo 시작하기", concept: "Expo는 React Native 개발을 쉽게 해주는 도구입니다. 복잡한 설정 없이 바로 시작할 수 있어요.", mission: "Expo CLI를 설치하고 새 프로젝트를 생성해보세요.", hint: "npx create-expo-app", code: "npx create-expo-app my-app\ncd my-app\nnpx expo start" },
      { id: 4, title: "핵심 컴포넌트", concept: "View, Text, Image, ScrollView, TouchableOpacity 등 React Native의 기본 컴포넌트를 배웁니다.", mission: "기본 컴포넌트로 간단한 UI를 만들어보세요.", hint: "div → View, p → Text" },
      { id: 5, title: "스타일링", concept: "React Native는 CSS 대신 JavaScript 객체로 스타일을 정의합니다. Flexbox 레이아웃을 사용해요.", mission: "StyleSheet.create()로 스타일을 만들어보세요.", hint: "camelCase 사용 (backgroundColor)" },
      { id: 6, title: "네비게이션", concept: "React Navigation으로 화면 간 이동을 구현합니다. Stack, Tab, Drawer 네비게이션이 있어요.", mission: "2개 이상의 화면을 가진 앱을 만들어보세요.", hint: "@react-navigation/native 설치" },
      { id: 7, title: "상태 관리", concept: "useState, useContext, 또는 Zustand로 앱 상태를 관리합니다.", mission: "여러 화면에서 공유하는 상태를 만들어보세요.", hint: "간단하면 Context, 복잡하면 Zustand" },
      { id: 8, title: "API 연동", concept: "fetch나 axios로 서버와 통신합니다. 웹과 거의 동일한 방식이에요.", mission: "외부 API 데이터를 표시하는 화면을 만들어보세요.", hint: "useEffect + fetch 패턴" },
      { id: 9, title: "네이티브 기능", concept: "카메라, 위치, 푸시 알림 등 네이티브 기능을 사용합니다. Expo SDK가 대부분 제공해요.", mission: "카메라로 사진을 찍는 기능을 추가해보세요.", hint: "expo-camera, expo-location" },
      { id: 10, title: "Flutter 비교", concept: "Flutter는 Google의 크로스플랫폼 프레임워크입니다. React Native와 비교해봅니다.", mission: "Flutter와 React Native의 차이점을 이해해보세요.", hint: "Dart vs JavaScript" },
      { id: 11, title: "앱 빌드 & 배포", concept: "EAS Build로 앱을 빌드하고 앱스토어에 배포합니다.", mission: "개발용 빌드를 만들어 실제 기기에서 테스트해보세요.", hint: "eas build --platform android" },
      { id: 12, title: "완성", concept: "모바일 앱 개발 기초를 익혔습니다. 이제 아이디어를 앱으로 만들 수 있어요!", mission: "만들고 싶은 앱 아이디어를 정리해보세요.", hint: "웹 앱을 모바일로 포팅해보세요" }
    ]
  },

  {
    id: 21,
    title: "포트폴리오 & 커리어",
    emoji: "💼",
    level: "advanced",
    description: "포트폴리오 사이트 + 이력서 + 면접 준비",
    estimatedTime: "45분",
    steps: [
      { id: 1, title: "포트폴리오의 중요성", concept: "개발자에게 포트폴리오는 이력서보다 중요할 수 있습니다. 실제 만든 것을 보여주는 게 가장 강력한 증거예요.", mission: "좋은 포트폴리오의 특징을 파악해보세요.", hint: "코드 < 결과물 < 임팩트" },
      { id: 2, title: "프로젝트 선정", concept: "포트폴리오에 넣을 프로젝트를 선정합니다. 양보다 질이 중요해요.", mission: "지금까지 만든 프로젝트 중 포트폴리오에 넣을 것을 골라보세요.", hint: "3-5개가 적당" },
      { id: 3, title: "프로젝트 정리", concept: "각 프로젝트의 문제, 해결책, 결과를 정리합니다. 기술적 도전과 배운 점을 강조해요.", mission: "선정한 프로젝트별 설명을 작성해보세요.", hint: "Problem → Solution → Result" },
      { id: 4, title: "포트폴리오 사이트", concept: "개인 포트폴리오 웹사이트를 만듭니다. 깔끔하고 빠른 사이트가 좋아요.", mission: "본인의 포트폴리오 사이트를 만들어보세요.", hint: "Next.js + Vercel 추천" },
      { id: 5, title: "GitHub 프로필", concept: "GitHub 프로필도 포트폴리오입니다. README, 핀된 저장소, 기여 그래프를 관리해요.", mission: "GitHub 프로필 README를 만들어보세요.", hint: "github.com/username/username 저장소" },
      { id: 6, title: "AI로 이력서 작성", concept: "AI를 활용해서 이력서를 작성하고 다듬습니다. 경험을 임팩트 있게 표현해요.", mission: "AI와 함께 이력서를 작성해보세요.", hint: "Action Verb + 숫자로 결과 표현" },
      { id: 7, title: "LinkedIn 최적화", concept: "LinkedIn은 개발자 채용의 핵심 플랫폼입니다. 프로필을 최적화해요.", mission: "LinkedIn 프로필을 업데이트해보세요.", hint: "키워드가 검색에 중요" },
      { id: 8, title: "기술 면접 준비", concept: "코딩 테스트, 기술 질문, 시스템 설계 면접을 준비합니다.", mission: "자주 나오는 기술 면접 질문을 정리해보세요.", hint: "LeetCode, 백준 연습" },
      { id: 9, title: "행동 면접 준비", concept: "STAR 방법으로 경험 기반 질문에 대비합니다. 실제 경험을 스토리로 만들어요.", mission: "대표 경험 3개를 STAR 형식으로 정리해보세요.", hint: "Situation → Task → Action → Result" },
      { id: 10, title: "AI 면접 연습", concept: "AI를 면접관 삼아 모의 면접을 해봅니다. 피드백을 받고 개선해요.", mission: "Claude와 모의 면접을 해보세요.", hint: "녹음해서 나중에 복습" },
      { id: 11, title: "네트워킹", concept: "개발자 커뮤니티 활동, 오픈소스 기여, 기술 블로그 등으로 네트워크를 넓혀요.", mission: "관심 있는 개발자 커뮤니티에 가입해보세요.", hint: "주는 사람이 결국 받는다" },
      { id: 12, title: "완성", concept: "커리어 준비의 기초를 익혔습니다. 꾸준히 성장하고 기록하면 기회는 옵니다!", mission: "6개월 커리어 액션 플랜을 세워보세요.", hint: "작은 것부터 꾸준히" }
    ]
  }
];

export const LEVEL_INFO = {
  beginner: { emoji: "🌱", label: "입문", color: "text-green-400" },
  basic: { emoji: "🌿", label: "초급", color: "text-blue-400" },
  intermediate: { emoji: "🌳", label: "중급", color: "text-yellow-400" },
  advanced: { emoji: "🏆", label: "고급", color: "text-purple-400" }
};

export const getTotalSteps = (courseId: number): number => {
  const course = COURSES.find(c => c.id === courseId);
  return course?.steps.length || 0;
};

export const getCourseById = (courseId: number): Course | undefined => {
  return COURSES.find(c => c.id === courseId);
};

export const getStepByCourseAndStep = (courseId: number, stepId: number): Step | undefined => {
  const course = getCourseById(courseId);
  return course?.steps.find(s => s.id === stepId);
};