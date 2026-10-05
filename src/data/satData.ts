import { DomainMeta, Topic } from '../types/sat';

export const DOMAINS: DomainMeta[] = [
  {
    "id": "craft-and-structure",
    "subject": "english",
    "name": "Craft and Structure",
    "weightPercentage": "~28%",
    "questionCountRange": "13-15 questions",
    "description": "Words in context, text structure, author purpose, and cross-text connections between paired arguments."
  },
  {
    "id": "information-and-ideas",
    "subject": "english",
    "name": "Information and Ideas",
    "weightPercentage": "~26%",
    "questionCountRange": "12-14 questions",
    "description": "Central ideas, textual evidence, quantitative data analysis from scientific graphs, and logical inferences."
  },
  {
    "id": "standard-english-conventions",
    "subject": "english",
    "name": "Standard English Conventions",
    "weightPercentage": "~26%",
    "questionCountRange": "11-15 questions",
    "description": "Sentence boundaries, punctuation (semicolons, colons, dashes), subject-verb agreement, and modifier placement."
  },
  {
    "id": "expression-of-ideas",
    "subject": "english",
    "name": "Expression of Ideas",
    "weightPercentage": "~20%",
    "questionCountRange": "8-12 questions",
    "description": "Rhetorical synthesis bullet-point questions and transitional flow words connecting ideas."
  },
  {
    "id": "algebra",
    "subject": "math",
    "name": "Algebra",
    "weightPercentage": "~35%",
    "questionCountRange": "13-15 questions",
    "description": "Linear equations in 1 and 2 variables, linear inequalities, systems of equations, and interpreting linear models."
  },
  {
    "id": "advanced-math",
    "subject": "math",
    "name": "Advanced Math",
    "weightPercentage": "~35%",
    "questionCountRange": "13-15 questions",
    "description": "Equivalent algebraic expressions, quadratics, parabolas, nonlinear systems, and exponential functions."
  },
  {
    "id": "problem-solving-data-analysis",
    "subject": "math",
    "name": "Word Problems",
    "weightPercentage": "~15%",
    "questionCountRange": "5-7 questions",
    "description": "Ratios, rates, percentages, unit conversions, statistics, probability, and margin of error."
  },
  {
    "id": "geometry-trig",
    "subject": "math",
    "name": "Geometry and Trigonometry",
    "weightPercentage": "~15%",
    "questionCountRange": "5-7 questions",
    "description": "Circle equations, area/volume, special right triangles, trigonometry identities, and radians."
  }
];

export const TOPICS: Topic[] = [
  {
    "id": "words-in-context",
    "title": "Words in Context (Vocabulary)",
    "subject": "english",
    "domainId": "craft-and-structure",
    "domainName": "Craft and Structure",
    "difficulty": "Medium",
    "estimatedFrequency": "6-8 questions per test",
    "summary": "Identify the most precise vocabulary word fitting the specific nuance, tone, and logical relationship of the short passage.",
    "goldenRules": [
      "Ignore your intuition about secondary definitions; focus solely on the structural context clues (contrasts, cause-effect, parallel phrasing).",
      "Read 1-2 sentences around the blank, predict your OWN simple replacement word (e.g., \"weakened\" or \"praised\") before looking at options.",
      "Positive/Negative charge: determine if the blank requires a positive, neutral, or negative connotation.",
      "Double-check that the chosen word matches the exact grammatical preposition or object following the blank."
    ],
    "tipsAndTricks": [
      {
        "title": "The \"Cover & Predict\" Method",
        "description": "Do not look at the choices first! Cover them with your hand, summarize the blank in one 5th-grade word (e.g., \"helpful\"), then match the closest synonym in the answer choices.",
        "timeSavedEstimate": "30 seconds per question"
      },
      {
        "title": "Contrast Indicator Reversal",
        "description": "Words like \"however\", \"although\", \"far from\", and \"while\" demand an antonym of the described trait. If the text says the scientist was usually methodical, \"although occasionally ______\", the blank MUST mean erratic or impulsive.",
        "timeSavedEstimate": "20 seconds per question"
      },
      {
        "title": "Beware of \"Sounds Smart\" Distractors",
        "description": "College Board loves setting obscure, impressive-sounding words as distractors (like \"ephemeral\" or \"fastidious\") when the actual answer is a simpler word whose exact primary or secondary meaning fits.",
        "timeSavedEstimate": "15 seconds per question"
      }
    ],
    "commonTraps": [
      {
        "name": "The Common Meaning Trap",
        "explanation": "Picking a definition you know from everyday speech that does not make sense in the academic or historical context.",
        "howToAvoid": "Plug your chosen answer back into the full sentence. If it sounds slightly awkward or distorts the authors premise, re-evaluate."
      },
      {
        "name": "The Partial Match Trap",
        "explanation": "Selecting a word that matches the general topic of the passage (e.g. art or chemistry) but fails to match the exact action taken by the subject.",
        "howToAvoid": "Identify the exact noun performing the verb. A theory cannot be \"charismatic\", but a speaker can."
      }
    ],
    "workedExample": {
      "title": "Context Clue Nuance Analysis",
      "problem": "While the preliminary field trial yielded promising results, the lead researcher cautioned against unwarranted optimism, noting that further rigorous longitudinal studies are necessary to ______ the initial findings.",
      "stepByStepSolution": [
        "Step 1: Identify context markers. \"While... preliminary trial yielded promising results\" contrasts with \"cautioned against unwarranted optimism\".",
        "Step 2: The researcher states that further studies are needed to make the findings solid, validated, or verified.",
        "Step 3: Formulate your own word: \"confirm\" or \"validate\".",
        "Step 4: Evaluate choices. \"Substantiate\" means to provide evidence to support or prove the truth of something. This matches our prediction precisely."
      ],
      "fastTip": "When you see \"cautioned... further studies needed to ____ findings\", the required action is almost always \"verify\", \"corroborate\", or \"substantiate\"."
    },
    "practiceQuestion": {
      "id": "wic-q1",
      "passage": "Although the archival documents concerning the 18th-century diplomatic mission were long presumed lost to history, historian Elena Rostova recently located a substantial trove of letters that ______ the standard historical narrative, revealing that negotiations were far more collaborative than previously documented.",
      "question": "Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        {
          "letter": "A",
          "text": "subvert",
          "trapReason": "Too strong and negative. The text says \"far more collaborative\", which amends or complicates the narrative rather than completely overthrowing/undermining it in a destructive sense."
        },
        {
          "letter": "B",
          "text": "complicate",
          "trapReason": "Close, but \"subvert\" or \"revising\" might be considered. Let us inspect \"revise\" or \"complicate\"."
        },
        {
          "letter": "C",
          "text": "reinforce",
          "trapReason": "Opposite! The new letters showed negotiations were collaborative, contradicting the standard narrative that assumed otherwise."
        },
        {
          "letter": "D",
          "text": "reiterate",
          "trapReason": "Means repeat verbatim, which contradicts finding brand-new information."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Choice A is correct. The text notes that negotiations were \"far more collaborative than previously documented\", thereby subverting (overturning or fundamentally challenging) the standard historical consensus. Choice C is an opposite trap.",
      "fastShortcutTip": "Look at the comparison: \"long presumed lost... negotiations were far more collaborative than previously documented\". The new evidence is altering/overturning the old narrative."
    }
  },
  {
    "id": "text-structure-purpose",
    "title": "Text Structure & Overall Purpose",
    "subject": "english",
    "domainId": "craft-and-structure",
    "domainName": "Craft and Structure",
    "difficulty": "Medium",
    "estimatedFrequency": "3-5 questions per test",
    "summary": "Analyze paragraph organization, how sentences relate logically, and the primary function served by a highlighted quote or section.",
    "goldenRules": [
      "Separate \"What the text says\" (content) from \"What the text DOES\" (function/verb).",
      "Look at answer verbs first: \"criticize\", \"illustrate\", \"propose a hypothesis\", \"reconcile two views\", \"qualify an assertion\".",
      "Check sentence transitions (e.g., \"However\", \"Consequently\", \"For instance\") to map paragraph architecture."
    ],
    "tipsAndTricks": [
      {
        "title": "Verbs-First Filtering",
        "description": "Read the first 1-2 words of each answer choice. If the passage does not offer a solution, immediately cross off any choice beginning with \"It proposes a solution...\" or \"It resolves an ongoing controversy...\".",
        "timeSavedEstimate": "25 seconds"
      },
      {
        "title": "The Shift Tracker",
        "description": "Notice where the tone or focus shifts. The SAT typically structures these as: Context/Common belief -> Pivot transition -> Modern counter-evidence or caveat.",
        "timeSavedEstimate": "20 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The True Fact Trap",
        "explanation": "An answer choice accurately summarizes a fact stated in the passage, but fails to describe the PURPOSE or overall function of that text.",
        "howToAvoid": "Ask yourself: WHY did the author write this sentence? Is it an example, a qualification, a concession, or the main thesis?"
      }
    ],
    "workedExample": {
      "title": "Determining Function vs Fact",
      "problem": "A passage introduces a widely accepted theory about honeybee navigation, then cites a recent 2024 experiment showing anomalies during overcast days, concluding that magnetic fields may also play an auxiliary role.",
      "stepByStepSolution": [
        "Sentence 1: States traditional paradigm (sun compass).",
        "Sentence 2: Introduces anomalous empirical findings.",
        "Sentence 3: Proposes an expanded mechanism.",
        "Overall purpose: To question an established model by suggesting a complementary navigational mechanism."
      ],
      "fastTip": "Focus on how the end modifies the beginning. If it adds a factor rather than replacing the theory, look for words like \"supplement\", \"qualify\", or \"expand\"."
    },
    "practiceQuestion": {
      "id": "tsp-q1",
      "passage": "For decades, economists asserted that consumer purchasing decisions in subscription services were dictated predominantly by upfront pricing tiers. However, behavioral researcher Mei Lin observed that cancellation rates in cloud storage platforms correlate far more strongly with interface navigation complexity than with monthly fee variations.",
      "question": "Which choice best describes the overall function of the underlined portion in the text?",
      "options": [
        {
          "letter": "A",
          "text": "It presents empirical data that complicates a long-held economic assumption.",
          "trapReason": "None—accurately captures both the evidence and its function relative to the first sentence."
        },
        {
          "letter": "B",
          "text": "It dismisses the role of pricing as entirely irrelevant to consumer behavior.",
          "trapReason": "Extreme language trap! \"Entirely irrelevant\" is too absolute."
        },
        {
          "letter": "C",
          "text": "It offers a historical explanation for the development of cloud storage platforms.",
          "trapReason": "Off-topic; no historical origin is provided."
        },
        {
          "letter": "D",
          "text": "It reconciles two competing theories regarding digital interface usability.",
          "trapReason": "No reconciliation occurred; one observation challenged the traditional view."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Choice A correctly identifies that Lin observed empirical data showing cancellation rates correlate with navigation complexity, which contradicts/complicates the decades-long assertion that price dictates decisions.",
      "fastShortcutTip": "Eliminate Choice B immediately due to extreme words (\"entirely irrelevant\"). SAT authors rarely make absolute dismissals."
    }
  },
  {
    "id": "central-ideas-inferences",
    "title": "Central Ideas & Logical Inferences",
    "subject": "english",
    "domainId": "information-and-ideas",
    "domainName": "Information and Ideas",
    "difficulty": "Hard",
    "estimatedFrequency": "4-6 questions per test",
    "summary": "Synthesize the primary thesis of dense informational passages and draw strictly text-dependent logical conclusions.",
    "goldenRules": [
      "The Golden Rule of Inferences: The correct answer MUST be 100% provable from the text. If you must assume outside facts, it is WRONG.",
      "Beware of extreme modifiers: \"always\", \"never\", \"invariably\", \"exclusively\", \"cannot\", \"universal\".",
      "The final sentence often contains the pivotal leap or authorial concession—pay special attention to concluding clauses."
    ],
    "tipsAndTricks": [
      {
        "title": "The \"Must Be True\" Test",
        "description": "Treat SAT inference questions like formal logic. Ask yourself: \"If someone swore in court that this is true based ONLY on this text, could a lawyer disprove them?\" The right answer is often conservative and modest in scope.",
        "timeSavedEstimate": "30 seconds"
      },
      {
        "title": "Scope Matching",
        "description": "If the passage discusses \"certain species of desert ants\", an answer choice referencing \"terrestrial insects in arid climates\" has broadened the scope dangerously. Stay within the text boundaries.",
        "timeSavedEstimate": "20 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The \"Reasonable in Real Life\" Trap",
        "explanation": "Selecting an answer because it sounds plausible or scientifically accurate in real life, even though the passage never mentioned it.",
        "howToAvoid": "Locate the exact words or direct implications in the text. Zero points for general trivia knowledge!"
      }
    ],
    "workedExample": {
      "title": "Restricting Inferences to Text",
      "problem": "Studies show that when wolves were reintroduced to Yellowstone, elk herds avoided open valleys, allowing willow stands along rivers to regenerate. Beaver populations, which depend on willows for food and lodge construction, then surged tenfold.",
      "stepByStepSolution": [
        "Fact 1: Wolves reintroduced -> elk avoided valleys.",
        "Fact 2: Elk avoiding valleys -> willow trees regenerated.",
        "Fact 3: Willows regenerated -> beaver population surged.",
        "Valid inference: The presence of apex predators can indirectly benefit aquatic or riparian mammals."
      ],
      "fastTip": "Trace the causal chain: A affects B, B affects C, C affects D. Therefore A indirectly affects D."
    },
    "practiceQuestion": {
      "id": "cii-q1",
      "passage": "Marine biologists examining benthic coral ecosystems noted that deep-water sponges produce biochemical metabolites capable of deterring algal overgrowth. In reef zones where commercial dredging diminished sponge biomass by over 60%, opportunistic macroalgae rapidly colonized adjacent coral surfaces, curtailing sunlight penetration.",
      "question": "Based on the text, what can most reasonably be inferred regarding the ecological role of deep-water sponges?",
      "options": [
        {
          "letter": "A",
          "text": "They serve an indirect protective function for corals by suppressing competitors for vital photosynthetic resources.",
          "trapReason": "Accurate and well-bounded. Sponges deter algae -> algae block sunlight for coral."
        },
        {
          "letter": "B",
          "text": "They represent the primary food source for macroalgal species across reef shelves.",
          "trapReason": "Opposite of text; sponges produce metabolites that deter algae, not feed them."
        },
        {
          "letter": "C",
          "text": "Their elimination invariably causes the complete destruction of deep-water coral colonies within months.",
          "trapReason": "Extreme language trap (\"invariably\", \"complete destruction within months\")."
        },
        {
          "letter": "D",
          "text": "They require direct sunlight exposure to synthesize anti-algal chemical compounds.",
          "trapReason": "Sponges are deep-water benthic organisms; no such requirement is stated."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Choice A is supported because sponge metabolites deter macroalgae, which would otherwise cover coral and curtail sunlight. Thus, sponges indirectly protect corals.",
      "fastShortcutTip": "Rule out C for extreme wording (\"invariably\", \"complete destruction\") and D for introducing unststated causal requirements."
    }
  },
  {
    "id": "command-of-evidence-quantitative",
    "title": "Command of Evidence (Data & Graphs)",
    "subject": "english",
    "domainId": "information-and-ideas",
    "domainName": "Information and Ideas",
    "difficulty": "Medium",
    "estimatedFrequency": "3-4 questions per test",
    "summary": "Interpret graphs, tables, and charts to identify the exact numerical claim that supports, weakens, or completes an argument.",
    "goldenRules": [
      "Read the Title, Axis Labels, Units, and Legend before looking at data points.",
      "Check whether data represents raw counts vs percentages/rates of change.",
      "Identify the author's specific claim in the last sentence, then verify which option matches the claim AND matches the data."
    ],
    "tipsAndTricks": [
      {
        "title": "Two-Filter Check (Text Claim + Graph Accuracy)",
        "description": "An option must satisfy TWO conditions: (1) it must accurately report data from the graph, and (2) it must directly support the specific claim. Wrong answers often state true chart facts that are irrelevant to the thesis.",
        "timeSavedEstimate": "35 seconds"
      },
      {
        "title": "Axis Unit Trap Vigilance",
        "description": "Watch out for \"thousands of dollars\" vs \"dollars\", or \"% change\" vs \"total quantity\". If the graph shows rate of growth declining from 8% to 4%, the quantity is STILL INCREASING, just slower!",
        "timeSavedEstimate": "20 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The True-Graph Irrelevant-Claim Trap",
        "explanation": "The option correctly reads a number from the graph, but the number does not prove or disprove the hypothesis in question.",
        "howToAvoid": "Underline the researcher's hypothesis in the passage before inspecting choices."
      }
    ],
    "workedExample": {
      "title": "Validating Quantitative Evidence",
      "problem": "A researcher claims that while electric scooter usage increased across all demographics, riders aged 18-24 showed the highest percentage increase in daily trips between 2021 and 2023.",
      "stepByStepSolution": [
        "Identify target metric: Percentage increase (not total trips).",
        "Identify target group: Ages 18-24.",
        "Locate group in table: Age 18-24 grew from 1,000 to 3,000 (+200%), whereas Age 25-34 grew from 5,000 to 8,000 (+60%).",
        "Verify choice mentions the +200% growth outstripping the other cohorts."
      ],
      "fastTip": "Distinguish between largest absolute increase vs highest percentage increase!"
    },
    "practiceQuestion": {
      "id": "ceq-q1",
      "passage": "Sociologist Dr. Aris Thorne hypothesized that urban bike-share programs stimulate local retail spending only when docking stations are located within 200 meters of pedestrian commerce zones. To evaluate this claim, Thorne compiled commercial transaction data across four district stations: Station W (150m away), Station X (180m away), Station Y (320m away), and Station Z (450m away).",
      "dataSnippet": "Table data: Station W: +24% local spending; Station X: +28% local spending; Station Y: +2% local spending; Station Z: -1% local spending.",
      "question": "Which choice most effectively uses data from the table to support Dr. Thorne's hypothesis?",
      "options": [
        {
          "letter": "A",
          "text": "Retail spending increased by over 20% in the zones surrounding Stations W and X, whereas zones near Stations Y and Z experienced changes of 2% or less.",
          "trapReason": "Directly validates the 200m cutoff boundary."
        },
        {
          "letter": "B",
          "text": "Station X showed the highest absolute bicycle ridership volume among all four surveyed urban stations.",
          "trapReason": "Ridership volume was not the metric tested; commercial retail spending was."
        },
        {
          "letter": "C",
          "text": "Commercial transactions near Station Z declined because pedestrian foot traffic decreased throughout the entire city.",
          "trapReason": "Speculative cause not supported by the simple table."
        },
        {
          "letter": "D",
          "text": "Station W had fewer total docking slots than Station Y, yet experienced positive revenue shifts.",
          "trapReason": "Irrelevant variable (number of docking slots)."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Choice A compares the stations within 200m (W and X: +24% and +28%) directly against those beyond 200m (Y and Z: +2% and -1%), confirming the hypothesized 200-meter threshold.",
      "fastShortcutTip": "Group the data according to the condition (within 200m vs beyond 200m). Choice A is the only choice contrasting both conditions."
    }
  },
  {
    "id": "rhetorical-synthesis",
    "title": "Rhetorical Synthesis (Bullet-Point Questions)",
    "subject": "english",
    "domainId": "expression-of-ideas",
    "domainName": "Expression of Ideas",
    "difficulty": "Foundation",
    "estimatedFrequency": "3-5 questions per test",
    "summary": "Given a set of bullet-point notes taken by a student, select the sentence that best achieves a specifically stated rhetorical goal.",
    "goldenRules": [
      "DO NOT READ THE BULLET POINTS FIRST! This is the #1 time-saver on the Digital SAT.",
      "Read ONLY the prompt question first: \"The student wants to [emphasize a difference / introduce the artist to an unfamiliar audience / highlight the research methodology]\".",
      "Select the option that achieves THAT specific goal and contains accurate facts from the bullets.",
      "If the goal is to emphasize a DIFFERENCE, the correct option MUST contrast two things (look for \"whereas\", \"while\", \"unlike\")."
    ],
    "tipsAndTricks": [
      {
        "title": "The Goal-Targeted Speedrun",
        "description": "Skip the bullets. Read the prompt goal. Match the goal verb and target: if the goal is \"introduce X and his most famous work\", the correct answer MUST name X AND name the work. Any choice missing one is instantly eliminated.",
        "timeSavedEstimate": "45 seconds per question!"
      },
      {
        "title": "Contrast Goal Shortcut",
        "description": "When the prompt asks to \"contrast\" or \"emphasize a distinction\", scan the choices for contrast markers (\"unlike\", \"whereas\", \"in contrast to\", \"while\"). Usually 3 choices are simple factual statements and only 1 creates a contrast!",
        "timeSavedEstimate": "30 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The True-Facts Wrong-Goal Trap",
        "explanation": "All 4 choices are factually true according to the bullet points. Students get confused and pick an option because it sounds thorough, even though it achieves the wrong goal.",
        "howToAvoid": "Repeat the goal to yourself before reading choices: \"Goal: emphasize location. Does Choice A mention location? No -> eliminate.\""
      }
    ],
    "workedExample": {
      "title": "Rhetorical Goal Alignment",
      "problem": "Prompt: \"The student wants to emphasize a difference between the two species of baobab trees. Which choice best accomplishes this goal?\"",
      "stepByStepSolution": [
        "Identify goal: Emphasize a DIFFERENCE between the two species.",
        "Filter criteria: Must mention BOTH species AND highlight how they diverge.",
        "Choice A only talks about species 1 height -> Eliminate.",
        "Choice B says both species live in Madagascar -> Similarity, not difference! Eliminate.",
        "Choice C: \"While Adansonia digitata has pendulous white flowers pollinated by bats, Adansonia grandidieri features upright yellow blossoms pollinated by nocturnal lemurs.\" -> Directly emphasizes difference!"
      ],
      "fastTip": "Look for the word \"while\" or \"whereas\". It is almost a cheat code on contrast goals."
    },
    "practiceQuestion": {
      "id": "rs-q1",
      "passage": "Notes taken by a student:\n• The Voyager 1 probe was launched by NASA in September 1977.\n• Its primary mission was to explore Jupiter and Saturn.\n• In August 2012, it crossed the heliopause to enter interstellar space.\n• It is currently the most distant human-made object from Earth.\n• It carries the Golden Record, a phonograph record containing sounds and images of Earth.",
      "question": "The student wants to highlight the extraordinary distance of Voyager 1 to an audience unfamiliar with the spacecraft. Which choice most effectively accomplishes this goal?",
      "options": [
        {
          "letter": "A",
          "text": "Launched by NASA in 1977, Voyager 1 carries the Golden Record, which contains sounds and images selected to represent Earth.",
          "trapReason": "Focuses on the Golden Record, not its extraordinary distance."
        },
        {
          "letter": "B",
          "text": "Having entered interstellar space in 2012, NASA's Voyager 1 spacecraft has traveled farther from Earth than any other human-made object in history.",
          "trapReason": "Accomplishes the exact goal: highlights extraordinary distance."
        },
        {
          "letter": "C",
          "text": "Although its primary mission was to study Jupiter and Saturn, Voyager 1 continued operating long after completing its original planetary goals.",
          "trapReason": "Focuses on mission longevity, not distance."
        },
        {
          "letter": "D",
          "text": "NASA launched Voyager 1 in September 1977 to explore Jupiter and Saturn.",
          "trapReason": "Just launch date and planetary targets."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Choice B directly addresses the student's goal: it highlights that Voyager 1 \"has traveled farther from Earth than any other human-made object in history\".",
      "fastShortcutTip": "The prompt specifies: \"highlight the extraordinary distance\". Only Choice B discusses its record-breaking distance!"
    }
  },
  {
    "id": "transitions-flow",
    "title": "Transitions and Logical Connectors",
    "subject": "english",
    "domainId": "expression-of-ideas",
    "domainName": "Expression of Ideas",
    "difficulty": "Medium",
    "estimatedFrequency": "5-7 questions per test",
    "summary": "Select the optimal transition word or phrase connecting two independent ideas according to their logical relationship.",
    "goldenRules": [
      "Read sentence 1 and sentence 2 WITHOUT the transition word.",
      "Categorize the relationship into 1 of 4 buckets: (1) Contrast, (2) Cause/Effect, (3) Addition/Example, or (4) Chronology/Sequence.",
      "Synonym Elimination Rule: If two choices are pure synonyms (e.g., \"Furthermore\" and \"In addition\", or \"Therefore\" and \"Consequently\"), BOTH ARE WRONG! Eliminate both immediately.",
      "Never rely on sound; rely on logic."
    ],
    "tipsAndTricks": [
      {
        "title": "The Twin Synonym Kill Rule",
        "description": "Since there can only be ONE right answer, if you see \"Therefore\" and \"As a result\", they both express causation—eliminate them both in 2 seconds! This often cuts your options from 4 down to 2 instantly.",
        "timeSavedEstimate": "30 seconds per question"
      },
      {
        "title": "Concession vs Simple Contrast",
        "description": "Distinguish between \"However\" (direct contradiction) and \"Granted / To be sure\" (acknowledging a counterpoint before defending a thesis) and \"In fact / Indeed\" (intensifying or affirming a previous statement).",
        "timeSavedEstimate": "20 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The \"Sounds Sophisticated\" Trap",
        "explanation": "Choosing \"Nevertheless\" or \"Consequently\" simply because it sounds academic, even when the sentences are merely giving another related example.",
        "howToAvoid": "Replace the transition with \"Because of this\" (causation) or \"On the other hand\" (contrast) to test the underlying relationship."
      }
    ],
    "workedExample": {
      "title": "Synonym Elimination in Action",
      "problem": "Sentence 1: Early solar panels converted less than 5% of captured sunlight into usable electrical energy. Sentence 2: Modern multi-junction photovoltaic cells achieve efficiency rates exceeding 40%.",
      "stepByStepSolution": [
        "Sentence 1 describes poor early efficiency (<5%).",
        "Sentence 2 describes high modern efficiency (>40%).",
        "Relationship: Contrast between past limitation and current breakthrough.",
        "Choices: A) Furthermore, B) In today's case, C) By contrast, D) Consequently.",
        "Furthermore is addition, Consequently is cause/effect. By contrast is the precise relationship."
      ],
      "fastTip": "Past vs Present with opposing numbers (5% vs 40%) is almost always a contrast transition."
    },
    "practiceQuestion": {
      "id": "trans-q1",
      "passage": "Many bird species construct elaborate nests to shield fragile clutches of eggs from fluctuating ambient temperatures and predatory wildlife. The male satin bowerbird, ______, builds an intricate structure of twigs adorned with bright blue objects solely to attract potential female mates.",
      "question": "Which choice completes the text with the most logical transition?",
      "options": [
        {
          "letter": "A",
          "text": "in contrast",
          "trapReason": "Correct! Standard nests protect eggs; bowerbirds build structures solely for courtship display."
        },
        {
          "letter": "B",
          "text": "consequently",
          "trapReason": "Cause/effect trap. The bowerbird's mating display is not caused by other birds protecting their eggs."
        },
        {
          "letter": "C",
          "text": "for example",
          "trapReason": "Trap! The bowerbird is NOT an example of birds protecting eggs; his bower is explicitly NOT for eggs."
        },
        {
          "letter": "D",
          "text": "furthermore",
          "trapReason": "Addition trap. Fails to signal the sharp difference in purpose."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Choice A is correct. Sentence 1 explains that most birds build nests for egg protection and survival. Sentence 2 introduces the satin bowerbird, who builds structures purely for courtship, creating a contrast in purpose.",
      "fastShortcutTip": "Notice the contradiction: \"shield eggs from predators\" vs \"solely to attract female mates\". This demands a contrast transition (\"in contrast\")."
    }
  },
  {
    "id": "boundaries-punctuation",
    "title": "Sentence Boundaries & Punctuation",
    "subject": "english",
    "domainId": "standard-english-conventions",
    "domainName": "Standard English Conventions",
    "difficulty": "Medium",
    "estimatedFrequency": "6-8 questions per test",
    "summary": "Master the rigorous rules governing commas, semicolons, colons, em-dashes, and parenthetical interruptions.",
    "goldenRules": [
      "Independent Clause (IC) = Complete sentence (Subject + Verb that can stand alone). Dependent Clause (DC) = Fragment if alone.",
      "Semicolon (;) = Period (.). Formula: [IC ; IC]. If a period would work, a semicolon works.",
      "Comma + FANBOYS (for, and, nor, but, or, yet, so) connects two ICs: [IC, and IC]. A comma ALONE between two ICs is an illegal comma splice!",
      "Colon (:) and Single Em-Dash (—) Rule: The clause BEFORE the colon or single dash MUST be a complete independent clause [IC : explanation/list/emphasis]. What follows can be an IC or a DC.",
      "Two Em-Dashes (— ... —) or Two Commas (, ... ,) surround non-essential parenthetical information that can be removed without breaking grammar."
    ],
    "tipsAndTricks": [
      {
        "title": "The Semicolon = Period Mirror Hack",
        "description": "If you see an answer choice with a semicolon [ ; ] and another answer choice with a period [ . ] at the exact same location with no wording changes, BOTH ARE WRONG! The SAT cannot have two grammatically interchangeable correct options.",
        "timeSavedEstimate": "20 seconds"
      },
      {
        "title": "The Finger Test for Dashes & Commas",
        "description": "Put your finger over the text between the two dashes or commas. Read the sentence without it. Does the sentence still make complete grammatical sense? If yes, the punctuation pair is valid non-essential framing.",
        "timeSavedEstimate": "15 seconds"
      },
      {
        "title": "The Colon Pre-Check",
        "description": "Before choosing a colon (:), read everything up to the colon. Can you put a period right there? If no, ELIMINATE the colon immediately.",
        "timeSavedEstimate": "10 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The \"Such As\" Colon Trap",
        "explanation": "Putting a colon after \"such as\", \"including\", or \"for example\" (e.g. \"...such as: apples, oranges\").",
        "howToAvoid": "NEVER put a colon after \"such as\" or \"including\". A colon only follows a complete independent clause."
      },
      {
        "name": "The Run-on with \"However\"",
        "explanation": "Writing \"I love math, however it is hard.\" That is an illegal comma splice! \"However\" is a conjunctive adverb, not a coordinating conjunction.",
        "howToAvoid": "Use: \"I love math; however, it is hard.\" or \"I love math. However, it is hard.\""
      }
    ],
    "workedExample": {
      "title": "Punctuation Selection Method",
      "problem": "Sentence: \"Marine geologist Maya Lin analyzed oceanic basalt samples from the Mariana Trench ______ her findings revealed unexpected hydrothermal vent activity.\"",
      "stepByStepSolution": [
        "Clause 1: \"Marine geologist Maya Lin analyzed oceanic basalt samples from the Mariana Trench\" -> Independent Clause.",
        "Clause 2: \"her findings revealed unexpected hydrothermal vent activity\" -> Independent Clause.",
        "Joining two ICs requires: Semicolon, Period, or Comma + FANBOYS.",
        "A simple comma creates a comma splice. A colon works if clause 2 explains or illustrates clause 1.",
        "Options with [ ; ] or [ , and ] correctly separate the independent clauses."
      ],
      "fastTip": "Identify IC vs DC first. Count the subjects and conjugated verbs."
    },
    "practiceQuestion": {
      "id": "sec-q1",
      "passage": "During the Cretaceous period, flowering plants underwent an unprecedented evolutionary expansion ______ angiosperm species diversified so rapidly that Charles Darwin famously referred to the phenomenon as an \"abominable mystery.\"",
      "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        {
          "letter": "A",
          "text": "expansion, this",
          "trapReason": "Comma splice! Connecting two independent clauses with just a comma and a pronoun."
        },
        {
          "letter": "B",
          "text": "expansion; angiosperm",
          "trapReason": "Correct. Connects two complete independent clauses with a semicolon."
        },
        {
          "letter": "C",
          "text": "expansion, and angiosperm",
          "trapReason": "Notice Choice C lacks parallel flow or might be considered, but here \"expansion; angiosperm\" cleanest."
        },
        {
          "letter": "D",
          "text": "expansion: and angiosperm",
          "trapReason": "Illegal! You never put \"and\" directly after a colon."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Choice B is correct because both clauses are independent clauses. A semicolon is the standard punctuation mark to join two closely related independent clauses without a coordinating conjunction.",
      "fastShortcutTip": "Clause 1 has a subject (\"flowering plants\") and verb (\"underwent\"). Clause 2 has a subject (\"angiosperm species\") and verb (\"diversified\"). Two ICs cannot be joined with just a comma (eliminate A)."
    }
  },
  {
    "id": "modifiers-subject-verb",
    "title": "Modifiers & Subject-Verb Agreement",
    "subject": "english",
    "domainId": "standard-english-conventions",
    "domainName": "Standard English Conventions",
    "difficulty": "Hard",
    "estimatedFrequency": "4-6 questions per test",
    "summary": "Eliminate dangling and misplaced modifiers by ensuring descriptive phrases attach immediately to their logical subject, and align verb number with true subjects.",
    "goldenRules": [
      "The Dangling Modifier Law: When an introductory phrase begins with an -ing participle or descriptive adjective (e.g., \"Walking through the park,...\"), the VERY FIRST NOUN after the comma MUST be the person or thing doing that action.",
      "Prepositional Phrase Interrupter Rule: The subject of a sentence is NEVER inside a prepositional phrase (e.g. \"of the books\", \"in the forests\", \"with the students\"). Cross out prepositional phrases to find the real subject!",
      "Singular vs Plural Verbs: Singular verbs end in \"s\" (runs, is, has, explains). Plural verbs do NOT end in \"s\" (run, are, have, explain)."
    ],
    "tipsAndTricks": [
      {
        "title": "Cross Out the Garbage (Prepositional Phrases)",
        "description": "In \"The collection of rare antique manuscripts from 14th-century Italian monasteries [was / were] preserved\", cross out \"of rare antique manuscripts\" and \"from 14th-century Italian monasteries\". The subject is \"The collection\" (singular) -> \"was preserved\"!",
        "timeSavedEstimate": "20 seconds"
      },
      {
        "title": "The Immediate Follower Test for Modifiers",
        "description": "Read the introductory modifier: \"Invented in 1879,...\". Ask: \"WHO or WHAT was invented in 1879?\" The word immediately following the comma MUST be the light bulb, NOT Thomas Edison! Thomas Edison was not invented in 1879.",
        "timeSavedEstimate": "15 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Dangling Person vs Invention Trap",
        "explanation": "\"Having spent three years analyzing ancient pottery shards, the chemical composition was finally revealed.\" The chemical composition did not spend three years analyzing shards—the archaeologist did!",
        "howToAvoid": "The actor must follow the comma: \"Having spent three years analyzing..., Dr. Gomez revealed...\""
      }
    ],
    "workedExample": {
      "title": "Fixing a Dangling Modifier",
      "problem": "\"Thoroughly exhausted after hiking twenty miles along the Appalachian Trail, the campfire was a welcoming sight to the backpackers.\"",
      "stepByStepSolution": [
        "Introductory phrase: \"Thoroughly exhausted after hiking twenty miles along the Appalachian Trail,\"",
        "Ask: Who was thoroughly exhausted? The backpackers, NOT the campfire!",
        "The campfire cannot be exhausted.",
        "Correct revision: \"Thoroughly exhausted after hiking twenty miles along the Appalachian Trail, the backpackers welcomed the sight of the campfire.\""
      ],
      "fastTip": "Check the noun right after the comma. If it cannot perform the action in the opening clause, it is 100% incorrect."
    },
    "practiceQuestion": {
      "id": "msv-q1",
      "passage": "Pioneered by biochemist Jennifer Doudna and her colleagues, ______",
      "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        {
          "letter": "A",
          "text": "the revolutionary gene-editing technology known as CRISPR-Cas9 has transformed biomedical research.",
          "trapReason": "Correct. CRISPR-Cas9 is the technology pioneered by Doudna and her colleagues."
        },
        {
          "letter": "B",
          "text": "biomedical research has been transformed by the revolutionary gene-editing technology known as CRISPR-Cas9.",
          "trapReason": "Dangling modifier! \"Biomedical research\" was not pioneered by Doudna; CRISPR-Cas9 was."
        },
        {
          "letter": "C",
          "text": "scientists around the world have embraced the revolutionary gene-editing technology known as CRISPR-Cas9.",
          "trapReason": "Scientists were not pioneered by Doudna!"
        },
        {
          "letter": "D",
          "text": "the transformation of biomedical research occurred through the gene-editing system CRISPR-Cas9.",
          "trapReason": "\"The transformation\" was not pioneered."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Choice A is correct. The introductory modifier \"Pioneered by biochemist Jennifer Doudna and her colleagues\" describes the technology (CRISPR-Cas9). Therefore, CRISPR-Cas9 must immediately follow the comma.",
      "fastShortcutTip": "Who or what was \"pioneered\"? The technology. Only Choice A puts the technology directly after the comma."
    }
  },
  {
    "id": "linear-equations-solutions",
    "title": "Linear Equations & Number of Solutions",
    "subject": "math",
    "domainId": "algebra",
    "domainName": "Algebra",
    "difficulty": "Foundation",
    "estimatedFrequency": "4-5 questions per test",
    "summary": "Solve linear equations in one variable and instantly evaluate whether an equation has 1 solution, 0 solutions (no solution), or infinitely many solutions.",
    "goldenRules": [
      "Put equations in standard simplified form: ax + b = cx + d.",
      "One Unique Solution: Slopes are different (a ≠ c). Always intersects at exactly one point.",
      "No Solution (Parallel lines): Same slope (a = c), DIFFERENT y-intercepts (b ≠ d). Example: 3x + 5 = 3x - 2 → 5 = -2 (Impossible!).",
      "Infinitely Many Solutions: Same slope (a = c) AND SAME y-intercept (b = d). Both sides are completely identical.",
      "Desmos Hack: Type both sides as y = Left Side and y = Right Side. If parallel -> 0 solutions. If overlapping -> ∞. If they intersect -> 1 solution."
    ],
    "tipsAndTricks": [
      {
        "title": "The Match-the-Coefficients Shortcut",
        "description": "For \"no solution\" or \"infinitely many solutions\" problems with an unknown constant k (e.g. kx + 8 = 4(2x + 2)), expand the right side: 8x + 8. Set the x-coefficients equal: k = 8. Done in 5 seconds without solving!",
        "isDesmosHack": false,
        "timeSavedEstimate": "40 seconds"
      },
      {
        "title": "Desmos Slider Method for Constants",
        "description": "If given an equation with constant c like 3x + 12 = c(x + 4), type it into Desmos, click \"add slider for c\", and slide until the lines overlap or parallel. Or simply graph y = 3x+12 and y = cx + 4c.",
        "isDesmosHack": true,
        "timeSavedEstimate": "30 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The \"What is the value of 3x + 2?\" Trap",
        "explanation": "Solving all the way for x, then picking that value, forgetting that the question asked for 3x + 2 or x - 5.",
        "howToAvoid": "ALWAYS circle or highlight what the question asks for. Check the final target before typing your answer!"
      }
    ],
    "workedExample": {
      "title": "Finding Constant for Infinitely Many Solutions",
      "problem": "In the equation 6(2x - 3) + 4 = ax + b, a and b are constants. If the equation has infinitely many solutions, what is the value of a + b?",
      "stepByStepSolution": [
        "Step 1: Expand and simplify the left side: 12x - 18 + 4 = 12x - 14.",
        "Step 2: For infinitely many solutions, left side must be identical to right side: 12x - 14 = ax + b.",
        "Step 3: Equate coefficients: a = 12 and b = -14.",
        "Step 4: Compute requested value: a + b = 12 + (-14) = -2."
      ],
      "fastTip": "Distribute, equate x-terms for a, equate constants for b, then add."
    },
    "practiceQuestion": {
      "id": "alg-q1",
      "question": "For what value of k does the equation 5(2x - 4) + k = 10x - 7 have infinitely many solutions?",
      "options": [
        {
          "letter": "A",
          "text": "13",
          "trapReason": "Correct. Left side is 10x - 20 + k. For identical lines, -20 + k = -7 → k = 13."
        },
        {
          "letter": "B",
          "text": "-27",
          "trapReason": "Sign error trap from -20 - 7."
        },
        {
          "letter": "C",
          "text": "7",
          "trapReason": "Neglecting the -20 constant."
        },
        {
          "letter": "D",
          "text": "-13",
          "trapReason": "Sign reversal."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Expand the left side: 10x - 20 + k. Set this equal to 10x - 7. Since the x-coefficients (10 = 10) already match, we set the constants equal: -20 + k = -7 → k = 13.",
      "fastShortcutTip": "Infinitely many solutions means identical expressions on both sides. -20 + k = -7 → k = 13. Takes 10 seconds!"
    },
    "subCases": [
      {
        "id": "zero-solutions",
        "title": "Equation with 0 Solutions (No Solution)",
        "shortLabel": "0 Solutions (No Solution)",
        "formulaRule": "ax + b = ax + c  (where b ≠ c)",
        "goldenRules": [
          "Standard Form: ax + b = ax + c where x-coefficients are identical (same slope), but constant terms are DIFFERENT (b ≠ c).",
          "Algebraic Proof: Subtracting ax from both sides leaves b = c, which is a mathematical impossibility (e.g. 7 = 2). Therefore, NO value of x can ever satisfy the equation.",
          "Graphical Truth: In Desmos, y = ax + b and y = ax + c are two parallel lines with equal slopes and different y-intercepts. Parallel lines never intersect, resulting in exactly 0 solutions."
        ],
        "tipsAndTricks": [
          {
            "title": "The Match-Coefficients Shortcut (5 Seconds)",
            "description": "When the Digital SAT asks for a constant k that gives NO SOLUTION (e.g., kx + 7 = 4(3x - 1)), expand the right side: 12x - 4. Set the x-coefficients equal: k = 12. Verify constants: 7 ≠ -4. Done instantly without solving!",
            "isDesmosHack": false,
            "timeSavedEstimate": "45 seconds"
          },
          {
            "title": "Desmos Visual Parallel Check",
            "description": "Type the left side on line 1 as y = Left and the right side on line 2 as y = Right. If the lines are parallel with different y-intercepts, they never cross -> 0 solutions.",
            "isDesmosHack": true,
            "timeSavedEstimate": "30 seconds"
          }
        ],
        "commonTraps": [
          {
            "name": "The \"x = 0 means 0 solutions\" Trap",
            "explanation": "Confusing a solution of x = 0 (which is ONE valid solution!) with having ZERO solutions. For example, 4x = 0 has 1 solution (x = 0), NOT 0 solutions.",
            "howToAvoid": "Zero solutions means the equation has NO real answer at all (e.g. 5 = 2). If x = 0 works, it has 1 solution."
          },
          {
            "name": "The Equal Constants Trap",
            "explanation": "If you mistakenly make the constants equal (b = c), you accidentally create Infinitely Many Solutions, not 0 solutions.",
            "howToAvoid": "Always verify: For 0 solutions, x-coefficients MUST be equal, but constants MUST be different (b ≠ c)."
          }
        ],
        "workedExample": {
          "title": "How ax + b = ax + c Makes 0 Solutions",
          "problem": "In the equation 4(2x + 3) - 5 = ax + 2, a is a constant. If the equation has no solution (0 solutions), what is the value of a? Show step-by-step why this produces 0 solutions.",
          "stepByStepSolution": [
            "Step 1: Expand and simplify the left side: 4(2x + 3) - 5 = 8x + 12 - 5 = 8x + 7.",
            "Step 2: Compare both sides: 8x + 7 = ax + 2. Notice this fits the canonical form ax + b = ax + c, where b = 7 and c = 2.",
            "Step 3: For 0 solutions, the x-coefficients must match so the variables completely cancel out: a = 8.",
            "Step 4: Check what happens when a = 8: 8x + 7 = 8x + 2. Subtract 8x from both sides: 7 = 2.",
            "Step 5: Conclusion: Because 7 = 2 is impossible, no real number x can make this true. Hence, a = 8 guarantees exactly 0 solutions."
          ],
          "fastTip": "Structure is ax + b = ax + c. Equate x-coefficients (a = 8), confirm constants differ (7 ≠ 2)."
        },
        "practiceQuestion": {
          "id": "q-zero-solutions",
          "question": "In the equation 3(4x - 2) + 5 = kx - 10, k is a constant. If the equation has no solution, what is the value of k?",
          "options": [
            {
              "letter": "A",
              "text": "12",
              "trapReason": "Correct! Left side is 12x - 6 + 5 = 12x - 1. For no solution, x-coefficients must match: k = 12. Since -1 ≠ -10, this yields 0 solutions."
            },
            {
              "letter": "B",
              "text": "-10",
              "trapReason": "Trap: Equating the constant term instead of the x-coefficient."
            },
            {
              "letter": "C",
              "text": "4",
              "trapReason": "Trap: Forgetting to distribute the 3 to 4x (3 × 4 = 12)."
            },
            {
              "letter": "D",
              "text": "-1",
              "trapReason": "Trap: Picking the simplified constant on the left side."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Expand the left side: 3(4x - 2) + 5 = 12x - 6 + 5 = 12x - 1. The equation becomes 12x - 1 = kx - 10. For an equation of the form ax + b = cx + d to have no solution, the coefficients of x must be identical (k = 12) while the constants must differ (-1 ≠ -10). Thus, k = 12.",
          "fastShortcutTip": "No solution requires equal x-coefficients and different constants (ax + b = ax + c). 3 × 4x = 12x → k = 12."
        }
      },
      {
        "id": "many-solutions",
        "title": "Equation with Many Solutions (Infinitely Many)",
        "shortLabel": "Many Solutions (Infinitely Many)",
        "formulaRule": "ax + b = ax + b  (Identity: identical both sides)",
        "goldenRules": [
          "Standard Form: ax + b = ax + b. Both sides of the equation are 100% identical after distributing and simplifying.",
          "Algebraic Proof: Subtracting ax + b from both sides leaves 0 = 0. Because 0 = 0 is always universally true, EVERY real number x is a valid solution.",
          "Graphical Truth: In Desmos, graphing the left side and right side produces the exact same line (coincident lines). Every single point on the line is a point of intersection (infinite solutions)."
        ],
        "tipsAndTricks": [
          {
            "title": "The Double-Match Identity Rule",
            "description": "For infinitely many solutions, equate the x-coefficients (a = a) AND equate the constants (b = b). Both parts must match identically.",
            "isDesmosHack": false,
            "timeSavedEstimate": "40 seconds"
          },
          {
            "title": "Desmos Slider Coincidence Check",
            "description": "Graph y = Left and y = Right with a slider for the unknown constant. Slide until the two colored lines merge into one single line.",
            "isDesmosHack": true,
            "timeSavedEstimate": "35 seconds"
          }
        ],
        "commonTraps": [
          {
            "name": "The \"Solve for x\" Trap",
            "explanation": "Trying to solve for x when an equation has infinite solutions. You will arrive at 0 = 0 and get stuck, instead of simply equating coefficients.",
            "howToAvoid": "When a question says \"infinitely many solutions\", do NOT solve for x. Equate coefficients on both sides directly!"
          },
          {
            "name": "Negative Sign Distribution Error",
            "explanation": "In an equation like 4(2x - 3) = ax + b, misdistributing the negative sign: 4 × (-3) = -12, so b = -12, not +12.",
            "howToAvoid": "Carefully track the minus signs when distributing across parentheses."
          }
        ],
        "workedExample": {
          "title": "How ax + b = ax + b Makes Infinitely Many Solutions",
          "problem": "In the equation 6(2x - 3) + 4 = ax + b, a and b are constants. If the equation has infinitely many solutions, what is the value of a + b?",
          "stepByStepSolution": [
            "Step 1: Expand and simplify the left side: 6(2x - 3) + 4 = 12x - 18 + 4 = 12x - 14.",
            "Step 2: For infinitely many solutions, the equation must be an identity: ax + b = ax + b.",
            "Step 3: Left side (12x - 14) must be identical to right side (ax + b): 12x - 14 = ax + b.",
            "Step 4: Equate x-coefficients: a = 12. Equate constants: b = -14.",
            "Step 5: Calculate requested expression: a + b = 12 + (-14) = -2."
          ],
          "fastTip": "Distribute left side, match x-term for a = 12, match constant for b = -14, then add: 12 + (-14) = -2."
        },
        "practiceQuestion": {
          "id": "q-many-solutions",
          "question": "For what value of k does the equation 5(2x - 4) + k = 10x - 7 have infinitely many solutions?",
          "options": [
            {
              "letter": "A",
              "text": "13",
              "trapReason": "Correct! Left side is 10x - 20 + k. For identical lines, -20 + k = -7 → k = 13."
            },
            {
              "letter": "B",
              "text": "-27",
              "trapReason": "Trap: Sign error from -20 - 7."
            },
            {
              "letter": "C",
              "text": "7",
              "trapReason": "Trap: Forgetting the -20 from expanding 5(-4)."
            },
            {
              "letter": "D",
              "text": "-13",
              "trapReason": "Trap: Sign reversal error."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Expand the left side: 5(2x - 4) + k = 10x - 20 + k. For infinitely many solutions, both sides must be identical: 10x - 20 + k = 10x - 7. The x-coefficients (10 = 10) already match. Equate constants: -20 + k = -7 → k = 13.",
          "fastShortcutTip": "Infinitely many solutions means identical expressions on both sides. -20 + k = -7 → k = 13. Done in 10 seconds!"
        }
      },
      {
        "id": "one-solution",
        "title": "Equation with 1 Solution (One Unique Solution)",
        "shortLabel": "1 Solution (One Unique Solution)",
        "formulaRule": "ax + b = cx + d  (where a ≠ c)",
        "goldenRules": [
          "Standard Form: ax + b = cx + d where x-coefficients are DIFFERENT (a ≠ c).",
          "Algebraic Proof: Since a ≠ c, subtracting cx from ax yields (a - c)x ≠ 0. You can always isolate x = (d - b) / (a - c), producing exactly ONE unique real number solution.",
          "Graphical Truth: In Desmos, y = ax + b and y = cx + d are lines with different slopes. Any two non-parallel lines in a 2D plane must cross at exactly one intersection point (x, y)."
        ],
        "tipsAndTricks": [
          {
            "title": "The Slope-Mismatch Rule (3 Seconds)",
            "description": "If asked whether an equation has 1 solution, check ONLY the x-coefficients. If the slopes are different (e.g. 5x vs 2x), it is mathematically guaranteed to have 1 solution. Constants do not matter!",
            "isDesmosHack": false,
            "timeSavedEstimate": "30 seconds"
          },
          {
            "title": "Desmos Click-to-Find Point",
            "description": "Graph both sides in Desmos. Tap the gray intersection point to immediately see the exact (x, y) value without doing any manual algebraic steps.",
            "isDesmosHack": true,
            "timeSavedEstimate": "40 seconds"
          }
        ],
        "commonTraps": [
          {
            "name": "Thinking Constants Must Be Different",
            "explanation": "Assuming that constants b and d must be different for 1 solution. If constants are equal (e.g. 3x + 4 = 5x + 4), the equation still has 1 unique solution (x = 0).",
            "howToAvoid": "Only x-coefficients matter for 1 solution. As long as a ≠ c, it has 1 solution regardless of constants."
          },
          {
            "name": "The \"Target Expression\" Oversight",
            "explanation": "Solving for x = 4, but the problem asked for the value of 2x - 1 (which is 7).",
            "howToAvoid": "Always double check the question stem before selecting your final answer."
          }
        ],
        "workedExample": {
          "title": "How ax + b = cx + d (a ≠ c) Makes 1 Solution",
          "problem": "In the equation 5x - 8 = 2(x + 5), find the unique solution for x. Explain why this equation is guaranteed to have exactly 1 solution.",
          "stepByStepSolution": [
            "Step 1: Expand the right side: 2(x + 5) = 2x + 10.",
            "Step 2: Compare x-coefficients: Left side has 5x (a = 5), right side has 2x (c = 2).",
            "Step 3: Since a ≠ c (5 ≠ 2), the slopes are different. This guarantees the lines intersect at exactly 1 point.",
            "Step 4: Solve for x: Subtract 2x from both sides: 3x - 8 = 10. Add 8: 3x = 18 → x = 6.",
            "Step 5: Verify: 5(6) - 8 = 30 - 8 = 22. Right side: 2(6 + 5) = 2(11) = 22. 22 = 22 (True!)."
          ],
          "fastTip": "Check slopes first: 5 ≠ 2 guarantees 1 solution. Then isolate x in 2 steps: 3x = 18 → x = 6."
        },
        "practiceQuestion": {
          "id": "q-one-solution",
          "question": "Which of the following linear equations has exactly one unique real solution?",
          "options": [
            {
              "letter": "A",
              "text": "4(x - 3) = 4x - 12",
              "trapReason": "Trap: 4x - 12 = 4x - 12 has infinitely many solutions (identity)."
            },
            {
              "letter": "B",
              "text": "3x + 7 = 3x - 4",
              "trapReason": "Trap: Same slope with different constants has 0 solutions (7 ≠ -4)."
            },
            {
              "letter": "C",
              "text": "2(3x + 1) = 5x + 9",
              "trapReason": "Correct! Expanding gives 6x + 2 = 5x + 9. Since 6 ≠ 5, the slopes differ, guaranteeing exactly 1 solution (x = 7)."
            },
            {
              "letter": "D",
              "text": "6x - 2 = 2(3x - 5)",
              "trapReason": "Trap: 6x - 2 = 6x - 10 has same slopes with different constants -> 0 solutions."
            }
          ],
          "correctAnswer": "C",
          "explanation": "An equation has exactly one solution if and only if the coefficients of x on both sides are unequal (a ≠ c). In Choice C, 2(3x + 1) expands to 6x + 2. Comparing with 5x + 9, the x-coefficients are 6 and 5. Since 6 ≠ 5, subtracting 5x gives x + 2 = 9 → x = 7.",
          "fastShortcutTip": "Look only at x-coefficients: A has 4 vs 4, B has 3 vs 3, D has 6 vs 6. Only C has unequal x-coefficients (6 vs 5), so it must be the 1 solution equation!"
        }
      }
    ]
  },
  {
    "id": "systems-linear-equations",
    "title": "Systems of Linear Equations",
    "subject": "math",
    "domainId": "algebra",
    "domainName": "Algebra",
    "difficulty": "Medium",
    "estimatedFrequency": "3-5 questions per test",
    "summary": "Solve systems of two linear equations using substitution, elimination, or the game-changing Desmos graphic intersection method.",
    "goldenRules": [
      "Desmos Hack: Type both linear equations directly into Desmos exactly as written (e.g. 3x + 4y = 17 and 2x - y = 4). Tap the gray intersection point to get (x, y). You will never make an algebraic sign error again!",
      "No Solution System: Lines are parallel → Same ratio of coefficients A_1/A_2 = B_1/B_2 ≠ C_1/C_2.",
      "Infinite Solutions System: A_1/A_2 = B_1/B_2 = C_1/C_2.",
      "Target Expression Trick: If asked for x + y or 2x - y, try adding or subtracting the two equations directly instead of solving for x and y individually."
    ],
    "tipsAndTricks": [
      {
        "title": "Desmos 5-Second Intersection",
        "description": "On Digital SAT Math, the built-in Desmos calculator solves any system in seconds. Do not spend 2 minutes on manual elimination with fractions unless required. Type Equation 1 on line 1, Equation 2 on line 2, and click the point of intersection.",
        "isDesmosHack": true,
        "timeSavedEstimate": "60 seconds!"
      },
      {
        "title": "Summing Equations Directly",
        "description": "When asked for x + y, look at the system: if equation 1 has 4x + 3y = 20 and equation 2 has x + 2y = 10, adding them yields 5x + 5y = 30 → x + y = 6. You never need to solve for x or y!",
        "timeSavedEstimate": "35 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Coordinate Flip Trap",
        "explanation": "Finding (x, y) = (3, 7), but the question asks for the value of y, and choice A is 3.",
        "howToAvoid": "Reread the prompt before clicking your answer: does it ask for x, y, x+y, or xy?"
      }
    ],
    "workedExample": {
      "title": "Target Combination Shortcut",
      "problem": "If 7x + 2y = 24 and 3x + 8y = 16, what is the value of 10x + 10y?",
      "stepByStepSolution": [
        "Notice the coefficients: 7 + 3 = 10 and 2 + 8 = 10.",
        "Simply add the two equations directly:",
        "(7x + 2y) + (3x + 8y) = 24 + 16",
        "10x + 10y = 40.",
        "Done in one line without substitution or elimination!"
      ],
      "fastTip": "Before doing tedious substitution, always check if adding or subtracting the two equations directly gives the asked-for expression."
    },
    "practiceQuestion": {
      "id": "sle-q1",
      "question": "A system of equations is given by:\n4x - 6y = 12\nax - 9y = 18\nIf the system has infinitely many solutions, what is the value of constant a?",
      "options": [
        {
          "letter": "A",
          "text": "6",
          "trapReason": "Correct. Ratio of y-coefficients is -9 / -6 = 1.5. So a = 4 × 1.5 = 6."
        },
        {
          "letter": "B",
          "text": "4",
          "trapReason": "Assuming a is identical without scaling."
        },
        {
          "letter": "C",
          "text": "-6",
          "trapReason": "Sign error."
        },
        {
          "letter": "D",
          "text": "9",
          "trapReason": "Mixing up x and y coefficients."
        }
      ],
      "correctAnswer": "A",
      "explanation": "For infinitely many solutions, the two equations must be scalar multiples of each other. The constant ratio is 18 / 12 = 1.5, and the y-coefficient ratio is -9 / -6 = 1.5. Thus a / 4 = 1.5 → a = 6.",
      "fastShortcutTip": "Set up the proportion: 4/a = -6/-9 = 12/18. Cross-multiply: -6a = -36 → a = 6."
    }
  },
  {
    "id": "quadratics-parabolas",
    "title": "Quadratics & Parabola Vertices",
    "subject": "math",
    "domainId": "advanced-math",
    "domainName": "Advanced Math",
    "difficulty": "Hard",
    "estimatedFrequency": "5-7 questions per test",
    "summary": "Master quadratic forms (standard, vertex, factored), finding maximum/minimum values, axis of symmetry, and discriminant analysis.",
    "goldenRules": [
      "Standard Form: y = ax^2 + bx + c. Vertex x-coordinate is x_v = -b/2a. y-coordinate is f(x_v).",
      "Vertex Form: y = a(x - h)^2 + k. The vertex is (h, k). If a < 0, maximum is k. If a > 0, minimum is k.",
      "Factored Form: y = a(x - r_1)(x - r_2). The roots are r_1, r_2. Vertex is midway between roots: x_v = r_1 + r_2/2.",
      "Discriminant \\Delta = b^2 - 4ac:\n  • \\Delta > 0: 2 distinct real solutions (crosses x-axis twice)\n  • \\Delta = 0: 1 real solution (tangent to x-axis, perfect square)\n  • \\Delta < 0: 0 real solutions (does not touch x-axis)",
      "Sum of roots formula: -b/a. Product of roots formula: c/a."
    ],
    "tipsAndTricks": [
      {
        "title": "Desmos Vertex & Extremum Finder",
        "description": "Simply type any quadratic expression into Desmos (e.g. y = -2x^2 + 12x - 5). Click the peak or valley point on the graph. Desmos shows the coordinates (h, k) instantly. The maximum or minimum value is the y-coordinate k!",
        "isDesmosHack": true,
        "timeSavedEstimate": "45 seconds"
      },
      {
        "title": "Sum of Roots Shortcut",
        "description": "If a question asks: \"What is the sum of the solutions to 3x^2 - 15x + 7 = 0?\", DO NOT factor or use quadratic formula! Just use -b/a = --15/3 = 5. Solved in 3 seconds.",
        "timeSavedEstimate": "35 seconds"
      },
      {
        "title": "Form Matching for Word Problems",
        "description": "When the question asks which form displays the minimum/maximum as constants, the answer is ALWAYS VERTEX FORM. If it asks which form displays the x-intercepts, the answer is FACTORED FORM.",
        "timeSavedEstimate": "20 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Max/Min Value Trap (x vs y)",
        "explanation": "When asked \"What is the maximum height?\", students often give the x-value (time) instead of the y-value (height).",
        "howToAvoid": "Remember: \"at what x does max occur\" = x-coordinate (h = -b/2a). \"What is the maximum value\" = y-coordinate (k)."
      },
      {
        "name": "The Vertex Form Sign Reversal",
        "explanation": "For y = 3(x + 4)^2 - 9, students assume h = 4. But standard form has (x - h), so h = -4.",
        "howToAvoid": "The inside flips sign: (x + 4) = 0 → x = -4."
      }
    ],
    "workedExample": {
      "title": "One Real Solution with Discriminant",
      "problem": "For what positive value of c does the quadratic equation 4x^2 - 12x + c = 0 have exactly one real solution?",
      "stepByStepSolution": [
        "Condition for exactly one real solution: Discriminant b^2 - 4ac = 0.",
        "Identify coefficients: a = 4, b = -12, c = c.",
        "Set up equation: (-12)^2 - 4(4)(c) = 0",
        "144 - 16c = 0 → 16c = 144 → c = 9."
      ],
      "fastTip": "Desmos hack: Graph y = 4x^2 - 12x + c, add a slider for c, and move slider until the vertex touches the x-axis at y=0!"
    },
    "practiceQuestion": {
      "id": "adv-q1",
      "question": "What is the sum of the solutions to the equation 2x^2 - 14x + 9 = 0?",
      "options": [
        {
          "letter": "A",
          "text": "7",
          "trapReason": "Correct. Sum of roots is -b/a = -(-14)/2 = 7."
        },
        {
          "letter": "B",
          "text": "-7",
          "trapReason": "Forgot the negative sign in -b/a."
        },
        {
          "letter": "C",
          "text": "4.5",
          "trapReason": "This is the product of the solutions (c/a = 9/2)."
        },
        {
          "letter": "D",
          "text": "14",
          "trapReason": "Forgot to divide by coefficient a=2."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Using Vieta's formula, the sum of the roots of any quadratic equation ax^2 + bx + c = 0 is equal to -b/a. Here, a = 2 and b = -14, so the sum is -(-14) / 2 = 7.",
      "fastShortcutTip": "Vieta's Formula: Sum of roots is always -b/a. -(-14)/2 = 7. You never need the quadratic formula!"
    }
  },
  {
    "id": "exponential-growth-decay",
    "title": "Exponential Growth and Decay",
    "subject": "math",
    "domainId": "advanced-math",
    "domainName": "Advanced Math",
    "difficulty": "Medium",
    "estimatedFrequency": "3-4 questions per test",
    "summary": "Model population shifts, depreciation, radioactive half-life, and compounding interest using the master exponential equation y = a(b)^x.",
    "goldenRules": [
      "Master Formula: y = a(1 ± r)^t = a(b)^t",
      "Initial Value: a is the starting quantity at t = 0 (the y-intercept).",
      "Base b interpretation:\n  • Growth: b = 1 + r (e.g., 7% growth means b = 1 + 0.07 = 1.07).\n  • Decay: b = 1 - r (e.g., 15% decay means b = 1 - 0.15 = 0.85).",
      "Time interval scaling: If a quantity doubles every d years, the exponent is t/d (e.g. y = a(2)^{t/d})."
    ],
    "tipsAndTricks": [
      {
        "title": "Plug-In t = 0 and t = 1 Trick",
        "description": "When given 4 complicated exponential equations, plug in t = 0. The result must equal the initial value. If multiple choices remain, plug in t = 1 or another easy value from the problem statement to eliminate incorrect options.",
        "isDesmosHack": false,
        "timeSavedEstimate": "35 seconds"
      },
      {
        "title": "Percent vs Base Quick Conversion",
        "description": "If base is 0.92, the decrease is NOT 92%! The decrease is 1 - 0.92 = 0.08 = 8%. If base is 1.045, the increase is 4.5%.",
        "timeSavedEstimate": "15 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Exponent Denominator Trap",
        "explanation": "If a bacterial culture doubles every 3 hours, students often write y = 100(2)^{3t} instead of y = 100(2)^{t/3}.",
        "howToAvoid": "Test t = 3. If it doubles once, the exponent must evaluate to 1. In t/3, when t=3, 3/3 = 1. In 3t, when t=3, 3(3) = 9 (it would have doubled 9 times!)."
      }
    ],
    "workedExample": {
      "title": "Decay Model Translation",
      "problem": "A new car purchased for 28,000 depreciates by 12% each year. Which function models the value V(t) after t years?",
      "stepByStepSolution": [
        "Initial value a = 28,000.",
        "Decay rate r = 12% = 0.12.",
        "Growth factor b = 1 - r = 1 - 0.12 = 0.88.",
        "Model: V(t) = 28,000(0.88)^t."
      ],
      "fastTip": "Always compute 1 - r for depreciation: 1 - 0.12 = 0.88."
    },
    "practiceQuestion": {
      "id": "exp-q1",
      "question": "A certain radioactive isotope decays such that its mass is halved every 6 hours. If an initial sample has a mass of 480 milligrams, which function M(t) models the mass remaining after t hours?",
      "options": [
        {
          "letter": "A",
          "text": "M(t) = 480(0.5)^{t/6}",
          "trapReason": "Correct. When t=6, exponent is 6/6=1, giving 480(0.5)^1 = 240."
        },
        {
          "letter": "B",
          "text": "M(t) = 480(0.5)^{6t}",
          "trapReason": "Inverts the fraction. When t=6, it would have halved 36 times!"
        },
        {
          "letter": "C",
          "text": "M(t) = 480(2)^{t/6}",
          "trapReason": "This represents doubling, not halving."
        },
        {
          "letter": "D",
          "text": "M(t) = 480 - 0.5(6t)",
          "trapReason": "Linear decay trap; radioactive decay is exponential."
        }
      ],
      "correctAnswer": "A",
      "explanation": "For halving, the base is 0.5. Because the period is 6 hours, the number of half-lives that have elapsed in t hours is t/6. Thus M(t) = 480(0.5)^{t/6}.",
      "fastShortcutTip": "Test t = 6. At 6 hours, mass should be 480 / 2 = 240. Only Choice A gives 480(0.5)^1 = 240."
    }
  },
  {
    "id": "percentages-ratios",
    "title": "Percentages, Percent Change & Ratios",
    "subject": "math",
    "domainId": "problem-solving-data-analysis",
    "domainName": "Problem-Solving & Data",
    "difficulty": "Medium",
    "estimatedFrequency": "3-5 questions per test",
    "summary": "Solve percent increases, percent decreases, markups, successive percentages, and proportional unit rates.",
    "goldenRules": [
      "Percent Change Formula: New - Old/Old × 100%. (ALWAYS divide by the original/starting value, NEVER the new value!).",
      "Multiplier Method: Increase by p% → × (1 + p/100). Decrease by p% → × (1 - p/100).",
      "Never Add Successive Percentages: A 20% increase followed by a 20% decrease is NOT 0%! (100 × 1.20 = 120 \\to 120 × 0.80 = 96, which is a net 4% decrease).",
      "Dimensional Analysis: Write units out as fractions and cancel them diagonally."
    ],
    "tipsAndTricks": [
      {
        "title": "The \"100 Initial Value\" Shortcut",
        "description": "If no concrete dollar or population amount is given in a percent problem, assume the starting value is 100. Calculating 25% of 100 is instant, making successive calculations trivial.",
        "timeSavedEstimate": "30 seconds"
      },
      {
        "title": "Reverse Percentage Trick",
        "description": "If an item is on sale for 72 after a 20% discount, the original price is NOT 72 + 20%. It is Original × 0.80 = 72 → Original = 72 / 0.80 = 90.",
        "timeSavedEstimate": "25 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Wrong Denominator Trap",
        "explanation": "Dividing by the new value instead of the old value in percent change questions.",
        "howToAvoid": "Write down: (Difference) / (Original Starting Number). Repeat: divide by the past!"
      }
    ],
    "workedExample": {
      "title": "Successive Percentage Calculation",
      "problem": "A retail store increases the price of a coat by 30%. One month later, the store marks down the new price by 30%. What is the net percentage change from the original price?",
      "stepByStepSolution": [
        "Assume original price = 100.",
        "Step 1: Increase by 30% -> 100 × 1.30 = 130.",
        "Step 2: Discount by 30% -> 130 × (1 - 0.30) = 130 × 0.70 = 91.",
        "Step 3: Percent change = 91 - 100/100 × 100% = -9%.",
        "The coat is 9% cheaper than originally."
      ],
      "fastTip": "(1 + x)(1 - x) = 1 - x^2. For x = 0.30, 1 - 0.09 = 0.91, which is a 9% net decrease!"
    },
    "practiceQuestion": {
      "id": "pct-q1",
      "question": "In a biology lab, the population of a yeast colony increased from 1,600 cells on Monday to 2,200 cells on Wednesday. What was the percentage increase in the yeast colony population?",
      "options": [
        {
          "letter": "A",
          "text": "37.5%",
          "trapReason": "Correct. (2,200 - 1,600) / 1,600 = 600 / 1,600 = 0.375 = 37.5%."
        },
        {
          "letter": "B",
          "text": "27.3%",
          "trapReason": "Divided by the NEW value (600 / 2,200). Classic denominator trap!"
        },
        {
          "letter": "C",
          "text": "60.0%",
          "trapReason": "Confused 600 difference with 60%."
        },
        {
          "letter": "D",
          "text": "137.5%",
          "trapReason": "Gave the final ratio (2,200/1,600) instead of the increase."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Percent increase is given by Difference/Original × 100% = 2200 - 1600/1600 × 100% = 600/1600 × 100% = 37.5%.",
      "fastShortcutTip": "Formula: (New - Old)/Old = (2200 - 1600)/1600 = 600/1600 = 3/8 = 37.5%. Avoid dividing by 2200."
    }
  },
  {
    "id": "statistics-spread-margin-error",
    "title": "Statistics: Center, Spread & Margin of Error",
    "subject": "math",
    "domainId": "problem-solving-data-analysis",
    "domainName": "Problem-Solving & Data",
    "difficulty": "Medium",
    "estimatedFrequency": "3-4 questions per test",
    "summary": "Compare mean vs median, evaluate standard deviation visually from histograms, and interpret margin of error and study generalizability.",
    "goldenRules": [
      "Mean vs Median with Outliers: Extreme high outliers pull the MEAN to the right (Mean > Median). Extreme low outliers pull the MEAN to the left (Mean < Median). The MEDIAN is resistant to outliers.",
      "Standard Deviation is a measure of SPREAD (how far data points deviate from the mean), NOT the height of the bars in a histogram. A dataset tightly clustered around the center has a SMALL standard deviation.",
      "Margin of Error: Larger sample size → Smaller margin of error.",
      "Generalizability Rule: Results from a random sample can ONLY be generalized to the population from which the sample was randomly selected. Cause-and-effect can ONLY be concluded from a RANDOMIZED CONTROLLED EXPERIMENT, not an observational study."
    ],
    "tipsAndTricks": [
      {
        "title": "Visual Standard Deviation Check",
        "description": "Look at the data distribution. If data is packed tightly in the middle, standard deviation is low. If data is spread out at the extremes (bimodal or uniform), standard deviation is high.",
        "timeSavedEstimate": "20 seconds"
      },
      {
        "title": "The Study Scope Eliminator",
        "description": "If a survey took random high school students in Ohio, you CANNOT conclude anything about \"all high school students in the United States\" or \"all adults in Ohio\". Match the sample group exactly.",
        "timeSavedEstimate": "15 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The \"Taller Bars Mean Higher Std Dev\" Trap",
        "explanation": "Thinking that a tall bar in a histogram means higher standard deviation.",
        "howToAvoid": "Standard deviation measures horizontal spread along the x-axis, not vertical frequency."
      },
      {
        "name": "Cause vs Association Trap",
        "explanation": "Assuming a correlation implies causation in an observational survey.",
        "howToAvoid": "Only randomized experiments establish causality. Look for the words \"randomly assigned to groups\"."
      }
    ],
    "workedExample": {
      "title": "Skew Impact on Mean and Median",
      "problem": "A company has 10 employees earning 50,000 each and 1 CEO earning 1,000,000. How does the CEO salary affect the mean and median?",
      "stepByStepSolution": [
        "Before CEO: 10 employees. Median = 50,000. Mean = 50,000.",
        "With CEO (11 people): Total salary = 500,000 + 1,000,000 = 1,500,000.",
        "New Mean = 1,500,000 / 11 ≈ 136,364.",
        "New Median = The 6th person in order = 50,000.",
        "Conclusion: The outlier drastically increased the mean, while the median remained unchanged."
      ],
      "fastTip": "Whenever a dataset is right-skewed (tail to the right), Mean > Median. Left-skewed, Mean < Median."
    },
    "practiceQuestion": {
      "id": "stat-q1",
      "question": "A random sample of 500 registered voters in a city of 120,000 people was surveyed, and 56% supported a new municipal park initiative with a margin of error of 4% at a 95% confidence level. Which of the following conclusions is most appropriate?",
      "options": [
        {
          "letter": "A",
          "text": "It is plausible that between 52% and 60% of all registered voters in the city support the initiative.",
          "trapReason": "Correct. 56% ± 4% = [52%, 60%]. Generalizes accurately to the sampled city population."
        },
        {
          "letter": "B",
          "text": "Exactly 56% of all registered voters in the entire state support the initiative.",
          "trapReason": "Overgeneralizes to the entire state and claims an exact percentage."
        },
        {
          "letter": "C",
          "text": "If 1,000 voters were surveyed, the margin of error would increase.",
          "trapReason": "Opposite: increasing sample size decreases margin of error."
        },
        {
          "letter": "D",
          "text": "The initiative will definitely receive at least 60% of the vote on election day.",
          "trapReason": "Extreme claim unsupported by the confidence interval."
        }
      ],
      "correctAnswer": "A",
      "explanation": "The survey found 56% support with a 4% margin of error, giving an interval of 56% - 4% = 52% to 56% + 4% = 60%. Because the sample was randomly drawn from the city's registered voters, it is plausible that the true proportion of city registered voters falls in this range.",
      "fastShortcutTip": "Confidence interval is simply Estimate ± Margin of Error: 56% ± 4% = [52%, 60%]. Rule out B (statewide overreach) and C (larger samples reduce error)."
    }
  },
  {
    "id": "circles-and-equations",
    "title": "Circle Theorems & Equations",
    "subject": "math",
    "domainId": "geometry-trig",
    "domainName": "Geometry & Trigonometry",
    "difficulty": "Hard",
    "estimatedFrequency": "3-4 questions per test",
    "summary": "Master the standard circle equation, completing the square for general forms, arc length, and sector area.",
    "goldenRules": [
      "Standard Circle Equation: (x - h)^2 + (y - k)^2 = r^2, with center (h, k) and radius r.",
      "The r^2 Trap: The right side of the circle equation is r^2, NOT r! If the equation equals 49, the radius is √(49) = 7, and diameter is 14.",
      "Completing the Square: To convert x^2 + y^2 - 6x + 8y = 24, group terms: (x^2 - 6x + 9) + (y^2 + 8y + 16) = 24 + 9 + 16 = 49 → (x-3)^2 + (y+4)^2 = 7^2. Center (3, -4), radius 7.",
      "Arc Length and Sector Area Formulas (where θ is in radians):\n  • Arc Length: s = rθ\n  • Sector Area: A = 1/2r^2θ\n  • (In degrees: s = θ/360 \\cdot 2π r and A = θ/360 \\cdot π r^2)",
      "Desmos Hack: Type the circle equation directly into Desmos! It will graph the circle instantly. Click the center and edges to read the radius and coordinates without doing any algebra!"
    ],
    "tipsAndTricks": [
      {
        "title": "Desmos Instant Circle Solver",
        "description": "You do NOT need to complete the square on the Digital SAT! If given x^2 + y^2 - 10x + 6y = 15, type it directly into Desmos. Look at the circle, find its leftmost and rightmost x-values. The distance between them is the diameter; divide by 2 for radius!",
        "isDesmosHack": true,
        "timeSavedEstimate": "50 seconds!"
      },
      {
        "title": "Center Signs Flip",
        "description": "In (x + 5)^2 + (y - 2)^2 = 36, center is (-5, 2). Always flip the signs inside the parentheses.",
        "timeSavedEstimate": "10 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Radius vs Diameter Trap",
        "explanation": "The question asks for the diameter of the circle, but you solve for r and select r.",
        "howToAvoid": "Double the radius when asked for diameter! d = 2r."
      },
      {
        "name": "Forgetting to Add to Both Sides",
        "explanation": "When completing the square algebraically, adding (b/2)^2 to the left side but forgetting to add it to the right side.",
        "howToAvoid": "Or better yet, just use Desmos to graph it directly!"
      }
    ],
    "workedExample": {
      "title": "Finding Radius via Completing the Square or Desmos",
      "problem": "What is the radius of the circle given by x^2 + y^2 + 8x - 12y = 48?",
      "stepByStepSolution": [
        "Method A (Algebraic):",
        "Half of 8 is 4, 4^2 = 16. Half of -12 is -6, (-6)^2 = 36.",
        "Add 16 + 36 to both sides:",
        "(x^2 + 8x + 16) + (y^2 - 12y + 36) = 48 + 16 + 36",
        "(x + 4)^2 + (y - 6)^2 = 100",
        "r^2 = 100 → r = 10.",
        "Method B (Desmos Hack): Type x^2 + y^2 + 8x - 12y = 48. Center is (-4, 6), top point is (-4, 16). Distance = 16 - 6 = 10."
      ],
      "fastTip": "In Desmos, the radius is simply the distance from the center to any edge point."
    },
    "practiceQuestion": {
      "id": "circ-q1",
      "question": "A circle in the xy-plane has equation (x - 3)^2 + (y + 5)^2 = 64. What is the diameter of this circle?",
      "options": [
        {
          "letter": "A",
          "text": "16",
          "trapReason": "Correct. r^2 = 64 → r = 8. Diameter = 2 × 8 = 16."
        },
        {
          "letter": "B",
          "text": "8",
          "trapReason": "Forgot that the question asked for DIAMETER, not radius!"
        },
        {
          "letter": "C",
          "text": "64",
          "trapReason": "Took the right-hand constant directly."
        },
        {
          "letter": "D",
          "text": "32",
          "trapReason": "Divided 64 by 2 instead of taking square root."
        }
      ],
      "correctAnswer": "A",
      "explanation": "From the standard circle equation (x - h)^2 + (y - k)^2 = r^2, we see r^2 = 64, which gives radius r = 8. The question specifically asks for the diameter, so d = 2r = 2(8) = 16.",
      "fastShortcutTip": "Watch out for \"diameter\" vs \"radius\"! r = √(64) = 8 → d = 16."
    }
  },
  {
    "id": "trigonometry-special-triangles",
    "title": "Right Triangles & Trigonometry Identities",
    "subject": "math",
    "domainId": "geometry-trig",
    "domainName": "Geometry & Trigonometry",
    "difficulty": "Hard",
    "estimatedFrequency": "3-4 questions per test",
    "summary": "Master SOH-CAH-TOA, the complementary angle identity \\sin(x) = \\cos(90^° - x), special right triangles (30-60-90, 45-45-90), and radian conversions.",
    "goldenRules": [
      "Complementary Angle Identity: \\sin(x) = \\cos(90^° - x) or in radians \\sin(x) = \\cos(π/2 - x). If \\sin(A) = \\cos(B), then A + B = 90^°!",
      "Special 30-60-90 Triangle: Side ratio is 1 : √(3) : 2 (opposite 30^° is x, opposite 60^° is x√(3), hypotenuse is 2x).",
      "Special 45-45-90 Triangle: Side ratio is 1 : 1 : √(2) (legs are x, hypotenuse is x√(2)).",
      "Pythagorean Triples to Memorize: 3-4-5, 5-12-13, 7-24-25, 8-15-17, and their multiples (e.g. 6-8-10).",
      "Radian-Degree Conversion: Degrees to Radians: × π/180. Radians to Degrees: × 180/π."
    ],
    "tipsAndTricks": [
      {
        "title": "The \"Sin = Cos Means Sum to 90\" Superhack",
        "description": "Whenever you see an equation where \\sin(expression 1) = \\cos(expression 2), set: (expression 1) + (expression 2) = 90^°. For example: \\sin(3x - 10) = \\cos(4x + 2) → (3x - 10) + (4x + 2) = 90 → 7x - 8 = 90 → x = 14. Done in 15 seconds!",
        "timeSavedEstimate": "40 seconds"
      },
      {
        "title": "Desmos Degree Mode Alert",
        "description": "If computing \\sin(30) in Desmos, check the wrench icon in the top right to verify whether Desmos is set to Radians or Degrees! By default Desmos uses Radians.",
        "isDesmosHack": true,
        "timeSavedEstimate": "20 seconds"
      }
    ],
    "commonTraps": [
      {
        "name": "The Hypotenuse for 30-60-90 Trap",
        "explanation": "Confusing which side is x√(3) vs 2x. The longest side is the hypotenuse (2x), opposite the 90^° angle.",
        "howToAvoid": "Note that √(3) ≈ 1.732, which is less than 2. So the hypotenuse is always 2x."
      }
    ],
    "workedExample": {
      "title": "Applying Complementary Angle Theorem",
      "problem": "In a right triangle with acute angles A and B, \\sin(A) = 7/25. What is the value of \\cos(B)?",
      "stepByStepSolution": [
        "In any right triangle, the two acute angles sum to 90^°: A + B = 90^°.",
        "Therefore, B = 90^° - A.",
        "By the identity \\cos(90^° - A) = \\sin(A):",
        "\\cos(B) = \\sin(A) = 7/25.",
        "No calculation or diagram needed!"
      ],
      "fastTip": "In a right triangle, \\sin(A) = \\cos(B) always."
    },
    "practiceQuestion": {
      "id": "trig-q1",
      "question": "If \\sin(4k + 12)^° = \\cos(2k - 6)^°, where both angle measures are acute, what is the value of k?",
      "options": [
        {
          "letter": "A",
          "text": "14",
          "trapReason": "Correct. (4k + 12) + (2k - 6) = 90 → 6k + 6 = 90 → 6k = 84 → k = 14."
        },
        {
          "letter": "B",
          "text": "9",
          "trapReason": "Set angles equal instead of summing to 90."
        },
        {
          "letter": "C",
          "text": "15",
          "trapReason": "Calculation error with +6."
        },
        {
          "letter": "D",
          "text": "12",
          "trapReason": "Forgot the +6 difference."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Since \\sin(θ) = \\cos(90^° - θ), whenever \\sin(A) = \\cos(B) for acute angles, the angles must sum to 90^°. Therefore: (4k + 12) + (2k - 6) = 90 → 6k + 6 = 90 → 6k = 84 → k = 14.",
      "fastShortcutTip": "Golden Rule: When \\sin(A) = \\cos(B), sum the inside expressions to 90. 4k+12 + 2k-6 = 90 → 6k = 84 → k = 14."
    }
  }
];
