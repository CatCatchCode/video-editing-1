import React from 'react';
import { Composition, Series } from 'remotion';
import { HookScene } from './scenes/HookScene';
import { ProblemScene } from './scenes/ProblemScene';
import { SolutionScene } from './scenes/SolutionScene';
import { ProofScene } from './scenes/ProofScene';
import { CTAScene } from './scenes/CTAScene';
import { CONFIG } from './config';

const { SCENES } = CONFIG;

const MainReel: React.FC = () => {
  return (
    <Series>
      <Series.Sequence
        durationInFrames={SCENES.HOOK.end - SCENES.HOOK.start}
      >
        <HookScene />
      </Series.Sequence>

      <Series.Sequence
        durationInFrames={SCENES.PROBLEM.end - SCENES.PROBLEM.start}
      >
        <ProblemScene />
      </Series.Sequence>

      <Series.Sequence
        durationInFrames={SCENES.SOLUTION.end - SCENES.SOLUTION.start}
      >
        <SolutionScene />
      </Series.Sequence>

      <Series.Sequence
        durationInFrames={SCENES.PROOF.end - SCENES.PROOF.start}
      >
        <ProofScene />
      </Series.Sequence>

      <Series.Sequence
        durationInFrames={SCENES.CTA.end - SCENES.CTA.start}
      >
        <CTAScene />
      </Series.Sequence>
    </Series>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MainReel"
      component={MainReel}
      durationInFrames={CONFIG.DURATION_FRAMES}
      fps={CONFIG.FPS}
      width={CONFIG.WIDTH}
      height={CONFIG.HEIGHT}
      defaultProps={{}}
    />
  );
};
