import React, { useState } from 'react';
import {
  Play,
  Clock,
  HelpCircle,
  Award,
  Layers,
  Upload,
  BookOpen,
  Shuffle,
  ShieldCheck,
  Zap,
  Target,
  ArrowRight
} from 'lucide-react';
import { PRESET_BANKS } from '../data';
import { ExamMode } from '../types';

interface ExamLobbyProps {
  currentBankId: string;
  examTitle: string;
  totalQuestions: number;
  durationMinutes: number;
  examMode: ExamMode;
  onSelectBank: (bankId: string) => void;
  onSetExamMode: (mode: ExamMode) => void;
  onOpenUpload: () => void;
  onStartExam: () => void;
}

export const ExamLobby: React.FC<ExamLobbyProps> = ({
  currentBankId,
  examTitle,
  totalQuestions,
  durationMinutes,
  examMode,
  onSelectBank,
  onSetExamMode,
  onOpenUpload,
  onStartExam
}) => {
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-8 max-w-5xl mx-auto w-full animate-in fade-in duration-200">
      <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NISM Series XV & Computer-Based Test Engine</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {examTitle}
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm max-w-xl leading-relaxed">
                Review the examination guidelines below, choose your test mode, and click
                <strong className="text-white"> "Start Exam"</strong> when you are ready to begin the timer.
              </p>
            </div>

            {/* Big Start Exam CTA in header */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={onStartExam}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>START EXAM</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/15 text-center text-xs">
            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-1.5 text-blue-200 font-medium mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Questions</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">{totalQuestions} MCQs</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-1.5 text-blue-200 font-medium mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Duration</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">{durationMinutes} Minutes</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-1.5 text-blue-200 font-medium mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Passing Mark</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">60% Benchmark</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-1.5 text-blue-200 font-medium mb-1">
                <Target className="w-3.5 h-3.5" />
                <span>Marking Scheme</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">+1 / -0.25 Mark</div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Mode Selection */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>1. Choose Test Environment Mode</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                onClick={() => onSetExamMode('exam')}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition flex items-start gap-4 ${
                  examMode === 'exam'
                    ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                  examMode === 'exam' ? 'border-blue-600' : 'border-slate-400'
                }`}>
                  {examMode === 'exam' && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Strict CBT Exam Mode (Standard)</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Full timed examination simulation. Answers and detailed rationales are kept hidden until final submission, providing an authentic exam hall score.
                  </p>
                </div>
              </div>

              <div
                onClick={() => onSetExamMode('practice')}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition flex items-start gap-4 ${
                  examMode === 'practice'
                    ? 'border-purple-600 bg-purple-50/60 ring-2 ring-purple-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                  examMode === 'practice' ? 'border-purple-600' : 'border-slate-400'
                }`}>
                  {examMode === 'practice' && <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Practice & Study Mode</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Ideal for learning and revision. Instant answer reveal and step-by-step regulatory/analytical explanations appear immediately as you click an option.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preset Banks Switcher */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>2. Select Question Bank to Attempt</span>
              </h3>
              <button
                type="button"
                onClick={onOpenUpload}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Custom PDF / Bank</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PRESET_BANKS.map((b) => {
                const isSelected = currentBankId === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => onSelectBank(b.id)}
                    className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between gap-2.5 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-1 ring-blue-500'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {b.category === 'mock' ? (
                          <Shuffle className="w-4 h-4 text-amber-600 shrink-0" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                        )}
                        <span className={`text-xs font-bold ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                          {b.name}
                        </span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${b.badgeColor} shrink-0`}>
                        {b.shortName}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {b.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exam Instructions & Color Scheme */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Examination Hall Rules & Navigation Guide</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 list-disc list-inside text-slate-600 leading-relaxed">
                <li>The countdown timer starts as soon as you click <strong>"START EXAM"</strong>.</li>
                <li>You can jump to any question at any time using the <strong>Question Navigator</strong> on the right.</li>
                <li>Use <strong>"Mark for Review"</strong> to flag tricky questions to revisit before final submission.</li>
                <li>You can freely change or clear your selection at any point before clicking Submit.</li>
              </ul>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-[11px] block">Question Navigator Color Code:</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                    <span>Answered Question</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-amber-500 text-white flex items-center justify-center text-[9px] font-bold">★</span>
                    <span>Marked for Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-rose-500 text-white flex items-center justify-center text-[9px] font-bold">!</span>
                    <span>Visited, Unanswered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-slate-200 text-slate-600 flex items-center justify-center text-[9px] font-bold">•</span>
                    <span>Not Visited Yet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgement & Bottom Big Start Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
            <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span className="font-medium">
                I have read and understood all exam rules and am ready to start.
              </span>
            </label>

            <button
              type="button"
              disabled={!agreedToTerms}
              onClick={onStartExam}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>START EXAM NOW</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
