import React, { useState } from 'react';
import { Calculator, Play, Sparkles, Sliders, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { DESMOS_HACKS } from '../data/desmosHacks';

export const DesmosLab: React.FC = () => {
  const [selectedHack, setSelectedHack] = useState<string>(DESMOS_HACKS[0].id);
  
  // Interactive Simulation State
  const [activeSimulation, setActiveSimulation] = useState<'systems' | 'quadratics' | 'circles'>('systems');
  
  // System of Equations Sliders
  const [m1, setM1] = useState<number>(2);
  const [b1, setB1] = useState<number>(-1);
  const [m2, setM2] = useState<number>(-0.5);
  const [b2, setB2] = useState<number>(4);

  // Quadratic Sliders
  const [quadA, setQuadA] = useState<number>(1);
  const [quadH, setQuadH] = useState<number>(3);
  const [quadK, setQuadK] = useState<number>(-4);

  // Circle Sliders
  const [circH, setCircH] = useState<number>(2);
  const [circK, setCircK] = useState<number>(1);
  const [circR, setCircR] = useState<number>(4);

  // Calculation for Systems Intersection
  // m1 * x + b1 = m2 * x + b2 => (m1 - m2)x = b2 - b1 => x = (b2 - b1) / (m1 - m2)
  const isParallel = Math.abs(m1 - m2) < 0.001;
  const isIdentical = isParallel && Math.abs(b1 - b2) < 0.001;
  const intersectionX = isParallel ? null : (b2 - b1) / (m1 - m2);
  const intersectionY = intersectionX !== null ? m1 * intersectionX + b1 : null;

  // Coordinate Grid Dimensions
  const width = 460;
  const height = 360;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 22; // 22 pixels per math unit

  const toScreenX = (x: number) => originX + x * scale;
  const toScreenY = (y: number) => originY - y * scale;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Digital SAT Built-In Calculator Secret Weapon</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            The Digital SAT Desmos Mastery Sandbox
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every math question on the Digital SAT allows the built-in Desmos graphing calculator. Learn how top scorers bypass 1-2 minutes of tedious algebra by reading intersections, using the slider method, and applying regression.
          </p>
        </div>
      </div>

      {/* Main Grid: Interactive Graph Simulator (Left) + Hack Catalog (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Canvas Simulator */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Live Interactive Grapher Sandbox
              </h3>
              <p className="text-xs text-slate-500">
                Drag parameters to see how Desmos solves equations visually in real time.
              </p>
            </div>

            {/* Simulation Modes Selector */}
            <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs font-medium">
              <button
                onClick={() => setActiveSimulation('systems')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeSimulation === 'systems' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Linear Systems
              </button>
              <button
                onClick={() => setActiveSimulation('quadratics')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeSimulation === 'quadratics' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Parabola Vertex
              </button>
              <button
                onClick={() => setActiveSimulation('circles')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeSimulation === 'circles' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Circle Graph
              </button>
            </div>
          </div>

          {/* SVG Graph Viewport */}
          <div className="relative bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center p-2">
            <svg 
              viewBox={`0 0 ${width} ${height}`} 
              className="w-full max-w-[480px] h-[340px] select-none"
            >
              {/* Background Grid Lines */}
              <defs>
                <pattern id="grid" width={scale} height={scale} patternUnits="userSpaceOnUse">
                  <path d={`M ${scale} 0 L 0 0 0 ${scale}`} fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width={width} height={height} fill="url(#grid)" />

              {/* Major Axes */}
              <line x1={0} y1={originY} x2={width} y2={originY} stroke="#94A3B8" strokeWidth="1.5" />
              <line x1={originX} y1={0} x2={originX} y2={height} stroke="#94A3B8" strokeWidth="1.5" />

              {/* Axis Numbers */}
              {[-8, -6, -4, -2, 2, 4, 6, 8].map((num) => (
                <text 
                  key={`x-${num}`} 
                  x={toScreenX(num)} 
                  y={originY + 14} 
                  fontSize="9" 
                  fill="#64748B" 
                  textAnchor="middle" 
                  fontFamily="sans-serif"
                >
                  {num}
                </text>
              ))}
              {[-6, -4, -2, 2, 4, 6].map((num) => (
                <text 
                  key={`y-${num}`} 
                  x={originX - 10} 
                  y={toScreenY(num) + 3} 
                  fontSize="9" 
                  fill="#64748B" 
                  textAnchor="end" 
                  fontFamily="sans-serif"
                >
                  {num}
                </text>
              ))}

              {/* SIMULATION 1: SYSTEMS */}
              {activeSimulation === 'systems' && (
                <>
                  {/* Line 1: y = m1 * x + b1 */}
                  <line
                    x1={toScreenX(-12)}
                    y1={toScreenY(m1 * -12 + b1)}
                    x2={toScreenX(12)}
                    y2={toScreenY(m1 * 12 + b1)}
                    stroke="#4F46E5"
                    strokeWidth="2.5"
                  />
                  {/* Line 2: y = m2 * x + b2 */}
                  <line
                    x1={toScreenX(-12)}
                    y1={toScreenY(m2 * -12 + b2)}
                    x2={toScreenX(12)}
                    y2={toScreenY(m2 * 12 + b2)}
                    stroke="#059669"
                    strokeWidth="2.5"
                  />

                  {/* Intersection Dot */}
                  {intersectionX !== null && intersectionY !== null && (
                    <g>
                      <circle
                        cx={toScreenX(intersectionX)}
                        cy={toScreenY(intersectionY)}
                        r="6"
                        fill="#1E293B"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <rect
                        x={toScreenX(intersectionX) + 8}
                        y={toScreenY(intersectionY) - 22}
                        width="80"
                        height="20"
                        rx="4"
                        fill="#1E293B"
                      />
                      <text
                        x={toScreenX(intersectionX) + 48}
                        y={toScreenY(intersectionY) - 8}
                        fill="#FFFFFF"
                        fontSize="10"
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        ({intersectionX.toFixed(1)}, {intersectionY.toFixed(1)})
                      </text>
                    </g>
                  )}
                </>
              )}

              {/* SIMULATION 2: QUADRATICS */}
              {activeSimulation === 'quadratics' && (
                <>
                  {/* Parabola Path */}
                  <path
                    d={Array.from({ length: 41 }, (_, i) => {
                      const xVal = -10 + i * 0.5;
                      const yVal = quadA * Math.pow(xVal - quadH, 2) + quadK;
                      const sx = toScreenX(xVal);
                      const sy = toScreenY(yVal);
                      return `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="2.5"
                  />

                  {/* Axis of Symmetry Dashed Line */}
                  <line
                    x1={toScreenX(quadH)}
                    y1={0}
                    x2={toScreenX(quadH)}
                    y2={height}
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Vertex Point */}
                  <circle
                    cx={toScreenX(quadH)}
                    cy={toScreenY(quadK)}
                    r="6"
                    fill="#4338CA"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <rect
                    x={toScreenX(quadH) + 8}
                    y={toScreenY(quadK) - 22}
                    width="95"
                    height="20"
                    rx="4"
                    fill="#312E81"
                  />
                  <text
                    x={toScreenX(quadH) + 55}
                    y={toScreenY(quadK) - 8}
                    fill="#FFFFFF"
                    fontSize="10"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    Vertex ({quadH}, {quadK})
                  </text>
                </>
              )}

              {/* SIMULATION 3: CIRCLES */}
              {activeSimulation === 'circles' && (
                <>
                  {/* Circle */}
                  <circle
                    cx={toScreenX(circH)}
                    cy={toScreenY(circK)}
                    r={circR * scale}
                    fill="rgba(99, 102, 241, 0.08)"
                    stroke="#6366F1"
                    strokeWidth="2.5"
                  />

                  {/* Center Dot */}
                  <circle
                    cx={toScreenX(circH)}
                    cy={toScreenY(circK)}
                    r="5"
                    fill="#4F46E5"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />

                  {/* Radius Line */}
                  <line
                    x1={toScreenX(circH)}
                    y1={toScreenY(circK)}
                    x2={toScreenX(circH + circR)}
                    y2={toScreenY(circK)}
                    stroke="#059669"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={toScreenX(circH + circR / 2)}
                    y={toScreenY(circK) - 6}
                    fill="#047857"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    r = {circR}
                  </text>
                </>
              )}
            </svg>
          </div>

          {/* Interactive Sliders Control Deck */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-4">
            {activeSimulation === 'systems' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-700">Line 1: y = {m1}x + {b1}</span>
                  <span className="text-slate-500">Adjust Slope & Intercept</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Slope m1: {m1}</label>
                    <input 
                      type="range" 
                      min="-4" 
                      max="4" 
                      step="0.5" 
                      value={m1} 
                      onChange={(e) => setM1(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Intercept b1: {b1}</label>
                    <input 
                      type="range" 
                      min="-6" 
                      max="6" 
                      step="0.5" 
                      value={b1} 
                      onChange={(e) => setB1(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                  <span className="font-semibold text-emerald-700">Line 2: y = {m2}x + {b2}</span>
                  <span className="text-slate-500">Adjust Slope & Intercept</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Slope m2: {m2}</label>
                    <input 
                      type="range" 
                      min="-4" 
                      max="4" 
                      step="0.5" 
                      value={m2} 
                      onChange={(e) => setM2(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Intercept b2: {b2}</label>
                    <input 
                      type="range" 
                      min="-6" 
                      max="6" 
                      step="0.5" 
                      value={b2} 
                      onChange={(e) => setB2(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-medium text-slate-700">System Status:</span>
                  {isIdentical ? (
                    <span className="text-indigo-600 font-bold">Infinitely Many Solutions (Lines coincide)</span>
                  ) : isParallel ? (
                    <span className="text-rose-600 font-bold">No Solution (Parallel lines, same slope)</span>
                  ) : (
                    <span className="text-emerald-700 font-bold">
                      1 Unique Solution at ({intersectionX?.toFixed(2)}, {intersectionY?.toFixed(2)})
                    </span>
                  )}
                </div>
              </div>
            )}

            {activeSimulation === 'quadratics' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-700 font-mono">
                    y = {quadA}(x - {quadH})² + ({quadK})
                  </span>
                  <span className="text-slate-500">Vertex Form Slider</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Scale a: {quadA}</label>
                    <input 
                      type="range" 
                      min="-2" 
                      max="2" 
                      step="0.5" 
                      value={quadA} 
                      onChange={(e) => setQuadA(parseFloat(e.target.value) || 0.5)}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Vertex h: {quadH}</label>
                    <input 
                      type="range" 
                      min="-6" 
                      max="6" 
                      step="1" 
                      value={quadH} 
                      onChange={(e) => setQuadH(parseInt(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Vertex k: {quadK}</label>
                    <input 
                      type="range" 
                      min="-6" 
                      max="6" 
                      step="1" 
                      value={quadK} 
                      onChange={(e) => setQuadK(parseInt(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                </div>

                <div className="pt-2 text-xs bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                  <span className="font-medium text-slate-700">Extremum Value:</span>
                  <span className="font-bold text-indigo-700">
                    {quadA > 0 ? `Minimum is ${quadK} at x = ${quadH}` : `Maximum is ${quadK} at x = ${quadH}`}
                  </span>
                </div>
              </div>
            )}

            {activeSimulation === 'circles' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-700 font-mono">
                    (x - {circH})² + (y - {circK})² = {circR * circR}
                  </span>
                  <span className="text-slate-500">Circle Equation</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Center x (h): {circH}</label>
                    <input 
                      type="range" 
                      min="-5" 
                      max="5" 
                      step="1" 
                      value={circH} 
                      onChange={(e) => setCircH(parseInt(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Center y (k): {circK}</label>
                    <input 
                      type="range" 
                      min="-5" 
                      max="5" 
                      step="1" 
                      value={circK} 
                      onChange={(e) => setCircK(parseInt(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 block mb-1">Radius r: {circR}</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="6" 
                      step="1" 
                      value={circR} 
                      onChange={(e) => setCircR(parseInt(e.target.value))}
                      className="w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                </div>

                <div className="pt-2 text-xs bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                  <span className="font-medium text-slate-700">Dimensions:</span>
                  <span className="font-bold text-indigo-700">
                    Center ({circH}, {circK}) · Radius {circR} · Diameter {circR * 2}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Desmos Hacks Catalog */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-display">
              5 Essential Desmos Power Hacks
            </h3>
            <span className="text-xs text-slate-500">Official Bluebook Tips</span>
          </div>

          <div className="space-y-3">
            {DESMOS_HACKS.map((hack) => {
              const isSelected = selectedHack === hack.id;
              return (
                <div
                  key={hack.id}
                  onClick={() => setSelectedHack(hack.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-indigo-500 bg-white ring-2 ring-indigo-500/20 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                      {hack.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">#HACK</span>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    {hack.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {hack.description}
                  </p>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-3 animate-in fade-in">
                      <div className="bg-slate-900 text-slate-100 p-2.5 rounded-lg text-xs font-mono">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Desmos Syntax</div>
                        <pre className="whitespace-pre-wrap">{hack.formulaSyntax}</pre>
                      </div>

                      <div className="text-xs text-slate-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200/60">
                        <strong className="text-amber-900">Pro Tip: </strong>
                        <span>{hack.proTip}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
