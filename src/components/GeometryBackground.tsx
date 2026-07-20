'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ShapeConfig {
  type: 'circle' | 'triangle' | 'hexagon' | 'diamond' | 'line';
  x: number;
  y: number;
  size: number;
  rotation: number;
  fillOpacity: number;
  strokeOpacity: number;
  floatDuration: number;
  floatDelay: number;
  pulseDuration: number;
  pulseDelay: number;
  rotateDuration: number;
}

function generateShapes(count: number): ShapeConfig[] {
  const types = ['circle', 'triangle', 'hexagon', 'diamond', 'line'] as const;
  const shapes: ShapeConfig[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const x = ((Math.sin(i * 7.3 + 1.1) * 0.5 + 0.5) * 90 + 5);
    const y = ((Math.cos(i * 5.7 + 2.3) * 0.5 + 0.5) * 90 + 5);
    const size = 40 + ((Math.sin(i * 11.1 + 3.7) * 0.5 + 0.5) * 260);

    shapes.push({
      type: types[i % types.length],
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      size: Math.round(size),
      rotation: Math.round(((i * 37 + 13) % 360) * 10) / 10,
      fillOpacity: Math.round((0.03 + (Math.sin(i * 2.3) * 0.5 + 0.5) * 0.05) * 1000) / 1000,
      strokeOpacity: Math.round((0.06 + (Math.cos(i * 3.1) * 0.5 + 0.5) * 0.06) * 1000) / 1000,
      floatDuration: 15 + ((i * 7 + 3) % 11),
      floatDelay: ((i * 2.3) % 5) * -1,
      pulseDuration: 4 + ((i * 3) % 5),
      pulseDelay: ((i * 1.7) % 3) * -1,
      rotateDuration: 20 + ((i * 5 + 7) % 21),
    });
  }

  return shapes;
}

function Shape({ config }: { config: ShapeConfig }) {
  const { type, x, y, size, rotation, fillOpacity, strokeOpacity } = config;
  const accent = '#FFD527';

  const floatAnimation = useMemo(() => ({
    y: [0, -12, 0, 8, 0],
    transition: {
      duration: config.floatDuration,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: config.floatDelay,
    },
  }), [config.floatDuration, config.floatDelay]);

  const rotateAnimation = useMemo(() => ({
    rotate: [rotation, rotation + 360],
    transition: {
      duration: config.rotateDuration,
      repeat: Infinity,
      ease: 'linear' as const,
    },
  }), [rotation, config.rotateDuration]);

  const opacityAnimation = useMemo(() => ({
    opacity: [fillOpacity, fillOpacity * 1.8, fillOpacity],
    transition: {
      duration: config.pulseDuration,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: config.pulseDelay,
    },
  }), [fillOpacity, config.pulseDuration, config.pulseDelay]);

  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
            fill={accent}
            fillOpacity={fillOpacity}
            stroke={strokeOpacity > 0.08 ? accent : 'none'}
            strokeOpacity={strokeOpacity > 0.08 ? strokeOpacity : 0}
            strokeWidth={1}
          />
        );

      case 'triangle': {
        const h = size;
        const w = size * 0.866;
        const cx = w / 2;
        const points = `${cx},0 ${w},${h} 0,${h}`;
        return (
          <polygon
            points={points}
            fill={accent}
            fillOpacity={fillOpacity}
            stroke={strokeOpacity > 0.08 ? accent : 'none'}
            strokeOpacity={strokeOpacity > 0.08 ? strokeOpacity : 0}
            strokeWidth={1}
          />
        );
      }

      case 'hexagon': {
        const cx = size / 2;
        const cy = size / 2;
        const r = size / 2;
        const pts: string[] = [];
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
        }
        return (
          <polygon
            points={pts.join(' ')}
            fill={accent}
            fillOpacity={fillOpacity}
            stroke={strokeOpacity > 0.08 ? accent : 'none'}
            strokeOpacity={strokeOpacity > 0.08 ? strokeOpacity : 0}
            strokeWidth={1}
          />
        );
      }

      case 'diamond': {
        const cx = size / 2;
        const cy = size / 2;
        const r = size / 2;
        const points = `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`;
        return (
          <polygon
            points={points}
            fill={accent}
            fillOpacity={fillOpacity}
            stroke={strokeOpacity > 0.08 ? accent : 'none'}
            strokeOpacity={strokeOpacity > 0.08 ? strokeOpacity : 0}
            strokeWidth={1}
          />
        );
      }

      case 'line':
        return (
          <line
            x1={0}
            y1={0}
            x2={size}
            y2={size}
            stroke={accent}
            strokeOpacity={strokeOpacity}
            strokeWidth={1.5}
          />
        );

      default:
        return null;
    }
  };

  const containerSize = type === 'line' ? Math.max(size, 40) : size;

  return (
    <motion.div
      animate={floatAnimation}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: containerSize,
        height: containerSize,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <motion.svg
        width={containerSize}
        height={containerSize}
        viewBox={`0 0 ${containerSize} ${containerSize}`}
        animate={{
          ...rotateAnimation,
          ...opacityAnimation,
        }}
        style={{ overflow: 'visible' }}
      >
        {renderShape()}
      </motion.svg>
    </motion.div>
  );
}

export const GeometryBackground = () => {
  const shapes = useMemo(() => generateShapes(18), []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    >
      {shapes.map((shape, i) => (
        <Shape key={i} config={shape} />
      ))}
    </div>
  );
};
