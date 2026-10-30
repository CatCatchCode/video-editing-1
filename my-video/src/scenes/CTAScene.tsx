import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { SceneWrapper } from '../components/SceneWrapper';
import { CONFIG } from '../config';

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo pop spring
  const logoProgress = spring({
    frame: frame - 4,
    fps,
    config: { damping: 9, stiffness: 130, mass: 0.8 },
  });
  const logoScale = interpolate(logoProgress, [0, 1], [0, 1]);
  const logoOpacity = interpolate(logoProgress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Title slide-up
  const titleProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 95 },
  });
  const titleY = interpolate(titleProgress, [0, 1], [50, 0]);
  const titleOpacity = interpolate(titleProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Handle
  const handleProgress = spring({
    frame: frame - 28,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const handleY = interpolate(handleProgress, [0, 1], [40, 0]);
  const handleOpacity = interpolate(handleProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // CTA button
  const btnProgress = spring({
    frame: frame - 40,
    fps,
    config: { damping: 11, stiffness: 95 },
  });
  const btnScale = interpolate(btnProgress, [0, 1], [0.5, 1]);
  const btnOpacity = interpolate(btnProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Pulsing central glow
  const glowIntensity = Math.sin(frame / 9) * 0.2 + 0.8;

  return (
    <SceneWrapper showParticles={true}>
      {/* Pulsing center glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 48%, ${CONFIG.PRIMARY}${Math.round(glowIntensity * 55)
            .toString(16)
            .padStart(2, '0')} 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 36,
          textAlign: 'center',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          <div
            style={{
              width: 128,
              height: 128,
              borderRadius: 40,
              background: `linear-gradient(135deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 68,
              boxShadow: `0 0 60px ${CONFIG.PRIMARY}99, 0 0 120px ${CONFIG.ACCENT}44, 0 24px 48px rgba(0,0,0,0.5)`,
            }}
          >
            ✦
          </div>
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
          Stay ahead
          <br />
          <span
            style={{
              background: `linear-gradient(135deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            of the curve.
          </span>
        </div>

        {/* Handle */}
        <div
          style={{
            fontSize: CONFIG.FONT_SIZES.H2,
            fontWeight: 800,
            color: CONFIG.ACCENT,
            letterSpacing: '-1px',
            transform: `translateY(${handleY}px)`,
            opacity: handleOpacity,
            textShadow: `0 0 30px ${CONFIG.ACCENT}88`,
          }}
        >
          {CONFIG.HANDLE}
        </div>

        {/* CTA Button */}
        <div
          style={{
            transform: `scale(${btnScale})`,
            opacity: btnOpacity,
            padding: '26px 68px',
            borderRadius: 100,
            background: `linear-gradient(135deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
            fontSize: CONFIG.FONT_SIZES.BODY,
            fontWeight: 800,
            color: '#0B0B12',
            letterSpacing: '0.5px',
            boxShadow: `0 8px 48px ${CONFIG.PRIMARY}77, 0 0 80px ${CONFIG.ACCENT}33`,
            cursor: 'default',
          }}
        >
          Follow for more ✦
        </div>
      </div>
    </SceneWrapper>
  );
};

