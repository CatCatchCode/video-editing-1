import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { SceneWrapper } from '../components/SceneWrapper';
import { CONFIG } from '../config';

interface ProblemPointProps {
  icon: string;
  text: string;
  index: number;
}

const ProblemPoint: React.FC<ProblemPointProps> = ({ icon, text, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = index * 28;

  const slideProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 85, mass: 0.9 },
  });
  const x = interpolate(slideProgress, [0, 1], [-130, 0]);
  const opacity = interpolate(slideProgress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Impact shake on entry
  const shakeProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 7, stiffness: 320, mass: 0.3 },
  });
  const shake = interpolate(
    shakeProgress,
    [0, 0.15, 0.35, 0.55, 1],
    [0, -10, 6, -3, 0]
  );

  const isActive = frame > delay + 8;
  const borderColor = isActive ? `${CONFIG.ACCENT}44` : 'rgba(255,255,255,0.06)';

  return (
    <div
      style={{
        transform: `translateX(${x + shake}px)`,
        opacity,
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        width: '100%',
        padding: '28px 32px',
        borderRadius: 24,
        background: CONFIG.CARD_BG,
        border: `1.5px solid ${borderColor}`,
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow edge */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 4,
          height: '100%',
          background: `linear-gradient(180deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
          opacity: isActive ? 1 : 0,
          borderRadius: '24px 0 0 24px',
        }}
      />
      <div
        style={{
          fontSize: 52,
          width: 72,
          textAlign: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: CONFIG.FONT_SIZES.BODY,
          color: CONFIG.TEXT,
          fontWeight: 600,
          lineHeight: 1.3,
          flex: 1,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });
  const titleY = interpolate(titleProgress, [0, 1], [60, 0]);
  const titleOpacity = interpolate(titleProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SceneWrapper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
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
          THE PROBLEM
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.H1,
            fontWeight: 900,
            color: CONFIG.TEXT,
            lineHeight: 1.1,
            letterSpacing: '-2.5px',
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}
        >
          Old ways
          <br />
          <span style={{ color: CONFIG.PRIMARY }}>aren't</span> working.
        </div>

        {/* Problem cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 12,
          }}
        >
          {CONFIG.PROBLEM_POINTS.map((point, i) => (
            <ProblemPoint
              key={i}
              icon={point.icon}
              text={point.text}
              index={i}
            />
          ))}
        </div>
      </div>
    </SceneWrapper>
  );
};

