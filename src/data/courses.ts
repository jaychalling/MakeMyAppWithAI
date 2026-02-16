export interface Step {
  id: number;
  title: string;
  concept: string;
  mission: string;
  hint?: string;
  code?: string;
}

export interface Course {
  id: number;
  title: string;
  emoji: string;
  level: 'level1' | 'level2' | 'level3' | 'level4' | 'side';
  description: string;
  steps: Step[];
  estimatedTime: string;
  reward: string; // 🎁 결과물
}

export const COURSES: Course[] = [
  // 🚀 LEVEL 1: 첫 마법 (Day 1)
  {
    id: 1,
    title: "AI야 안녕!",
    emoji: "🚀",
    level: "level1",
    description: "5분 만에 AI로 첫 웹페이지 만들기",
    estimatedTime: "15분",
    reward: "내 첫 웹페이지.html",
    steps: [
      {
        id: 1,
        title: "Node.js 다운로드",
        concept: "AI 코딩을 하려면 Node.js가 필요해요. 그냥 프로그램 하나 설치하는 거예요!",
        mission: "1. 아래 링크 클릭해서 다운로드\n2. 다운받은 파일 실행\n3. Next → Next → Next → Install → Finish\n\n끝! 1분이면 돼요.",
        code: "📥 다운로드 링크:\nhttps://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi (Windows)\nhttps://nodejs.org/dist/v20.11.0/node-v20.11.0.pkg (Mac)"
      },
      {
        id: 2,
        title: "설치 확인",
        concept: "설치가 잘 됐는지 1초만에 확인!",
        mission: "1. Windows: Win+R 누르고 cmd 입력 후 Enter\n   Mac: Cmd+Space 누르고 terminal 입력 후 Enter\n\n2. 열린 검은 창에 node -v 입력하고 Enter\n\n3. v20.x.x 같은 숫자 나오면 성공! 🎉",
        code: "node -v\n# 결과 예시: v20.11.0"
      },
      {
        id: 3,
        title: "Claude Code 설치",
        concept: "AI 코딩 도구 설치! 복사 붙여넣기 한 번이면 끝!",
        mission: "아까 그 검은 창에 아래 명령어 복사해서 붙여넣고 Enter!\n\n1-2분 기다리면 설치 완료.",
        code: "npm install -g @anthropic-ai/claude-code"
      },
      {
        id: 4,
        title: "API 키 발급",
        concept: "Claude를 쓰려면 API 키가 필요해요. 무료로 받을 수 있어요!",
        mission: "1. 아래 링크 접속\n2. 구글/이메일로 가입\n3. API Keys 메뉴 클릭\n4. Create Key 클릭\n5. 생성된 키 복사해두기 (sk-ant-...로 시작하는 긴 문자열)",
        code: "🔗 API 키 발급:\nhttps://console.anthropic.com/settings/keys\n\n⚠️ 키는 한 번만 보여주니까 꼭 복사해두세요!"
      },
      {
        id: 5,
        title: "AI와 첫 대화",
        concept: "드디어 AI와 대화할 시간!",
        mission: "1. 검은 창에 claude 입력하고 Enter\n2. API 키 입력하라고 하면 아까 복사한 키 붙여넣기\n3. 'yes' 입력해서 설정 완료",
        code: "claude\n\n# API 키 물어보면 붙여넣기\n# 설정 완료되면 대화 시작!"
      },
      {
        id: 6,
        title: "첫 번째 마법! ✨",
        concept: "AI에게 웹페이지를 만들어달라고 해볼게요!",
        mission: "Claude에게 그대로 말하세요:\n\n'간단한 자기소개 웹페이지 만들어줘. 내 이름은 [본인이름]이야'\n\nAI가 코드를 만들고 파일도 저장해줄 거예요!",
        code: "# 이렇게 말해보세요:\n간단한 자기소개 웹페이지 만들어줘. 내 이름은 홍길동이야"
      },
      {
        id: 7,
        title: "결과 확인! 🎉",
        concept: "AI가 만든 웹페이지를 브라우저에서 확인!",
        mission: "1. 파일 탐색기에서 index.html 파일 찾기\n2. 더블클릭하면 브라우저에서 열림\n\n🎉 축하해요! 방금 AI로 첫 웹페이지를 만들었어요!",
        code: "# 파일 위치가 궁금하면 Claude에게:\n파일 어디 저장했어?"
      }
    ]
  },

  {
    id: 2,
    title: "내 소개 페이지 꾸미기",
    emoji: "✨",
    level: "level1",
    description: "AI와 대화하면서 페이지를 예쁘게",
    estimatedTime: "20분",
    reward: "멋진 자기소개 페이지",
    steps: [
      {
        id: 1,
        title: "사진 추가하기",
        concept: "프로필 사진을 넣어볼게요!",
        mission: "Claude에게 그대로 말하세요:\n\n'프로필 사진 넣어줘. 일단 플레이스홀더 이미지로 해줘'\n\n(나중에 진짜 사진으로 바꿀 수 있어요)",
        code: "# 이렇게 말하세요:\n프로필 사진 넣어줘. 일단 플레이스홀더 이미지로 해줘"
      },
      {
        id: 2,
        title: "색상 바꾸기",
        concept: "색상이 마음에 안 들면 바꿔달라고 하면 돼요!",
        mission: "Claude에게:\n\n'다크 테마로 바꿔줘' 또는\n'배경을 파란색 그라데이션으로 해줘' 또는\n'더 모던하게 해줘'\n\n구체적으로 말할수록 좋아요!",
        code: "# 예시:\n다크 테마로 바꿔줘\n배경을 파란색 그라데이션으로 해줘\n글자색을 흰색으로 해줘"
      },
      {
        id: 3,
        title: "섹션 추가하기",
        concept: "더 많은 내용을 추가해봐요!",
        mission: "Claude에게:\n\n'취미 섹션이랑 연락처 섹션 추가해줘'",
        code: "# 원하는 섹션을 말하세요:\n- 자기소개\n- 취미\n- 기술 스택\n- 경력\n- 연락처\n- SNS 링크"
      },
      {
        id: 4,
        title: "애니메이션 넣기",
        concept: "움직이는 효과를 넣으면 더 멋져요!",
        mission: "Claude에게:\n\n'마우스 올리면 카드가 살짝 올라오는 효과 넣어줘'\n'페이지 로딩할 때 페이드인 효과 넣어줘'\n'스크롤하면 섹션이 나타나는 애니메이션 넣어줘'",
        code: "# 애니메이션 예시:\n- 호버 효과: 마우스 올리면 반응\n- 페이드인: 서서히 나타남\n- 슬라이드: 옆에서 들어옴"
      },
      {
        id: 5,
        title: "반응형으로 만들기",
        concept: "핸드폰에서도 잘 보이게!",
        mission: "Claude에게:\n\n'모바일에서도 잘 보이게 반응형으로 해줘'\n\n확인 방법: 브라우저 창 크기를 줄여보거나 F12 → 모바일 아이콘 클릭",
        code: "# 확인 방법:\n1. 브라우저 창 크기 줄이기\n2. 또는 F12 → 📱 아이콘 클릭"
      },
      {
        id: 6,
        title: "완성! 🎉",
        concept: "멋진 자기소개 페이지가 완성됐어요!",
        mission: "마음에 안 드는 부분 있으면 계속 수정 요청하세요!\n\n'폰트 더 크게 해줘'\n'여백 좀 줄여줘'\n'색상 좀 더 밝게'\n\nAI와 대화하면서 무한히 개선할 수 있어요!"
      }
    ]
  },

  {
    id: 3,
    title: "인터넷에 공개하기",
    emoji: "🌐",
    level: "level1",
    description: "내 페이지를 전 세계에 공개!",
    estimatedTime: "15분",
    reward: "나만의 URL",
    steps: [
      {
        id: 1,
        title: "Vercel 가입",
        concept: "무료로 웹사이트를 인터넷에 올릴 수 있는 서비스!",
        mission: "1. 아래 링크 클릭\n2. Sign Up 클릭\n3. Continue with GitHub (또는 Continue with Email)\n4. 가입 완료!",
        code: "🔗 Vercel 가입:\nhttps://vercel.com/signup"
      },
      {
        id: 2,
        title: "프로젝트 업로드",
        concept: "만든 파일을 Vercel에 드래그앤드롭!",
        mission: "1. Vercel 대시보드에서 'Add New...' 클릭\n2. 'Project' 선택\n3. 'Import Third-Party Git Repository' 아래 'browse' 클릭\n4. index.html 있는 폴더 통째로 선택\n5. 또는 그냥 폴더를 드래그해서 놓기!",
        code: "📂 업로드할 폴더:\nindex.html이 있는 폴더 전체를 선택하세요"
      },
      {
        id: 3,
        title: "배포하기",
        concept: "Deploy 버튼 한 번이면 끝!",
        mission: "1. 설정은 건드리지 말고 그대로 두기\n2. 'Deploy' 버튼 클릭\n3. 1-2분 기다리기\n4. 완료!"
      },
      {
        id: 4,
        title: "내 URL 확인! 🎉",
        concept: "축하해요! 전 세계 누구나 볼 수 있어요!",
        mission: "배포 완료되면 URL이 나와요!\n\n예: https://my-portfolio-abc123.vercel.app\n\n이 링크를 친구한테 보내보세요!",
        code: "🔗 내 URL 예시:\nhttps://my-portfolio-abc123.vercel.app\n\n카카오톡, 인스타 바이오에 넣어보세요!"
      },
      {
        id: 5,
        title: "업데이트 방법",
        concept: "수정하고 다시 올리는 방법!",
        mission: "파일 수정한 후:\n1. Vercel 대시보드 → 프로젝트 클릭\n2. Deployments 탭\n3. 'Redeploy' 또는 새로 업로드\n\n(나중에 GitHub 연결하면 자동으로 됨!)"
      }
    ]
  },

  // 🌿 LEVEL 2: 진짜 앱 (Day 2-3)
  {
    id: 4,
    title: "To-Do 앱 만들기",
    emoji: "✅",
    level: "level2",
    description: "진짜 쓸 수 있는 할일 관리 앱",
    estimatedTime: "30분",
    reward: "실제로 쓸 수 있는 To-Do 앱",
    steps: [
      {
        id: 1,
        title: "새 프로젝트 시작",
        concept: "이번엔 좀 더 복잡한 앱을 만들어봐요!",
        mission: "1. 새 폴더 만들기 (예: my-todo)\n2. 터미널에서 그 폴더로 이동: cd my-todo\n3. Claude 실행: claude\n4. 아래처럼 요청:",
        code: "# Claude에게:\n할일 관리 앱 만들어줘.\n- 할일 추가\n- 완료 체크\n- 삭제 기능\n예쁘게 해줘"
      },
      {
        id: 2,
        title: "기본 기능 테스트",
        concept: "만들어진 앱이 잘 동작하는지 확인!",
        mission: "1. index.html 더블클릭해서 브라우저에서 열기\n2. 할일 추가해보기\n3. 체크 눌러보기\n4. 삭제해보기\n\n버그 있으면 Claude에게 '여기 안 돼, 고쳐줘' 하면 됨!"
      },
      {
        id: 3,
        title: "저장 기능 추가",
        concept: "새로고침해도 데이터 유지!",
        mission: "Claude에게:\n\n'새로고침해도 할일이 저장되게 해줘'",
        code: "# Claude에게:\n새로고침해도 할일이 저장되게 해줘.\nlocalStorage 사용해."
      },
      {
        id: 4,
        title: "다크 모드",
        concept: "눈이 편한 다크 모드!",
        mission: "Claude에게:\n\n'다크모드 토글 버튼 추가해줘. 설정도 저장되게 해줘'",
        code: "# Claude에게:\n다크모드 토글 버튼 추가해줘.\n설정도 localStorage에 저장해서 유지되게."
      },
      {
        id: 5,
        title: "카테고리 & 필터",
        concept: "할일을 분류하고 필터링!",
        mission: "Claude에게:\n\n'할일에 카테고리 추가해줘 (업무/개인/쇼핑). 카테고리별로 필터링도 되게 해줘'",
        code: "# Claude에게:\n카테고리 기능 추가해줘.\n- 업무, 개인, 쇼핑 카테고리\n- 카테고리별 필터 버튼"
      },
      {
        id: 6,
        title: "마감일 & 알림",
        concept: "언제까지? 긴급한 건 빨간색!",
        mission: "Claude에게:\n\n'마감일 설정 기능 추가해줘. 오늘이나 내일까지인 건 빨간색으로 표시해줘'",
        code: "# Claude에게:\n마감일 기능 추가해줘.\n- 날짜 선택 가능\n- 마감 임박하면 빨간색\n- 마감일 순으로 정렬"
      },
      {
        id: 7,
        title: "배포하기 🚀",
        concept: "완성! 이제 배포!",
        mission: "3강에서 했던 것처럼 Vercel에 배포!\n\n핸드폰에서도 접속해서 써보세요. 진짜 쓸 수 있는 앱이에요!"
      }
    ]
  },

  {
    id: 5,
    title: "날씨 앱 만들기",
    emoji: "🌤️",
    level: "level2",
    description: "실시간 날씨 정보 앱",
    estimatedTime: "25분",
    reward: "실시간 날씨 앱",
    steps: [
      {
        id: 1,
        title: "API가 뭐야?",
        concept: "다른 서비스의 데이터를 가져오는 방법!",
        mission: "API = 데이터 자판기라고 생각하세요.\n\n요청 보내면 → 데이터 받음\n'서울 날씨 알려줘' → {온도: 15도, 상태: 맑음}\n\n그냥 데이터 가져오는 거예요!"
      },
      {
        id: 2,
        title: "날씨 API 키 받기",
        concept: "무료 날씨 API 키 발급!",
        mission: "1. 아래 링크 클릭\n2. 'Sign Up' → 가입 (이메일 확인 필요)\n3. 로그인 후 'API Keys' 메뉴\n4. 키 복사 (영문+숫자 긴 문자열)",
        code: "🔗 날씨 API 가입:\nhttps://home.openweathermap.org/users/sign_up\n\n🔗 API 키 확인:\nhttps://home.openweathermap.org/api_keys\n\n⏰ 가입 후 키 활성화까지 10분~2시간 걸릴 수 있음"
      },
      {
        id: 3,
        title: "날씨 앱 만들기",
        concept: "Claude에게 API 키와 함께 요청!",
        mission: "새 폴더에서 Claude 실행 후:",
        code: "# Claude에게:\n날씨 앱 만들어줘.\n- OpenWeatherMap API 사용\n- API 키: [여기에 복사한 키 붙여넣기]\n- 도시 검색하면 날씨 보여주기\n- 온도, 습도, 날씨 상태 표시"
      },
      {
        id: 4,
        title: "예쁘게 꾸미기",
        concept: "날씨에 따라 배경이 바뀌게!",
        mission: "Claude에게:",
        code: "# Claude에게:\n- 맑으면 파란 배경 + ☀️\n- 흐리면 회색 배경 + ☁️  \n- 비오면 어두운 배경 + 🌧️\n- 날씨 아이콘 크게 표시"
      },
      {
        id: 5,
        title: "현재 위치 날씨",
        concept: "내 위치 자동 감지!",
        mission: "Claude에게:\n\n'페이지 열면 현재 위치 날씨 자동으로 보여줘'\n\n(브라우저가 위치 권한 물어보면 '허용' 클릭)"
      },
      {
        id: 6,
        title: "5일 예보",
        concept: "앞으로의 날씨도!",
        mission: "Claude에게:\n\n'5일 예보도 아래에 보여줘. 날짜별로 카드 형태로'\n\n배포해서 친구들한테 자랑하세요!"
      }
    ]
  },

  {
    id: 6,
    title: "GitHub 연결하기",
    emoji: "🐙",
    level: "level2",
    description: "코드 저장 + 자동 배포",
    estimatedTime: "20분",
    reward: "프로처럼 배포하는 워크플로우",
    steps: [
      {
        id: 1,
        title: "GitHub 가입",
        concept: "코드를 저장하고 관리하는 곳이에요. 개발자 필수!",
        mission: "github.com → Sign up → 가입 완료",
        hint: "이미 있으면 스킵!"
      },
      {
        id: 2,
        title: "Git 설치",
        concept: "코드 버전 관리 도구예요.",
        mission: "git-scm.com → Download → 설치 (기본값으로)",
        hint: "Windows는 Git Bash도 같이 설치돼요"
      },
      {
        id: 3,
        title: "저장소 만들기",
        concept: "프로젝트를 저장할 공간을 만들어요!",
        mission: "GitHub → New repository → 이름 입력 → Create",
        hint: "Public으로 해도 되고 Private으로 해도 돼요"
      },
      {
        id: 4,
        title: "코드 올리기",
        concept: "Claude에게 시키면 돼요!",
        mission: "Claude에게: 'GitHub에 이 프로젝트 올려줘. 저장소 주소: [URL]'",
        hint: "Claude가 git 명령어를 실행해줄 거예요"
      },
      {
        id: 5,
        title: "Vercel 연결",
        concept: "GitHub에 올리면 자동으로 배포되게!",
        mission: "Vercel → Add New → Import Git Repository → GitHub 저장소 선택",
        hint: "이제 코드 수정하고 push만 하면 자동 배포!"
      },
      {
        id: 6,
        title: "자동 배포 테스트",
        concept: "진짜 자동으로 되는지 확인!",
        mission: "Claude에게 뭔가 수정 요청 → 'git push 해줘' → Vercel에서 자동 빌드 확인",
        hint: "이게 현업에서 쓰는 CI/CD예요!"
      }
    ]
  },

  // 🌳 LEVEL 3: AI 파워 (Day 4-5)
  {
    id: 7,
    title: "AI 챗봇 만들기",
    emoji: "🤖",
    level: "level3",
    description: "나만의 AI 챗봇",
    estimatedTime: "40분",
    reward: "나만의 AI 챗봇",
    steps: [
      {
        id: 1,
        title: "Claude API 키 발급",
        concept: "내 앱에서 Claude를 쓰려면 API 키가 필요!",
        mission: "1강에서 발급받은 키를 사용하거나, 새로 발급:",
        code: "🔗 API 키 발급:\nhttps://console.anthropic.com/settings/keys\n\n1. Create Key 클릭\n2. 키 복사 (sk-ant-...)\n\n💰 무료 크레딧으로 시작 가능\n사용량에 따라 비용 발생"
      },
      {
        id: 2,
        title: "챗봇 UI 만들기",
        concept: "카카오톡 같은 채팅 화면!",
        mission: "새 폴더에서 Claude 실행 후:",
        code: "# Claude에게:\n채팅 UI 만들어줘.\n- 메시지 입력창\n- 전송 버튼\n- 대화 목록 (내 메시지는 오른쪽, AI는 왼쪽)\n- 다크 테마\n- 카카오톡 느낌으로"
      },
      {
        id: 3,
        title: "API 연결",
        concept: "UI와 Claude API 연결!",
        mission: "Claude에게:",
        code: "# Claude에게:\nClaude API 연결해줘.\n- API 키: [여기에 키 붙여넣기]\n- 메시지 보내면 Claude한테 전달\n- 응답 받아서 화면에 표시"
      },
      {
        id: 4,
        title: "대화 맥락 유지",
        concept: "이전 대화를 기억하게!",
        mission: "Claude에게:\n\n'이전 대화 내용도 기억해서 맥락이 이어지게 해줘'\n\n(예: '아까 말한 그거' 같은 질문도 이해하게)",
        code: "# Claude에게:\n대화 맥락 유지해줘.\n이전 메시지들도 API에 함께 보내서\n대화가 자연스럽게 이어지게."
      },
      {
        id: 5,
        title: "캐릭터 설정",
        concept: "챗봇에 성격 부여!",
        mission: "Claude에게:\n\n'챗봇 성격 선택하는 드롭다운 추가해줘'",
        code: "# 캐릭터 예시:\n- 친근한 친구\n- 전문 상담사\n- 츤데레 캐릭터\n- 영어 선생님\n- 요리사"
      },
      {
        id: 6,
        title: "스트리밍 응답",
        concept: "ChatGPT처럼 타이핑 효과!",
        mission: "Claude에게:\n\n'응답이 한 글자씩 나타나게 스트리밍으로 해줘'",
        code: "# Claude에게:\n스트리밍 응답 구현해줘.\n글자가 하나씩 타이핑되는 것처럼\nChatGPT 느낌으로"
      },
      {
        id: 7,
        title: "배포하기 🚀",
        concept: "친구들도 쓸 수 있게!",
        mission: "⚠️ 중요: API 키는 코드에 직접 넣으면 안 됨!\n\n1. Vercel에서 Environment Variables에 키 저장\n2. 코드에서는 process.env.API_KEY로 사용",
        code: "# Vercel 환경변수 설정:\n1. Vercel 대시보드 → Settings\n2. Environment Variables\n3. ANTHROPIC_API_KEY = [키값]\n4. 재배포"
      }
    ]
  },

  {
    id: 8,
    title: "AI 이미지 생성기",
    emoji: "🎨",
    level: "level3",
    description: "텍스트로 이미지 생성",
    estimatedTime: "35분",
    reward: "AI 아트 생성기",
    steps: [
      {
        id: 1,
        title: "OpenAI API 키 발급",
        concept: "DALL-E를 쓰려면 OpenAI API 키가 필요!",
        mission: "1. 아래 링크에서 가입/로그인\n2. Create new secret key 클릭\n3. 키 복사 (sk-...)",
        code: "🔗 OpenAI API 키 발급:\nhttps://platform.openai.com/api-keys\n\n💰 신규 가입시 $5 무료 크레딧\n이미지 1장당 약 $0.02-0.04"
      },
      {
        id: 2,
        title: "이미지 생성 앱 만들기",
        concept: "프롬프트 입력 → 이미지 생성!",
        mission: "새 폴더에서 Claude 실행 후:",
        code: "# Claude에게:\nAI 이미지 생성 앱 만들어줘.\n- OpenAI DALL-E API 사용\n- API 키: [여기에 키]\n- 텍스트 입력창\n- 생성 버튼\n- 결과 이미지 표시"
      },
      {
        id: 3,
        title: "로딩 상태",
        concept: "이미지 생성은 10-20초 걸림!",
        mission: "Claude에게:\n\n'생성 중일 때 로딩 스피너 보여주고, 버튼 비활성화해줘'",
        code: "# Claude에게:\n로딩 상태 추가해줘.\n- 생성 중이면 스피너 애니메이션\n- 버튼 비활성화\n- '생성 중...' 텍스트"
      },
      {
        id: 4,
        title: "이미지 다운로드",
        concept: "생성된 이미지 저장!",
        mission: "Claude에게:\n\n'이미지 아래에 다운로드 버튼 추가해줘. PNG로 저장되게'",
        code: "# Claude에게:\n다운로드 버튼 추가해줘.\n- 클릭하면 이미지 PNG로 저장\n- 파일명은 'ai-art-날짜.png'"
      },
      {
        id: 5,
        title: "갤러리 기능",
        concept: "생성한 이미지들 모아보기!",
        mission: "Claude에게:\n\n'생성한 이미지들 갤러리로 아래에 보여줘. localStorage에 저장해서 새로고침해도 유지되게'",
        code: "# Claude에게:\n갤러리 기능 추가해줘.\n- 생성한 이미지들 그리드로 표시\n- 클릭하면 크게 보기\n- localStorage에 저장"
      },
      {
        id: 6,
        title: "스타일 옵션",
        concept: "다양한 스타일로 생성!",
        mission: "Claude에게:\n\n'스타일 선택 드롭다운 추가해줘'",
        code: "# 스타일 옵션:\n- 사실적 (photorealistic)\n- 애니메이션 (anime style)\n- 유화 (oil painting)\n- 수채화 (watercolor)\n- 픽셀아트 (pixel art)\n- 3D 렌더링"
      }
    ]
  },

  {
    id: 9,
    title: "AI 게임 만들기",
    emoji: "🎮",
    level: "level3",
    description: "간단한 게임에 AI 추가",
    estimatedTime: "45분",
    reward: "플레이 가능한 AI 게임",
    steps: [
      {
        id: 1,
        title: "게임 아이디어",
        concept: "어떤 게임을 만들까요?",
        mission: "간단한 게임 선택: 뱀 게임, 벽돌깨기, 슈팅 게임, 점프 게임 중 하나!",
        hint: "처음엔 간단한 게 좋아요. 뱀 게임 추천!"
      },
      {
        id: 2,
        title: "기본 게임 만들기",
        concept: "Claude에게 게임을 만들어달라고!",
        mission: "Claude에게: '[선택한 게임] 만들어줘. HTML Canvas 사용해서'",
        hint: "방향키로 조작하게 해달라고 하세요"
      },
      {
        id: 3,
        title: "게임 테스트",
        concept: "실제로 플레이 해보기!",
        mission: "브라우저에서 열고 플레이! 버그 있으면 Claude에게 말하세요",
        hint: "재미없으면 속도나 난이도 조절 요청!"
      },
      {
        id: 4,
        title: "점수 시스템",
        concept: "점수와 최고 기록!",
        mission: "Claude에게: '점수 시스템이랑 최고 점수 저장 기능 추가해줘'",
        hint: "localStorage로 최고 점수 저장!"
      },
      {
        id: 5,
        title: "AI 적 추가",
        concept: "AI가 조종하는 적을 추가!",
        mission: "Claude에게: 'AI가 조종하는 적 추가해줘. 플레이어를 쫓아오게'",
        hint: "단순한 추적 AI부터 시작!"
      },
      {
        id: 6,
        title: "레벨 시스템",
        concept: "점점 어려워지게!",
        mission: "Claude에게: '점수 올라갈수록 속도 빨라지고 적 많아지게 해줘'",
        hint: "난이도 곡선이 중요해요"
      },
      {
        id: 7,
        title: "사운드 효과",
        concept: "소리가 있으면 더 재밌어요!",
        mission: "Claude에게: '효과음 추가해줘. 먹을 때, 죽을 때, 레벨업 때'",
        hint: "무료 효과음 사이트: freesound.org"
      },
      {
        id: 8,
        title: "배포 & 공유",
        concept: "친구들이랑 점수 대결!",
        mission: "Vercel에 배포하고 친구들한테 공유!",
        hint: "누가 최고 점수 찍나 대결해보세요!"
      }
    ]
  },

  // 🏆 LEVEL 4: 진짜 서비스 (Day 6-7)
  {
    id: 10,
    title: "회원가입/로그인",
    emoji: "🔐",
    level: "level4",
    description: "사용자 인증 시스템",
    estimatedTime: "40분",
    reward: "회원 시스템이 있는 앱",
    steps: [
      {
        id: 1,
        title: "Supabase 가입",
        concept: "인증 + DB를 한 번에 해주는 서비스!",
        mission: "1. 아래 링크 클릭\n2. Start your project\n3. GitHub로 가입 (가장 빠름)",
        code: "🔗 Supabase 가입:\nhttps://supabase.com/dashboard\n\n💰 무료 플랜으로 충분\n- 50,000 월간 활성 사용자\n- 500MB 데이터베이스"
      },
      {
        id: 2,
        title: "프로젝트 생성",
        concept: "Supabase에 프로젝트 만들기!",
        mission: "1. 'New project' 클릭\n2. 프로젝트 이름 입력 (예: my-app)\n3. Database Password 설정 (기억해두기!)\n4. Region: Northeast Asia (Seoul) 선택\n5. 'Create new project' 클릭\n\n2분 정도 기다리기"
      },
      {
        id: 3,
        title: "API 키 복사",
        concept: "앱에서 쓸 키들 복사!",
        mission: "1. Settings (톱니바퀴) 클릭\n2. API 메뉴 클릭\n3. 아래 두 개 복사해두기:",
        code: "📋 복사할 것:\n1. Project URL: https://xxx.supabase.co\n2. anon public 키: eyJhbG... (긴 문자열)"
      },
      {
        id: 4,
        title: "앱에 연결",
        concept: "Claude에게 Supabase 연결!",
        mission: "새 폴더에서 Claude 실행 후:",
        code: "# Claude에게:\nSupabase로 회원가입/로그인 만들어줘.\n- URL: [복사한 URL]\n- Key: [복사한 anon 키]\n\n기능:\n- 이메일/비밀번호 회원가입\n- 로그인\n- 로그아웃\n- 로그인 상태 표시"
      },
      {
        id: 5,
        title: "회원가입 테스트",
        concept: "실제로 가입해보기!",
        mission: "1. 앱에서 회원가입 (아무 이메일로)\n2. 이메일 확인 (확인 메일 옴)\n3. 로그인 테스트\n\nSupabase 대시보드 → Authentication에서 사용자 확인 가능!"
      },
      {
        id: 6,
        title: "로그인 상태 UI",
        concept: "로그인 여부에 따라 다르게!",
        mission: "Claude에게:\n\n'로그인 안 했으면 로그인/회원가입 버튼, 로그인 했으면 사용자 이메일이랑 로그아웃 버튼 보여줘'",
        code: "# Claude에게:\n로그인 상태에 따라 UI 바꿔줘.\n- 비로그인: 로그인/회원가입 버튼\n- 로그인: 환영 메시지 + 로그아웃 버튼"
      },
      {
        id: 7,
        title: "보호된 페이지",
        concept: "로그인해야만 볼 수 있는 페이지!",
        mission: "Claude에게:\n\n'대시보드 페이지 만들어줘. 로그인 안 하면 접근 못하고 로그인 페이지로 이동시켜'",
        code: "# Claude에게:\n/dashboard 페이지 만들어줘.\n- 로그인 안 했으면 /login으로 리다이렉트\n- 로그인 했으면 대시보드 내용 표시"
      }
    ]
  },

  {
    id: 11,
    title: "결제 시스템",
    emoji: "💳",
    level: "level4",
    description: "Stripe로 결제 받기",
    estimatedTime: "45분",
    reward: "결제 가능한 서비스",
    steps: [
      {
        id: 1,
        title: "Stripe 가입",
        concept: "전 세계에서 쓰는 결제 서비스!",
        mission: "1. 아래 링크 클릭\n2. Create account\n3. 이메일 인증",
        code: "🔗 Stripe 가입:\nhttps://dashboard.stripe.com/register\n\n💰 테스트 모드로 먼저 개발\n실제 결제 전까지 무료"
      },
      {
        id: 2,
        title: "API 키 확인",
        concept: "테스트용 키 복사! (실제 결제 안 됨)",
        mission: "1. Developers 메뉴 클릭\n2. API keys 클릭\n3. 테스트 키 복사 (test가 붙은 것!)",
        code: "📋 복사할 것:\n- Publishable key: pk_test_...\n- Secret key: sk_test_...\n\n⚠️ test가 붙은 키는 실제 결제 안 됨!"
      },
      {
        id: 3,
        title: "상품 만들기",
        concept: "팔 상품/구독 정의!",
        mission: "1. Products 메뉴 클릭\n2. Add product\n3. 이름, 가격 입력\n4. 저장 후 Price ID 복사 (price_...)",
        code: "📦 상품 예시:\n- 이름: Pro Plan\n- 가격: $10/월 (구독) 또는 $50 (1회)\n\n저장 후 price_xxx ID 복사!"
      },
      {
        id: 4,
        title: "결제 버튼 추가",
        concept: "Stripe Checkout이 제일 쉬움!",
        mission: "Claude에게:",
        code: "# Claude에게:\nStripe Checkout 결제 버튼 만들어줘.\n- Publishable key: [pk_test_키]\n- Secret key: [sk_test_키]\n- Price ID: [price_xxx]\n\n결제 버튼 누르면 Stripe 결제 페이지로 이동"
      },
      {
        id: 5,
        title: "테스트 결제",
        concept: "가짜 카드로 테스트!",
        mission: "결제 페이지에서 아래 정보 입력:",
        code: "🧪 테스트 카드 정보:\n카드번호: 4242 4242 4242 4242\n만료일: 아무 미래 날짜 (예: 12/30)\nCVC: 아무 3자리 (예: 123)\n\n이 카드는 테스트용이라 실제 결제 안 됨!"
      },
      {
        id: 6,
        title: "결제 완료 처리",
        concept: "결제 성공하면 어떻게 할지!",
        mission: "Claude에게:\n\n'결제 성공하면 /success 페이지로 이동하고, 감사 메시지 보여줘'",
        code: "# Claude에게:\n결제 완료 처리해줘.\n- 성공: /success 페이지로 이동\n- 취소: /cancel 페이지로 이동\n- success 페이지에 '결제 감사합니다' 메시지"
      },
      {
        id: 7,
        title: "실제 결제 전환",
        concept: "준비되면 라이브 모드로!",
        mission: "실제 서비스 준비되면:\n1. Stripe 대시보드에서 'Test mode' 끄기\n2. Live API 키로 교체\n3. 사업자 등록 필요할 수 있음",
        code: "🚀 라이브 전환 체크리스트:\n- [ ] 사업자 등록\n- [ ] Stripe 계정 인증\n- [ ] Live 키로 교체\n- [ ] 실제 카드로 테스트"
      }
    ]
  },

  {
    id: 12,
    title: "내 SaaS 런칭!",
    emoji: "🚀",
    level: "level4",
    description: "처음부터 끝까지 서비스 만들기",
    estimatedTime: "2시간+",
    reward: "실제 서비스 런칭!",
    steps: [
      {
        id: 1,
        title: "아이디어 선택",
        concept: "어떤 문제를 해결할까?",
        mission: "본인 또는 주변 사람이 겪는 작은 문제 하나 선택!\n예: 메모 정리, 습관 트래킹, 링크 저장 등",
        hint: "작은 것부터! 세상을 바꾸려 하지 마세요 😄"
      },
      {
        id: 2,
        title: "MVP 정의",
        concept: "최소한의 기능만!",
        mission: "핵심 기능 3개만 정의하세요. 그 외는 나중에!",
        hint: "기능이 적을수록 빨리 런칭할 수 있어요"
      },
      {
        id: 3,
        title: "랜딩 페이지",
        concept: "서비스 소개 페이지!",
        mission: "Claude에게: '이 서비스 랜딩 페이지 만들어줘: [서비스 설명]'",
        hint: "문제-해결-CTA 구조로!"
      },
      {
        id: 4,
        title: "핵심 기능 구현",
        concept: "진짜 서비스 만들기!",
        mission: "Claude와 함께 핵심 기능 3개 구현",
        hint: "지금까지 배운 모든 것을 활용!"
      },
      {
        id: 5,
        title: "인증 추가",
        concept: "회원 시스템 연동!",
        mission: "10강에서 배운 Supabase 인증 적용",
        hint: "로그인한 사용자별로 데이터 분리!"
      },
      {
        id: 6,
        title: "결제 추가",
        concept: "수익화!",
        mission: "11강에서 배운 Stripe 연동",
        hint: "무료 플랜 + 유료 플랜 구조 추천"
      },
      {
        id: 7,
        title: "배포",
        concept: "세상에 공개!",
        mission: "Vercel에 배포 + 도메인 연결 (선택)",
        hint: "커스텀 도메인이 있으면 더 전문적!"
      },
      {
        id: 8,
        title: "런칭!",
        concept: "축하해요! 🎉",
        mission: "SNS에 공유, Product Hunt에 올리기, 친구들에게 알리기!",
        hint: "피드백 받고 계속 개선하세요!"
      }
    ]
  },

  // 📚 사이드 퀘스트
  {
    id: 101,
    title: "터미널 기초",
    emoji: "💻",
    level: "side",
    description: "필요할 때 배우는 터미널",
    estimatedTime: "15분",
    reward: "터미널 기본 명령어",
    steps: [
      {
        id: 1,
        title: "터미널이 뭐야?",
        concept: "마우스 대신 텍스트로 컴퓨터와 대화하는 방법!",
        mission: "Windows: Win+R → cmd / Mac: Terminal 앱 열기",
        hint: "해커 영화에서 보던 검은 화면이에요 😎"
      },
      {
        id: 2,
        title: "현재 위치",
        concept: "지금 어느 폴더에 있는지 확인!",
        mission: "pwd (Mac) / cd (Windows)",
        hint: "pwd = Print Working Directory"
      },
      {
        id: 3,
        title: "폴더 보기",
        concept: "현재 폴더에 뭐가 있나?",
        mission: "ls (Mac) / dir (Windows)",
        hint: "ls -la 하면 숨김 파일도 보여요"
      },
      {
        id: 4,
        title: "폴더 이동",
        concept: "다른 폴더로 이동!",
        mission: "cd 폴더이름\ncd .. (상위 폴더)",
        hint: "Tab 누르면 자동완성!"
      },
      {
        id: 5,
        title: "폴더 만들기",
        concept: "새 폴더 생성!",
        mission: "mkdir 폴더이름",
        hint: "mkdir = make directory"
      }
    ]
  },

  {
    id: 102,
    title: "Git 기초",
    emoji: "📝",
    level: "side",
    description: "필요할 때 배우는 Git",
    estimatedTime: "20분",
    reward: "Git 기본 사용법",
    steps: [
      {
        id: 1,
        title: "Git이 뭐야?",
        concept: "코드의 '저장' 버튼! 근데 히스토리가 다 남아요.",
        mission: "게임 세이브 파일처럼, 원하는 시점으로 돌아갈 수 있어요!",
        hint: "실수해도 복구 가능 = 마음 편하게 코딩"
      },
      {
        id: 2,
        title: "저장소 초기화",
        concept: "이 폴더를 Git으로 관리하겠다!",
        mission: "git init",
        hint: ".git 폴더가 생겨요 (숨김)"
      },
      {
        id: 3,
        title: "변경사항 확인",
        concept: "뭐가 바뀌었나?",
        mission: "git status",
        hint: "빨간색 = 아직 저장 안 됨"
      },
      {
        id: 4,
        title: "저장 준비",
        concept: "저장할 파일 선택!",
        mission: "git add . (전체) 또는 git add 파일명",
        hint: "스테이징이라고 해요"
      },
      {
        id: 5,
        title: "저장 (커밋)",
        concept: "진짜 저장!",
        mission: "git commit -m '변경 내용 설명'",
        hint: "메시지는 나중에 알아볼 수 있게!"
      },
      {
        id: 6,
        title: "GitHub에 올리기",
        concept: "온라인에 백업!",
        mission: "git push",
        hint: "remote 설정이 먼저 필요해요"
      }
    ]
  },

  {
    id: 103,
    title: "HTML/CSS 이해하기",
    emoji: "🎨",
    level: "side",
    description: "웹페이지의 구조와 스타일",
    estimatedTime: "25분",
    reward: "HTML/CSS 기초 이해",
    steps: [
      {
        id: 1,
        title: "HTML = 구조",
        concept: "건물의 뼈대 같은 거예요!",
        mission: "<태그>내용</태그> 형태로 구조를 만들어요",
        hint: "h1=제목, p=문단, div=영역, a=링크, img=이미지"
      },
      {
        id: 2,
        title: "CSS = 디자인",
        concept: "건물의 인테리어!",
        mission: "색상, 크기, 위치 등을 정해요",
        hint: "선택자 { 속성: 값; } 형태"
      },
      {
        id: 3,
        title: "개발자 도구",
        concept: "F12 누르면 비밀의 문이 열려요!",
        mission: "아무 웹사이트에서 F12 → Elements 탭",
        hint: "다른 사이트 코드를 볼 수 있어요!"
      },
      {
        id: 4,
        title: "Claude에게 수정 요청",
        concept: "직접 안 고쳐도 돼요!",
        mission: "원하는 변경사항을 말로 설명하면 Claude가 해줘요",
        hint: "하지만 이해하면 더 정확하게 요청할 수 있어요"
      }
    ]
  },

  {
    id: 104,
    title: "AI 코딩 도구 비교",
    emoji: "🛠️",
    level: "side",
    description: "Claude Code 외 다른 도구들",
    estimatedTime: "15분",
    reward: "도구 선택 가이드",
    steps: [
      {
        id: 1,
        title: "Claude Code",
        concept: "우리가 쓰고 있는 거!",
        mission: "장점: 터미널 기반, 긴 컨텍스트, 에이전트 모드\n단점: GUI 없음",
        hint: "대규모 작업에 최적"
      },
      {
        id: 2,
        title: "Cursor",
        concept: "VS Code + AI!",
        mission: "장점: 익숙한 IDE, 코드베이스 이해\n단점: 유료",
        hint: "에디터 선호하면 추천"
      },
      {
        id: 3,
        title: "GitHub Copilot",
        concept: "자동완성 특화!",
        mission: "장점: 실시간 자동완성 최강\n단점: 대화형 아님",
        hint: "타이핑 속도 UP"
      },
      {
        id: 4,
        title: "Windsurf",
        concept: "무료 대안!",
        mission: "장점: 무료 티어 넉넉\n단점: 기능 적음",
        hint: "예산 제한시 추천"
      },
      {
        id: 5,
        title: "조합 추천",
        concept: "하나만 쓸 필요 없어요!",
        mission: "Claude Code (큰 작업) + Cursor (일상 코딩) 조합 추천!",
        hint: "상황에 맞게 도구를 선택하세요"
      }
    ]
  }
];

export const LEVEL_INFO = {
  level1: { emoji: "🚀", label: "첫 마법", color: "text-green-400", description: "Day 1" },
  level2: { emoji: "🌿", label: "진짜 앱", color: "text-blue-400", description: "Day 2-3" },
  level3: { emoji: "🌳", label: "AI 파워", color: "text-yellow-400", description: "Day 4-5" },
  level4: { emoji: "🏆", label: "진짜 서비스", color: "text-purple-400", description: "Day 6-7" },
  side: { emoji: "📚", label: "사이드 퀘스트", color: "text-gray-400", description: "필요할 때" }
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
