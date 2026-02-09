export interface Project {
  id: string;
  title: string;
  category: 'company' | 'side' | 'university';
  period: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  links?: {
    label: string;
    url: string;
  }[];
  images?: string[];
  videos?: string[];
}

export const projects: Project[] = [
  // 회사 경험
  {
    id: 'button',
    title: "스마트팜 'BUTTON.'",
    category: 'company',
    period: '2024.03 ~ 2026.02 (약 2년)',
    shortDesc: '서울소프트 - 모바일 단독 개발 & IoT/AI 설계',
    description:
      '스마트팜 센서 데이터를 실시간으로 모니터링하고 제어할 수 있는 서비스입니다. 프로젝트 초기부터 참여하여 기획에 함께 참여했고, 모바일 앱을 단독 개발하고 실시간 IoT 통신 설계와 AI 기능 개발을 주도했습니다.',
    highlights: [
      '[기획] 프로젝트 초기부터 참여하여 서비스 기획에 기여',
      '[앱] Flutter 모바일 애플리케이션 단독 개발 (UI → API 연동 → 배포)',
      '[IoT] MQTT 프로토콜 기반 실시간 컨트롤러 제어 설계 주도, 앱에서 실시간 제어/모니터링 연동',
      '[인프라] 푸시 알림, 앱 배포 등 서비스 운영에 필요한 전반적인 기능 구현',
      '[AI] LLM 기반 BUTTON 특화 챗봇 개발',
      '[AI] MCP 프로토콜을 활용한 자연어 기반 시스템 제어 및 모니터링 기능 개발',
      '[인프라] DGX Spark를 활용한 회사 전용 데모 인프라 구축',
    ],
    techStack: ['Flutter', 'Django', 'MongoDB', 'MySQL', 'AWS', 'Nginx', 'MQTT', 'WebSocket', 'LLM', 'MCP', 'DGX Spark'],
    metrics: [
      { label: '참여 기간', value: '약 2년' },
      { label: '모바일', value: '단독 개발' },
      { label: 'IoT 설계', value: '주도' },
    ],
    links: [
      { label: '서비스 홈페이지', url: 'http://seoulsoft.kr/menu/0103/' },
    ],
    images: [
      '/portfolio/projects/button/1.png',
      '/portfolio/projects/button/2.png',
      '/portfolio/projects/button/3.png',
      '/portfolio/projects/button/4.png',
      '/portfolio/projects/button/5.png',
      '/portfolio/projects/button/6.png',
      '/portfolio/projects/button/7.png',
      '/portfolio/projects/button/8.png',
      '/portfolio/projects/button/9.png',
      '/portfolio/projects/button/10.png',
      '/portfolio/projects/button/11.png',
    ],
  },

  // 사이드 프로젝트 - 팀 블루베리
  {
    id: 'foodimo',
    title: 'Foodimo (베리오더)',
    category: 'side',
    period: '2025.01 ~ 2025.08 (약 7개월)',
    shortDesc: '팀 블루베리 - 식당 주문 관리 시스템 백엔드',
    description:
      '식당 주문 관리 시스템의 백엔드를 핵심 개발자로 참여했습니다. Clean Architecture 기반 전면 리팩토링, Docker 인프라 구축, Blue-Green 무중단 배포 등 백엔드 전반을 담당했습니다.',
    highlights: [
      'Clean Architecture 전면 리팩토링 (UseCase/Repository/Entity 계층 분리)',
      'Docker + Nginx + SSL/TLS 인프라 구축 (TLS 1.3 + HSTS)',
      'Blue-Green 무중단 배포 전략 구현',
      '버전 기반 주문 부분 취소 시스템 설계',
      'Prometheus + Grafana 모니터링 대시보드 구축',
      'JWT 인증 + 2차 비밀번호 체계 구현',
      'E2E 테스트 커버리지 확보 (Jest + Supertest)',
      'Swagger API 문서화',
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Nginx', 'Socket.IO', 'Prometheus', 'Grafana'],
    metrics: [
      { label: '커밋', value: '248개' },
      { label: 'PR 작성', value: '53개' },
      { label: 'PR 리뷰', value: '80+' },
    ],
    links: [
      { label: '서비스 홈페이지', url: 'https://www.foodimo-app.com/' },
    ],
  },
  {
    id: 'poketree',
    title: 'PokeTree',
    category: 'side',
    period: 'v1: 2024.12 (2주) / v2: 2025.11~12 (6주)',
    shortDesc: '팀 블루베리 - 크리스마스 시즌 포켓몬 + 익명 편지 웹서비스',
    description:
      '크리스마스 시즌 한정 포켓몬 + 익명 편지 웹 서비스입니다. v1(React)에서 v2(Next.js 16)로 풀 리빌드하며 Feature-based 아키텍처, 9개 언어 i18n 시스템 등을 직접 구현했습니다.',
    highlights: [
      '[v2] React + Vite → Next.js 16 + React 19 풀 리빌드',
      '[v2] Feature-based 모듈 아키텍처 도입 (UseCase/Repository/Model)',
      '[v2] 라이브러리 없이 9개 언어 커스텀 i18n 시스템 구현',
      '[v2] SSR/Hydration 이슈 해결',
      '[v2] 언어별 커스텀 폰트 시스템 구축 (UI 깨짐 대응)',
      '포켓몬 도감(5×5 그리드), QR 코드 공유, 익명 편지 기능',
      '누적 트래픽 1.5만 달성',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Preact Signals', 'Firebase'],
    metrics: [
      { label: '커밋', value: '159개' },
      { label: 'PR 작성', value: '29개' },
      { label: '누적 트래픽', value: '1.5만' },
    ],
    links: [
      { label: '서비스', url: 'https://www.poketrees.com/' },
      { label: 'GitHub', url: 'https://github.com/blueberry-team/blueberry_poketree' },
    ],
    videos: ['/portfolio/projects/poketree/demo.mp4'],
  },
  {
    id: 'blueberry-template',
    title: '블루베리 템플릿',
    category: 'side',
    period: '2024.07 ~ 2024.09',
    shortDesc: '팀 블루베리 - 하루만에 앱을 만드는 오픈소스',
    description:
      '빠른 앱 개발을 위한 Flutter 템플릿 오픈소스입니다. 의도적인 클린 아키텍처 파괴를 시험적으로 운영하며, 딥링크, 백그라운드 처리, 상태 관리 등 핵심 기능을 미리 구현해두었습니다.',
    highlights: [
      '딥링크 및 백그라운드 처리 구현',
      'GoRouter를 활용한 라우팅 기능',
      'Firebase Realtime Database 연동으로 실시간 데이터 동기화',
      'Riverpod를 활용한 상태 관리',
    ],
    techStack: ['Flutter', 'GoRouter', 'Riverpod', 'Firebase RTDB'],
    links: [
      { label: 'GitHub', url: 'https://github.com/blueberry-team/blueberry_template' },
    ],
  },

  // 학부시절 경험
  {
    id: 'coolcoolcall',
    title: '쿨쿨콜',
    category: 'university',
    period: '2023.09.01 ~ 2023.10.28 (2개월)',
    shortDesc: '[외주] 불면증 개선을 위한 AI 음성대화 서비스',
    description:
      '한동대학교 디자인 학부 졸업전시 외주 프로젝트입니다. 불면증 개선을 위한 AI 음성대화 서비스로, OpenAI 모델을 FineTuning하여 사용자 맞춤형 대화 서비스를 구현했습니다.',
    highlights: [
      'OpenAI 모델 FineTuning을 통한 맞춤형 대화 서비스',
      '수면 전 상태에서 최소한의 터치로 기능 탐색 가능한 UX 설계',
      '심미성을 중시한 애니메이션 및 인터페이스 구현',
      '전시에서 90% 이상의 긍정적 반응',
    ],
    techStack: ['Flutter', 'Firebase', 'OpenAI API', 'FineTuning'],
    metrics: [
      { label: '사용자 만족도', value: '90%+' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/dusagong/coolcoolcall' },
    ],
    images: [
      '/portfolio/projects/coolcoolcall/1.png',
      '/portfolio/projects/coolcoolcall/2.png',
      '/portfolio/projects/coolcoolcall/3.png',
      '/portfolio/projects/coolcoolcall/4.png',
      '/portfolio/projects/coolcoolcall/5.png',
      '/portfolio/projects/coolcoolcall/6.png',
      '/portfolio/projects/coolcoolcall/7.png',
      '/portfolio/projects/coolcoolcall/8.png',
    ],
  },
  {
    id: 'pulse',
    title: 'Pulse',
    category: 'university',
    period: '2023.06.18 ~ 2023.09.30 (3개월)',
    shortDesc: '[캡스톤1 창업] 헬스 트레이너-회원 관리 시스템',
    description:
      '한동대학교 캡스톤1 연계 창업 프로젝트입니다. 헬스 트레이너와 회원을 위한 효율적인 회원 관리 및 최적의 헬스 시스템 서비스로, 기획자 1명, 디자이너 2명, 개발자 2명으로 구성된 팀에서 개발했습니다.',
    highlights: [
      '회원별 사진 라이브러리 및 메모장 기능 구현',
      '투자 유치 도전을 통한 비즈니스 모델 및 시장 조사 경험',
      '서비스 초기 테스트에서 90% 이상의 긍정적 피드백',
    ],
    techStack: ['Flutter', 'Firebase'],
    metrics: [
      { label: '팀 구성', value: '기획1, 디자인2, 개발2' },
      { label: '초기 피드백', value: '90%+ 긍정' },
    ],
  },
  {
    id: 'ozizzy',
    title: 'Ozizzy',
    category: 'university',
    period: '2023.05.11 ~ 2023.06.11 (1개월)',
    shortDesc: '[새싹톤 3위] 올바른 분리수거 습관 형성 서비스',
    description:
      '서울특별시 주최 새싹톤 해커톤 출품작입니다. 사용자 행동의 반복을 통해 올바른 분리수거 방법을 각인시키는 서비스로, 잠금해제, 도감수집, 챌린지 등의 요소로 캐시백을 받을 수 있습니다. 210팀 중 3위로 우수상을 수상했습니다.',
    highlights: [
      'MVC 디자인 패턴 첫 적용',
      '잠금해제, 도감수집, 챌린지 등 게이미피케이션 요소',
      '2023 서울시 새싹톤 우수상 (210팀 중 3위)',
    ],
    techStack: ['Flutter', 'Firebase'],
    metrics: [
      { label: '해커톤 순위', value: '210팀 중 3위' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/dusagong/sessakthon' },
    ],
  },
  {
    id: 'creal',
    title: 'C:REAL',
    category: 'university',
    period: '2023.01.26 ~ 2023.01.28 (3일)',
    shortDesc: '[NORITHON 3위] 농산물 직거래 플랫폼',
    description:
      '한동대학교 주최 NORITHON 해커톤 출품작입니다. 농부와 자영업자의 직접적인 연결을 통해 폐기되는 농산물의 새로운 가치를 창출하는 서비스로, 3일간의 해커톤에서 우수상(3위)을 수상했습니다.',
    highlights: [
      '3일간의 해커톤에서 빠른 프로토타이핑',
      '농부-자영업자 직거래 플랫폼 기획 및 구현',
      '2023 HGU HACKATHON 우수상 (3위)',
    ],
    techStack: ['Flutter', 'Firebase'],
    metrics: [
      { label: '개발 기간', value: '3일' },
      { label: '해커톤 순위', value: '3위' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/dusagong/C-REAL' },
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((p) => p.category === category);
};
