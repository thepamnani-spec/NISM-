import React, { useState } from 'react';
import { X, Delete } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [prevVal, setPrevVal] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [resetNext, setResetNext] = useState(false);

  if (!isOpen) return null;

  const handleNum = (n: string) => {
    if (resetNext || display === '0') {
      setDisplay(n);
      setResetNext(false);
    } else {
      setDisplay(display + n);
    }
  };

  const handleOp = (operator: string) => {
    const current = parseFloat(display);
    if (prevVal !== null && op) {
      const result = compute(prevVal, current, op);
      setDisplay(String(result));
      setPrevVal(result);
    } else {
      setPrevVal(current);
    }
    setOp(operator);
    setResetNext(true);
  };

  const compute = (a: number, b: number, operator: string): number => {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      case '%': return (a * b) / 100;
      default: return b;
    }
  };

  const handleEqual = () => {
    if (prevVal !== null && op) {
      const current = parseFloat(display);
      const res = compute(prevVal, current, op);
      setDisplay(String(res));
      setPrevVal(null);
      setOp(null);
      setResetNext(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevVal(null);
    setOp(null);
    setResetNext(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-80 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-wide">CBT Exam Calculator</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 bg-slate-100">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-inner text-right">
            <div className="text-xs text-slate-400 font-mono h-4">
              {prevVal !== null ? `${prevVal} ${op || ''}` : ''}
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 truncate">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mt-4">
            <button onClick={handleClear} className="py-2.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-sm transition">C</button>
            <button onClick={handleBackspace} className="py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition">
              <Delete className="w-4 h-4" />
            </button>
            <button onClick={() => handleOp('%')} className="py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm transition">%</button>
            <button onClick={() => handleOp('÷')} className="py-2.5 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-base transition">÷</button>

            <button onClick={() => handleNum('7')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">7</button>
            <button onClick={() => handleNum('8')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">8</button>
            <button onClick={() => handleNum('9')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">9</button>
            <button onClick={() => handleOp('×')} className="py-2.5 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-base transition">×</button>

            <button onClick={() => handleNum('4')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">4</button>
            <button onClick={() => handleNum('5')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">5</button>
            <button onClick={() => handleNum('6')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">6</button>
            <button onClick={() => handleOp('-')} className="py-2.5 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-base transition">−</button>

            <button onClick={() => handleNum('1')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">1</button>
            <button onClick={() => handleNum('2')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">2</button>
            <button onClick={() => handleNum('3')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">3</button>
            <button onClick={() => handleOp('+')} className="py-2.5 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-base transition">+</button>

            <button onClick={() => handleNum('0')} className="col-span-2 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">0</button>
            <button onClick={() => handleNum('.')} className="py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition">.</button>
            <button onClick={handleEqual} className="py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-sm transition">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};
