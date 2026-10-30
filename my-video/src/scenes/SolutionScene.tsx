import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { SceneWrapper } from '../components/SceneWrapper';
import { CONFIG } from '../config';

interface SolutionCardProps {
  text: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ text, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = index * 22;
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 80, mass: 1.0 },
  });
  const y = interpolate(progress, [0, 1], [110, 0]);
  const opacity = interpolate(progress, [0, 0.25], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(progress, [0, 1], [0.9, 1]);

  const isFirst = index === 0;

  return (
    <div
      style={{
        transform: `translateY(${y}px) scale(${scale})`,
        opacity,
        padding: '30px 36px',
        borderRadius: 28,
        background: isFirst
          ? `linear-gradient(135deg, rgba(108,92,231,0.25), rgba(0,245,212,0.12))`
          : `linear-gradient(135deg, rgba(108,92,231,0.12), rgba(0,245,212,0.05))`,
        border: `1.5px solid ${isFirst ? CONFIG.ACCENT + '55' : 'rgba(255,255,255,0.07)'}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Number badge */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 24,
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: isFirst
            ? `linear-gradient(135deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`
            : CONFIG.PRIMARY + 'bb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          fontWeight: 900,
          color: '#fff',
          boxShadow: isFirst ? `0 0 20px ${CONFIG.ACCENT}66` : 'none',
        }}
      >
        {index + 1}
      </div>

      {/* Left accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 5,
          height: '100%',
          background: `linear-gradient(180deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
          borderRadius: '28px 0 0 28px',
        }}
      />

      <div
        style={{
          fontSize: CONFIG.FONT_SIZES.H2,
          fontWeight: 800,
          color: CONFIG.TEXT,
          paddingLeft: 20,
          lineHeight: 1.25,
          paddingRight: 56,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow camera zoom
  const zoom = interpolate(frame, [0, 360], [1.0, 1.05], {
    extrapolateRight: 'clamp',
  });

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });
  const titleOpacity = interpolate(titleProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Badge pop
  const badgeProgress = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const badgeScale = interpolate(badgeProgress, [0, 1], [0.7, 1]);
  const badgeOpacity = interpolate(badgeProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SceneWrapper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          transform: `scale(${zoom})`,
        }}
      >
        {/* Label */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.SMALL,
            letterSpacing: '7px',
            textTransform: 'uppercase',
            color: CONFIG.ACCENT,
            fontWeight: 700,
            opacity: titleOpacity,
          }}
        >
          THE SOLUTION
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
          }}
        >
          AI works{' '}
          <span
            style={{
              background: `linear-gradient(135deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            for you.
          </span>
        </div>

        {/* Solution cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 8 }}>
          {CONFIG.SOLUTION_POINTS.map((point, i) => (
            <SolutionCard key={i} text={point} index={i} />
          ))}
        </div>

        {/* Social proof badge */}
        <div
          style={{
            marginTop: 12,
            padding: '16px 32px',
            borderRadius: 100,
            background: `linear-gradient(135deg, ${CONFIG.PRIMARY}33, ${CONFIG.ACCENT}18)`,
            border: `1px solid ${CONFIG.ACCENT}44`,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            alignSelf: 'flex-start',
            transform: `scale(${badgeScale})`,
            opacity: badgeOpacity,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: CONFIG.ACCENT,
              boxShadow: `0 0 10px ${CONFIG.ACCENT}`,
            }}
          />
          <span
            style={{
              fontSize: CONFIG.FONT_SIZES.CAPTION,
              color: CONFIG.TEXT,
              fontWeight: 600,
            }}
          >
            Used by 10M+ professionals
          </span>
        </div>
      </div>
    </SceneWrapper>
  );
};

