import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { CONFIG } from '../config';

export const GradientBg: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame, [0, 900], [0, 60], { extrapolateRight: 'clamp' });
  const pulse = Math.sin(frame / 60) * 0.12 + 0.88;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: CONFIG.BG,
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 — top-left purple */}
      <div
        style={{
          position: 'absolute',
          width: 750,
          height: 750,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${CONFIG.PRIMARY}55 0%, transparent 70%)`,
          top: -220 + shift,
          left: -180,
          transform: `scale(${pulse})`,
        }}
      />
      {/* Orb 2 — bottom-right teal */}
      <div
        style={{
          position: 'absolute',
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${CONFIG.ACCENT}33 0%, transparent 70%)`,
          bottom: -120 - shift * 0.4,
          right: -100,
          transform: `scale(${1.1 - pulse * 0.1})`,
        }}
      />
      {/* Orb 3 — mid subtle */}
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${CONFIG.PRIMARY}22 0%, transparent 70%)`,
          top: '45%',
          right: -80,
          transform: `scale(${pulse * 1.05})`,
        }}
      />
    </div>
  );
};

