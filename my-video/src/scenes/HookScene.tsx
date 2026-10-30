import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { SceneWrapper } from '../components/SceneWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { CONFIG } from '../config';

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Zoom-out cinematic reveal
  const zoom = interpolate(frame, [0, 90], [1.06, 1.0], {
    extrapolateRight: 'clamp',
  });

  // Accent line draw
  const lineProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 110, mass: 0.9 },
  });
  const lineWidth = interpolate(lineProgress, [0, 1], [0, 300], {
    extrapolateRight: 'clamp',
  });

  // Impact flash at frame 0
  const flashOpacity = interpolate(frame, [0, 3, 14], [0.6, 0.3, 0], {
    extrapolateRight: 'clamp',
  });

  // Sub-text fade-in
  const subOpacity = interpolate(frame, [32, 55], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const subY = interpolate(frame, [32, 55], [24, 0], {
    extrapolateRight: 'clamp',
  });

  // Tag fade-in
  const tagOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SceneWrapper>
      {/* Flash overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle, ${CONFIG.PRIMARY}88 0%, transparent 65%)`,
          opacity: flashOpacity,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          textAlign: 'center',
          transform: `scale(${zoom})`,
        }}
      >
        {/* Eyebrow tag */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.SMALL,
            letterSpacing: '7px',
            textTransform: 'uppercase',
            color: CONFIG.ACCENT,
            fontWeight: 700,
            marginBottom: 36,
            opacity: tagOpacity,
          }}
        >
          2025 — AI REPORT
        </div>

        {/* Line 1 */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.HERO,
            fontWeight: 900,
            color: CONFIG.TEXT,
            lineHeight: 1.1,
            letterSpacing: '-3px',
            marginBottom: 8,
          }}
        >
          <AnimatedText
            text="The future"
            delay={4}
            stagger={7}
            style={{ justifyContent: 'center' }}
          />
        </div>

        {/* Line 2 — gradient */}
        <div style={{ fontSize: CONFIG.FONT_SIZES.HERO, fontWeight: 900, letterSpacing: '-3px', lineHeight: 1.1 }}>
          <AnimatedText
            text="just arrived."
            delay={18}
            stagger={6}
            style={{
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${CONFIG.PRIMARY} 0%, ${CONFIG.ACCENT} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </div>

        {/* Animated underline */}
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
          <div
            style={{
              height: 5,
              width: lineWidth,
              borderRadius: 3,
              background: `linear-gradient(90deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
              boxShadow: `0 0 24px ${CONFIG.ACCENT}cc`,
            }}
          />
        </div>

        {/* Sub-hook */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.BODY,
            color: CONFIG.TEXT_MUTED,
            marginTop: 48,
            fontWeight: 400,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          Here's what's changing everything ↓
        </div>
      </div>
    </SceneWrapper>
  );
};

