export interface SatTrap {
  id: string;
  name: string;
  subject: 'english' | 'math' | 'both';
  severity: 'Critical' | 'High';
  shortSummary: string;
  howCollegeBoardTricksYou: string;
  realTestExample: string;
  theAntidote: string;
}

export const SAT_TRAPS: SatTrap[] = [
  {
    id: 'trap-wrong-question-target',
    name: 'Solving for the Wrong Target Variable',
    subject: 'math',
    severity: 'Critical',
    shortSummary: 'You solve for x, but the question actually asked for 2x + 7, y, or the diameter.',
    howCollegeBoardTricksYou: 'Test writers place the value of x as Choice A or B. Because you see your solved number in the choices, your brain gets a dopamine hit and you pick it immediately.',
    realTestExample: 'If 3x - 5 = 16, what is the value of 2x + 1? (Students solve x = 7 and select 7, but the answer is 2(7) + 1 = 15).',
    theAntidote: 'Before clicking your final answer, reread ONLY the last sentence of the prompt. Ask: "What did they ask for?"'
  },
  {
    id: 'trap-extreme-language',
    name: 'Extreme / Absolute Language Trap',
    subject: 'english',
    severity: 'Critical',
    shortSummary: 'Distractor choices use absolute words like "invariably", "solely", "entirely", or "proves".',
    howCollegeBoardTricksYou: 'Academic texts describe nuanced tendencies, but distractors make sweeping generalizations that cannot be 100% defended.',
    realTestExample: 'Text says a species "rarely engages in aggressive territorial encounters". Distractor: "The species never defends its nesting grounds."',
    theAntidote: 'Beware of "always", "never", "completely", "sole cause". Prefer moderate academic phrases like "suggests", "tends to", "partially accounts for".'
  },
  {
    id: 'trap-percent-denominator',
    name: 'The Percent Change Denominator Trap',
    subject: 'math',
    severity: 'Critical',
    shortSummary: 'Dividing the change by the final (new) number instead of the starting (old) number.',
    howCollegeBoardTricksYou: 'If a number changes from 80 to 100, the change is 20. Distractor: 20/100 = 20%. Correct: 20/80 = 25%.',
    realTestExample: 'Price increases from $40 to $50. Percentage increase is (50-40)/40 = 25%, but students pick (50-40)/50 = 20%.',
    theAntidote: 'Mnemonic: "Divide by the PAST!" (New - Old) / Old.'
  },
  {
    id: 'trap-rhetorical-wrong-goal',
    name: 'Rhetorical Synthesis: True Fact, Wrong Goal',
    subject: 'english',
    severity: 'High',
    shortSummary: 'Picking an answer that is 100% true based on bullet notes, but fails to satisfy the prompt\'s specific rhetorical goal.',
    howCollegeBoardTricksYou: 'All four choices are factually accurate sentences from the notes. If you didn\'t check the goal, all four look valid!',
    realTestExample: 'Goal: "Emphasize a difference in diet between species." Choice A explains that both species live in the Amazon (similarity, not difference!).',
    theAntidote: 'Read the prompt question BEFORE the bullet points! Circle the goal verb (e.g., "contrast", "introduce", "explain history").'
  },
  {
    id: 'trap-dangling-modifier',
    name: 'The Dangling Introductory Modifier',
    subject: 'english',
    severity: 'High',
    shortSummary: 'Attaching an opening descriptive phrase to the wrong subject noun right after the comma.',
    howCollegeBoardTricksYou: '"Having won the Nobel Prize in Chemistry, Dr. Alvarez\'s laboratory became famous." (The laboratory did not win the Nobel Prize, Dr. Alvarez did!).',
    realTestExample: '"Walking through the dense pine forest, the ancient ruins suddenly appeared." (The ruins weren\'t walking!).',
    theAntidote: 'Check the immediate noun after the comma. It MUST be the physical entity performing the introductory action.'
  },
  {
    id: 'trap-desmos-radians',
    name: 'Desmos Radian vs Degree Confusion',
    subject: 'math',
    severity: 'High',
    shortSummary: 'Typing sin(30) into Desmos while it is set to Radians instead of Degrees.',
    howCollegeBoardTricksYou: 'Desmos on the Digital SAT defaults to Radians. If you type sin(30) in radians, you get -0.988 instead of 0.5!',
    realTestExample: 'Calculate sin(60°). In radians mode, Desmos calculates sin of 60 radians.',
    theAntidote: 'Always click the Wrench icon (Graph Settings) in Desmos and toggle to "Degrees" when doing triangle trigonometry.'
  },
  {
    id: 'trap-circle-radius-squared',
    name: 'The Circle Radius Squared Trap',
    subject: 'math',
    severity: 'High',
    shortSummary: 'Assuming the constant on the right side of (x-h)^2 + (y-k)^2 = C is the radius instead of r^2.',
    howCollegeBoardTricksYou: 'In (x - 2)^2 + (y + 3)^2 = 36, students take radius as 36 or 18 instead of sqrt(36) = 6.',
    realTestExample: 'What is the diameter of (x-1)^2 + (y-4)^2 = 49? r = 7, so diameter is 14. 49 and 7 are both trap choices!',
    theAntidote: 'Write out r = sqrt(C), and if asked for diameter, d = 2 * r.'
  },
  {
    id: 'trap-successive-percentages',
    name: 'Successive Percentage Addition Fallacy',
    subject: 'math',
    severity: 'High',
    shortSummary: 'Believing that a 10% increase followed by a 10% decrease cancels out to 0%.',
    howCollegeBoardTricksYou: '100 increased by 10% is 110. 110 decreased by 10% is 99 (a net 1% drop!).',
    realTestExample: 'Stock gains 25% on Monday, drops 25% on Tuesday. Net change is 1.25 * 0.75 = 0.9375 (-6.25%), not 0%.',
    theAntidote: 'Multiply decimal multipliers: (1 + r1) * (1 - r2). Never add or subtract percentages across time steps.'
  }
];
