import React from 'react';
import { HelpCircle, Check, ArrowLeft } from 'lucide-react';

interface SubmitConfirmModalProps {
  isOpen: boolean;
  answeredCount: number;
  markedCount: number;
  unansweredCount: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export const SubmitConfirmModal: React.FC<SubmitConfirmModalProps> = ({
  isOpen,
  answeredCount,
  markedCount,
  unansweredCount,
  onCancel,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-center space-y-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mx-auto shadow-inner">
          <HelpCircle className="w-8 h-8 text-amber-600" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">Submit Mock Examination?</h3>
          <p className="text-xs text-slate-500 mt-1">
            Review your exam attempt summary before final calculation:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 bg-slate-50 rounded-2xl p-3 border border-slate-200">
          <div>
            <div className="text-xl font-black text-emerald-600">{answeredCount}</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Answered</div>
          </div>
          <div>
            <div className="text-xl font-black text-amber-600">{markedCount}</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Review</div>
          </div>
          <div>
            <div className="text-xl font-black text-rose-500">{unansweredCount}</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Unanswered</div>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          Once submitted, you will receive your final score, pass/fail status, and step-by-step explanations for all questions.
        </p>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Test</span>
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm shadow-emerald-600/30 flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Yes, Submit Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};
