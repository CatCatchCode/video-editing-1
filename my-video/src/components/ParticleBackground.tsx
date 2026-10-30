import React from 'react';
import { useCurrentFrame } from 'remotion';
import { CONFIG } from '../config';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  phase: number;
}

const PARTICLES: Particle[] = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i * 137.508) % 100,
  y: (i * 73.31) % 100,
  size: 2 + (i % 5),
  speedX: (i % 3 === 0 ? 1 : -1) * (0.02 + (i % 4) * 0.01),
  speedY: (i % 2 === 0 ? 1 : -1) * (0.015 + (i % 5) * 0.008),
  opacity: 0.12 + (i % 4) * 0.08,
  color: i % 3 === 0 ? CONFIG.ACCENT : CONFIG.PRIMARY,
  phase: i * 0.8,
}));

export const ParticleBackground: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {PARTICLES.map((p) => {
        const px = ((p.x + frame * p.speedX * 3) % 110) - 5;
        const py = ((p.y + frame * p.speedY * 3) % 110) - 5;
        const opacityAnim = p.opacity * (0.6 + Math.sin(frame / 25 + p.phase) * 0.4);
        const glow = p.size > 4;
        return (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              left: `${px}%`,
              top: `${py}%`,
              opacity: opacityAnim,
              filter: glow ? `blur(1px)` : undefined,
              boxShadow: glow ? `0 0 ${p.size * 4}px ${p.color}88` : undefined,
            }}
          />
        );
      })}
    </div>
  );
};

