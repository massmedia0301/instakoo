import { Platform, ServiceOption, Review } from './types';

export const SERVICE_OPTIONS: ServiceOption[] = [
  // YouTube
  {
    id: 'yt_view',
    name: '유튜브 조회수 증가 (고품질)',
    pricePerUnit: 15,
    minQuantity: 1000,
    description: '실제 사용자와 유사한 패턴으로 조회수가 증가합니다. (이탈률 낮음)',
    platform: Platform.YOUTUBE
  },
  {
    id: 'yt_sub',
    name: '유튜브 구독자 증가',
    pricePerUnit: 50,
    minQuantity: 100,
    description: '채널 성장에 필수적인 구독자를 안전하게 늘려드립니다.',
    platform: Platform.YOUTUBE
  },
  // Instagram
  {
    id: 'ig_follower_kr',
    name: '인스타그램 팔로워 (한국인 실제계정)',
    pricePerUnit: 150,
    minQuantity: 50,
    description: '실제 활동 중인 한국인 유저들이 팔로우합니다. (계정 지수 상승)',
    platform: Platform.INSTAGRAM
  },
  {
    id: 'ig_like',
    name: '인스타그램 좋아요 (고품질)',
    pricePerUnit: 12,
    minQuantity: 100,
    description: '게시물 업로드 직후 좋아요를 늘려 인기 게시물 노출 확률을 높입니다.',
    platform: Platform.INSTAGRAM
  },
  // Naver
  {
    id: 'nv_place_save',
    name: '네이버 플레이스 저장하기',
    pricePerUnit: 200,
    minQuantity: 50,
    description: '플레이스 순위 상승에 도움을 주는 "저장하기" 수를 늘립니다.',
    platform: Platform.NAVER
  },
  {
    id: 'nv_traffic',
    name: '네이버 블로그/카페 트래픽',
    pricePerUnit: 10,
    minQuantity: 500,
    description: '블로그 게시글의 방문자 수를 늘려 인기글 노출을 유도합니다.',
    platform: Platform.NAVER
  },
  // Danggeun
  {
    id: 'dg_view',
    name: '당근마켓 게시글 조회수',
    pricePerUnit: 30,
    minQuantity: 100,
    description: '동네 생활/중고거래 게시글의 관심도를 높여 상단 노출을 돕습니다.',
    platform: Platform.DANGGEUN
  },
  {
    id: 'dg_like',
    name: '당근마켓 관심(하트) 증가',
    pricePerUnit: 300,
    minQuantity: 10,
    description: '게시글의 인기도 척도인 관심 수를 늘려 신뢰도를 높입니다.',
    platform: Platform.DANGGEUN
  }
];

// Helper to generate reviews
const generateReviews = (): Review[] => {
  const templates = [
    { content: "유튜브 조회수 진짜 자연스럽게 올라가네요. 재구매 의사 있습니다!", platform: Platform.YOUTUBE },
    { content: "가게 오픈하고 플레이스 순위 때문에 고민했는데 저장하기 효과 톡톡히 봤습니다.", platform: Platform.NAVER },
    { content: "당근마켓 서비스는 처음 써보는데 문의가 확실히 늘었어요.", platform: Platform.DANGGEUN },
    { content: "상담도 친절하고 처리가 빨라서 좋습니다. instakoo 추천해요.", platform: Platform.NAVER },
    { content: "인스타 팔로워 퀄리티가 생각보다 너무 좋아서 놀랐습니다. 티 안나고 좋아요.", platform: Platform.INSTAGRAM },
    { content: "마케팅 비용 대비 효율이 가장 좋은 플랫폼인 것 같습니다.", platform: Platform.YOUTUBE },
    { content: "빠른 작업 감사합니다. 덕분에 인기게시물 갔어요!", platform: Platform.INSTAGRAM },
    { content: "블로그 방문자 수가 늘어나니 상위노출이 잘 되네요.", platform: Platform.NAVER },
    { content: "소상공인에게 정말 필요한 서비스입니다. 강력 추천!", platform: Platform.DANGGEUN },
    { content: "구독자가 안 늘어서 고민이었는데 해결됐어요.", platform: Platform.YOUTUBE }
  ];

  const names = ["김*수", "이*영", "박*진", "최*민", "정*하", "강*우", "조*희", "윤*서", "장*호", "임*현", "한*지", "오*석"];

  const reviews: Review[] = [];
  for (let i = 0; i < 40; i++) {
    const temp = templates[i % templates.length];
    reviews.push({
      id: i + 1,
      name: names[i % names.length],
      rating: i % 10 === 0 ? 4 : 5, // Mostly 5 stars
      content: temp.content,
      platform: temp.platform
    });
  }
  return reviews;
};

export const MOCK_REVIEWS = generateReviews();

export const SLIDES = [
  {
    id: 1,
    title: "첫 충전 10% 추가 지급",
    subtitle: "instakoo 런칭 기념 특별 이벤트",
    bgColor: "from-pink-400 to-purple-500",
    buttonText: "충전하러 가기"
  },
  {
    id: 2,
    title: "유튜브 조회수/노출 패키지",
    subtitle: "알고리즘의 선택을 받는 가장 빠른 방법",
    bgColor: "from-red-400 to-pink-600",
    buttonText: "서비스 보기"
  },
  {
    id: 3,
    title: "인스타그램 인기게시물 도전",
    subtitle: "좋아요/팔로워 관리로 계정 최적화",
    bgColor: "from-purple-500 to-pink-500",
    buttonText: "바로가기"
  }
];