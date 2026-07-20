'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface WireShape {
  type: 'circle' | 'triangle' | 'hexagon' | 'diamond' | 'cross' | 'arc' | 'spiral';
  x: number;
  y: number;
  size: number;
  rotation: number;
  strokeWidth: number;
  opacity: number;
  floatDuration: number;
  floatDelay: number;
  rotateDuration: number;
  dashArray: string;
}

function generateShapes(count: number): WireShape[] {
  const types: WireShape['type'][] = ['circle', 'triangle', 'hexagon', 'diamond', 'cross', 'arc', 'spiral'];
  const shapes: WireShape[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const x = ((Math.sin(i * 7.3 + 1.1) * 0.5 + 0.5) * 88 + 6);
    const y = ((Math.cos(i * 5.7 + 2.3) * 0.5 + 0.5) * 88 + 6);
    const size = 30 + ((Math.sin(i * 11.1 + 3.7) * 0.5 + 0.5) * 200);

    shapes.push({
      type: types[i % types.length],
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      size: Math.round(size),
      rotation: Math.round(((i * 37 + 13) % 360) * 10) / 10,
      strokeWidth: 0.5 + (i % 3) * 0.5,
      opacity: Math.round((0.08 + (Math.sin(i * 2.3) * 0.5 + 0.5) * 0.2) * 1000) / 1000,
      floatDuration: 14 + ((i * 7 + 3) % 16),
      floatDelay: ((i * 1.8) % 5) * -1,
      rotateDuration: 22 + ((i * 5 + 7) % 28),
      dashArray: i % 3 === 0 ? `${6 + (i % 4) * 4} ${4 + (i % 3) * 3}` : 'none',
    });
  }

  return shapes;
}

function WireShape({ config }: { config: WireShape }) {
  const { type, x, y, size, rotation, strokeWidth, opacity, dashArray } = config;
  const accent = '#FFD527';

  const floatAnimation = useMemo(() => ({
    y: [0, -16, 0, 12, 0],
    x: [0, 6, 0, -8, 0],
    transition: {
      duration: config.floatDuration,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: config.floatDelay,
    },
  }), [config.floatDuration, config.floatDelay]);

  const rotateAnimation = useMemo(() => ({
    rotate: [rotation, rotation + (config.type === 'spiral' ? 720 : 360)],
    transition: {
      duration: config.rotateDuration,
      repeat: Infinity,
      ease: 'linear' as const,
    },
  }), [rotation, config.rotateDuration, config.type]);

  const opacityAnimation = useMemo(() => ({
    opacity: [opacity, opacity * 1.8, opacity],
    transition: {
      duration: 5 + (config.size % 6),
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: config.floatDelay,
    },
  }), [opacity, config.floatDelay, config.size]);

  const renderShape = () => {
    const s = size;
    const cx = s / 2;
    const cy = s / 2;

    switch (type) {
      case 'circle':
        return (
          <circle
            cx={cx} cy={cy} r={s / 2 - strokeWidth}
            fill="none"
            stroke={accent}
            strokeWidth={strokeWidth}
            strokeOpacity={opacity}
            strokeDasharray={dashArray !== 'none' ? dashArray : undefined}
          />
        );

      case 'triangle': {
        const h = s;
        const w = s * 0.866;
        const cx2 = w / 2;
        const pts = `${cx2},${strokeWidth} ${w - strokeWidth},${h - strokeWidth} ${strokeWidth},${h - strokeWidth}`;
        return (
          <polygon
            points={pts}
            fill="none"
            stroke={accent}
            strokeWidth={strokeWidth}
            strokeOpacity={opacity}
            strokeDasharray={dashArray !== 'none' ? dashArray : undefined}
          />
        );
      }

      case 'hexagon': {
        const r = s / 2 - strokeWidth;
        const pts: string[] = [];
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
        }
        return (
          <polygon
            points={pts.join(' ')}
            fill="none"
            stroke={accent}
            strokeWidth={strokeWidth}
            strokeOpacity={opacity}
          />
        );
      }

      case 'diamond': {
        const r = s / 2 - strokeWidth;
        const pts = `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`;
        return (
          <polygon
            points={pts}
            fill="none"
            stroke={accent}
            strokeWidth={strokeWidth}
            strokeOpacity={opacity}
            strokeDasharray={dashArray !== 'none' ? dashArray : undefined}
          />
        );
      }

      case 'cross':
        return (
          <>
            <line x1={cx} y1={strokeWidth} x2={cx} y2={s - strokeWidth} stroke={accent} strokeWidth={strokeWidth} strokeOpacity={opacity} />
            <line x1={strokeWidth} y1={cy} x2={s - strokeWidth} y2={cy} stroke={accent} strokeWidth={strokeWidth} strokeOpacity={opacity} />
          </>
        );

      case 'arc':
        return (
          <path
            d={`M ${cx - s / 3} ${cy + s / 4} Q ${cx} ${cy - s / 3} ${cx + s / 3} ${cy + s / 4}`}
            fill="none"
            stroke={accent}
            strokeWidth={strokeWidth}
            strokeOpacity={opacity}
            strokeLinecap="round"
          />
        );

      case 'spiral':
        return (
          <path
            d={`M ${cx} ${cy} 
                Q ${cx + s / 4} ${cy - s / 4} ${cx} ${cy - s / 3}
                Q ${cx - s / 3} ${cy - s / 6} ${cx - s / 5} ${cy + s / 6}
                Q ${cx - s / 10} ${cy + s / 4} ${cx + s / 6} ${cy + s / 4}`}
            fill="none"
            stroke={accent}
            strokeWidth={strokeWidth}
            strokeOpacity={opacity}
            strokeLinecap="round"
          />
        );

      default:
        return null;
    }
  };

  const containerSize = size + 6;

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

// Linhas conectoras finas entre formas proximas
function WireConnectors({ shapes }: { shapes: WireShape[] }) {
  const connectors = useMemo(() => {
    const result: { from: WireShape; to: WireShape; id: string }[] = [];
    for (let i = 0; i < shapes.length; i++) {
      for (let j = i + 1; j < shapes.length; j++) {
        const dx = shapes[i].x - shapes[j].x;
        const dy = shapes[i].y - shapes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 22 && (i + j) % 3 === 0) {
          result.push({ from: shapes[i], to: shapes[j], id: `${i}-${j}` });
        }
      }
    }
    return result;
  }, [shapes]);

  return (
    <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: 0 }}>
      {connectors.map((c) => (
        <motion.line
          key={c.id}
          x1={`${c.from.x}%`}
          y1={`${c.from.y}%`}
          x2={`${c.to.x}%`}
          y2={`${c.to.y}%`}
          stroke="#FFD527"
          strokeWidth={0.4}
          strokeOpacity={0}
          animate={{ strokeOpacity: [0.04, 0.15, 0.04] }}
          transition={{
            duration: 6 + (parseInt(c.id) % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: parseInt(c.id) * 0.3,
          }}
        />
      ))}
    </svg>
  );
}

export const GeometryBackground = () => {
  const shapes = useMemo(() => generateShapes(28), []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    >
      {/* Linhas conectoras */}
      <WireConnectors shapes={shapes} />

      {/* Formas wireframe */}
      {shapes.map((shape, i) => (
        <WireShape key={i} config={shape} />
      ))}
    </div>
  );
};
