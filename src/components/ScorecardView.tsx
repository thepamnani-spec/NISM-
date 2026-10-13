import React, { useState, useEffect } from 'react';
import {
  RotateCcw,
  Filter,
  Printer,
  PieChart,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Lightbulb,
  Search,
  Check,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, ExamResult, ReviewFilter } from '../types';

interface ScorecardViewProps {
  questions: Question[];
  userAnswers: Record<number, number>;
  result: ExamResult;
  examTitle: string;
  onRetakeFull: () => void;
  onRetakeMissed: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export const ScorecardView: React.FC<ScorecardViewProps> = ({
  questions,
  userAnswers,
  result,
  examTitle,
  onRetakeFull,
  onRetakeMissed
}) => {
  const [filter, setFilter] = useState<ReviewFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Fire confetti on high score
  useEffect(() => {
    if (result.percentage >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti optional
      }
    }
  }, [result.percentage]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs > 0 ? `${hrs}h ` : ''}${mins}m ${secs}s`;
  };

  const missedCount = result.wrong + result.skipped;

  // Filter questions for the review section
  const filteredQuestions = questions.filter((q) => {
    const userChoice = userAnswers[q.id];
    const isCorrect = userChoice === q.ans;
    const isSkipped = userChoice === undefined;

    if (filter === 'wrong' && (isCorrect || isSkipped)) return false;
    if (filter === 'skipped' && !isSkipped) return false;
    if (filter === 'correct' && !isCorrect) return false;

    if (searchQuery.trim()) {
      const qText = q.q.toLowerCase();
      const expText = q.exp.toLowerCase();
      const s = searchQuery.toLowerCase();
      if (!qText.includes(s) && !expText.includes(s)) return false;
    }

    return true;
  });

  return (
    <div className="flex-1 flex flex-col gap-6 animate-in fade-in duration-200">
      {/* Top Scorecard Hero Card */}
      <div
        id="printArea"
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Summary Details */}
          <div className="text-center lg:text-left space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              Examination Performance Card
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {examTitle}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              {result.percentage >= 80
                ? 'Outstanding performance! You demonstrate thorough mastery across key concepts and regulations.'
                : result.percentage >= 60
                ? 'Congratulations, you scored above the 60% passing benchmark! Review any missed concepts below.'
                : 'Keep practicing! Review each explanation below to master legal rules, formulas and market principles.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 no-print">
              <button
                type="button"
                onClick={onRetakeFull}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Mock Exam</span>
              </button>

              <button
                type="button"
                disabled={missedCount === 0}
                onClick={onRetakeMissed}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-amber-500/30 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Filter className="w-4 h-4" />
                <span>
                  {missedCount === 0 ? 'All Correct (No Missed)' : `Re-attempt Missed (${missedCount})`}
                </span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition border border-slate-600 flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Scorecard</span>
              </button>
            </div>
          </div>

          {/* Key Stat Rings */}
          <div className="flex items-center gap-6 sm:gap-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400">
                {result.score}/{result.total}
              </div>
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest mt-1">
                Marks Scored
              </div>
            </div>

            <div className="h-16 w-px bg-white/10" />

            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-blue-300">
                {result.percentage}%
              </div>
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest mt-1">
                Accuracy Rate
              </div>
            </div>
          </div>
        </div>

        {/* Counter Cards */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10 text-center">
          <div className="p-3 rounded-2xl bg-white/5">
            <div className="text-xl font-bold text-emerald-400">{result.correct}</div>
            <div className="text-[11px] text-slate-400 font-medium">Correct Answers (+1)</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5">
            <div className="text-xl font-bold text-rose-400">{result.wrong}</div>
            <div className="text-[11px] text-slate-400 font-medium">Incorrect Answers</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5">
            <div className="text-xl font-bold text-amber-300">{result.skipped}</div>
            <div className="text-[11px] text-slate-400 font-medium">Unattempted</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5">
            <div className="text-xl font-bold text-sky-300">{formatTime(result.timeElapsed)}</div>
            <div className="text-[11px] text-slate-400 font-medium">Time Taken</div>
          </div>
        </div>
      </div>

      {/* Section-Wise Breakdown Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-blue-600" />
          <span>Section-wise Performance Breakdown</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Section Title</th>
                <th className="py-3 px-3">Questions</th>
                <th className="py-3 px-3">Correct</th>
                <th className="py-3 px-3">Incorrect</th>
                <th className="py-3 px-3">Skipped</th>
                <th className="py-3 px-3">Section Score</th>
                <th className="py-3 px-3">Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {result.sectionStats.map((st, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3 font-semibold text-slate-900">{st.section}</td>
                  <td className="py-3 px-3 font-semibold">{st.total}</td>
                  <td className="py-3 px-3 text-emerald-600 font-bold">{st.correct}</td>
                  <td className="py-3 px-3 text-rose-600 font-bold">{st.wrong}</td>
                  <td className="py-3 px-3 text-amber-600 font-semibold">{st.skipped}</td>
                  <td className="py-3 px-3 font-bold text-slate-900">
                    {st.correct} / {st.total}
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                        st.accuracy >= 60
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                          : 'bg-rose-100 text-rose-800 border-rose-200'
                      }`}
                    >
                      {st.accuracy}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Solutions & Step-by-Step Explanations */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Detailed Solutions & Explanations</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Every question includes the authoritative answer and in-depth legal/analytical explanation.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-wrap items-center gap-2.5 no-print">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:ring-1 focus:ring-blue-500 outline-none w-40 sm:w-48"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-lg transition ${
                  filter === 'all'
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({result.total})
              </button>
              <button
                type="button"
                onClick={() => setFilter('wrong')}
                className={`px-3 py-1 rounded-lg transition ${
                  filter === 'wrong'
                    ? 'bg-rose-600 text-white font-bold'
                    : 'text-rose-700 hover:bg-rose-50'
                }`}
              >
                Incorrect ({result.wrong})
              </button>
              <button
                type="button"
                onClick={() => setFilter('skipped')}
                className={`px-3 py-1 rounded-lg transition ${
                  filter === 'skipped'
                    ? 'bg-amber-500 text-white font-bold'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                Skipped ({result.skipped})
              </button>
              <button
                type="button"
                onClick={() => setFilter('correct')}
                className={`px-3 py-1 rounded-lg transition ${
                  filter === 'correct'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                Correct ({result.correct})
              </button>
            </div>
          </div>
        </div>

        {/* List of Solution Cards */}
        {filteredQuestions.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            No questions match your current filter or search criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.ans;
              const isSkipped = userChoice === undefined;

              let statusBadge = null;
              let borderClass = 'border-slate-200 bg-white';

              if (isSkipped) {
                statusBadge = (
                  <span className="px-2.5 py-1 rounded-xl bg-amber-100 text-amber-800 font-bold text-xs flex items-center gap-1 border border-amber-200">
                    <MinusCircle className="w-3.5 h-3.5" /> Skipped
                  </span>
                );
                borderClass = 'border-amber-200 bg-amber-50/20';
              } else if (isCorrect) {
                statusBadge = (
                  <span className="px-2.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                  </span>
                );
                borderClass = 'border-emerald-200 bg-emerald-50/20';
              } else {
                statusBadge = (
                  <span className="px-2.5 py-1 rounded-xl bg-rose-100 text-rose-800 font-bold text-xs flex items-center gap-1 border border-rose-200">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                );
                borderClass = 'border-rose-200 bg-rose-50/20';
              }

              return (
                <div key={q.id} className={`p-5 sm:p-6 rounded-3xl border ${borderClass} shadow-2xs space-y-4`}>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-200/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 bg-white px-2.5 py-1 rounded-xl border border-slate-200 shadow-2xs">
                        Question #{q.id}
                      </span>
                      <span className="text-xs text-slate-500 font-medium truncate max-w-xs">
                        {q.sec || 'General'}
                      </span>
                    </div>
                    <div>{statusBadge}</div>
                  </div>

                  {/* Question Stem */}
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                    {q.q}
                  </p>

                  {/* Options with clear correct / picked styling */}
                  <div className="space-y-2 pt-1">
                    {q.opts.map((optText, optIdx) => {
                      const isRightAnswer = optIdx === q.ans;
                      const isUserPick = optIdx === userChoice;

                      let optStyle = 'bg-white border-slate-200 text-slate-700';
                      let icon = null;

                      if (isRightAnswer) {
                        optStyle = 'bg-emerald-50 border-emerald-500 font-semibold text-emerald-950 ring-1 ring-emerald-500/50';
                        icon = (
                          <span className="text-xs font-bold text-emerald-700 ml-auto flex items-center gap-1 shrink-0">
                            <Check className="w-3.5 h-3.5" /> Correct Answer
                          </span>
                        );
                      } else if (isUserPick && !isCorrect) {
                        optStyle = 'bg-rose-50 border-rose-400 font-medium text-rose-950 line-through';
                        icon = (
                          <span className="text-xs font-bold text-rose-600 ml-auto flex items-center gap-1 shrink-0">
                            <X className="w-3.5 h-3.5" /> Your Choice
                          </span>
                        );
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-3 p-3 rounded-2xl border text-xs sm:text-sm ${optStyle}`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0">
                            {OPTION_LETTERS[optIdx] || optIdx + 1}
                          </span>
                          <span className="flex-1">{optText}</span>
                          {icon}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Block */}
                  <div className="mt-3 p-4 bg-slate-100/90 rounded-2xl border border-slate-200 text-xs text-slate-800">
                    <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1.5">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Explanation & Legal Rationale:</span>
                    </div>
                    <p className="leading-relaxed text-slate-700">
                      {q.exp || `Correct Answer is Option (${OPTION_LETTERS[q.ans]})`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
