import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { CONFIG } from '../config';

interface NumberCounterProps {
  target: number;
  unit: string;
  label: string;
  delay?: number;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  target,
  unit,
  label,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const countProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 22, stiffness: 55, mass: 1.4 },
  });
  const value = Math.round(
    interpolate(countProgress, [0, 1], [0, target], {
      extrapolateRight: 'clamp',
    })
  );

  const popProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 200, mass: 0.5 },
  });
  const scale = interpolate(popProgress, [0, 1], [0.5, 1], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(popProgress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Subtle glow pulse
  const glowPulse = Math.sin(frame / 20 + delay) * 0.3 + 0.7;

  return (
    <div
      style={{
        textAlign: 'center',
        transform: `scale(${scale})`,
        opacity,
        flex: 1,
      }}
    >
      <div
        style={{
          fontSize: CONFIG.FONT_SIZES.HERO,
          fontWeight: 900,
          color: CONFIG.ACCENT,
          lineHeight: 1,
          letterSpacing: '-4px',
          textShadow: `0 0 ${40 * glowPulse}px ${CONFIG.ACCENT}cc`,
        }}
      >
        {value}
        <span
          style={{
            fontSize: CONFIG.FONT_SIZES.H2,
            letterSpacing: '-1px',
          }}
        >
          {unit}
        </span>
      </div>
      <div
        style={{
          fontSize: CONFIG.FONT_SIZES.SMALL,
          color: CONFIG.TEXT_MUTED,
          marginTop: 10,
          fontWeight: 500,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  );
};

