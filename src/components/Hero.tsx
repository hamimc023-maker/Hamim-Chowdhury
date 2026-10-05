import React from 'react';
import { Search, Sparkles, BookOpen, Calculator, CheckCircle2 } from 'lucide-react';
import { SATSubject } from '../types/sat';
import heroImage from '../assets/images/hero_sat_mastery_1791149173568.jpg';

interface HeroProps {
  selectedSubject: SATSubject;
  setSelectedSubject: (subject: SATSubject) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterMode: 'all' | 'bookmarked' | 'mastered';
  setFilterMode: (mode: 'all' | 'bookmarked' | 'mastered') => void;
  onOpenDesmos: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedSubject,
  setSelectedSubject,
  searchQuery,
  setSearchQuery,
  filterMode,
  setFilterMode,
  onOpenDesmos
}) => {
  return (
    <div className="relative border-b border-slate-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>SAT WITH CHOWDHURY</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">ACHIEVE YOUR HIGHEST SCORE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15]" style={{ textWrap: 'balance' }}>
              Master Every Digital SAT Topic with Proven Shortcuts & Desmos Hacks
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              High-yield strategies, trap avoidance, and 30-second problem-solving heuristics curated for 750+ section scorers across Reading & Writing and Math.
            </p>

            {/* Subject Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80">
                <button
                  onClick={() => setSelectedSubject('english')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    selectedSubject === 'english'
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Reading & Writing (4 Domains)</span>
                </button>

                <button
                  onClick={() => setSelectedSubject('math')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    selectedSubject === 'math'
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Calculator className="w-4 h-4" />
                  <span>SAT Math (4 Domains)</span>
                </button>
              </div>

              <button
                onClick={onOpenDesmos}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-lg transition-colors cursor-pointer border border-dashed border-slate-300"
              >
                <span>Desmos Hacks Simulator</span>
                <span className="text-[10px] font-mono text-indigo-600">→</span>
              </button>
            </div>

            {/* Search and Filter Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedSubject === 'english' ? 'Reading & Writing' : 'Math'} topics, tricks, traps...`}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200/80 shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    filterMode === 'all'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Topics
                </button>
                <button
                  onClick={() => setFilterMode('bookmarked')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    filterMode === 'bookmarked'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Saved
                </button>
                <button
                  onClick={() => setFilterMode('mastered')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    filterMode === 'mastered'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Mastered
                </button>
              </div>
            </div>

            {/* Unboxed Metadata Stats */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Adaptive Module 1 & 2 Strategies</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>100% Digital Bluebook Aligned</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Desmos Grapher</span>
            </div>
          </div>

          {/* Right Column: Hero Image with Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-700 bg-slate-950 aspect-16/10 lg:aspect-4/3 group">
              <img
                src="/og-image.jpg"
                alt="SAT with Chowdhury - Achieve Your Highest Score"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback container
                  (e.target as HTMLImageElement).src = heroImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <div className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                  {selectedSubject === 'english' ? 'Reading & Writing Strategy' : 'Math & Desmos Shortcuts'}
                </div>
                <div className="text-sm sm:text-base font-semibold font-display">
                  {selectedSubject === 'english'
                    ? 'Rhetorical synthesis speedrun & punctuation rules'
                    : 'System intersections, regression & vertex hacks'}
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                  <span>Target: 750 - 800</span>
                  <span aria-hidden="true">·</span>
                  <span>Achieve Your Highest Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
