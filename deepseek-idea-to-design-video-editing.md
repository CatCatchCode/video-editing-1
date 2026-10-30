Claude itself cannot "directly generate" finished video files, but when used with **Anti-Gravity IDE**, it can help you **write video code (Remotion/HyperFrames)** to render professional-grade motion graphics videos. The core logic is: you provide a creative brief, Claude writes React animation code or timeline code, and Anti-Gravity renders it into MP4.

Below are three tiers of methods and a ready-to-use prompt.

### 🟢 Standard Method: "Template-Based"
**Suitable for:** Quickly producing regular Instagram Reels with minimal configuration.
**How it works:** Use existing Claude Skills (such as Remotion Skills) to let Claude directly write code based on templates. You describe what you want, and it generates a complete animation sequence.

- **What to prepare:** Install Node.js, create a Remotion project, and install `remotion-skills` into Anti-Gravity .
- **Steps:** Tell Claude "make a 15-second vertical video with a dark theme, featuring a title appearing, three feature cards, and an ending CTA." Claude generates code, you run `npm run dev` to preview, then render after confirming it's correct.
- **Limitations:** The visual style is relatively basic, mainly text and simple transitions.

### 🟡 Premium Method: "HyperFrames + Professional Component Library"
**Suitable for:** Producing high-quality videos with brand consistency and refined motion design.
**How it works:** Anti-Gravity natively supports HeyGen's **HyperFrames** skill package. It can directly use professional-grade components like GSAP animations, Tailwind styles, and caption systems . You can even use multiple Agents to work in parallel (one handles opening, one handles captions, one handles data visualization).

- **Key advantages:** It uses "timeline + code" to control animations, with great precision. You can tell Claude "make the title twice as big, change the transition to a whip pan," and it will modify the code directly .
- **Advanced components:** Supports `AnimatedTitle` (8 styles), `CaptionOverlay` (TikTok-style), `ParticleField` (particle backgrounds), etc. .

### 🔴 Advanced Method: "Fully Customized Motion Graphics + Programmatic Rendering"
**Suitable for:** Producing viral Reels with "visual impact" and "strong narrative."
**How it works:** Have Claude play the role of a "motion design director," writing purely programmatic animation logic from scratch using Canvas/SVG/WebGL, rather than relying on templates.

- **What you need to do:** Use `motion-studio` or similar Skills, requiring Claude to first output `style_guide.md` (color palette in hex, font sizes, transition rhythms) and `shotlist.md` (storyboard table), and only start writing code after you confirm .
- **Typical output:** Motion Reels with physics engine effects, custom easing curves, audio visualization, and frame-by-frame manual rendering.

---

### 📝 Prompt for Anti-Gravity (Copy and Use)

Paste the following into Anti-Gravity's Agent dialog box (make sure you have installed the relevant HyperFrames or Remotion skill package first):

```text
Role: You are now a senior motion graphics designer and video editor, specializing in producing viral Instagram Reels with visual impact. You need to help me complete a vertical video (1080x1920, 30fps) entirely using code.

Task: Create a 15-second brand promo Reel with a "cyberpunk dark tone + neon glow" style. The style should be professional-grade: do not use ordinary PowerPoint-style fly-ins; use GSAP/Spring physics animations.

Content Structure:
- 0-3s: Hook. A data stream sliding in from the right, with the title text "FUTURE" using RGB split glitch effect to quickly assemble, with a subtle background particle floating effect.
- 3-9s: Feature display. Three semi-transparent glass-morphism cards sliding up in sequence, with a light sweep effect when each card appears. The text on the cards needs a typewriter animation.
- 9-12s: Transition. Use a "whip pan + motion blur" transition.
- 12-15s: Ending. Brand Logo appearing with a spring bounce effect, with a subtitle "Build Your Vision" below, and background particles gathering and then dissipating.

Technical Requirements:
1. Use Remotion (or HyperFrames) to write code, implement animations using GSAP or React Spring.
2. The background must have a subtle noise texture (generated with SVG filter or CSS), not a pure black background.
3. All text animations must have a slow-motion effect (ease-out), not linear.
4. Include a "safe zone" layout to ensure text is not blocked by Instagram UI.

Workflow: Please first output the timeline storyboard (Shotlist) and color palette (Hex codes), and after I confirm, you can then write the code. Do not write the complete code all at once.
```

### 💡 Key Reminders
- **Install the correct Skill first:** The Agent in Anti-Gravity automatically matches skills based on description. Before speaking, make sure you have run `npx skills add heygen-com/hyperframes` or installed `remotion-skills` in the project directory .
- **Don't expect it to "automatically find materials":** Claude can write the animation logic for "glitch effects" and "particles," but it won't automatically go online to find a suitable piece of BGM or real video clips for you. You need to provide `assets/` files yourself, or let it generate purely virtual graphics through code.
- **Iterate in small steps:** Don't expect to get the final version in one shot. Tell it "the title needs to be bigger, change the transition to whip pan," and it will directly modify the code and re-render. This is much more efficient than re-prompting from scratch .


