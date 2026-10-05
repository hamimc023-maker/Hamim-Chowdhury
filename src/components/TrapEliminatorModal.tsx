import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import { SAT_TRAPS } from '../data/trapsData';

export const TrapEliminatorModal: React.FC = () => {
  const [filterSubject, setFilterSubject] = useState<'all' | 'english' | 'math'>('all');

  const filteredTraps = SAT_TRAPS.filter((t) => {
    if (filterSubject === 'all') return true;
    return t.subject === filterSubject || t.subject === 'both';
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>Digital SAT Trap Eliminator Guide</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 font-display">
          Top 10 High-Yield College Board Traps & Antidotes
        </h2>
        <p className="text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
          The difference between a 680 and a 780 isn\'t raw intelligence—it is recognizing test-maker trap patterns before falling into them. Study these recurrent distractors and their foolproof antidotes.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-medium border border-slate-200">
          <button
            onClick={() => setFilterSubject('all')}
            className={`px-3.5 py-1.5 rounded-md cursor-pointer transition-colors ${
              filterSubject === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Traps ({SAT_TRAPS.length})
          </button>
          <button
            onClick={() => setFilterSubject('english')}
            className={`px-3.5 py-1.5 rounded-md cursor-pointer transition-colors ${
              filterSubject === 'english' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reading & Writing Traps
          </button>
          <button
            onClick={() => setFilterSubject('math')}
            className={`px-3.5 py-1.5 rounded-md cursor-pointer transition-colors ${
              filterSubject === 'math' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Math Traps
          </button>
        </div>
      </div>

      {/* Traps List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTraps.map((trap, idx) => (
          <div
            key={trap.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-sm transition-all space-y-4"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-mono text-slate-400">TRAP 0{idx + 1}</span>
                <span className="text-rose-600 font-semibold uppercase tracking-wider text-[10px]">
                  {trap.severity} Severity · {trap.subject.toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                {trap.name}
              </h3>

              <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
                {trap.shortSummary}
              </p>

              {/* How CB Tricks You */}
              <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-100 text-xs text-rose-950 space-y-1 mb-3">
                <div className="font-bold flex items-center gap-1.5 text-rose-800">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>How the Test Tricks You:</span>
                </div>
                <p className="leading-relaxed">{trap.howCollegeBoardTricksYou}</p>
              </div>

              {/* Concrete Example */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 font-mono space-y-1 mb-3">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans block">
                  Real Test Scenario:
                </span>
                <p className="leading-relaxed">{trap.realTestExample}</p>
              </div>
            </div>

            {/* The Antidote */}
            <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-xs sm:text-sm text-emerald-950 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-900">The 100% Antidote: </strong>
                <span className="leading-relaxed">{trap.theAntidote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
