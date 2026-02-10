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
    period: '2024.02 ~ 2026.02 (약 2년)',
    shortDesc: '서울소프트 - IoT 스마트팜 모바일 앱 + 백엔드 풀스택 개발',
    description:
      '농업용 스마트팜 컨테이너를 원격으로 모니터링하고 제어하는 시스템입니다. 센서 데이터 수집, 릴레이 장비 원격 제어, CCTV 모니터링, 자동화 스케줄링, 알림 기능을 제공하며, 복수의 고객 사이트(CCN, GS, 건국대 등)에 커스터마이징하여 납품했습니다.',
    highlights: [
      '[앱] Flutter 크로스플랫폼(Android/iOS/Web) 앱 전체 개발',
      '[앱] v1(GetX)로 MVP 완성 → 20단계 체계적 리팩토링(디자인 시스템, Mixin 패턴, ScreenUtil 통일 등) → v2(Riverpod + Freezed + Retrofit) 아키텍처 리빌드',
      '[앱] CCN, GS, 건국대 등 복수 고객 사이트에 앱 이름/아이콘/패키지ID 분리하여 납품, iOS/Android 스토어 배포',
      '[백엔드] Django + DRF로 REST API 구축, Django Channels + Daphne로 WebSocket 서버 구축',
      '[IoT] MQTT Subscriber로 IoT 컨트롤러 메시지 수신 → MongoDB 저장 → WebSocket으로 클라이언트 실시간 전달',
      '[IoT] 릴레이 자동 제어 시스템 구현 (시간/온도/습도 기반 자동 제어, 18개 채널 독립 스케줄 관리)',
      '[IoT] 양액기(멀티 디스펜서) 분배/일괄/1회 제어 모드, 펌프 듀레이션/휴식 시간/급수량(g) 기반 정밀 제어',
      '[IoT] FCM 푸시 알림 연동 (알람 조건 도달 시 즉시 발송, 디바이스 토큰 관리, 센서별 알림 설정)',
      '[IoT] CCTV 실시간 스트리밍 연동 및 연결 속도 최적화',
      '[AI] LLM 연동 챗봇으로 자연어 스마트팜 상태 질의 및 장비 제어 (재배 문헌 기반 자율 판단, WebSocket 스트리밍 응답)',
      '[AI] MCP 프로토콜 서버 구현으로 Claude Desktop에서 자연어 명령 IoT 제어 실현',
      '[인프라] NVIDIA DIGITS(GB10, 119GB)에 SGLang + EXAONE-3.5-32B + BGE-M3 사내 공유 AI 인프라 구축',
      '[최적화] WebSocket 초기 연결 비동기화로 다수 클라이언트 동시 접속 안정화',
      '[최적화] MongoDB aggregate → find_one 전환, 연결 풀링 도입으로 쿼리 성능 개선',
    ],
    techStack: ['Flutter', 'Dart', 'GetX', 'Riverpod', 'Freezed', 'Retrofit', 'Django', 'DRF', 'Django Channels', 'Daphne', 'MQTT', 'WebSocket', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'FCM', 'Nginx', 'Docker', 'MCP', 'SGLang', 'EXAONE-32B'],
    metrics: [
      { label: '커밋', value: '1,252개' },
      { label: '레포지토리', value: '9개' },
      { label: '역할', value: '풀스택' },
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
    shortDesc: '팀 블루베리 - 식당 주문 관리 시스템 백엔드 핵심 개발',
    description:
      '식당 주문 관리 시스템의 백엔드를 핵심 개발자로 참여했습니다. 초기 Controller에 혼재된 비즈니스 로직을 Clean Architecture로 전면 리팩토링하고, Docker 컨테이너화부터 Blue-Green 무중단 배포까지 인프라 전반을 구축했습니다.',
    highlights: [
      '[아키텍처] 초기 코드의 Controller-비즈니스 로직 혼재 문제 → UseCase/Repository/Entity 계층 분리하는 Clean Architecture로 전면 리팩토링, DI 컨테이너 도입으로 결합도 낮춤',
      '[인프라] 개발/운영 환경 차이로 인한 배포 이슈 → Docker Compose로 Node + PostgreSQL + Redis + Nginx 컨테이너화, SSL 인증서(Cloudflare) 적용, TLS 1.3 + HSTS 설정',
      '[배포] 배포 시 서비스 중단 문제 → Blue-Green 배포 전략 구현, Health Check 통과 시 Nginx 트래픽 전환, DB 커넥션 보장 로직 추가',
      '[설계] 주문 부분 취소 시 동시성/정합성 문제 → OrderVersion 엔티티로 변경 이력 버전 관리, Read Model 분리로 조회 성능 확보',
      '[모니터링] 운영 중 서버 상태 파악 불가 → Prometheus 메트릭 수집 + Grafana 대시보드로 요청 수/응답 시간/에러율 실시간 모니터링',
      '[보안] 관리자 계정 보안 강화 필요 → JWT 인증 + 2차 비밀번호(관리자 전용) 체계, NodeMailer 이메일 기반 비밀번호 찾기',
      '[테스트] Auth, Category, Menu, Order, User 모듈 E2E 테스트 커버리지 확보 (Jest + Supertest)',
      '[문서화] Swagger API 문서를 별도 레포로 관리하여 프론트엔드 팀과 협업 효율화',
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Nginx', 'Socket.IO', 'JWT', 'Prometheus', 'Grafana', 'Jest', 'Supertest', 'Swagger'],
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
      '크리스마스 시즌 한정 포켓몬 + 익명 편지 웹 서비스입니다. v1(React + Vite)으로 빠르게 MVP를 출시한 뒤, 이듬해 v2(Next.js 16 + React 19)로 전면 리빌드하며 아키텍처와 다국어 시스템을 체계적으로 재설계했습니다.',
    highlights: [
      '[v1→v2] localStorage 기반 인증의 보안 한계, SSR 미지원 초기 로딩 저하, 아키텍처 없는 코드베이스 → Next.js 16 + React 19로 전면 리빌드, Firebase Auth 인증 체계 교체, Preact Signals 상태 관리, Tailwind CSS 스타일링 통일',
      '[아키텍처] 컴포넌트 증가에 따른 파일 구조 복잡화 → Feature-based 모듈 아키텍처 도입, 각 모듈 내 UseCase/Repository/Model 계층 배치, Page → UseCase → Repository 흐름 일관화',
      '[i18n] 글로벌 사용자 다국어 지원 필요 but 라이브러리 번들 사이즈 문제 → 라이브러리 없이 커스텀 i18n 유틸리티 직접 구현, 브라우저 언어 감지 → 번역 키 매핑 → 폰트 자동 전환, 9개 언어 지원',
      '[SSR] Next.js SSR 환경에서 랜덤 함수/브라우저 API 사용 시 Hydration mismatch → 클라이언트 전용 분리, Hydration 이중 렌더링 디버깅으로 SSR/CSR 일관된 렌더링 보장',
      '[다국어 UI] 중국어 말풍선 오버플로우, 일본어 글자 간격 문제 → 언어별 커스텀 폰트 시스템 구축(일본어 전용 폰트 분리), CSS 레벨 글자 간격/크기 조정, 말풍선 동적 사이즈 대응',
      '포켓몬 도감(5×5 그리드), QR 코드 공유, 익명 편지 등 인터랙티브 기능 구현',
      '2년 연속 시즌 운영, 누적 트래픽 1.5만 달성',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Preact Signals', 'Firebase Auth', 'Firestore', 'Google Analytics'],
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
