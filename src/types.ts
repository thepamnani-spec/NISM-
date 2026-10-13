export interface Question {
  id: number;
  sec: string;
  q: string;
  opts: string[];
  ans: number; // 0-indexed (0 = A, 1 = B, 2 = C, 3 = D)
  exp: string;
}

export interface SectionStat {
  section: string;
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  accuracy: number;
}

export interface ExamResult {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  score: number;
  percentage: number;
  timeElapsed: number; // in seconds
  sectionStats: SectionStat[];
}

export type ReviewFilter = 'all' | 'wrong' | 'skipped' | 'correct';

export type ExamMode = 'exam' | 'practice'; // 'exam' = submit to view answers, 'practice' = instant feedback
