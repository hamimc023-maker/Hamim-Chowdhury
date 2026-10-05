import React, { useState } from 'react';
import { SATSubject, DomainId, Topic } from './types/sat';
import { DOMAINS, TOPICS } from './data/satData';
import { Header } from './components/Header';
import { TopicDetailModal } from './components/TopicDetailModal';
import { DesmosLab } from './components/DesmosLab';
import { FormulaSheetModal } from './components/FormulaSheetModal';
import { Calculator, BookOpen, ArrowLeft, ArrowRight, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'browse' | 'desmos' | 'formulas' | 'traps' | 'drill'>('browse');
  
  // Clean Drill-Down Navigation State
  // Step 1: selectedSubject is null -> User chooses "Math" or "Reading & Writing"
  // Step 2: selectedSubject is set, selectedDomain is null -> User chooses 1 of the 4 categories
  // Step 3: selectedDomain is set -> User sees topics for that category
  const [selectedSubject, setSelectedSubject] = useState<SATSubject | null>(null);
  const [selectedDomainId, setSelectedDomainId] = useState<DomainId | null>(null);
  const [activeTopicModal, setActiveTopicModal] = useState<Topic | null>(null);

  // Helper functions for navigation
  const handleSelectSubject = (subject: SATSubject) => {
    setSelectedSubject(subject);
    setSelectedDomainId(null);
    setActiveTab('browse');
  };

  const handleSelectDomain = (domainId: DomainId) => {
    setSelectedDomainId(domainId);
    setActiveTab('browse');
  };

  const handleGoHome = () => {
    setSelectedSubject(null);
    setSelectedDomainId(null);
    setActiveTab('browse');
  };

  const handleBackToSubject = () => {
    setSelectedDomainId(null);
  };

  // Get active domain metadata
  const currentDomainMeta = DOMAINS.find(d => d.id === selectedDomainId);

  // Get topics for selected domain
  const currentTopics = selectedDomainId 
    ? TOPICS.filter(t => t.domainId === selectedDomainId)
    : [];

  // Filter 4 domains for current subject
  const currentDomains = selectedSubject 
    ? DOMAINS.filter(d => d.subject === selectedSubject)
    : [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSubject={selectedSubject}
        onGoHome={handleGoHome}
        onSelectSubject={handleSelectSubject}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* DESMOS HACKS VIEW */}
        {activeTab === 'desmos' && (
          <div className="space-y-6">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <DesmosLab />
          </div>
        )}

        {/* FORMULAS VIEW */}
        {activeTab === 'formulas' && (
          <div className="space-y-6">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <FormulaSheetModal />
          </div>
        )}

        {/* STEP 1: HOME PAGE (EXACTLY 2 OPTIONS: MATH & READING/WRITING) */}
        {activeTab === 'browse' && selectedSubject === null && (
          <div className="space-y-12">
            {/* Clean Hero Title */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                SAT with Chowdhury
              </h1>
              <p className="text-sm font-bold text-indigo-700 tracking-wider uppercase">
                Achieve Your Highest Score
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 pt-2 font-display">
                Choose What You Want to Practice
              </h2>
            </div>

            {/* Exactly 2 Big, Clear Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Option 1: Math */}
              <button
                onClick={() => handleSelectSubject('math')}
                className="group p-8 sm:p-10 bg-white rounded-3xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-xl transition-all duration-200 text-left flex flex-col justify-between min-h-[280px] cursor-pointer"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-105 transition-transform">
                    <Calculator className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display group-hover:text-indigo-600 transition-colors mb-3">
                    Math
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                    Algebra, Word Problems, Advanced Math, Geometry & Trigonometry
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-2 text-indigo-600 font-bold text-lg group-hover:translate-x-1 transition-transform">
                  <span>Start Math Practice</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>

              {/* Option 2: Reading & Writing */}
              <button
                onClick={() => handleSelectSubject('english')}
                className="group p-8 sm:p-10 bg-white rounded-3xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-xl transition-all duration-200 text-left flex flex-col justify-between min-h-[280px] cursor-pointer"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display group-hover:text-indigo-600 transition-colors mb-3">
                    Reading & Writing
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                    Craft & Structure, Information & Ideas, Grammar Conventions, Expression of Ideas
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-2 text-indigo-600 font-bold text-lg group-hover:translate-x-1 transition-transform">
                  <span>Start Reading & Writing</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>

            {/* Quick Links: Formulas and Desmos */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={() => setActiveTab('formulas')}
                className="px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-base rounded-2xl transition-colors cursor-pointer shadow-sm"
              >
                Formula Reference Sheet
              </button>
              <button
                onClick={() => setActiveTab('desmos')}
                className="px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-base rounded-2xl transition-colors cursor-pointer shadow-sm"
              >
                Desmos Graphing Hacks
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: USER SELECTED SUBJECT (SHOWS 4 OPTIONS) */}
        {activeTab === 'browse' && selectedSubject !== null && selectedDomainId === null && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Back Button */}
            <div>
              <button
                onClick={handleGoHome}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-100 cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </div>

            {/* Large Section Header */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display">
                {selectedSubject === 'math' ? 'Math' : 'Reading & Writing'}
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                Select a topic below to see all tips, tricks, and practice questions:
              </p>
            </div>

            {/* Exactly 4 Clean Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentDomains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => handleSelectDomain(domain.id)}
                  className="p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-lg transition-all duration-200 text-left flex flex-col justify-between min-h-[220px] cursor-pointer group"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-indigo-600 transition-colors mb-3">
                      {domain.name}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                      {domain.description}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between text-indigo-600 font-bold text-base">
                    <span>Explore {domain.name}</span>
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: USER SELECTED DOMAIN (SHOWS TOPICS WITH TIPS & TRICKS) */}
        {activeTab === 'browse' && selectedDomainId !== null && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Back Button to 4 Options */}
            <div>
              <button
                onClick={handleBackToSubject}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-100 cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to {selectedSubject === 'math' ? 'Math' : 'Reading & Writing'}</span>
              </button>
            </div>

            {/* Domain Title */}
            <div className="space-y-2">
              <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                {selectedSubject === 'math' ? 'Math' : 'Reading & Writing'}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display">
                {currentDomainMeta?.name}
              </h1>
              <p className="text-lg text-slate-600 font-medium">
                {currentDomainMeta?.description}
              </p>
            </div>

            {/* Clean Topics List */}
            <div className="space-y-5">
              {currentTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-7 sm:p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-indigo-400 transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                      {topic.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                      {topic.summary}
                    </p>
                    <div className="text-sm font-semibold text-indigo-700">
                      {topic.subCases && topic.subCases.length > 0 ? (
                        <span>✓ Includes 3 Sub-Modes: 0 Solutions (No Solution), Many Solutions & 1 Solution · Full Rules, Traps, Worked Proofs & Practice</span>
                      ) : (
                        <span>✓ Includes {topic.tipsAndTricks.length} Key Tips & Shortcuts · Practice Question with Full Explanation</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTopicModal(topic)}
                    className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-bold rounded-2xl transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span>View Tips & Practice</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal with Full Tips, Traps, Examples, and Practice */}
      {activeTopicModal && (
        <TopicDetailModal
          topic={activeTopicModal}
          onClose={() => setActiveTopicModal(null)}
        />
      )}

      {/* Clean Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 text-center text-sm font-medium text-slate-500">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-base font-bold text-slate-800 font-display mb-1">
            SAT with Chowdhury
          </p>
          <p className="text-slate-500">
            Achieve Your Highest Score · Clean & Simple Digital SAT Study Platform
          </p>
        </div>
      </footer>
    </div>
  );
}
