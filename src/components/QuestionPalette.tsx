import React from 'react';
import { LayoutGrid, CheckCircle2 } from 'lucide-react';
import { Question } from '../types';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, number>;
  markedForReview: Record<number, boolean>;
  visitedQuestions: Record<number, boolean>;
  filterSection: string;
  onJumpToQuestion: (index: number) => void;
  onSubmitExam: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentIndex,
  userAnswers,
  markedForReview,
  visitedQuestions,
  filterSection,
  onJumpToQuestion,
  onSubmitExam
}) => {
  // Filter questions for the grid if a section filter is active
  const filteredIndices = questions
    .map((q, idx) => ({ q, idx }))
    .filter(item => filterSection === 'ALL' || item.q.sec === filterSection);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col gap-4">
      {/* Navigator Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-blue-600" />
          <span>Question Navigator</span>
        </h2>
        <span className="text-xs text-slate-400 font-medium">Click # to jump</span>
      </div>

      {/* Color Status Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">
            ✓
          </span>
          <span className="font-medium text-[11px]">Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-amber-500 text-white flex items-center justify-center text-[9px] font-bold">
            ★
          </span>
          <span className="font-medium text-[11px]">Review</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-rose-500 text-white flex items-center justify-center text-[9px] font-bold">
            !
          </span>
          <span className="font-medium text-[11px]">Visited / Skipped</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-slate-200 text-slate-600 flex items-center justify-center text-[9px] font-bold">
            •
          </span>
          <span className="font-medium text-[11px]">Not Visited</span>
        </div>
      </div>

      {/* Grid of question buttons */}
      <div className="max-h-[380px] overflow-y-auto pr-1 flex flex-wrap gap-2 content-start py-1">
        {filteredIndices.map(({ q, idx }) => {
          const isCurrent = idx === currentIndex;
          const isAns = userAnswers[q.id] !== undefined;
          const isMarked = !!markedForReview[q.id];
          const isVisited = !!visitedQuestions[q.id];

          let btnClass = 'w-9 h-9 inline-flex items-center justify-center text-xs font-bold rounded-xl transition ';

          if (isCurrent) {
            btnClass += 'ring-2 ring-offset-2 ring-blue-600 shadow-sm ';
          }

          if (isMarked) {
            btnClass += 'bg-amber-500 text-white hover:bg-amber-600';
          } else if (isAns) {
            btnClass += 'bg-emerald-500 text-white hover:bg-emerald-600';
          } else if (isVisited) {
            btnClass += 'bg-rose-500 text-white hover:bg-rose-600';
          } else {
            btnClass += 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/80';
          }

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onJumpToQuestion(idx)}
              className={btnClass}
              title={`Question ${idx + 1}: ${q.q.substring(0, 45)}...`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Submit Button in Palette */}
      <div className="pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={onSubmitExam}
          className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Final Submit & View Marks</span>
        </button>
        <p className="text-[11px] text-center text-slate-400 mt-2">
          Calculates accurate score, percentage, and unlocks detailed step-by-step explanations.
        </p>
      </div>
    </div>
  );
};
