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
        mission: "nodejs.org에서 초록색 LTS 버튼 클릭 → 다운로드 → 설치 (다음다음다음...)",
        hint: "설치할 때 모든 옵션 그냥 기본값으로 두세요. 1분이면 끝!"
      },
      {
        id: 2,
        title: "설치 확인",
        concept: "설치가 잘 됐는지 확인해볼게요.",
        mission: "Windows: Win+R → 'cmd' 입력 → Enter\nMac: Cmd+Space → 'terminal' 입력 → Enter\n\n그 다음 node -v 입력하고 Enter!",
        hint: "v20.x.x 같은 숫자가 나오면 성공! 🎉",
        code: "node -v\n# v20.11.0 같은 버전이 나오면 OK!"
      },
      {
        id: 3,
        title: "Claude Code 설치",
        concept: "이제 AI 코딩 도구를 설치해요. 한 줄이면 끝!",
        mission: "아까 그 검은 창에 이거 복사해서 붙여넣기:",
        hint: "설치하는 데 1-2분 걸릴 수 있어요. 기다리세요!",
        code: "npm install -g @anthropic-ai/claude-code"
      },
      {
        id: 4,
        title: "AI와 첫 대화",
        concept: "드디어! AI와 대화할 준비 완료!",
        mission: "검은 창에 claude 입력하고 Enter!\n\nAPI 키 입력하라고 하면 anthropic.com에서 발급받아서 입력하세요.",
        hint: "처음엔 API 키 설정이 필요해요. console.anthropic.com에서 만들 수 있어요.",
        code: "claude"
      },
      {
        id: 5,
        title: "첫 번째 마법",
        concept: "AI에게 웹페이지를 만들어달라고 해볼게요!",
        mission: "Claude에게 이렇게 말해보세요:\n\n'간단한 자기소개 웹페이지 만들어줘. 내 이름은 [본인이름]이야'",
        hint: "AI가 코드를 만들고 파일도 저장해줄 거예요!",
        code: "# Claude에게:\n간단한 자기소개 웹페이지 만들어줘. 내 이름은 홍길동이야"
      },
      {
        id: 6,
        title: "결과 확인!",
        concept: "AI가 만든 웹페이지를 브라우저에서 열어봐요!",
        mission: "생성된 index.html 파일을 더블클릭하거나 브라우저로 드래그하세요.",
        hint: "🎉 축하해요! 방금 AI로 첫 웹페이지를 만들었어요!",
        code: "# 파일 위치 확인\nls\n# index.html이 보이면 더블클릭!"
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
        mission: "Claude에게: '프로필 사진 넣을 수 있게 해줘. 일단 플레이스홀더 이미지로'",
        hint: "나중에 실제 사진으로 바꿀 수 있어요!"
      },
      {
        id: 2,
        title: "색상 바꾸기",
        concept: "기본 색상이 마음에 안 들면 바꿔달라고 하면 돼요!",
        mission: "Claude에게: '배경색을 [원하는색]으로 바꿔줘' 또는 '더 모던한 느낌으로 해줘'",
        hint: "구체적으로 말할수록 좋아요. '다크 테마로 해줘'처럼!"
      },
      {
        id: 3,
        title: "섹션 추가하기",
        concept: "취미, 기술, 연락처 등을 추가해봐요!",
        mission: "Claude에게: '취미 섹션이랑 연락처 섹션 추가해줘'",
        hint: "원하는 섹션을 마음대로 요청하세요!"
      },
      {
        id: 4,
        title: "애니메이션 넣기",
        concept: "움직이는 효과를 넣으면 더 멋져요!",
        mission: "Claude에게: '호버하면 카드가 살짝 올라오는 효과 넣어줘'",
        hint: "스크롤 애니메이션, 페이드인 등도 요청해보세요!"
      },
      {
        id: 5,
        title: "반응형으로 만들기",
        concept: "핸드폰에서도 잘 보이게 만들어요!",
        mission: "Claude에게: '모바일에서도 잘 보이게 반응형으로 해줘'",
        hint: "브라우저 창 크기를 줄여서 확인해보세요!"
      },
      {
        id: 6,
        title: "완성! 🎉",
        concept: "멋진 자기소개 페이지가 완성됐어요!",
        mission: "최종 결과물을 브라우저에서 확인하고, 마음에 안 드는 부분은 계속 수정 요청하세요!",
        hint: "AI와 대화하면서 계속 개선할 수 있어요. 이게 AI 코딩의 힘!"
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
        concept: "무료로 웹사이트를 인터넷에 올릴 수 있는 서비스예요!",
        mission: "vercel.com 접속 → Sign Up → GitHub로 가입 (없으면 이메일로)",
        hint: "GitHub 계정이 없어도 이메일로 가입할 수 있어요!"
      },
      {
        id: 2,
        title: "프로젝트 업로드",
        concept: "만든 파일을 Vercel에 올려요!",
        mission: "Vercel 대시보드 → Add New → Project → 'Browse' 클릭 → 폴더 선택",
        hint: "index.html이 있는 폴더를 통째로 선택하세요!"
      },
      {
        id: 3,
        title: "배포하기",
        concept: "Deploy 버튼만 누르면 끝!",
        mission: "설정은 기본값 그대로 두고 Deploy 클릭!",
        hint: "1-2분 기다리면 배포 완료!"
      },
      {
        id: 4,
        title: "내 URL 확인!",
        concept: "축하해요! 이제 전 세계 누구나 볼 수 있어요!",
        mission: "배포 완료되면 URL이 나와요. 클릭해서 확인하고, 친구한테 보내보세요!",
        hint: "your-project.vercel.app 같은 주소가 생겨요!",
        code: "# 예시 URL\nhttps://my-portfolio-abc123.vercel.app"
      },
      {
        id: 5,
        title: "커스텀 도메인 (선택)",
        concept: "원하면 나만의 도메인을 연결할 수 있어요!",
        mission: "Settings → Domains에서 커스텀 도메인 추가 가능 (유료)",
        hint: "지금은 무료 URL로도 충분해요! 나중에 해도 됩니다."
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
        mission: "새 폴더 만들고 Claude 실행:\n\n'할일 관리 앱 만들어줘. 할일 추가, 완료 체크, 삭제 기능 필요해'",
        hint: "Claude가 여러 파일을 만들 수도 있어요!"
      },
      {
        id: 2,
        title: "기본 기능 확인",
        concept: "만들어진 앱을 테스트해봐요!",
        mission: "브라우저에서 열고 할일 추가, 체크, 삭제 테스트",
        hint: "버그가 있으면 Claude에게 말해서 고치세요!"
      },
      {
        id: 3,
        title: "저장 기능 추가",
        concept: "새로고침해도 데이터가 유지되게!",
        mission: "Claude에게: '새로고침해도 할일이 저장되게 localStorage 사용해줘'",
        hint: "localStorage는 브라우저에 데이터를 저장하는 방법이에요"
      },
      {
        id: 4,
        title: "다크 모드",
        concept: "눈이 편한 다크 모드를 추가해요!",
        mission: "Claude에게: '다크모드 토글 버튼 추가해줘'",
        hint: "다크모드 설정도 저장되게 해달라고 하세요!"
      },
      {
        id: 5,
        title: "카테고리 기능",
        concept: "할일을 분류할 수 있게!",
        mission: "Claude에게: '할일에 카테고리 추가할 수 있게 해줘. 예: 업무, 개인, 쇼핑'",
        hint: "필터 기능도 같이 요청해보세요!"
      },
      {
        id: 6,
        title: "마감일 추가",
        concept: "언제까지 해야 하는지 설정!",
        mission: "Claude에게: '마감일 설정하고, 마감 임박하면 빨간색으로 표시해줘'",
        hint: "정렬 기능도 추가하면 좋아요!"
      },
      {
        id: 7,
        title: "배포하기",
        concept: "완성된 앱을 배포해요!",
        mission: "아까처럼 Vercel에 배포하세요. 이제 어디서든 쓸 수 있어요!",
        hint: "핸드폰에서도 접속해보세요!"
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
        concept: "다른 서비스의 데이터를 가져오는 방법이에요! 1분이면 이해돼요.",
        mission: "API = 데이터 자판기\n돈(요청) 넣으면 → 음료(데이터) 나옴\n\n날씨 API에 '서울' 요청 → 서울 날씨 데이터 반환!",
        hint: "어렵게 생각하지 마세요. 그냥 데이터 가져오는 거예요!"
      },
      {
        id: 2,
        title: "날씨 API 키 받기",
        concept: "무료 날씨 API를 사용할 거예요!",
        mission: "openweathermap.org 가입 → API Keys → 키 복사",
        hint: "무료로 월 1000회 호출 가능해요. 충분!"
      },
      {
        id: 3,
        title: "날씨 앱 만들기",
        concept: "Claude에게 API 키와 함께 요청!",
        mission: "Claude에게: '이 API 키로 날씨 앱 만들어줘: [키]. 도시 검색하면 날씨 보여주는 거'",
        hint: "API 키는 비밀이에요! 공개하면 안 돼요"
      },
      {
        id: 4,
        title: "예쁘게 꾸미기",
        concept: "날씨에 따라 배경이 바뀌면 멋지겠죠?",
        mission: "Claude에게: '맑으면 파란 배경, 비오면 회색 배경, 날씨 아이콘도 넣어줘'",
        hint: "애니메이션도 추가해보세요!"
      },
      {
        id: 5,
        title: "현재 위치 날씨",
        concept: "내 위치를 자동으로 감지!",
        mission: "Claude에게: '현재 위치 자동 감지해서 날씨 보여주는 기능 추가해줘'",
        hint: "브라우저가 위치 권한을 물어볼 거예요"
      },
      {
        id: 6,
        title: "5일 예보",
        concept: "오늘만 말고 앞으로의 날씨도!",
        mission: "Claude에게: '5일 예보도 보여줘'",
        hint: "OpenWeatherMap 5day forecast API 사용!"
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
        title: "Claude API 키 받기",
        concept: "Claude를 내 앱에서 쓰려면 API 키가 필요해요!",
        mission: "console.anthropic.com → API Keys → Create Key → 복사",
        hint: "API 사용량에 따라 비용이 발생할 수 있어요"
      },
      {
        id: 2,
        title: "챗봇 UI 만들기",
        concept: "채팅 인터페이스를 만들어요!",
        mission: "Claude에게: '채팅 UI 만들어줘. 입력창, 전송 버튼, 대화 목록 필요해'",
        hint: "카카오톡이나 iMessage 같은 느낌으로!"
      },
      {
        id: 3,
        title: "API 연결",
        concept: "UI와 Claude API를 연결!",
        mission: "Claude에게: 'Claude API 연결해줘. API 키: [키]. 메시지 보내면 응답 받아서 표시'",
        hint: "백엔드 없이 클라이언트에서 직접 호출할 수도 있어요"
      },
      {
        id: 4,
        title: "대화 기록 유지",
        concept: "이전 대화를 기억하게!",
        mission: "Claude에게: '이전 대화 맥락 유지해서 대화가 이어지게 해줘'",
        hint: "messages 배열에 이전 대화를 포함해서 보내요"
      },
      {
        id: 5,
        title: "캐릭터 설정",
        concept: "챗봇에 성격을 부여해요!",
        mission: "Claude에게: '시스템 프롬프트로 챗봇 성격 설정하는 기능 추가해줘'",
        hint: "예: '친근한 한국어 선생님', '츤데레 캐릭터' 등"
      },
      {
        id: 6,
        title: "스트리밍 응답",
        concept: "글자가 하나씩 나타나게!",
        mission: "Claude에게: '응답이 스트리밍으로 한 글자씩 나타나게 해줘'",
        hint: "ChatGPT처럼 타이핑 효과!"
      },
      {
        id: 7,
        title: "배포하기",
        concept: "친구들도 쓸 수 있게!",
        mission: "Vercel에 배포! (API 키는 환경 변수로 설정)",
        hint: "API 키를 코드에 직접 넣으면 안 돼요!"
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
        title: "이미지 API 선택",
        concept: "DALL-E, Stable Diffusion 등 여러 옵션이 있어요!",
        mission: "OpenAI API 사용할 거예요. platform.openai.com → API Keys → 키 발급",
        hint: "무료 크레딧이 있을 수도 있어요!"
      },
      {
        id: 2,
        title: "기본 UI 만들기",
        concept: "프롬프트 입력 → 이미지 생성!",
        mission: "Claude에게: '이미지 생성 앱 만들어줘. 텍스트 입력하면 DALL-E로 이미지 생성'",
        hint: "API 키도 같이 알려주세요"
      },
      {
        id: 3,
        title: "로딩 상태",
        concept: "이미지 생성은 시간이 좀 걸려요!",
        mission: "Claude에게: '생성 중일 때 로딩 애니메이션 보여줘'",
        hint: "스피너나 프로그레스 바!"
      },
      {
        id: 4,
        title: "이미지 다운로드",
        concept: "생성된 이미지를 저장!",
        mission: "Claude에게: '이미지 다운로드 버튼 추가해줘'",
        hint: "PNG로 저장하면 좋아요"
      },
      {
        id: 5,
        title: "갤러리 기능",
        concept: "생성한 이미지들을 모아보기!",
        mission: "Claude에게: '생성한 이미지들 갤러리로 보여주고 localStorage에 저장해줘'",
        hint: "이미지 URL을 저장하면 돼요"
      },
      {
        id: 6,
        title: "스타일 옵션",
        concept: "다양한 스타일로 생성!",
        mission: "Claude에게: '스타일 선택 옵션 추가해줘. 사실적, 애니메이션, 유화 등'",
        hint: "프롬프트 앞에 스타일을 붙이는 방식!"
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
        concept: "인증, DB를 쉽게 해주는 서비스!",
        mission: "supabase.com → Start your project → GitHub로 가입",
        hint: "무료 플랜으로 충분해요!"
      },
      {
        id: 2,
        title: "프로젝트 생성",
        concept: "Supabase에 프로젝트 만들기!",
        mission: "New project → 이름 입력 → 비밀번호 설정 → Create",
        hint: "비밀번호 잘 기억하세요!"
      },
      {
        id: 3,
        title: "인증 설정",
        concept: "이메일/비밀번호 로그인 활성화!",
        mission: "Authentication → Providers → Email 활성화",
        hint: "Google, GitHub 로그인도 추가할 수 있어요"
      },
      {
        id: 4,
        title: "앱에 연결",
        concept: "Claude에게 Supabase 연결 요청!",
        mission: "Project Settings → API에서 URL과 anon key 복사\n\nClaude에게: 'Supabase로 회원가입/로그인 만들어줘. URL: [URL], Key: [Key]'",
        hint: "키는 비밀이에요!"
      },
      {
        id: 5,
        title: "회원가입 테스트",
        concept: "실제로 가입해보기!",
        mission: "회원가입 → 이메일 확인 → 로그인 테스트",
        hint: "Supabase 대시보드에서 사용자 확인 가능!"
      },
      {
        id: 6,
        title: "로그인 상태 표시",
        concept: "로그인했으면 다르게 보여주기!",
        mission: "Claude에게: '로그인 안 했으면 로그인 버튼, 했으면 프로필이랑 로그아웃 버튼 보여줘'",
        hint: "조건부 렌더링!"
      },
      {
        id: 7,
        title: "보호된 페이지",
        concept: "로그인해야만 볼 수 있는 페이지!",
        mission: "Claude에게: '대시보드 페이지는 로그인해야만 접근할 수 있게 해줘'",
        hint: "리다이렉트 처리도 해달라고 하세요"
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
        mission: "stripe.com → Create account → 정보 입력",
        hint: "테스트 모드로 먼저 개발해요"
      },
      {
        id: 2,
        title: "API 키 확인",
        concept: "테스트용 키를 사용해요!",
        mission: "Developers → API keys → 테스트 키 복사 (pk_test_... / sk_test_...)",
        hint: "test가 붙은 키는 실제 결제 안 돼요!"
      },
      {
        id: 3,
        title: "상품 만들기",
        concept: "팔 상품/구독을 정의!",
        mission: "Products → Add product → 이름, 가격 설정",
        hint: "1회성 결제 vs 구독 선택 가능"
      },
      {
        id: 4,
        title: "결제 버튼 추가",
        concept: "Claude에게 Stripe Checkout 연동!",
        mission: "Claude에게: 'Stripe Checkout으로 결제 버튼 만들어줘. 가격 ID: [price_xxx]'",
        hint: "Stripe Checkout이 제일 쉬워요"
      },
      {
        id: 5,
        title: "테스트 결제",
        concept: "가짜 카드로 테스트!",
        mission: "카드번호: 4242 4242 4242 4242\n만료: 아무 미래 날짜\nCVC: 아무 숫자",
        hint: "이 카드는 테스트용이라 실제 결제 안 돼요!"
      },
      {
        id: 6,
        title: "결제 완료 처리",
        concept: "결제 성공하면 어떻게 할지!",
        mission: "Claude에게: '결제 완료되면 success 페이지로 이동하고 DB에 기록해줘'",
        hint: "Webhook으로 더 확실하게 처리할 수 있어요"
      },
      {
        id: 7,
        title: "실제 결제 전환",
        concept: "준비되면 라이브 모드로!",
        mission: "Stripe 대시보드에서 Live 모드로 전환, API 키 교체",
        hint: "사업자 등록이 필요할 수 있어요"
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
