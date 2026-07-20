'use client';

import { motion } from 'framer-motion';

type DividerVariant = 'lines' | 'waves' | 'geometry' | 'dots';

interface SectionDividerProps {
  variant: DividerVariant;
  className?: string;
}

function LinesDivider() {
  const count = 12;
  const spacing = 100 / count;

  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const x1 = i * spacing * 12;
        const y1 = 0;
        const x2 = x1 + 60;
        const y2 = 100;
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFD527"
            strokeOpacity={0.06 + (i % 3) * 0.02}
            strokeWidth={1}
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
          />
        );
      })}
    </svg>
  );
}

function WavesDivider() {
  const points = [
    'M0,50 C80,20 160,80 240,50 C320,20 400,80 480,50 C560,20 640,80 720,50 C800,20 880,80 960,50 C1040,20 1120,80 1200,50',
    'M0,60 C80,35 160,85 240,60 C320,35 400,85 480,60 C560,35 640,85 720,60 C800,35 880,85 960,60 C1040,35 1120,85 1200,60',
    'M0,40 C80,15 160,65 240,40 C320,15 400,65 480,40 C560,15 640,65 720,40 C800,15 880,65 960,40 C1040,15 1120,65 1200,40',
  ];

  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {points.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="#FFD527"
          strokeOpacity={0.06 + i * 0.03}
          strokeWidth={1}
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
}

function GeometryDivider() {
  const shapes = [
    { type: 'triangle', cx: 50, cy: 40, size: 24 },
    { type: 'circle', cx: 220, cy: 50, size: 16 },
    { type: 'diamond', cx: 380, cy: 35, size: 20 },
    { type: 'circle', cx: 500, cy: 55, size: 10 },
    { type: 'triangle', cx: 620, cy: 40, size: 22 },
    { type: 'diamond', cx: 760, cy: 50, size: 14 },
    { type: 'circle', cx: 880, cy: 38, size: 18 },
    { type: 'triangle', cx: 1000, cy: 45, size: 26 },
    { type: 'diamond', cx: 1120, cy: 52, size: 12 },
  ];

  return (
    <svg
      width="100%"
      height="90"
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
        >
          {shape.type === 'circle' && (
            <circle
              cx={shape.cx}
              cy={shape.cy}
              r={shape.size / 2}
              fill="none"
              stroke="#FFD527"
              strokeOpacity={0.12}
              strokeWidth={1.5}
            />
          )}
          {shape.type === 'triangle' && (
            <polygon
              points={`${shape.cx},${shape.cy - shape.size / 2} ${shape.cx + shape.size * 0.433},${shape.cy + shape.size / 2} ${shape.cx - shape.size * 0.433},${shape.cy + shape.size / 2}`}
              fill="none"
              stroke="#FFD527"
              strokeOpacity={0.1}
              strokeWidth={1.5}
            />
          )}
          {shape.type === 'diamond' && (
            <polygon
              points={`${shape.cx},${shape.cy - shape.size / 2} ${shape.cx + shape.size / 2},${shape.cy} ${shape.cx},${shape.cy + shape.size / 2} ${shape.cx - shape.size / 2},${shape.cy}`}
              fill="none"
              stroke="#FFD527"
              strokeOpacity={0.1}
              strokeWidth={1.5}
            />
          )}
        </motion.g>
      ))}

      {/* Horizontal connecting line */}
      <motion.line
        x1={30}
        y1={50}
        x2={1170}
        y2={50}
        stroke="#FFD527"
        strokeOpacity={0.05}
        strokeWidth={0.5}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      />
    </svg>
  );
}

function DotsDivider() {
  const dots = [
    { cx: 40, r: 1.5 },
    { cx: 100, r: 2.5 },
    { cx: 180, r: 1 },
    { cx: 260, r: 3 },
    { cx: 320, r: 1.5 },
    { cx: 400, r: 2 },
    { cx: 480, r: 1 },
    { cx: 560, r: 2.5 },
    { cx: 620, r: 1.5 },
    { cx: 700, r: 3.5 },
    { cx: 760, r: 1 },
    { cx: 820, r: 2 },
    { cx: 900, r: 1.5 },
    { cx: 960, r: 3 },
    { cx: 1020, r: 1 },
    { cx: 1100, r: 2.5 },
    { cx: 1160, r: 1.5 },
  ];

  return (
    <svg
      width="100%"
      height="80"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={40}
          r={dot.r}
          fill="#FFD527"
          fillOpacity={0.08 + (i % 4) * 0.02}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
}

const variantMap: Record<DividerVariant, React.FC> = {
  lines: LinesDivider,
  waves: WavesDivider,
  geometry: GeometryDivider,
  dots: DotsDivider,
};

export const SectionDivider = ({ variant, className = '' }: SectionDividerProps) => {
  const Component = variantMap[variant];

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <Component />
    </div>
  );
};
