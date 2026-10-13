import React from 'react';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Check,
  X,
  Lightbulb,
  Info
} from 'lucide-react';
import { Question, ExamMode } from '../types';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  userSelection: number | undefined;
  isMarkedForReview: boolean;
  examMode: ExamMode;
  onSelectOption: (optionIndex: number) => void;
  onClearSelection: () => void;
  onToggleMarkReview: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userSelection,
  isMarkedForReview,
  examMode,
  onSelectOption,
  onClearSelection,
  onToggleMarkReview,
  onPrev,
  onNext
}) => {
  const isAnswered = userSelection !== undefined;

  return (
    <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[540px]">
      {/* Question Header bar */}
      <div className="bg-slate-50/90 px-5 sm:px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
          <span className="text-xs sm:text-sm font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-xl">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-xs font-semibold bg-slate-200/80 text-slate-700 px-3 py-1 rounded-xl truncate max-w-[200px] sm:max-w-xs md:max-w-md">
            {question.sec || 'General Section'}
          </span>
        </div>

        {/* Mark for Review Toggle */}
        <button
          type="button"
          onClick={onToggleMarkReview}
          className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-xl border transition ${
            isMarkedForReview
              ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
              : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isMarkedForReview ? 'fill-white' : ''}`} />
          <span>{isMarkedForReview ? 'Marked for Review' : 'Mark for Review'}</span>
        </button>
      </div>

      {/* Question Content Body */}
      <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Question Text */}
          <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-6">
            {question.q}
          </div>

          {/* Options Container */}
          <div className="space-y-3">
            {question.opts.map((optText, optIndex) => {
              const isSelected = userSelection === optIndex;
              const isPractice = examMode === 'practice';
              const isCorrectAnswer = optIndex === question.ans;

              // Style calculation
              let cardStyle = 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300';
              let badgeStyle = 'bg-slate-100 text-slate-700';

              if (isPractice && isAnswered) {
                if (isCorrectAnswer) {
                  cardStyle = 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20';
                  badgeStyle = 'bg-emerald-600 text-white font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  cardStyle = 'bg-rose-50/80 border-rose-400 ring-2 ring-rose-400/20';
                  badgeStyle = 'bg-rose-600 text-white font-bold';
                }
              } else if (isSelected) {
                cardStyle = 'bg-blue-50/90 border-blue-600 ring-2 ring-blue-500/20';
                badgeStyle = 'bg-blue-600 text-white font-bold';
              }

              return (
                <label
                  key={optIndex}
                  onClick={() => onSelectOption(optIndex)}
                  className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl border cursor-pointer transition select-none ${cardStyle}`}
                >
                  <div className="pt-0.5">
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={optIndex}
                      checked={isSelected}
                      onChange={() => onSelectOption(optIndex)}
                      className="custom-radio w-4 h-4 cursor-pointer mt-0.5"
                    />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs shrink-0 ${badgeStyle}`}>
                        {OPTION_LETTERS[optIndex] || optIndex + 1}
                      </span>
                      <span className={`text-xs sm:text-sm leading-relaxed ${
                        isSelected ? 'font-semibold text-slate-900' : 'text-slate-800'
                      }`}>
                        {optText}
                      </span>
                    </div>

                    {/* Instant visual indicators in practice mode */}
                    {isPractice && isAnswered && (
                      <div className="shrink-0">
                        {isCorrectAnswer && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-lg">
                            <Check className="w-3.5 h-3.5" /> Correct
                          </span>
                        )}
                        {isSelected && !isCorrectAnswer && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100/90 px-2 py-0.5 rounded-lg">
                            <X className="w-3.5 h-3.5" /> Selected
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </label>
              );
            })}
          </div>

          {/* Practice Mode Instant Explanation Box */}
          {examMode === 'practice' && isAnswered && question.exp && (
            <div className="mt-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Explanation & Legal Rationale:</span>
              </div>
              <p className="leading-relaxed text-slate-700">{question.exp}</p>
            </div>
          )}
        </div>

        {/* Keyboard navigation helper */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Shortcuts: Press 1-4 for options, ← / → to navigate</span>
            <span className="sm:hidden">Tap option to answer</span>
          </div>
          {isAnswered && (
            <span className="font-semibold text-emerald-600">Option {OPTION_LETTERS[userSelection]} recorded</span>
          )}
        </div>
      </div>

      {/* Question Footer Controls */}
      <div className="bg-slate-50 px-5 sm:px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={onPrev}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold transition flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            disabled={!isAnswered}
            onClick={onClearSelection}
            className="px-3.5 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear Selection</span>
            <span className="sm:hidden">Clear</span>
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={onNext}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition shadow-sm shadow-blue-600/30 flex items-center gap-2"
          >
            <span>{currentIndex === totalQuestions - 1 ? 'Save & Review' : 'Save & Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
