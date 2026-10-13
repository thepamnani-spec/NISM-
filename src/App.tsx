import { useState, useEffect, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { ExamLobby } from './components/ExamLobby';
import { QuestionCard } from './components/QuestionCard';
import { QuestionPalette } from './components/QuestionPalette';
import { ScorecardView } from './components/ScorecardView';
import { SubmitConfirmModal } from './components/SubmitConfirmModal';
import { UploadModal } from './components/UploadModal';
import { CalculatorModal } from './components/CalculatorModal';
import { PRESET_BANKS, NISM_CH2_DATA } from './data';
import { Question, ExamResult, SectionStat, ExamMode } from './types';

export default function App() {
  // Question Bank & Exam Configuration
  const [currentBankId, setCurrentBankId] = useState<string>('CH2');
  const [examTitle, setExamTitle] = useState<string>('NISM Series XV - Ch. 2: Introduction to Securities Market (191 Qs)');
  const [questions, setQuestions] = useState<Question[]>(() => NISM_CH2_DATA);

  // User test progress state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<number, boolean>>({ 2001: true });

  // Filter state
  const [filterSection, setFilterSection] = useState<string>('ALL');

  // Timer & Exam Status
  const [examDurationSeconds, setExamDurationSeconds] = useState<number>(120 * 60);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(120 * 60);
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Mode: Exam (strict CBT) or Practice (instant feedback)
  const [examMode, setExamMode] = useState<ExamMode>('exam');

  // Modals state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Derive distinct sections
  const sections = useMemo(() => {
    const list: string[] = ['ALL'];
    questions.forEach(q => {
      const s = q.sec || 'General';
      if (!list.includes(s)) list.push(s);
    });
    return list;
  }, [questions]);

  // Start / Reset Exam Configuration
  const configureExam = useCallback((
    newQuestions: Question[],
    title: string,
    minutes?: number,
    bankId?: string
  ) => {
    setQuestions(newQuestions);
    setExamTitle(title);
    if (bankId) setCurrentBankId(bankId);

    const durSec = (minutes || newQuestions.length) * 60;
    setExamDurationSeconds(durSec);
    setSecondsRemaining(durSec);

    setCurrentIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ [newQuestions[0]?.id || 1]: true });
    setFilterSection('ALL');
    setIsExamStarted(false); // Wait for candidate to press Start Exam
    setIsExamFinished(false);
    setExamResult(null);
    setIsSubmitModalOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Preset Bank Switch
  const handleSelectBank = (bankId: string) => {
    const preset = PRESET_BANKS.find(b => b.id === bankId);
    if (!preset) return;
    const qs = preset.getQuestions();
    configureExam(qs, `NISM-XV: ${preset.name} (${qs.length} Qs)`, preset.defaultMinutes, preset.id);
  };

  // Start Custom Uploaded Exam
  const handleStartCustomExam = (customQs: Question[], title: string, minutes: number) => {
    setCurrentBankId('CUSTOM');
    configureExam(customQs, title, minutes, 'CUSTOM');
  };

  // Candidate explicitly triggers the start of the examination
  const handleStartExam = () => {
    setIsExamStarted(true);
    setIsExamFinished(false);
    // Mark first question as visited
    const firstQ = questions[0];
    if (firstQ) {
      setVisitedQuestions({ [firstQ.id]: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Timer interval effect - ONLY active when exam has started and is not finished
  useEffect(() => {
    if (!isExamStarted || isExamFinished) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamStarted, isExamFinished]);

  // Jump to Question
  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
      const q = questions[index];
      setVisitedQuestions(prev => ({ ...prev, [q.id]: true }));
    }
  };

  // Select Option
  const handleSelectOption = (optIndex: number) => {
    const q = questions[currentIndex];
    if (!q) return;
    setUserAnswers(prev => ({ ...prev, [q.id]: optIndex }));
  };

  // Clear Selection
  const handleClearSelection = () => {
    const q = questions[currentIndex];
    if (!q) return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[q.id];
      return copy;
    });
  };

  // Toggle Mark For Review
  const handleToggleMarkReview = () => {
    const q = questions[currentIndex];
    if (!q) return;
    setMarkedForReview(prev => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  // Previous Question
  const handlePrev = () => {
    if (currentIndex > 0) {
      handleJumpToQuestion(currentIndex - 1);
    }
  };

  // Next Question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      handleJumpToQuestion(currentIndex + 1);
    } else {
      setIsSubmitModalOpen(true);
    }
  };

  // Final Submit and Calculation
  const handleFinalSubmit = () => {
    setIsSubmitModalOpen(false);

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    const secMap: Record<string, { total: number; correct: number; wrong: number; skipped: number }> = {};

    questions.forEach(q => {
      const s = q.sec || 'General';
      if (!secMap[s]) {
        secMap[s] = { total: 0, correct: 0, wrong: 0, skipped: 0 };
      }
      secMap[s].total++;

      const choice = userAnswers[q.id];
      if (choice === undefined) {
        skipped++;
        secMap[s].skipped++;
      } else if (choice === q.ans) {
        correct++;
        secMap[s].correct++;
      } else {
        wrong++;
        secMap[s].wrong++;
      }
    });

    const total = questions.length;
    const score = correct;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const timeElapsed = examDurationSeconds - secondsRemaining;

    const sectionStats: SectionStat[] = Object.keys(secMap).map(s => {
      const st = secMap[s];
      return {
        section: s,
        total: st.total,
        correct: st.correct,
        wrong: st.wrong,
        skipped: st.skipped,
        accuracy: st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0
      };
    });

    const finalRes: ExamResult = {
      total,
      correct,
      wrong,
      skipped,
      score,
      percentage,
      timeElapsed,
      sectionStats
    };

    setExamResult(finalRes);
    setIsExamFinished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake Full Exam
  const handleRetakeFull = () => {
    configureExam(questions, examTitle, Math.round(examDurationSeconds / 60), currentBankId);
  };

  // Retake Missed Only
  const handleRetakeMissed = () => {
    const missed = questions.filter(q => userAnswers[q.id] !== q.ans);
    if (missed.length === 0) return;
    configureExam(missed, `${examTitle} - [Retake ${missed.length} Missed]`, missed.length, currentBankId);
  };

  // Keyboard Shortcuts (only active once exam is started and not finished)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isExamStarted || isExamFinished) return;
      if (isUploadModalOpen || isSubmitModalOpen || isCalculatorOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        handleSelectOption(parseInt(e.key, 10) - 1);
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        handleToggleMarkReview();
      } else if (e.key.toLowerCase() === 'c') {
        e.preventDefault();
        handleClearSelection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isExamStarted,
    isExamFinished,
    isUploadModalOpen,
    isSubmitModalOpen,
    isCalculatorOpen,
    currentIndex,
    questions,
    userAnswers
  ]);

  const answeredCount = Object.keys(userAnswers).length;
  const markedCount = Object.keys(markedForReview).filter(k => markedForReview[Number(k)]).length;
  const currentQuestion = questions[currentIndex];
  const durationMinutes = Math.round(examDurationSeconds / 60);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Header */}
      <Header
        currentBankId={currentBankId}
        examTitle={examTitle}
        secondsRemaining={secondsRemaining}
        durationMinutes={durationMinutes}
        isExamStarted={isExamStarted}
        isExamFinished={isExamFinished}
        examMode={examMode}
        onSelectBank={handleSelectBank}
        onStartExam={handleStartExam}
        onOpenUpload={() => setIsUploadModalOpen(true)}
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onToggleExamMode={() => setExamMode(prev => (prev === 'exam' ? 'practice' : 'exam'))}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col">
        {/* VIEW 1: Exam Lobby / Instructions with START EXAM button */}
        {!isExamStarted && !isExamFinished && (
          <ExamLobby
            currentBankId={currentBankId}
            examTitle={examTitle}
            totalQuestions={questions.length}
            durationMinutes={durationMinutes}
            examMode={examMode}
            onSelectBank={handleSelectBank}
            onSetExamMode={setExamMode}
            onOpenUpload={() => setIsUploadModalOpen(true)}
            onStartExam={handleStartExam}
          />
        )}

        {/* VIEW 2: Active Exam Runner with live timer, question card & question navigator */}
        {isExamStarted && !isExamFinished && (
          <div className="flex-1 flex flex-col gap-4 animate-in fade-in duration-150">
            {/* Section tabs & Live Answered Counter Ribbon */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3.5">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Section:
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                  {sections.map(secName => {
                    const isActive = secName === filterSection;
                    let label = secName;
                    if (secName.length > 25 && secName !== 'ALL') {
                      label = `${secName.substring(0, 22)}...`;
                    }

                    return (
                      <button
                        key={secName}
                        type="button"
                        onClick={() => {
                          setFilterSection(secName);
                          if (secName !== 'ALL') {
                            const firstIndex = questions.findIndex(q => q.sec === secName);
                            if (firstIndex !== -1) handleJumpToQuestion(firstIndex);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-xl transition font-semibold text-xs ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        title={secName}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status Counter Badges */}
              <div className="flex items-center gap-4 text-xs font-medium text-slate-600 self-end md:self-auto">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>
                    Answered: <b className="text-slate-900 font-bold">{answeredCount}</b>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>
                    Marked: <b className="text-slate-900 font-bold">{markedCount}</b>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span>
                    Total: <b className="text-slate-900 font-bold">{questions.length}</b>
                  </span>
                </div>
              </div>
            </div>

            {/* Split Screen Layout: Left 8 Cols (Question Card) + Right 4 Cols (Palette Grid) */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {currentQuestion && (
                <div className="lg:col-span-8">
                  <QuestionCard
                    question={currentQuestion}
                    currentIndex={currentIndex}
                    totalQuestions={questions.length}
                    userSelection={userAnswers[currentQuestion.id]}
                    isMarkedForReview={!!markedForReview[currentQuestion.id]}
                    examMode={examMode}
                    onSelectOption={handleSelectOption}
                    onClearSelection={handleClearSelection}
                    onToggleMarkReview={handleToggleMarkReview}
                    onPrev={handlePrev}
                    onNext={handleNext}
                  />
                </div>
              )}

              <div className="lg:col-span-4 sticky top-20">
                <QuestionPalette
                  questions={questions}
                  currentIndex={currentIndex}
                  userAnswers={userAnswers}
                  markedForReview={markedForReview}
                  visitedQuestions={visitedQuestions}
                  filterSection={filterSection}
                  onJumpToQuestion={handleJumpToQuestion}
                  onSubmitExam={() => setIsSubmitModalOpen(true)}
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: Scorecard & Explanations once submitted */}
        {isExamFinished && examResult && (
          <ScorecardView
            questions={questions}
            userAnswers={userAnswers}
            result={examResult}
            examTitle={examTitle}
            onRetakeFull={handleRetakeFull}
            onRetakeMissed={handleRetakeMissed}
          />
        )}
      </main>

      {/* Submissions Confirmation Modal */}
      <SubmitConfirmModal
        isOpen={isSubmitModalOpen}
        answeredCount={answeredCount}
        markedCount={markedCount}
        unansweredCount={questions.length - answeredCount}
        onCancel={() => setIsSubmitModalOpen(false)}
        onConfirm={handleFinalSubmit}
      />

      {/* Custom MCQ PDF / Text Bank Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onStartCustomExam={handleStartCustomExam}
      />

      {/* Financial Exam Calculator Modal */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
}
