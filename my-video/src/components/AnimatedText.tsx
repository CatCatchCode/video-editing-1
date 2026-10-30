import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

interface AnimatedTextProps {
  text: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  mode?: 'word' | 'slide-up';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  style,
  delay = 0,
  stagger = 5,
  mode = 'word',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  if (mode === 'slide-up') {
    const progress = spring({
      frame: frame - delay,
      fps,
      config: { damping: 14, stiffness: 120, mass: 0.8 },
    });
    const y = interpolate(progress, [0, 1], [80, 0]);
    const opacity = interpolate(progress, [0, 0.3], [0, 1], {
      extrapolateRight: 'clamp',
    });
    return (
      <div style={{ overflow: 'hidden' }}>
        <div style={{ transform: `translateY(${y}px)`, opacity, ...style }}>
          {text}
        </div>
      </div>
    );
  }

  // word mode
  const words = text.split(' ');
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.22em',
        ...style,
      }}
    >
      {words.map((word, i) => {
        const wordFrame = frame - delay - i * stagger;
        const progress = spring({
          frame: wordFrame,
          fps,
          config: { damping: 12, stiffness: 100, mass: 0.7 },
        });
        const y = interpolate(progress, [0, 1], [70, 0]);
        const opacity = interpolate(progress, [0, 0.4], [0, 1], {
          extrapolateRight: 'clamp',
        });
        return (
          <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
            <span
              style={{
                display: 'inline-block',
                transform: `translateY(${y}px)`,
                opacity,
              }}
            >
              {word}
            </span>
          </div>
        );
      })}
    </div>
  );
};

