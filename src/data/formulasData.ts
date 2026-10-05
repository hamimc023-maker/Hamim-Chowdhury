export interface FormulaItem {
  id: string;
  name: string;
  category: 'Provided by College Board' | 'Hidden Must-Memorize' | 'English Rules';
  subject: 'math' | 'english';
  formula: string;
  notes: string;
  whenToUse: string;
}

export const FORMULAS: FormulaItem[] = [
  // Math: Hidden Formulas (NOT on reference sheet)
  {
    id: 'f-vertex-coord',
    name: 'Vertex Coordinates of Standard Parabola',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: 'x_v = -b / (2a),   y_v = f(x_v)',
    notes: 'For quadratic in standard form y = ax^2 + bx + c',
    whenToUse: 'Finding maximum height, minimum cost, or the line of symmetry x = -b/(2a).'
  },
  {
    id: 'f-discriminant',
    name: 'The Discriminant',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: '\\Delta = b^2 - 4ac',
    notes: '\\Delta > 0 (2 real roots), \\Delta = 0 (1 real root / tangent), \\Delta < 0 (0 real roots)',
    whenToUse: 'When questions ask "for what value does the equation have no real solutions or exactly one solution".'
  },
  {
    id: 'f-vieta-sum-product',
    name: 'Vieta\'s Formulas (Sum & Product of Roots)',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: '\\text{Sum} = -\\frac{b}{a},   \\text{Product} = \\frac{c}{a}',
    notes: 'For any quadratic ax^2 + bx + c = 0',
    whenToUse: 'When asked for the sum of solutions. Avoids factoring or quadratic formula completely!'
  },
  {
    id: 'f-circle-equation',
    name: 'Standard Circle Equation',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: '(x - h)^2 + (y - k)^2 = r^2',
    notes: 'Center is (h, k), radius is r (beware: right side is r squared, not r!)',
    whenToUse: 'Circle geometry problems in the coordinate xy-plane.'
  },
  {
    id: 'f-exponential',
    name: 'Exponential Growth and Decay',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: 'y = a(1 \\pm r)^t = a(b)^t',
    notes: 'a = initial value, r = percent rate as decimal, b = growth factor',
    whenToUse: 'Compound growth, depreciation, interest, and bacterial population problems.'
  },
  {
    id: 'f-percent-change',
    name: 'Percent Change',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: '\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%',
    notes: 'ALWAYS divide by the initial (original) value, never the final value!',
    whenToUse: 'Percent increase, decrease, markup, and discount comparison questions.'
  },
  {
    id: 'f-trig-complementary',
    name: 'Complementary Angle Identity',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: '\\sin(x) = \\cos(90^\\circ - x)   \\iff   \\sin(A) = \\cos(B) \\implies A + B = 90^\\circ',
    notes: 'In right triangles, acute angles sum to 90 degrees.',
    whenToUse: 'When an equation equates sine and cosine of two algebraic expressions.'
  },
  {
    id: 'f-arc-length-radians',
    name: 'Arc Length & Sector Area in Radians',
    category: 'Hidden Must-Memorize',
    subject: 'math',
    formula: 's = r\\theta,   A = \\frac{1}{2}r^2\\theta',
    notes: '\\theta must be measured in radians (multiply degrees by \\pi / 180 to convert)',
    whenToUse: 'Subtended angle, circular motion, and pizza-slice sector area questions.'
  },

  // Math: Provided on College Board Sheet
  {
    id: 'f-area-circle',
    name: 'Area & Circumference of a Circle',
    category: 'Provided by College Board',
    subject: 'math',
    formula: 'A = \\pi r^2,   C = 2\\pi r',
    notes: 'r is the radius, diameter d = 2r',
    whenToUse: 'Circle perimeter and area calculations.'
  },
  {
    id: 'f-special-right',
    name: 'Special Right Triangles (30-60-90 & 45-45-90)',
    category: 'Provided by College Board',
    subject: 'math',
    formula: '30-60-90: x : x\\sqrt{3} : 2x   |   45-45-90: s : s : s\\sqrt{2}',
    notes: 'Hypotenuse in 30-60-90 is 2x (opposite 90°); leg opposite 60° is x√3',
    whenToUse: 'Equilateral triangles split in half, squares split diagonally.'
  },
  {
    id: 'f-pythagorean',
    name: 'Pythagorean Theorem',
    category: 'Provided by College Board',
    subject: 'math',
    formula: 'a^2 + b^2 = c^2',
    notes: 'c must be the hypotenuse (opposite the 90-degree right angle)',
    whenToUse: 'Finding third side of any right triangle.'
  },
  {
    id: 'f-volume-cylinder-cone',
    name: 'Volumes of Cylinders, Cones & Spheres',
    category: 'Provided by College Board',
    subject: 'math',
    formula: 'V_{\\text{cyl}} = \\pi r^2 h,   V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,   V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3',
    notes: 'Cone volume is exactly 1/3 of the corresponding cylinder with identical radius and height.',
    whenToUse: '3D geometry and solid rate of water filling problems.'
  },

  // English: Grammar & Punctuation Rules
  {
    id: 'f-semicolon-rule',
    name: 'The Semicolon & Period Equivalence',
    category: 'English Rules',
    subject: 'english',
    formula: '[Independent Clause] ; [Independent Clause]',
    notes: 'Must have a complete sentence on BOTH sides. Functions exactly like a period.',
    whenToUse: 'Connecting two related complete thoughts without a coordinating conjunction.'
  },
  {
    id: 'f-comma-fanboys',
    name: 'Comma + FANBOYS Rule',
    category: 'English Rules',
    subject: 'english',
    formula: '[Independent Clause] , [for/and/nor/but/or/yet/so] [Independent Clause]',
    notes: 'Never use a comma alone between two independent clauses (comma splice).',
    whenToUse: 'Joining two complete sentences with a coordinating conjunction.'
  },
  {
    id: 'f-colon-rule',
    name: 'The Colon Rule',
    category: 'English Rules',
    subject: 'english',
    formula: '[COMPLETE Independent Clause] : [List / Explanation / Amplification]',
    notes: 'The part BEFORE the colon MUST be an independent clause. Never use after "such as" or "including".',
    whenToUse: 'Introducing an explanation, example, list, or summary.'
  },
  {
    id: 'f-em-dash-rule',
    name: 'Em-Dash Pair vs Single Em-Dash',
    category: 'English Rules',
    subject: 'english',
    formula: 'Pair: [IC start] — nonessential details — [IC end]   |   Single: [COMPLETE IC] — emphasis',
    notes: 'A pair acts like parentheses or two commas; a single dash acts like a colon.',
    whenToUse: 'Emphasizing an abrupt shift or setting off descriptive appositives.'
  }
];
