Hey Claude, I just want to know how to design video by using Claude AI. So tell me how people are designing the video by using Claude. These videos are famous on Instagram, so let me know how you are designing these videos. What are the things that is required, how we should proceed, how to take help from you to design video for video editing. Tell me exactly what are the steps people are taking and how people are taking your help to designing their video, and what are the best method and easy method to design video, and what are the advanced level of designing the video. Tell me all the three: standard and method, premium method, and advanced method of designing the video by using Claude AI. And I at the end also give me an example give me a prompt that I will use to design a video. I will use anti-gravity IDE for designing my video. So anti-gravity will do everything. Just help me give a good prompt that will design a good video with effects, after effect, graphic, good graphics. It should be a professional video editor. It should look like

# Designing videos with Claude (Instagram-style)

Claude can't output an MP4 by itself. It **writes code**, and the code renders into a video. Most of the "AI-made videos" you see on Instagram (animated text, kinetic typography, captions, charts, product promos) are made with **Remotion**, a framework that builds videos using React. You describe the video in plain English, Claude writes the frame-accurate React code, and it renders to MP4. Remotion also has an official Agent Skills bundle so coding agents like Claude learn its timing, media, and composition rules.

## What you need

- Node.js installed
- Antigravity IDE with a Claude model selected (if it's available in your model picker)
- Remotion project and the Remotion skills installed
- Your assets: logo, fonts, brand colors, screenshots or footage, voiceover or music
- A clear idea: topic, length, and audience

## Method 1: Standard (easiest, no code)

Claude is your **director and scriptwriter**. You edit in CapCut, Premiere or DaVinci.

1. Ask Claude for a hook, script, and scene-by-scene shot list for a 30-second Reel.
2. Ask for on-screen text, caption timing, and music mood.
3. Ask for a CapCut/Premiere edit plan: cuts, zooms, transitions, and where to place each effect.
4. Record or collect footage, then edit by following the plan.

Best for beginners. Quality depends on your editing.

## Method 2: Premium (code-based motion graphics)

Claude and Antigravity **build the video itself** in Remotion. This is the trending method.

1. Set up the project. The commands are `npx create-video --yes --blank my-video`, then `cd my-video`, `npm install`, `npx remotion skills add`, and `npm run dev`.
2. Remotion also has a Claude Code plugin that includes the Agent Skills. If you use Claude Code in a terminal, that's an option too.
3. Write a detailed brief (see the prompt below).
4. Preview in the browser, then tell Claude what to change: "make the intro faster", "bigger text", "add glow".
5. Render with `npx remotion render`.

Output is a clean 1080×1920 vertical video with animated text, graphics, charts, and captions. It looks like After Effects work, but it's code.

## Method 3: Advanced (full automated pipeline)

This is for creators who post daily.

- **Script:** Claude writes it from your notes or a topic list.
- **Voice:** a text-to-speech tool (e.g. ElevenLabs).
- **Captions:** speech-to-text (e.g. Whisper) gives word-level timestamps, and Remotion makes animated karaoke-style captions.
- **Visuals:** Three.js 3D scenes, Lottie animations, particle systems, shader backgrounds, data-driven charts.
- **Templates:** parameterized compositions. You change a JSON file (title, colors, images) and render 10 videos in a batch.
- **Automation:** a script that renders, exports, and schedules posts.

Since your project already has a content pipeline, this method fits naturally with it.

## Reality check

Claude gives you strong motion design, layout, and code. It won't generate real footage, photoreal clips, or music. For those you need stock footage, your own recordings, or other tools.

## Prompt for Antigravity

Replace the [brackets]:

```
You are a senior motion designer and Remotion engineer. Build a professional
vertical video in this Remotion project using the installed Remotion skills.

GOAL
A [30]-second Instagram Reel about "[TOPIC]" for [AUDIENCE].
Tone: [bold / premium / techy / playful]. Style reference: [describe, e.g. Apple keynote, Linear.app, MKBHD intro].

TECH SPEC
- 1080x1920, 30 fps, H.264 MP4
- TypeScript, one reusable <Scene> component per scene, all timing via
  frames (use spring() and interpolate(), no CSS transitions)
- Put all text, colors and timings in a single config file so I can edit easily

DESIGN SYSTEM
- Colors: background [#0B0B12], primary [#6C5CE7], accent [#00F5D4], text [#FFFFFF]
- Fonts: [Inter / Poppins] (load with @remotion/google-fonts)
- Keep safe margins for Instagram UI (top 250px, bottom 340px empty)
- Consistent spacing, large readable text (min 64px), max 2 lines per screen

STRUCTURE (adjust timing)
1. 0-3s HOOK: bold statement with a kinetic text reveal, punchy and fast
2. 3-10s PROBLEM: 3 animated points with icons sliding in with staggered springs
3. 10-22s SOLUTION: product/idea showcase with [screenshots / charts / 3D]
4. 22-27s PROOF: animated counters and a bar/line chart
5. 27-30s CTA: logo reveal, handle [@yourhandle], "Follow for more"

EFFECTS (After Effects style)
- Spring-based text reveals, per-word and per-letter staggering
- Smooth scene transitions (slide, wipe, zoom through) using @remotion/transitions
- Subtle camera motion: slow zoom, parallax layers, light shake on impacts
- Animated gradient background, floating particles, soft glow and blur
- Masks, line-draw animations, number count-ups
- Easing must feel premium: no linear motion

CAPTIONS
- Word-by-word animated captions synced to [voiceover.mp3], active word highlighted
  in the accent color

AUDIO
- Background music at low volume with fade in/out, whoosh SFX on transitions,
  voiceover on top (assets in /public)

WORKFLOW
1. First show me a short scene plan and ask me about missing assets
2. Build the project, run the preview, fix any errors yourself
3. Check the frames at each scene boundary for text overflow or overlap
4. Render the final to /out/reel.mp4 and tell me the command

Quality bar: it should look like a paid agency motion-graphics video, not a template.
```

## Tips

- Iterate in small steps: "make the hook 20% faster" works better than "improve it".
- Give a reference style. It's the biggest quality boost.
- Put your logo and fonts in the `/public` folder first.

Your message cut off at "It should look like…". What style do you want (e.g. Apple-style minimal, neon tech, coding tutorial, product promo)? Also tell me the topic, and I'll tailor the prompt exactly for it.