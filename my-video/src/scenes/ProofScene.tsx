import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { SceneWrapper } from '../components/SceneWrapper';
import { NumberCounter } from '../components/NumberCounter';
import { BarChart } from '../components/BarChart';
import { CONFIG } from '../config';

export const ProofScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });
  const titleOpacity = interpolate(titleProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const titleY = interpolate(titleProgress, [0, 1], [50, 0]);

  return (
    <SceneWrapper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
        }}
      >
        {/* Section label */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.SMALL,
            letterSpacing: '7px',
            textTransform: 'uppercase',
            color: CONFIG.PRIMARY,
            fontWeight: 700,
            opacity: titleOpacity,
          }}
        >
          THE NUMBERS
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.H1,
            fontWeight: 900,
            color: CONFIG.TEXT,
            lineHeight: 1.1,
            letterSpacing: '-2.5px',
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Real results.{' '}
          <span style={{ color: CONFIG.ACCENT }}>Real impact.</span>
        </div>

        {/* Number counters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          {CONFIG.PROOF_STATS.map((stat, i) => (
            <NumberCounter
              key={i}
              target={stat.value}
              unit={stat.unit}
              label={stat.label}
              delay={i * 20}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${CONFIG.PRIMARY}88, ${CONFIG.ACCENT}66, transparent)`,
          }}
        />

        {/* Bar chart */}
        <BarChart bars={CONFIG.PROOF_BARS} delay={30} />
      </div>
    </SceneWrapper>
  );
};

