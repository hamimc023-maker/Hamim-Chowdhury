import { DesmosHackItem } from '../types/sat';

export const DESMOS_HACKS: DesmosHackItem[] = [
  {
    id: 'desmos-systems',
    title: 'Instant Systems of Equations Solver',
    category: 'Systems',
    description: 'Graph both linear or non-linear equations directly. Tap the gray intersection dot to instantly read the (x, y) solution without manual algebraic substitution or elimination.',
    digitalSatUseCases: [
      'Finding the intersection of a line and a parabola',
      'Solving messy systems with fractions or decimals',
      'Checking if a system has 0, 1, or infinite solutions'
    ],
    formulaSyntax: 'Line 1: 3x - 4y = 12\nLine 2: y = -2x + 7',
    exampleProblem: 'If 3x + 2y = 19 and 2x - 5y = -19, what is the value of x + y?',
    proTip: 'You do not need to convert to y = mx + b! Desmos accepts standard form equations like ax + by = c directly.'
  },
  {
    id: 'desmos-sliders',
    title: 'The Slider Method for Unknown Constants (k, c, a)',
    category: 'Unknown Constants',
    description: 'When an equation has an unknown constant like k and conditions such as "has no solution" or "has exactly one solution", define k with a slider and slide to visually match the condition.',
    digitalSatUseCases: [
      'Finding k for tangent lines to parabolas',
      'Finding coefficient a when two lines must be parallel',
      'Finding constant c such that a line never intersects a circle'
    ],
    formulaSyntax: 'Line 1: y = 2x^2 - 8x + c\nLine 2: add slider for c',
    sliderSetup: 'Set slider range c from -20 to 20 with step 1',
    exampleProblem: 'For what value of c does y = x^2 - 6x + c intersect the x-axis at exactly one point?',
    proTip: 'Slide c until the vertex touches y = 0. You will see c = 9 immediately.'
  },
  {
    id: 'desmos-regression',
    title: 'Linear & Quadratic Regression (~ Table Trick)',
    category: 'Regression',
    description: 'When given points in a table or two coordinates and asked for the equation of the line or curve, insert a table in Desmos, enter x1 and y1, then type the regression formula.',
    digitalSatUseCases: [
      'Finding line of best fit parameters m and b',
      'Determining quadratic coefficients a, b, c from 3 points',
      'Finding exponential growth rate from year-by-year data'
    ],
    formulaSyntax: 'Table: (x1, y1) points\nEquation line: y1 ~ mx1 + b\nOr Quadratic: y1 ~ a(x1 - h)^2 + k',
    exampleProblem: 'A line passes through (2, 11) and (6, 27). What is the y-intercept of the line?',
    proTip: 'Type y1 ~ mx1 + b (use the tilde ~ symbol, not =). Desmos will output exact values for m and b instantly!'
  },
  {
    id: 'desmos-option-checking',
    title: 'Option Equivalence Graphing (The Overlap Hack)',
    category: 'Option Substitution',
    description: 'When a problem asks "Which expression is equivalent to...?", graph the original expression on line 1, and graph the 4 choices on lines 2-5. The correct answer will overlay on top of line 1.',
    digitalSatUseCases: [
      'Factoring complex polynomials and rational expressions',
      'Simplifying radical expressions with variables',
      'Checking vertex or factored forms of quadratics'
    ],
    formulaSyntax: 'Line 1: y = (2x^2 + 5x - 3)/(x + 3)\nLine 2: y = 2x - 1',
    exampleProblem: 'Which expression is equivalent to (x^2 - 9)/(x + 3) for all x != -3?',
    proTip: 'Turn each line on/off by clicking the colored circle to visually verify that the graphs are identical.'
  },
  {
    id: 'desmos-circle-graphing',
    title: 'Circle Dimension Visualizer without Completing the Square',
    category: 'Quadratics',
    description: 'Type expanded circle equations directly into Desmos. You can find the center, radius, and diameter by simply clicking the extrema points.',
    digitalSatUseCases: [
      'Finding radius and center of x^2 + y^2 + ax + by = c',
      'Finding points where a circle intersects a line',
      'Verifying whether a point lies inside or outside a circle'
    ],
    formulaSyntax: 'Line 1: x^2 + y^2 - 8x + 6y = 0',
    exampleProblem: 'What is the radius of the circle given by x^2 + y^2 - 10x + 4y = 20?',
    proTip: 'Click the topmost and bottommost points of the circle. Subtract their y-coordinates to get the diameter, then divide by 2 for the radius.'
  }
];
