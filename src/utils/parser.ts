import { Question } from '../types';

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

/**
 * Intelligent regex parser for text question banks.
 * Handles patterns such as:
 * Q1. / 1. / 1) / Question 1:
 * Options: (A), (B), (C), (D) or A), B), C), D) or A. B. C. D.
 * Answers: "Answer: (A)", "Ans: B", "Q1-(C)", "Exp:", etc.
 */
export function parseRawMcqText(text: string): Question[] {
  const parsedQuestions: Question[] = [];

  // Match standalone answer key patterns in text if provided at end or beginning
  const answerKeyMap: Record<number, number> = {};
  const answerRegex = /(?:Q\s*)?(\d+)[\s:-]+(?:\()?([A-D])(?:\))?/gi;
  let ansMatch;
  while ((ansMatch = answerRegex.exec(text)) !== null) {
    const qNum = parseInt(ansMatch[1], 10);
    const letter = ansMatch[2].toUpperCase();
    const letterIdx: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
    if (letterIdx[letter] !== undefined && answerKeyMap[qNum] === undefined) {
      answerKeyMap[qNum] = letterIdx[letter];
    }
  }

  // Split chunks based on question prefix patterns
  const chunks = text.split(/(?=Q\s*\d+[\.:\)]|\b\d+[\.:\)]\s+)/i);

  chunks.forEach((chunk, idx) => {
    const trimmed = chunk.trim();
    if (!trimmed) return;

    // Extract Question Number
    const matchNum = trimmed.match(/^(?:Q\s*)?(\d+)/i);
    const qId = matchNum ? parseInt(matchNum[1], 10) : idx + 1;

    // Extract Options: (A), (B), (C), (D) or A), B), C), D)
    const optSplit = trimmed.split(/(?:\([A-D]\)|[A-D][\.\)])\s+/i);
    if (optSplit.length >= 5) {
      const stem = optSplit[0].replace(/^(?:Q\s*)?\d+[\.:\)]\s*/i, '').trim();
      const optA = optSplit[1].trim();
      const optB = optSplit[2].trim();
      const optC = optSplit[3].trim();

      let optD = optSplit[4].trim();
      let exp = '';

      // Check if explanation or answer is trailing in Opt D
      const expSplit = optD.split(/(?:Answer|Ans|Explanation|Exp)[\s:-]+/i);
      if (expSplit.length > 1) {
        optD = expSplit[0].trim();
        exp = expSplit.slice(1).join(' ').trim();
      }

      let correctOpt = answerKeyMap[qId] !== undefined ? answerKeyMap[qId] : 0;

      // Check if (A/B/C/D) is noted in explanation
      const expAnsMatch = exp.match(/\b([A-D])\b/i);
      if (expAnsMatch) {
        const letter = expAnsMatch[1].toUpperCase();
        const letterIdx: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
        if (letterIdx[letter] !== undefined) {
          correctOpt = letterIdx[letter];
        }
      }

      parsedQuestions.push({
        id: qId,
        sec: 'Custom Bank',
        q: stem,
        opts: [optA, optB, optC, optD],
        ans: correctOpt,
        exp: exp || `Correct Answer is Option ${['A', 'B', 'C', 'D'][correctOpt] || 'A'}`
      });
    }
  });

  return parsedQuestions;
}

export async function extractTextFromPdf(
  file: File,
  onProgress?: (percent: number, status: string) => void
): Promise<string> {
  if (!window.pdfjsLib) {
    throw new Error('PDF.js library is not loaded. Please ensure internet access.');
  }

  // Ensure worker is configured
  if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const numPages = pdf.numPages;

  let fullText = '';
  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    fullText += `\n[Page ${i}]\n` + pageText;

    const pct = Math.round((i / numPages) * 100);
    if (onProgress) {
      onProgress(pct, `Extracting page ${i} of ${numPages}...`);
    }
  }

  return fullText;
}
