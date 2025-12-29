
export type Prize = {
  name: string;
  code: string;
  count: number;
  prizeAmount: string;
};

export type LotteryResult = {
  id: string;
  region: 'MB' | 'MT' | 'MN'; // Mien Bac, Mien Trung, Mien Nam
  province: string;
  date: string;
  prizes: Record<string, string[]>; // key is prize code (e.g., "DB", "1", "2")
};

export const MOCK_PRIZES_MB: Prize[] = [
  { name: 'Đặc Biệt', code: 'DB', count: 1, prizeAmount: '1.000.000.000đ' },
  { name: 'Giải Nhất', code: '1', count: 1, prizeAmount: '10.000.000đ' },
  { name: 'Giải Nhì', code: '2', count: 2, prizeAmount: '5.000.000đ' },
  { name: 'Giải Ba', code: '3', count: 6, prizeAmount: '1.000.000đ' },
  { name: 'Giải Tư', code: '4', count: 4, prizeAmount: '400.000đ' },
  { name: 'Giải Năm', code: '5', count: 6, prizeAmount: '200.000đ' },
  { name: 'Giải Sáu', code: '6', count: 3, prizeAmount: '100.000đ' },
  { name: 'Giải Bảy', code: '7', count: 4, prizeAmount: '40.000đ' },
];

export const MOCK_PRIZES_MN: Prize[] = [
  { name: 'Đặc Biệt', code: 'DB', count: 1, prizeAmount: '2.000.000.000đ' },
  { name: 'Giải Nhất', code: '1', count: 1, prizeAmount: '30.000.000đ' },
  { name: 'Giải Nhì', code: '2', count: 1, prizeAmount: '15.000.000đ' },
  { name: 'Giải Ba', code: '3', count: 2, prizeAmount: '10.000.000đ' },
  { name: 'Giải Tư', code: '4', count: 7, prizeAmount: '3.000.000đ' },
  { name: 'Giải Năm', code: '5', count: 1, prizeAmount: '1.000.000đ' },
  { name: 'Giải Sáu', code: '6', count: 3, prizeAmount: '400.000đ' },
  { name: 'Giải Bảy', code: '7', count: 1, prizeAmount: '200.000đ' },
  { name: 'Giải Tám', code: '8', count: 1, prizeAmount: '100.000đ' },
];

// Helper to generate random numbers
const rnd = (digits: number) => Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0');

export const generateMockResult = (region: 'MB' | 'MT' | 'MN', province: string, date: string): LotteryResult => {
  const isMB = region === 'MB';
  // Simplified prize structure generation
  const prizes: Record<string, string[]> = {};
  
  if (isMB) {
    prizes['DB'] = [rnd(5)];
    prizes['1'] = [rnd(5)];
    prizes['2'] = [rnd(5), rnd(5)];
    prizes['3'] = Array(6).fill(0).map(() => rnd(5));
    prizes['4'] = Array(4).fill(0).map(() => rnd(4));
    prizes['5'] = Array(6).fill(0).map(() => rnd(4));
    prizes['6'] = Array(3).fill(0).map(() => rnd(3));
    prizes['7'] = Array(4).fill(0).map(() => rnd(2));
  } else {
    prizes['DB'] = [rnd(6)];
    prizes['1'] = [rnd(5)];
    prizes['2'] = [rnd(5)];
    prizes['3'] = [rnd(5), rnd(5)];
    prizes['4'] = Array(7).fill(0).map(() => rnd(5));
    prizes['5'] = [rnd(4)];
    prizes['6'] = Array(3).fill(0).map(() => rnd(4));
    prizes['7'] = [rnd(3)];
    prizes['8'] = [rnd(2)];
  }

  return {
    id: `${region}-${province}-${date}`,
    region,
    province,
    date,
    prizes
  };
};
