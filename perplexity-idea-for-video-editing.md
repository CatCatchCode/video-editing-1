Yes—people are using Claude less like a “video generator” and more like an **AI video editor/director**: Claude plans the edit, writes the timeline, generates captions/graphics code, and tools such as Remotion + FFmpeg render the final MP4. For Instagram-style Reels, the winning workflow is: **raw footage → transcription → hook-first cut → animated captions → zooms/SFX/graphics → preview → export**. [remotion](https://www.remotion.dev/docs/ai/coding-agents)

## What you need

- **Claude** for scripting, edit planning, reviewing footage, and giving revision instructions.
- **Antigravity IDE** as your coding-agent workspace; it can run the project, modify files, preview, and render.
- **Node.js** and a Remotion project; Remotion turns React code into frames and FFmpeg encodes them into an MP4. [remotion](https://www.remotion.dev/docs/ai/coding-agents)
- **Your assets**: raw vertical video, logo, brand colors, fonts, music/SFX, and optional images.
- **A brand/style brief**: target audience, platform, aspect ratio, tone, hook, and CTA.

Remotion is the most practical “Claude-to-video” stack because Claude can write deterministic React components for text animations, transitions, overlays, and scene timing; FFmpeg then handles final encoding and audio post-processing. [github](https://github.com/az9713/claude-code-remotion/blob/main/docs/REMOTION_EXPLAINED.md)

## Standard method: easy Claude-assisted edit

Use this when you want a clean Reel quickly without complex motion design.

1. Record a vertical 9:16 video, ideally with clear audio.
2. Put the raw file in the project’s `public/` folder.
3. Ask Claude/Antigravity to transcribe it and identify the strongest hook, filler words, pauses, and retakes.
4. Ask for a tight 30–60 second cut: remove dead air, start with the hook, add word-by-word captions, light punch-in zooms, and simple music.
5. Preview before rendering; then export a 1080×1920 MP4.

Creators commonly instruct Claude to focus on dead air, the first two seconds, safe text zones, pacing, and color grading before producing the edit.  A good practice is to require a **beat table**—a second-by-second plan—and a **contact sheet** of still frames before the final render, so you can approve the edit visually. [youtube](https://www.youtube.com/watch?v=03BNd8ygnq8&pp=ygUgdmlkZW8gZWRpdGluZyB3aXRoIGNsYXVkZSBjbGF1ZGU=)

## Premium method: branded Instagram Reel

This is the method behind polished, “famous-looking” Reels: consistent branding, better pacing, custom graphics, and multiple variations for testing.

1. **Create a style system first.** Give Claude your brand colors, fonts, logo placement, caption style, and 2–3 reference Reels. Claude can analyze references and translate the style into an edit plan. [youtube](https://www.youtube.com/watch?v=oTJGDMKAbH4)
2. **Build a master edit.** Ask Claude to make one strong base Reel with a hook, 3–5 value beats, captions, b-roll/graphics, and CTA.
3. **Generate variations.** Ask for 3–5 alternate openings and structures—for example: “straight-in,” “question hook,” “problem-agitate-solution,” and “statistic hook.” This is useful for Instagram trial Reels and lets you test which opening retains viewers. [youtube](https://www.youtube.com/watch?v=vKPeVDiEkhQ)
4. **Add motion graphics.** Use animated lower-thirds, progress bars, icons, highlight boxes, counters, and kinetic typography.
5. **Polish audio.** Remove noise, normalize voice, duck music under speech, and add subtle whooshes/clicks only where they support the message.
6. **Review and iterate.** Ask for specific fixes: “Hook is slow,” “captions cover my face,” “make zooms less frequent,” “increase contrast on captions.”

The premium workflow is not “one prompt, final video.” It is: **brief → edit plan → preview stills → revise → render → test variations**. [youtube](https://www.youtube.com/watch?v=oTJGDMKAbH4)

## Advanced method: cinematic motion-design video

For high-end Instagram videos—3D text, animated infographics, product promos, kinetic typography—use Claude as the creative director and let it write the motion-design code.

- Use **Remotion** for timeline control and rendering.
- Use **Three.js** inside Remotion for 3D objects, lighting, camera movement, and material animations.
- Use **Lottie/SVG/CSS animations** for clean 2D graphics.
- Use **FFmpeg** for final compression, audio mixing, and platform-specific exports. [github](https://github.com/az9713/claude-code-remotion/blob/main/docs/REMOTION_EXPLAINED.md)

The advanced pipeline is:

\[
\text{Creative brief} \rightarrow \text{Claude code} \rightarrow \text{Remotion scenes} \rightarrow \text{3D/2D graphics} \rightarrow \text{FFmpeg export}
\]

Claude writes scene components, maps them to a timeline, and FFmpeg stitches rendered frames with audio into the final MP4.  This can look like After Effects-style motion graphics, but it is reproducible: change one text/color variable and re-render. [github](https://github.com/az9713/claude-code-remotion/blob/main/docs/REMOTION_EXPLAINED.md)

## Best workflow for you

Since you will use **Antigravity IDE**, use this order:

1. Create a blank Remotion project.
2. Add your raw video, logo, fonts, music, and brand guide to the project.
3. Paste the prompt below into Antigravity.
4. Review the preview and still frames.
5. Give short revision notes.
6. Render only after you approve the preview.

Do **not** ask for the final render immediately. First require a storyboard, beat table, and preview; this prevents wasted renders and gives you control over pacing. [youtube](https://www.youtube.com/watch?v=03BNd8ygnq8&pp=ygUgdmlkZW8gZWRpdGluZyB3aXRoIGNsYXVkZSBjbGF1ZGU=)

## Copy-paste prompt for Antigravity

```text
You are a senior professional video editor, motion designer, and Instagram Reels strategist.

Create a premium, high-retention vertical Instagram Reel using Remotion.

PROJECT GOAL:
Create a professional 9:16 Instagram Reel, 1080x1920, 30 fps, approximately 35–50 seconds long.

INPUT ASSETS:
- Raw video: public/raw-video.mp4
- Logo: public/logo.png
- Brand colors: primary #0A0A0A, accent #FF3B30, secondary #FFFFFF
- Font: Use a bold modern sans-serif font such as Inter, Poppins, or Montserrat
- Music: public/music.mp3
- Optional SFX folder: public/sfx/

VIDEO STYLE:
- Premium, modern, clean, energetic Instagram Reel style
- Cinematic dark background with high-contrast text
- Smooth but subtle camera punch-ins
- Fast pacing, but not chaotic
- No cheesy transitions
- No watermark
- No low-quality AI artifacts
- Mobile-first design: keep all captions and graphics inside safe margins

EDITING REQUIREMENTS:
1. First, inspect the raw video and transcribe the speech.
2. Identify the strongest hook from the first 10 seconds. If no strong hook exists, create a text-based hook overlay.
3. Remove silences, repeated takes, filler words, and unnecessary pauses.
4. Create a tight narrative structure:
   - 0–2 seconds: scroll-stopping hook
   - 2–10 seconds: problem or context
   - 10–30 seconds: main value, explanation, or demonstration
   - Final 5 seconds: clear CTA
5. Add word-by-word animated captions, synchronized to speech.
6. Use dynamic emphasis: important words should scale, change color, or receive a highlight box.
7. Add subtle zoom-ins on key moments, but avoid excessive movement.
8. Add clean motion graphics:
   - Animated logo intro, maximum 1.5 seconds
   - Lower-third title
   - Animated progress bar
   - Icon or graphic overlays where relevant
   - Smooth text reveals
9. Add professional audio treatment:
   - Clean and normalize voice
   - Reduce background noise
   - Add background music at low volume
   - Duck music whenever speech is present
   - Add subtle whoosh, pop, or click SFX only when they improve pacing
10. Apply cinematic color grading: slightly increased contrast, controlled highlights, natural skin tones, and consistent exposure.

BEFORE RENDERING:
- Create a scene-by-scene beat table with timecodes, visuals, captions, animations, and audio cues.
- Generate a contact sheet with one still frame per major scene.
- Start the Remotion preview so I can review the edit.
- Do not render the final MP4 until I approve the preview.

TECHNICAL REQUIREMENTS:
- Use Remotion with React components.
- Store reusable styles, colors, fonts, and animation settings in a central config file.
- Make every scene a separate component.
- Use responsive scaling so text and graphics remain readable on mobile.
- Ensure captions never cover the speaker’s face.
- Export final video as out/final-reel.mp4 in H.264 MP4 format.
- Optimize the file for Instagram upload without visible quality loss.

FIRST RESPONSE:
Do not write code yet. First give me:
1. Your understanding of the video
2. A proposed hook
3. A scene-by-scene beat table
4. A list of graphics and effects you plan to add
5. Any missing assets or questions

After I approve, build the Remotion project and show me the preview.
```

## Short revision prompts

After the first preview, use prompts like:

- “Make the first 2 seconds more aggressive: add a bold hook, faster text reveal, and a subtle zoom.”
- “Reduce zoom frequency by 50% and make transitions smoother.”
- “Make captions larger, add a black outline, and keep them in the lower-middle safe zone.”
- “Add an animated red highlight behind the most important word in each caption.”
- “Make the ending CTA stronger: show the logo, a short CTA line, and a subtle scale animation.”
- “Render a 15-second preview first, then wait for my approval before full render.”

## Important reality check

Claude itself does not magically produce a finished cinematic video from nothing. The reliable professional setup is **Claude + a code-based video engine such as Remotion + FFmpeg**, with you approving the creative direction and preview.  For AI-generated backgrounds or extra visual shots, creators sometimes connect separate image/video-generation tools to Claude, then Claude incorporates those assets into the edit. [remotion](https://www.remotion.dev/docs/ai/coding-agents)