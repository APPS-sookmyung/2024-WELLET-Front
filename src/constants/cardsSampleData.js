const CARDS_SAMPLE_DATA = [
  {
    name: '박유정',
    job: '프로덕트 디자이너',
    team: '디자인팀',
    company: '숙명여자대학교',
    phone: '010-0000-1111',
    email: 'yj@wellet.co.kr',
    tel: '81-2-222-1234',
    address: '서울시 용산구',
    imageUrl:
      'data:image/jpeg;base64,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',
    category: '비즈니스',
  },
  {
    name: '한은영',
    job: '프론트엔드 개발자',
    team: '개발팀',
    company: '숙명여자대학교',
    phone: '010-1111-2222',
    email: 'ey@wellet.co.kr',
    tel: '81-2-222-2345',
    address: '서울시 용산구',
    imageUrl:
      'data:image/jpeg;base64,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',
    category: '비즈니스',
  },
  {
    name: '이영희',
    job: '백엔드 개발자',
    team: '개발팀',
    company: 'WELLET Corp.',
    phone: '010-2222-3333',
    email: 'yh@wellet.co.kr',
    tel: '81-2-222-4567',
    address: '서울시 마포구',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuDu_u2qfEcgjtZoo50xv4utgjWMgMdBKtw&s',
    category: '비즈니스',
  },
  {
    name: '김현우',
    job: '프론트엔드 개발자',
    team: '개발팀',
    company: 'WELLET Corp.',
    phone: '010-3333-4444',
    email: 'hw@wellet.co.kr',
    tel: '81-2-222-5678',
    address: '서울시 성동구',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjahHS49K6IYtzZfbh3v3aMTBh6ySPeZeNlA&s',
    category: '비즈니스',
  },
  {
    name: '김디공',
    job: '대표',
    team: '대표',
    company: '다공 부동산',
    phone: '010-4444-5555',
    email: 'dg@wellet.co.kr',
    tel: '81-2-222-6789',
    address: '부산광역시',
    imageUrl: '',
    category: '부동산',
  },
  {
    name: '홍길동',
    job: '대표 | 공인중개사',
    team: '대표',
    company: '동네공인중개사',
    phone: '010-5555-6666',
    email: 'gd@wellet.co.kr',
    tel: '81-2-222-7890',
    address: '대전광역시',
    imageUrl: '',
    category: '부동산',
  },
  {
    name: '김인쇄',
    job: '공인중개사',
    team: '영업팀',
    company: '인쇄픽부동산',
    phone: '010-6666-7777',
    email: 'is@wellet.co.kr',
    tel: '81-2-222-8901',
    address: '서울시 강남구',
    imageUrl: '',
    category: '부동산',
  },
  {
    name: '박대기',
    job: '기자',
    team: '보도본부 사회팀',
    company: 'KBS',
    phone: '010-7777-8888',
    email: 'dk@wellet.co.kr',
    tel: '81-2-222-9012',
    address: '서울시 동작구',
    imageUrl: '',
    category: '방송사',
  },
  {
    name: '홍길돈',
    job: '팀장 / PD',
    team: '제작팀',
    company: 'KBS VJ 특공대',
    phone: '010-8888-9999',
    email: 'kd@wellet.co.kr',
    tel: '81-2-222-0123',
    address: '인천광역시',
    imageUrl: '',
    category: '방송사',
  },
];

export default CARDS_SAMPLE_DATA;
