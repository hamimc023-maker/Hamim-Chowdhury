import React, { useState } from 'react';
import { RotateCw, Check, ArrowRight, Sparkles, Zap, AlertTriangle, RotateCcw } from 'lucide-react';
import { TOPICS } from '../data/satData';
import { SAT_TRAPS } from '../data/trapsData';
import { FORMULAS } from '../data/formulasData';

interface Flashcard {
  id: string;
  category: string;
  subject: 'english' | 'math';
  question: string;
  hint?: string;
  answer: string;
  proTip: string;
}

export const FlashcardDrill: React.FC = () => {
  // Generate high-yield flashcards from our rich datasets
  const [cards] = useState<Flashcard[]>(() => {
    const list: Flashcard[] = [];

    // From topics
    TOPICS.forEach((t) => {
      // Golden Rule card
      list.push({
        id: `card-rule-${t.id}`,
        category: t.domainName,
        subject: t.subject,
        question: `What is the #1 Golden Rule for "${t.title}"?`,
        hint: t.summary,
        answer: t.goldenRules[0] || 'See topic summary.',
        proTip: t.tipsAndTricks[0]?.description || 'Apply directly during testing.'
      });

      // Trick card
      if (t.tipsAndTricks[0]) {
        list.push({
          id: `card-trick-${t.id}`,
          category: t.domainName,
          subject: t.subject,
          question: `How do you execute the "${t.tipsAndTricks[0].title}" shortcut?`,
          hint: `Used in ${t.title}`,
          answer: t.tipsAndTricks[0].description,
          proTip: t.tipsAndTricks[0].timeSavedEstimate ? `Saves ~${t.tipsAndTricks[0].timeSavedEstimate}` : 'High efficiency tip'
        });
      }
    });

    // From traps
    SAT_TRAPS.forEach((trap) => {
      list.push({
        id: `card-trap-${trap.id}`,
        category: 'Trap Avoidance',
        subject: trap.subject === 'both' ? 'math' : trap.subject,
        question: `How does the "${trap.name}" trick you, and what is its antidote?`,
        hint: trap.shortSummary,
        answer: `${trap.howCollegeBoardTricksYou} \n\nANTIDOTE: ${trap.theAntidote}`,
        proTip: `Example: ${trap.realTestExample}`
      });
    });

    // From hidden formulas
    FORMULAS.filter(f => f.category === 'Hidden Must-Memorize').forEach((f) => {
      list.push({
        id: `card-form-${f.id}`,
        category: 'Hidden Formula',
        subject: f.subject,
        question: `What is the formula for "${f.name}"? (Not given on test sheet)`,
        hint: f.whenToUse,
        answer: f.formula,
        proTip: f.notes
      });
    });

    return list;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [reviewList, setReviewList] = useState<string[]>([]);
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'english' | 'math'>('all');

  const filteredCards = cards.filter(c => subjectFilter === 'all' || c.subject === subjectFilter);
  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (known: boolean) => {
    if (known) {
      setKnownCount(prev => prev + 1);
    } else {
      if (!reviewList.includes(currentCard.id)) {
        setReviewList(prev => [...prev, currentCard.id]);
      }
    }

    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed cycle
      setCurrentIndex(0);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setReviewList([]);
  };

  if (!currentCard) {
    return <div>No cards found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Active Recall Drill Mode</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            SAT Rapid-Fire Flashcards
          </h2>
        </div>

        {/* Subject filter tabs */}
        <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-medium border border-slate-200 self-start sm:self-auto">
          <button
            onClick={() => { setSubjectFilter('all'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
              subjectFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Cards
          </button>
          <button
            onClick={() => { setSubjectFilter('english'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
              subjectFilter === 'english' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reading & Writing
          </button>
          <button
            onClick={() => { setSubjectFilter('math'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
              subjectFilter === 'math' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Math & Desmos
          </button>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800">
            Card {currentIndex + 1} of {filteredCards.length}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-700 font-medium">{knownCount} Mastered</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-700 font-medium">{reviewList.length} Need Review</span>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restart Drill</span>
        </button>
      </div>

      {/* The Flashcard Viewport */}
      <div className="relative perspective-1000 min-h-[340px]">
        <div
          onClick={handleFlip}
          className={`w-full min-h-[340px] rounded-2xl border p-7 sm:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-sm select-none ${
            isFlipped
              ? 'bg-slate-900 text-white border-slate-800'
              : 'bg-white text-slate-900 border-slate-200 hover:border-indigo-300'
          }`}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between text-xs">
            <span className={`font-semibold uppercase tracking-wider ${
              isFlipped ? 'text-indigo-300' : 'text-indigo-600'
            }`}>
              {currentCard.category}
            </span>
            <div className={`flex items-center gap-1.5 text-xs ${
              isFlipped ? 'text-slate-400' : 'text-slate-400'
            }`}>
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click card to {isFlipped ? 'show question' : 'reveal answer'}</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="my-auto py-6 space-y-4">
            {!isFlipped ? (
              <>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  Prompt / Scenario
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display leading-snug">
                  {currentCard.question}
                </h3>
                {currentCard.hint && (
                  <p className="text-sm text-slate-500 italic">
                    Hint: {currentCard.hint}
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="text-xs uppercase tracking-wider text-indigo-300 font-mono flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Rule & Answer</span>
                </div>
                <div className="text-base sm:text-lg font-medium leading-relaxed font-mono whitespace-pre-wrap">
                  {currentCard.answer}
                </div>
                <div className="p-3 bg-slate-800/80 rounded-lg text-xs text-slate-300 border border-slate-700/60 flex items-start gap-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{currentCard.proTip}</span>
                </div>
              </>
            )}
          </div>

          {/* Bottom Flip Indicator */}
          <div className="text-center text-xs opacity-50">
            {isFlipped ? 'Tap to flip back' : 'Tap to reveal solution'}
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-center gap-4 pt-2">
        <button
          onClick={() => handleNext(false)}
          className="flex-1 max-w-[200px] py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors cursor-pointer shadow-sm text-center"
        >
          Need Review
        </button>

        <button
          onClick={() => handleNext(true)}
          className="flex-1 max-w-[200px] py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors cursor-pointer shadow-md text-center flex items-center justify-center gap-2"
        >
          <Check className="w-4 h-4" />
          <span>Got It! (Next)</span>
        </button>
      </div>
    </div>
  );
};
