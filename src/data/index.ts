import { Question } from '../types';
import { NISM_CH1_DATA } from './ch1';
import { NISM_CH2_DATA } from './ch2';
import { NISM_CH8_DATA } from './ch8';
import { NISM_CH10_DATA } from './ch10';
import { NISM_CH14_DATA } from './ch14';
import { NISM_CH15_DATA } from './ch15';

export {
  NISM_CH1_DATA,
  NISM_CH2_DATA,
  NISM_CH8_DATA,
  NISM_CH10_DATA,
  NISM_CH14_DATA,
  NISM_CH15_DATA
};

export interface BankConfig {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: 'chapter' | 'mock';
  badgeColor: string;
  getQuestions: () => Question[];
  defaultMinutes?: number;
}

export function getAllQuestionsCombined(): Question[] {
  return [
    ...NISM_CH1_DATA,
    ...NISM_CH2_DATA,
    ...NISM_CH8_DATA,
    ...NISM_CH10_DATA,
    ...NISM_CH14_DATA,
    ...NISM_CH15_DATA
  ];
}

export function getRandomQuestions(pool: Question[], count = 200): Question[] {
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export const PRESET_BANKS: BankConfig[] = [
  {
    id: 'CH2',
    name: 'Ch. 2 Intro to Securities Market',
    shortName: 'Ch 2 (191 Qs)',
    description: 'Securities definition, Equities, Bonds, Warrants, Indices, Mutual Funds, ETFs, Hybrids, DRs, REITs, InvITs, Commodities, Primary & Secondary market, Clearing & Settlement, Demat',
    category: 'chapter',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    getQuestions: () => NISM_CH2_DATA,
    defaultMinutes: 120
  },
  {
    id: 'CH15',
    name: 'Ch. 15 Technical Analysis',
    shortName: 'Ch 15 (153 Qs)',
    description: 'Chart types, Dow theory, Candlesticks, Triangles, S/R, Moving Averages, MACD, RSI, ADX, OBV',
    category: 'chapter',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    getQuestions: () => NISM_CH15_DATA,
    defaultMinutes: 120
  },
  {
    id: 'CH14',
    name: 'Ch. 14 Legal & Regulatory',
    shortName: 'Ch 14 (135 Qs)',
    description: 'SEBI, SCRA, Insider Trading (PIT), PFUTP, Research Analyst 2014, IBC, GSM/ASM, Code of Conduct',
    category: 'chapter',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    getQuestions: () => NISM_CH14_DATA,
    defaultMinutes: 120
  },
  {
    id: 'CH10',
    name: 'Ch. 10 Valuation Principles',
    shortName: 'Ch 10 (164 Qs)',
    description: 'Price vs Value, DCF, Gordon DDM, FCFE, FCFF, WACC, CAPM, P/E, PEG, EV/EBITDA, P/B, NAV, SOTP',
    category: 'chapter',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    getQuestions: () => NISM_CH10_DATA,
    defaultMinutes: 135
  },
  {
    id: 'CH8',
    name: 'Ch. 8 Financial Analysis',
    shortName: 'Ch 8 (152 Qs)',
    description: 'Financial statements, Balance sheet items, P&L, Cash flows, DuPont analysis, Ratios, Corporate actions',
    category: 'chapter',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    getQuestions: () => NISM_CH8_DATA,
    defaultMinutes: 120
  },
  {
    id: 'CH1',
    name: 'Ch. 1 Intro to Research Analyst',
    shortName: 'Ch 1 (49 Qs)',
    description: 'Role of RA, Sell-side vs Buy-side, Independent analysts, Qualitative vs Quantitative, Due diligence',
    category: 'chapter',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    getQuestions: () => NISM_CH1_DATA,
    defaultMinutes: 50
  },
  {
    id: 'RANDOM200',
    name: '200 MCQ Grand Examination Mock',
    shortName: 'Grand Mock (200 Qs)',
    description: 'Simulated official exam experience: 200 randomized questions across all 6 NISM-XV chapters with timer',
    category: 'mock',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    getQuestions: () => getRandomQuestions(getAllQuestionsCombined(), 200),
    defaultMinutes: 120
  },
  {
    id: 'COMBINED',
    name: 'Complete Mega Bank (All 844 Qs)',
    shortName: 'Mega Bank (844 Qs)',
    description: 'Master entire curriculum: all 844 questions from Chapters 1, 2, 8, 10, 14, and 15 in a single marathon mock',
    category: 'mock',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    getQuestions: () => getAllQuestionsCombined(),
    defaultMinutes: 360
  }
];
