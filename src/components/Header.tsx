import React, { useState, useRef, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  Layers,
  ChevronDown,
  Upload,
  CheckCircle2,
  Calculator,
  BookOpen,
  Shuffle,
  Compass,
  Play
} from 'lucide-react';
import { PRESET_BANKS } from '../data';
import { ExamMode } from '../types';

interface HeaderProps {
  currentBankId: string;
  examTitle: string;
  secondsRemaining: number;
  durationMinutes: number;
  isExamStarted: boolean;
  isExamFinished: boolean;
  examMode: ExamMode;
  onSelectBank: (bankId: string) => void;
  onStartExam: () => void;
  onOpenUpload: () => void;
  onOpenSubmit: () => void;
  onOpenCalculator: () => void;
  onToggleExamMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentBankId,
  examTitle,
  secondsRemaining,
  durationMinutes,
  isExamStarted,
  isExamFinished,
  examMode,
  onSelectBank,
  onStartExam,
  onOpenUpload,
  onOpenSubmit,
  onOpenCalculator,
  onToggleExamMode
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isLowTime = secondsRemaining <= 300 && secondsRemaining > 0;
  const currentPreset = PRESET_BANKS.find(b => b.id === currentBankId);
  const currentBankLabel = currentPreset ? currentPreset.shortName : 'Custom Bank';

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                MockMaster
              </span>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 tracking-wide">
                CBT Pro
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate max-w-[150px] sm:max-w-xs md:max-w-md font-medium" title={examTitle}>
              {examTitle}
            </p>
          </div>
        </div>

        {/* Center: Live Timer or Time Allowed Indicator + Bank Selector */}
        {!isExamFinished && (
          <div className="hidden md:flex items-center gap-3 bg-slate-100/90 px-3.5 py-1.5 rounded-2xl border border-slate-200">
            {isExamStarted ? (
              /* Live countdown timer when exam is running */
              <div
                className={`flex items-center gap-1.5 font-mono font-bold text-sm ${
                  isLowTime ? 'text-rose-600 animate-pulse' : 'text-slate-800'
                }`}
              >
                <Clock className={`w-4 h-4 ${isLowTime ? 'text-rose-600' : 'text-blue-600'}`} />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            ) : (
              /* Ready state duration badge before exam starts */
              <div className="flex items-center gap-1.5 font-semibold text-xs text-slate-600">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{durationMinutes} mins allowed</span>
              </div>
            )}

            <div className="h-4 w-px bg-slate-300" />

            {/* Bank Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-xl transition border border-slate-200 shadow-2xs"
              >
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentBankLabel}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white shadow-xl border border-slate-200 z-50 py-2 text-xs text-slate-700 max-h-96 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50">
                    Grand Exam Mocks
                  </div>

                  {PRESET_BANKS.filter(b => b.category === 'mock').map(bank => (
                    <button
                      key={bank.id}
                      type="button"
                      onClick={() => {
                        onSelectBank(bank.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-amber-50/70 flex items-center justify-between transition ${
                        currentBankId === bank.id ? 'bg-amber-50 font-bold text-amber-900' : 'text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {bank.id === 'RANDOM200' ? (
                          <Shuffle className="w-4 h-4 text-amber-600" />
                        ) : (
                          <Compass className="w-4 h-4 text-purple-600" />
                        )}
                        <span className="font-semibold text-xs">{bank.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${bank.badgeColor}`}>
                        {bank.shortName}
                      </span>
                    </button>
                  ))}

                  <div className="px-3.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-t border-slate-100 mt-1">
                    NISM-XV Chapter Banks
                  </div>

                  {PRESET_BANKS.filter(b => b.category === 'chapter').map(bank => (
                    <button
                      key={bank.id}
                      type="button"
                      onClick={() => {
                        onSelectBank(bank.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-blue-50/60 flex items-center justify-between transition ${
                        currentBankId === bank.id ? 'bg-blue-50 font-bold text-blue-900' : 'text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span className="font-medium text-xs truncate max-w-[170px]">{bank.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${bank.badgeColor}`}>
                        {bank.shortName}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Mode switch: Practice (instant answers) vs Exam Mode */}
          {!isExamFinished && isExamStarted && (
            <button
              type="button"
              onClick={onToggleExamMode}
              title={`Switch to ${examMode === 'exam' ? 'Practice Mode (instant explanations)' : 'Strict Exam Mode (submit to view)'}`}
              className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition ${
                examMode === 'practice'
                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${examMode === 'practice' ? 'bg-purple-600' : 'bg-slate-400'}`} />
              <span>{examMode === 'practice' ? 'Practice Mode' : 'Exam Mode'}</span>
            </button>
          )}

          {/* Calculator Tool */}
          <button
            type="button"
            onClick={onOpenCalculator}
            title="Open Exam Calculator"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
          >
            <Calculator className="w-4 h-4 text-blue-600" />
          </button>

          {/* Upload Button */}
          <button
            type="button"
            onClick={onOpenUpload}
            className="flex items-center gap-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl border border-slate-200 transition shadow-2xs"
          >
            <Upload className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Upload Bank</span>
            <span className="sm:hidden">Upload</span>
          </button>

          {/* If NOT started yet: Show Start Exam CTA */}
          {!isExamStarted && !isExamFinished && (
            <button
              type="button"
              onClick={onStartExam}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 sm:px-4 py-2 rounded-xl transition shadow-sm shadow-emerald-600/30 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start Exam</span>
            </button>
          )}

          {/* If STARTED: Show Submit Exam Button */}
          {isExamStarted && !isExamFinished && (
            <button
              type="button"
              onClick={onOpenSubmit}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 sm:px-4 py-2 rounded-xl transition shadow-sm shadow-emerald-600/20"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Submit</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
