export const CONFIG = {
  // Dimensions
  WIDTH: 1080,
  HEIGHT: 1920,
  FPS: 30,
  DURATION_FRAMES: 900, // 30s × 30fps

  // Safe zones (Instagram UI)
  SAFE_TOP: 250,
  SAFE_BOTTOM: 340,

  // Colors
  BG: '#0B0B12',
  PRIMARY: '#6C5CE7',
  ACCENT: '#00F5D4',
  TEXT: '#FFFFFF',
  TEXT_MUTED: 'rgba(255,255,255,0.55)',
  CARD_BG: 'rgba(255,255,255,0.05)',
  GLOW: 'rgba(108,92,231,0.4)',

  // Scene timing (in frames at 30fps)
  SCENES: {
    HOOK:     { start: 0,   end: 90  }, // 0–3s
    PROBLEM:  { start: 90,  end: 300 }, // 3–10s
    SOLUTION: { start: 300, end: 660 }, // 10–22s
    PROOF:    { start: 660, end: 810 }, // 22–27s
    CTA:      { start: 810, end: 900 }, // 27–30s
  },

  // Typography
  FONT_FAMILY: '"Inter", "Helvetica Neue", sans-serif',
  FONT_SIZES: {
    HERO: 96,
    H1: 80,
    H2: 64,
    BODY: 48,
    CAPTION: 36,
    SMALL: 28,
  },

  // Content
  TOPIC: 'AI Is Changing How We Work',
  HANDLE: '@aiforpros',
  HOOK_LINES: ['The future', 'just arrived.'],
  PROBLEM_POINTS: [
    { icon: '⏰', text: 'Hours wasted on repetitive tasks' },
    { icon: '🧠', text: 'Knowledge stuck in silos' },
    { icon: '📉', text: 'Teams burning out faster' },
  ],
  SOLUTION_POINTS: [
    'AI automates the grunt work',
    'Instant knowledge retrieval',
    'Focus on what matters most',
  ],
  PROOF_STATS: [
    { label: 'Productivity Boost', value: 40, unit: '%' },
    { label: 'Hours Saved / Week', value: 12, unit: 'h' },
    { label: 'Teams Using AI', value: 73, unit: '%' },
  ],
  PROOF_BARS: [
    { label: 'Early Adopters', value: 87 },
    { label: 'Enterprise Teams', value: 73 },
    { label: 'Freelancers', value: 65 },
  ],
};

