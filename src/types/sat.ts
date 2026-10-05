export type SATSubject = 'english' | 'math';

export type DomainId = 
  | 'craft-and-structure'
  | 'information-and-ideas'
  | 'standard-english-conventions'
  | 'expression-of-ideas'
  | 'algebra'
  | 'advanced-math'
  | 'problem-solving-data-analysis'
  | 'geometry-trig';

export type Difficulty = 'Foundation' | 'Medium' | 'Hard' | '800-Level';

export interface PracticeQuestion {
  id: string;
  question: string;
  passage?: string;
  dataSnippet?: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
    trapReason?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  fastShortcutTip: string;
}

export interface WorkedExample {
  title: string;
  problem: string;
  context?: string;
  stepByStepSolution: string[];
  fastTip: string;
}

export interface SolutionCase {
  id: string;
  title: string;
  shortLabel: string;
  formulaRule: string;
  goldenRules: string[];
  tipsAndTricks: {
    title: string;
    description: string;
    isDesmosHack?: boolean;
    timeSavedEstimate?: string;
  }[];
  commonTraps: {
    name: string;
    explanation: string;
    howToAvoid: string;
  }[];
  workedExample: WorkedExample;
  practiceQuestion: PracticeQuestion;
}

export interface Topic {
  id: string;
  title: string;
  subject: SATSubject;
  domainId: DomainId;
  domainName: string;
  difficulty: Difficulty;
  estimatedFrequency: string; // e.g. "4-6 questions per test"
  summary: string;
  goldenRules: string[];
  tipsAndTricks: {
    title: string;
    description: string;
    isDesmosHack?: boolean;
    timeSavedEstimate?: string;
  }[];
  commonTraps: {
    name: string;
    explanation: string;
    howToAvoid: string;
  }[];
  workedExample: WorkedExample;
  practiceQuestion: PracticeQuestion;
  subCases?: SolutionCase[];
}

export interface DomainMeta {
  id: DomainId;
  subject: SATSubject;
  name: string;
  weightPercentage: string;
  questionCountRange: string;
  description: string;
}

export interface UserProgress {
  masteredTopicIds: string[];
  bookmarkedTopicIds: string[];
  completedQuestions: Record<string, 'A' | 'B' | 'C' | 'D'>;
}

export interface DesmosHackItem {
  id: string;
  title: string;
  category: 'Systems' | 'Quadratics' | 'Unknown Constants' | 'Regression' | 'Option Substitution';
  description: string;
  digitalSatUseCases: string[];
  formulaSyntax: string;
  sliderSetup?: string;
  exampleProblem: string;
  proTip: string;
}
