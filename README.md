# 🎬 Video Editing & Motion Graphics Pipeline (Remotion)

A professional 30-second vertical video (Instagram Reel / Shorts format) created with **Remotion 4**, **React 19**, and **TypeScript**, along with complete guides, design processes, and platform prompts for AI video generation.

---

## 📁 Repository Structure

```
.
├── video-design-process.md               # 📖 Comprehensive design, implementation & optimization guide
├── claude-idea-to-design-video-editing.md # Claude workflow & ideas
├── deepseek-idea-to-design-video-editing.md # DeepSeek workflow & ideas
├── gemini-idea-to-design-video-editing.md # Gemini workflow & ideas
├── perplexity-idea-for-video-editing.md  # Perplexity research & tools
├── chatgpt-idea-to-design-video.md       # ChatGPT prompt guides
│
└── my-video/                             # 🚀 Remotion 4 Project
    ├── src/
    │   ├── config.ts                     # Single source of truth (colors, typography, timings, copy)
    │   ├── Root.tsx                      # Remotion Root & Composition with <Series>
    │   ├── index.ts                      # registerRoot entry
    │   ├── components/                   # Reusable motion components
    │   │   ├── AnimatedText.tsx          # Spring-based word/letter reveals
    │   │   ├── BarChart.tsx              # Animated data visualization
    │   │   ├── GradientBg.tsx            # Multi-layer breathing ambient orbs
    │   │   ├── NumberCounter.tsx         # Spring-eased count-up counters
    │   │   ├── ParticleBackground.tsx    # 28 drifting particles with glow
    │   │   └── SceneWrapper.tsx          # Safe-zone layout container (IG safe margins)
    │   └── scenes/                       # Frame-timed scenes
    │       ├── HookScene.tsx             # 0–3s: Kinetic text reveal + line draw
    │       ├── ProblemScene.tsx          # 3–10s: Staggered slide-in problem cards + shake
    │       ├── SolutionScene.tsx         # 10–22s: Parallax Ken Burns zoom + numbered cards
    │       ├── ProofScene.tsx            # 22–27s: Metrics count-up & bar chart
    │       └── CTAScene.tsx              # 27–30s: Bouncy logo pop + gradient CTA
    ├── public/                           # Assets (images, audio, SFX)
    └── remotion.config.ts                # Render & encoding configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
cd my-video
npm install
```

### 2. Live Preview with Hot Reload
```bash
npm run dev
```
Opens the Remotion Studio in your browser at `http://localhost:3000`.

### 3. Render to MP4
```bash
npx remotion render MainReel out/reel.mp4
```

---

## 🎨 Specifications & Design System

- **Resolution:** 1080 × 1920 (9:16 Vertical)
- **Frame Rate:** 30 FPS
- **Length:** 30.0s (900 frames)
- **Palette:** 
  - Background: `#0B0B12`
  - Primary: `#6C5CE7`
  - Accent: `#00F5D4`
  - Text: `#FFFFFF`
- **Safe Zones:** Top `250px`, Bottom `340px` (avoids Instagram Reel UI overlays)

Read [`video-design-process.md`](./video-design-process.md) for the full breakdown of animation techniques, spring curves, asset workflows, and future optimization strategies.
