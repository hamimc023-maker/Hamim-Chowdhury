import React from 'react';
import { Bookmark, CheckCircle2, ChevronRight, Zap, AlertTriangle, HelpCircle } from 'lucide-react';
import { Topic } from '../types/sat';

interface TopicCardProps {
  topic: Topic;
  isBookmarked: boolean;
  isMastered: boolean;
  onToggleBookmark: (topicId: string) => void;
  onToggleMastered: (topicId: string) => void;
  onSelectTopic: (topic: Topic) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  isBookmarked,
  isMastered,
  onToggleBookmark,
  onToggleMastered,
  onSelectTopic
}) => {
  return (
    <div className={`group relative bg-white rounded-xl border transition-all duration-200 hover:shadow-md flex flex-col justify-between p-5 ${
      isMastered 
        ? 'border-emerald-200/80 bg-emerald-50/20' 
        : 'border-slate-200 hover:border-slate-300'
    }`}>
      <div>
        {/* Unboxed Metadata Header (No static pills) */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-2 truncate">
            <span className="font-medium text-slate-700">{topic.domainName}</span>
            <span aria-hidden="true">·</span>
            <span className={
              topic.difficulty === '800-Level'
                ? 'text-rose-600 font-semibold'
                : topic.difficulty === 'Hard'
                ? 'text-amber-600 font-medium'
                : 'text-slate-600'
            }>
              {topic.difficulty}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{topic.estimatedFrequency}</span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => onToggleBookmark(topic.id)}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark topic'}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
            <button
              onClick={() => onToggleMastered(topic.id)}
              title={isMastered ? 'Mark as in-progress' : 'Mark as mastered'}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'text-emerald-600 fill-emerald-100' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors font-display mb-2 leading-snug">
          {topic.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
          {topic.summary}
        </p>

        {/* Feature Snapshot List */}
        <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50/80 rounded-lg p-3 border border-slate-100">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">
              <strong>{topic.tipsAndTricks[0]?.title}:</strong> {topic.tipsAndTricks[0]?.timeSavedEstimate ? `Save ${topic.tipsAndTricks[0].timeSavedEstimate}` : 'High-yield shortcut'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-rose-700">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="truncate">
              <strong>Trap:</strong> {topic.commonTraps[0]?.name}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer: Action */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{topic.tipsAndTricks.length} Tips & Hacks</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Practice Q Included</span>
          </span>
        </div>

        <button
          onClick={() => onSelectTopic(topic)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-150"
        >
          <span>Explore Topic</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
