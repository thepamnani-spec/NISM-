import React, { useState, useRef } from 'react';
import {
  FileText,
  X,
  UploadCloud,
  FileCode,
  Play,
  AlertCircle
} from 'lucide-react';
import { extractTextFromPdf, parseRawMcqText } from '../utils/parser';
import { Question } from '../types';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCustomExam: (questions: Question[], title: string, minutes: number) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onStartCustomExam
}) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'text'>('pdf');
  const [rawText, setRawText] = useState('');
  const [examTitle, setExamTitle] = useState('Custom Practice Mock');
  const [examMinutes, setExamMinutes] = useState(60);

  // PDF processing states
  const [isExtracting, setIsExtracting] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = async (file: File) => {
    setErrorMessage('');
    setIsExtracting(true);
    setProgressPercent(0);
    setProgressStatus('Reading document...');

    try {
      let extractedText = '';

      if (file.name.endsWith('.pdf')) {
        extractedText = await extractTextFromPdf(file, (pct, status) => {
          setProgressPercent(pct);
          setProgressStatus(status);
        });
      } else {
        // Text / Json file
        extractedText = await file.text();
        setProgressPercent(100);
      }

      setProgressStatus('Parsing questions, options and answers...');
      const parsed = parseRawMcqText(extractedText);

      if (parsed.length === 0) {
        setIsExtracting(false);
        setErrorMessage(
          'Could not automatically detect standard MCQ format in this file. We have copied the extracted text to the "Paste Raw MCQs" tab so you can adjust formatting.'
        );
        setRawText(extractedText);
        setActiveTab('text');
        return;
      }

      const title = examTitle || file.name.replace(/\.[^/.]+$/, '');
      const mins = examMinutes > 0 ? examMinutes : parsed.length;

      setIsExtracting(false);
      onStartCustomExam(parsed, title, mins);
      onClose();
    } catch (err: any) {
      console.error('File parsing error:', err);
      setIsExtracting(false);
      setErrorMessage(err.message || 'Error processing document. Ensure file is not corrupted.');
    }
  };

  const handleProcessPastedText = () => {
    setErrorMessage('');
    if (!rawText.trim()) {
      setErrorMessage('Please paste questions in the text box below.');
      return;
    }

    const parsed = parseRawMcqText(rawText);
    if (parsed.length === 0) {
      setErrorMessage(
        'No valid MCQs detected. Ensure questions follow format: Q1. Stem text... (A) Opt1 (B) Opt2 (C) Opt3 (D) Opt4 Answer: (A)'
      );
      return;
    }

    const title = examTitle.trim() || 'Custom Pasted Mock Bank';
    const mins = examMinutes > 0 ? examMinutes : parsed.length;
    onStartCustomExam(parsed, title, mins);
    onClose();
  };

  const loadSampleQuestions = () => {
    const sample = `Q1. Which department of the Ministry of Finance prepares the Union Budget?
(A) Department of Expenditure
(B) Department of Financial Services
(C) Department of Revenue
(D) Department of Economic Affairs
Answer: (D) DEA formulates/monitors fiscal policy and prepares the Union Budget annually.

Q2. What is the role of a Research Analyst according to SEBI regulations?
(A) Manage client portfolios
(B) Execute broking orders
(C) Collect and process data to help clients make informed decisions
(D) Audit corporate financials
Answer: (C) RAs collect and interpret data to enable sound investment decisions.

Q3. In technical analysis, which chart ignores both time and volume and focuses purely on price?
(A) Renko chart
(B) Bar chart (OHLC)
(C) Point and Figure chart
(D) Heikin-Ashi chart
Answer: (C) Point and Figure charts filter noise and focus solely on price movements.`;

    setRawText(sample);
    setExamTitle('Sample 3-Question Practice Mock');
    setExamMinutes(5);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Import Any MCQ Bank or PDF
              </h3>
              <p className="text-xs text-slate-500">
                Upload 10-50+ page MCQ PDFs or paste raw text question banks
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto py-5 space-y-5">
          {/* Tabs */}
          <div className="flex rounded-2xl bg-slate-100 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('pdf')}
              className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === 'pdf'
                  ? 'bg-white shadow-xs text-blue-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UploadCloud className="w-4 h-4" />
              <span>Upload PDF / Document</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('text')}
              className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === 'text'
                  ? 'bg-white shadow-xs text-blue-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Paste Raw MCQs</span>
            </button>
          </div>

          {/* Error notice */}
          {errorMessage && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Tab 1: PDF Upload */}
          {activeTab === 'pdf' && (
            <div className="space-y-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files.length > 0) {
                    handleFileUpload(e.dataTransfer.files[0]);
                  }
                }}
                className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-3xl p-8 text-center cursor-pointer bg-slate-50/60 hover:bg-blue-50/30 transition flex flex-col items-center justify-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-inner">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Click to select or drag & drop MCQ PDF here
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Supports PDF, TXT or JSON question sets up to 100+ pages
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.txt,.json"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                />
                <span className="text-xs px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow-xs">
                  Browse Files
                </span>
              </div>

              {/* Extraction Progress Bar */}
              {isExtracting && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{progressStatus}</span>
                    <span className="font-mono">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Raw Text Paste */}
          {activeTab === 'text' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">
                  Paste Question Bank with (A), (B), (C), (D) options:
                </label>
                <button
                  type="button"
                  onClick={loadSampleQuestions}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 underline"
                >
                  Load Sample 3 Questions
                </button>
              </div>

              <textarea
                rows={8}
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="Q1. Question stem text here...&#10;(A) Option A&#10;(B) Option B&#10;(C) Option C&#10;(D) Option D&#10;Answer: (D) Detailed explanation here..."
                className="w-full p-4 text-xs font-mono rounded-2xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-slate-50/50"
              />
            </div>
          )}

          {/* Configuration Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mock Exam Title
              </label>
              <input
                type="text"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Time Limit (Minutes)
              </label>
              <input
                type="number"
                min="5"
                max="360"
                value={examMinutes}
                onChange={(e) => setExamMinutes(parseInt(e.target.value, 10) || 60)}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          {activeTab === 'text' && (
            <button
              type="button"
              onClick={handleProcessPastedText}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm shadow-blue-600/30 flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Process & Start Mock Exam</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
