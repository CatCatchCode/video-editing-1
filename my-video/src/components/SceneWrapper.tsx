import React from 'react';
import { CONFIG } from '../config';
import { GradientBg } from './GradientBg';
import { ParticleBackground } from './ParticleBackground';

interface SceneWrapperProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({
  children,
  showParticles = true,
}) => {
  return (
    <div
      style={{
        width: CONFIG.WIDTH,
        height: CONFIG.HEIGHT,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: CONFIG.FONT_FAMILY,
        color: CONFIG.TEXT,
      }}
    >
      <GradientBg />
      {showParticles && <ParticleBackground />}
      <div
        style={{
          position: 'absolute',
          top: CONFIG.SAFE_TOP,
          bottom: CONFIG.SAFE_BOTTOM,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 72px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

