import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { CONFIG } from '../config';

interface Bar {
  label: string;
  value: number;
}

interface BarChartProps {
  bars: Bar[];
  delay?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ bars, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
      }}
    >
      {bars.map((bar, i) => {
        const barDelay = delay + i * 14;
        const progress = spring({
          frame: frame - barDelay,
          fps,
          config: { damping: 18, stiffness: 75, mass: 1.1 },
        });
        const widthPct = interpolate(progress, [0, 1], [0, bar.value], {
          extrapolateRight: 'clamp',
        });
        const rowOpacity = interpolate(progress, [0, 0.2], [0, 1], {
          extrapolateRight: 'clamp',
        });
        const rowY = interpolate(progress, [0, 1], [20, 0]);

        return (
          <div
            key={i}
            style={{
              opacity: rowOpacity,
              transform: `translateY(${rowY}px)`,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                fontSize: CONFIG.FONT_SIZES.CAPTION,
                color: CONFIG.TEXT,
                fontWeight: 600,
              }}
            >
              <span>{bar.label}</span>
              <span style={{ color: CONFIG.ACCENT, fontWeight: 800 }}>
                {Math.round(widthPct)}%
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: 14,
                borderRadius: 7,
                background: 'rgba(255,255,255,0.07)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${widthPct}%`,
                  height: '100%',
                  borderRadius: 7,
                  background: `linear-gradient(90deg, ${CONFIG.PRIMARY}, ${CONFIG.ACCENT})`,
                  boxShadow: `0 0 18px ${CONFIG.ACCENT}77`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

