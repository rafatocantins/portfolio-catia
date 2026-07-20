'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ShapeConfig {
  type: 'circle' | 'triangle' | 'hexagon' | 'diamond' | 'ring';
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
  blur: number;
}

interface Connector {
  from: number;
  to: number;
}

function generateShapes(count: number): { shapes: ShapeConfig[]; connectors: Connector[] } {
  const types = ['circle', 'triangle', 'hexagon', 'diamond', 'ring'] as const;
  const shapes: ShapeConfig[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const x = ((Math.sin(i * 7.3 + 1.1) * 0.5 + 0.5) * 88 + 6);
    const y = ((Math.cos(i * 5.7 + 2.3) * 0.5 + 0.5) * 88 + 6);
    const size = 30 + ((Math.sin(i * 11.1 + 3.7) * 0.5 + 0.5) * 180);

    shapes.push({
      type: types[i % types.length],
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      size: Math.round(size),
      rotation: Math.round(((i * 37 + 13) % 360) * 10) / 10,
      // Muito mais visivel: 0.08 a 0.25
      fillOpacity: Math.round((0.08 + (Math.sin(i * 2.3) * 0.5 + 0.5) * 0.17) * 1000) / 1000,
      strokeOpacity: Math.round((0.15 + (Math.cos(i * 3.1) * 0.5 + 0.5) * 0.25) * 1000) / 1000,
      floatDuration: 12 + ((i * 7 + 3) % 14),
      floatDelay: ((i * 1.8) % 4) * -1,
      pulseDuration: 3 + ((i * 2.5) % 4),
      pulseDelay: ((i * 1.2) % 2.5) * -1,
      rotateDuration: 18 + ((i * 5 + 7) % 26),
      blur: Math.round((Math.sin(i * 4.1) * 0.5 + 0.5) * 3 * 10) / 10,
    });
  }

  // Criar conectores entre formas proximas (efeito constelacao)
  const connectors: Connector[] = [];
  for (let i = 0; i < shapes.length; i++) {
    for (let j = i + 1; j < shapes.length; j++) {
      const dx = shapes[i].x - shapes[j].x;
      const dy = shapes[i].y - shapes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 25) {
        connectors.push({ from: i, to: j });
      }
    }
  }

  return { shapes, connectors };
}

function Shape({ config }: { config: ShapeConfig }) {
  const { type, x, y, size, rotation, fillOpacity, strokeOpacity, blur } = config;
  const accent = '#FFD527';

  const floatAnimation = useMemo(() => ({
    y: [0, -20, 0, 14, 0],
    x: [0, 8, 0, -10, 0],
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
    opacity: [fillOpacity, fillOpacity * 1.6, fillOpacity],
    transition: {
      duration: config.pulseDuration,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: config.pulseDelay,
    },
  }), [fillOpacity, config.pulseDuration, config.pulseDelay]);

  const scaleAnimation = useMemo(() => ({
    scale: [1, 1.12, 1],
    transition: {
      duration: config.pulseDuration * 1.3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: config.pulseDelay + 1,
    },
  }), [config.pulseDuration, config.pulseDelay]);

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
            stroke={accent}
            strokeOpacity={strokeOpacity}
            strokeWidth={1.5}
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
            stroke={accent}
            strokeOpacity={strokeOpacity}
            strokeWidth={1.5}
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
            stroke={accent}
            strokeOpacity={strokeOpacity}
            strokeWidth={1.5}
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
            stroke={accent}
            strokeOpacity={strokeOpacity}
            strokeWidth={1.5}
          />
        );
      }

      case 'ring':
        return (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 2}
            fill="none"
            stroke={accent}
            strokeOpacity={strokeOpacity}
            strokeWidth={2}
            strokeDasharray={`${size * 0.25} ${size * 0.15}`}
          />
        );

      default:
        return null;
    }
  };

  const containerSize = size + 10;

  return (
    <motion.div
      animate={{
        ...floatAnimation,
        ...scaleAnimation,
      }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: containerSize,
        height: containerSize,
        pointerEvents: 'none',
        zIndex: 0,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
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

// SVG para linhas conectoras entre formas
function Connectors({ shapes, connectors }: { shapes: ShapeConfig[]; connectors: Connector[] }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', zIndex: 0 }}
    >
      {connectors.map((c, i) => {
        const from = shapes[c.from];
        const to = shapes[c.to];
        return (
          <motion.line
            key={i}
            x1={`${from.x}%`}
            y1={`${from.y}%`}
            x2={`${to.x}%`}
            y2={`${to.y}%`}
            stroke="#FFD527"
            strokeWidth={0.6}
            strokeOpacity={0.12}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.06, 0.18, 0.06] }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        );
      })}
    </svg>
  );
}

// Grid de pontos animados no fundo
function AnimatedGrid() {
  const dots = useMemo(() => {
    const result: { x: number; y: number; delay: number }[] = [];
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        result.push({
          x: 8 + col * 12,
          y: 5 + row * 18,
          delay: (row + col) * 0.3,
        });
      }
    }
    return result;
  }, []);

  return (
    <div className="absolute inset-0" style={{ pointerEvents: 'none', zIndex: 0 }}>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: 2,
            height: 2,
            backgroundColor: '#FFD527',
          }}
          animate={{
            opacity: [0.04, 0.22, 0.04],
            scale: [1, 2.5, 1],
          }}
          transition={{
            duration: 4 + (i % 3) * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

export const GeometryBackground = () => {
  const { shapes, connectors } = useMemo(() => generateShapes(32), []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    >
      {/* Grid de pontos base */}
      <AnimatedGrid />

      {/* Linhas conectoras entre formas */}
      <Connectors shapes={shapes} connectors={connectors} />

      {/* Formas geometricas */}
      {shapes.map((shape, i) => (
        <Shape key={i} config={shape} />
      ))}

      {/* Gradiente radial de fundo para profundidade */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,213,39,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
