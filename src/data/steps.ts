import { Step } from '@/types/step';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "터미널이란?",
    description: "터미널은 컴퓨터와 대화하는 창구입니다.\n명령어를 입력하면 컴퓨터가 실행해줍니다.\n개발자의 필수 도구 중 하나예요.",
    mission: "터미널의 개념을 이해했다면 '완료했어요'를 클릭하세요!",
    hints: [
      "터미널 = 명령어를 입력하는 검은 화면",
      "GUI(그래픽)가 아닌 CLI(명령어) 방식",
      "Windows의 명령 프롬프트, PowerShell도 터미널의 일종"
    ]
  },
  {
    id: 2,
    title: "터미널 열기",
    description: "Windows에서 터미널을 여는 방법을 배워봅시다.\n여러 가지 방법이 있어요.\n가장 편한 방법을 찾아보세요.",
    mission: "아래 방법 중 하나로 터미널을 열어보세요:\n- Win + R → cmd 입력\n- Win + X → A (관리자 PowerShell)\n- 시작메뉴에서 'PowerShell' 검색",
    hints: [
      "cmd와 PowerShell 모두 터미널입니다",
      "PowerShell이 더 강력한 기능을 제공합니다",
      "Git Bash도 좋은 대안입니다"
    ]
  },
  {
    id: 3,
    title: "Node.js 설치",
    description: "Node.js는 JavaScript를 브라우저 밖에서 실행할 수 있게 해줍니다.\n웹 개발의 필수 도구예요.\n공식 사이트에서 다운로드받아 설치하세요.",
    mission: "nodejs.org에서 LTS 버전을 다운로드하여 설치하세요",
    hints: [
      "LTS (Long Term Support) 버전을 선택하세요",
      "설치 과정에서 모든 기본 설정을 그대로 두세요",
      "설치 완료 후 터미널을 다시 열어야 합니다"
    ]
  },
  {
    id: 4,
    title: "설치 확인하기",
    description: "Node.js가 제대로 설치되었는지 확인해봅시다.\n버전을 확인하는 명령어를 실행해보세요.\nnpm도 함께 설치되었는지 확인해보세요.",
    mission: "터미널에서 다음 명령어들을 실행해보세요:\nnode --version\nnpm --version",
    hints: [
      "버전 번호가 나오면 설치 성공입니다",
      "npm은 Node.js와 함께 자동으로 설치됩니다",
      "명령어를 찾을 수 없다면 터미널을 다시 열어보세요"
    ]
  },
  {
    id: 5,
    title: "서버란 무엇인가?",
    description: "서버는 요청을 받아서 응답을 보내는 컴퓨터입니다.\n웹사이트를 보여주고, 데이터를 저장하고 전송해주죠.\n우리도 간단한 서버를 만들어볼 거예요.",
    mission: "서버의 역할과 개념을 이해했다면 완료해주세요",
    hints: [
      "클라이언트(브라우저)가 요청 → 서버가 응답",
      "HTML, CSS, JS 파일을 전송해주는 역할",
      "데이터베이스와 연결되어 정보를 처리하기도 함"
    ]
  },
  {
    id: 6,
    title: "첫 번째 파일 만들기",
    description: "이제 첫 번째 JavaScript 파일을 만들어봅시다.\nserver.js라는 이름으로 간단한 서버 코드를 작성해보세요.\n메모장이나 VS Code를 사용하면 됩니다.",
    mission: "server.js 파일을 만들고 아래 코드를 입력하세요:",
    code: `console.log('Hello, Server!');
console.log('Node.js is running...');`,
    hints: [
      "파일 확장자를 .js로 저장하세요",
      "UTF-8 인코딩으로 저장하는 것이 좋습니다",
      "VS Code를 사용하면 문법 하이라이팅을 볼 수 있어요"
    ]
  },
  {
    id: 7,
    title: "Claude Code 설치",
    description: "Claude Code는 AI 어시스턴트입니다.\n개발을 도와주는 강력한 도구예요.\n설치해서 개발 환경을 구성해봅시다.",
    mission: "Claude Code를 설치하고 설정을 완료하세요",
    hints: [
      "공식 가이드를 따라 설치하세요",
      "API 키 설정이 필요할 수 있습니다",
      "설치 후 터미널에서 claude --help를 실행해보세요"
    ]
  },
  {
    id: 8,
    title: "첫 명령어 실행",
    description: "드디어 첫 번째 JavaScript 파일을 실행해볼 시간입니다!\nNode.js로 우리가 만든 server.js를 실행해보세요.\n콘솔에 메시지가 출력될 거예요.",
    mission: "터미널에서 다음 명령어를 실행하세요:\nnode server.js",
    expectedResult: "Hello, Server!\nNode.js is running...",
    hints: [
      "server.js 파일이 있는 폴더에서 실행해야 합니다",
      "cd 명령어로 폴더를 이동할 수 있습니다",
      "파일 이름과 확장자를 정확히 입력하세요"
    ]
  },
  {
    id: 9,
    title: "프로젝트 생성하기",
    description: "이제 본격적인 웹 프로젝트를 생성해봅시다.\nnpx create-next-app을 사용해서 Next.js 프로젝트를 만들어보세요.\n현대적인 React 기반 프레임워크입니다.",
    mission: "다음 명령어로 새 프로젝트를 만드세요:\nnpx create-next-app@latest my-first-app",
    hints: [
      "TypeScript 사용을 권장합니다 (Yes 선택)",
      "Tailwind CSS도 함께 설치하면 좋습니다",
      "App Router를 사용하세요 (기본값)"
    ]
  },
  {
    id: 10,
    title: "코드 수정해보기",
    description: "생성된 프로젝트의 메인 페이지를 수정해봅시다.\nsrc/app/page.tsx 파일을 열고\n'Hello World'를 표시하도록 바꿔보세요.",
    mission: "page.tsx 파일을 수정해서 화면에 '안녕하세요, 첫 번째 웹사이트!'가 나오도록 하세요",
    hints: [
      "return 안의 JSX를 수정하면 됩니다",
      "<h1> 태그를 사용해보세요",
      "한국어도 잘 표시됩니다"
    ]
  },
  {
    id: 11,
    title: "로컬에서 실행",
    description: "이제 개발 서버를 실행해서 브라우저에서 결과를 확인해봅시다!\nnpm run dev 명령어로 서버를 시작할 수 있어요.\nlocalhost:3000에서 확인하세요.",
    mission: "터미널에서 npm run dev를 실행하고\n브라우저에서 http://localhost:3000을 열어보세요",
    hints: [
      "프로젝트 폴더로 먼저 이동하세요 (cd my-first-app)",
      "서버가 시작되면 Ctrl+클릭으로 링크를 바로 열 수 있습니다",
      "코드를 수정하면 실시간으로 반영됩니다"
    ]
  },
  {
    id: 12,
    title: "축하합니다! 🎉",
    description: "모든 단계를 완료했습니다!\n이제 여러분은 웹 개발의 기초를 익혔어요.\n터미널, Node.js, React까지 모두 경험해봤습니다.",
    mission: "완료 인증샷을 찍어보세요! 브라우저에 여러분이 만든 첫 웹사이트가 보이는 화면을요.",
    hints: [
      "이것은 시작일 뿐입니다",
      "계속 연습하면서 더 복잡한 앱을 만들어보세요",
      "다음 과정도 기대해주세요!"
    ]
  }
];

export const TOTAL_STEPS = STEPS.length;