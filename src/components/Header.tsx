import React from 'react';
import { SATSubject } from '../types/sat';

interface HeaderProps {
  activeTab: 'browse' | 'desmos' | 'formulas' | 'traps' | 'drill';
  setActiveTab: (tab: 'browse' | 'desmos' | 'formulas' | 'traps' | 'drill') => void;
  selectedSubject: SATSubject | null;
  onGoHome: () => void;
  onSelectSubject: (subject: SATSubject) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedSubject,
  onGoHome,
  onSelectSubject
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={onGoHome}
          className="text-left cursor-pointer focus:outline-none flex items-center gap-3.5 group"
        >
          <img 
            src="/logo.jpg" 
            alt="SAT with Chowdhury Logo" 
            className="w-10 h-10 rounded-xl object-cover shadow border border-slate-700 shrink-0" 
          />
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors font-display block leading-none">
              SAT with Chowdhury
            </span>
            <span className="text-xs text-slate-500 font-medium tracking-wide mt-1 block">
              Achieve Your Highest Score
            </span>
          </div>
        </button>

        {/* Clean, Simple Navigation */}
        <nav className="flex items-center gap-4 sm:gap-8 text-base font-semibold text-slate-700">
          <button
            onClick={onGoHome}
            className={`cursor-pointer transition-colors ${
              activeTab === 'browse' && selectedSubject === null
                ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1'
                : 'hover:text-slate-900'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onSelectSubject('math')}
            className={`cursor-pointer transition-colors ${
              activeTab === 'browse' && selectedSubject === 'math'
                ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1'
                : 'hover:text-slate-900'
            }`}
          >
            Math
          </button>

          <button
            onClick={() => onSelectSubject('english')}
            className={`cursor-pointer transition-colors ${
              activeTab === 'browse' && selectedSubject === 'english'
                ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1'
                : 'hover:text-slate-900'
            }`}
          >
            Reading & Writing
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`hidden md:block cursor-pointer transition-colors ${
              activeTab === 'formulas'
                ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1'
                : 'hover:text-slate-900'
            }`}
          >
            Formula Sheet
          </button>

          <button
            onClick={() => setActiveTab('desmos')}
            className={`hidden md:block cursor-pointer transition-colors ${
              activeTab === 'desmos'
                ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1'
                : 'hover:text-slate-900'
            }`}
          >
            Desmos Hacks
          </button>
        </nav>
      </div>
    </header>
  );
};

