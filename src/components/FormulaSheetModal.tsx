import React, { useState } from 'react';
import { Search, Copy, Check, BookOpen, Calculator, Sparkles } from 'lucide-react';
import { FORMULAS, FormulaItem } from '../data/formulasData';

interface FormulaSheetModalProps {
  onClose?: () => void;
}

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = () => {
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'math' | 'english'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'Hidden Must-Memorize' | 'Provided by College Board' | 'English Rules'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (item: FormulaItem) => {
    navigator.clipboard.writeText(item.formula);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const filteredFormulas = FORMULAS.filter((f) => {
    if (subjectFilter !== 'all' && f.subject !== subjectFilter) return false;
    if (categoryFilter !== 'all' && f.category !== categoryFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        f.name.toLowerCase().includes(q) ||
        f.formula.toLowerCase().includes(q) ||
        f.whenToUse.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Editorial Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Complete SAT Rule & Formula Cheat Sheet</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 font-display">
          Essential Formulas & Grammar Hierarchy
        </h2>
        <p className="text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
          The College Board gives you basic geometry formulas on test day, but leaves out the high-frequency algebra and trigonometry formulas (vertex, sum of roots, discriminant, circle equation). Memorize the "Hidden" formulas below!
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          {/* Subject Filter */}
          <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-medium border border-slate-200">
            <button
              onClick={() => setSubjectFilter('all')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                subjectFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Rules
            </button>
            <button
              onClick={() => setSubjectFilter('math')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                subjectFilter === 'math' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Math Formulas</span>
            </button>
            <button
              onClick={() => setSubjectFilter('english')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                subjectFilter === 'english' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>English Rules</span>
            </button>
          </div>

          {/* Category Chips */}
          <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-medium border border-slate-200">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                categoryFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setCategoryFilter('Hidden Must-Memorize')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                categoryFilter === 'Hidden Must-Memorize' ? 'bg-white text-rose-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hidden Must-Memorize
            </button>
            <button
              onClick={() => setCategoryFilter('Provided by College Board')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                categoryFilter === 'Provided by College Board' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Provided on Test Day
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search formulas or rules..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Formula Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredFormulas.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-sm transition-all space-y-4"
          >
            <div>
              {/* Unboxed Category Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className={
                  item.category === 'Hidden Must-Memorize'
                    ? 'text-rose-600 font-semibold'
                    : item.category === 'English Rules'
                    ? 'text-indigo-600 font-medium'
                    : 'text-slate-500'
                }>
                  {item.category}
                </span>
                <span className="uppercase text-[10px] tracking-wider font-mono text-slate-400">
                  {item.subject}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-900 font-display mb-3">
                {item.name}
              </h3>

              {/* Formula Display Box */}
              <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs overflow-x-auto flex items-center justify-between gap-2">
                <span className="leading-relaxed">{item.formula}</span>
                <button
                  onClick={() => handleCopy(item)}
                  title="Copy formula"
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copiedId === item.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Notes */}
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {item.notes}
              </p>
            </div>

            {/* When to Use */}
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
              <strong className="text-slate-700">When to use: </strong>
              <span>{item.whenToUse}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
