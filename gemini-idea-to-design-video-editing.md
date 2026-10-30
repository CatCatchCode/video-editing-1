Claude does not natively render video pixels; instead, it acts as your creative director and orchestrator. Creators are using Claude AI (via environments like the Antigravity IDE or Claude Code) connected to Model Context Protocol (MCP) plugins. In this setup, Claude writes the script, breaks it into scenes, selects the best AI video model for each shot, and commands those external models to generate and assemble the final MP4.

### What is Required

To design videos using Claude, you need an orchestration environment and a video generation capability:

* **The IDE:** Antigravity IDE (or Claude Code) running locally.
* **An MCP Video Plugin:** A video generation skill installed in your IDE's marketplace (e.g., Pexo, OpenArt, or Sora 2 Pro integrations).
* **API Access:** Active API keys for the generation models your plugin uses (like Veo 3.1, Kling 3.0, or Seedance 2.0).

---

### The Three Tiers of Video Generation

**1. The Standard Method: Single-Prompt Generation**
This is the fastest approach for simple B-roll or straightforward visual concepts.

* **How it works:** You provide a basic concept in plain English. Claude writes a single optimized technical prompt and sends it to a connected video model.
* **The Workflow:** You type, "Generate a 10-second cinematic video of a neon-lit cyberpunk street in 9:16 aspect ratio." Claude formats this for the specific video engine, runs the generation, and returns a single, continuous MP4.

**2. The Premium Method: Scene-by-Scene Narrative Assembly**
Used for structured Instagram Reels, product promos, and UGC-style (User Generated Content) videos.

* **How it works:** You treat Claude like a human video editor by providing a "Creative Brief" rather than a simple prompt. Claude breaks your idea into a psychological structure: the Hook, the Problem, the Solution, the Proof, and the Call-to-Action (CTA).
* **The Workflow:** Claude writes distinct visual prompts for each scene. It might use an AI-influencer workflow to generate a character for the talking-head segments, overlay text graphics, and stitch the 4-5 scenes together into a cohesive 45-second Reel before handing you the final file.

**3. The Advanced Method: Multi-Agent Parallel Orchestration (Antigravity)**
This is the bleeding-edge approach used by top creators, leveraging the Antigravity IDE to run multiple AI agents simultaneously.

* **How it works:** You step back and act purely as the Creative Director. You give Antigravity a master prompt. Antigravity spawns one sub-agent to generate base product images (using Flux or Nano Banana Pro), a second agent to animate those images into dynamic video shots (using Sora 2 Pro or Kling 3.0), and a third agent to handle HTML/GSAP motion graphics and beat-syncing to audio.
* **The Workflow:** Claude automatically routes different shots to the most capable models (e.g., product close-ups to Kling, wide cinematic sweeps to Veo). If a shot fails, the agent self-corrects and re-generates it. You simply review the timeline and say, "Make the second shot slower," and the agent surgically edits the code and re-renders that specific clip.

---

### Your Antigravity IDE Master Prompt

To execute the Advanced Method, you must explicitly instruct the Antigravity agent on how to behave, how to structure the narrative, and how to utilize its video tools. Paste this exact prompt into your Antigravity IDE to generate a high-end Instagram Reel.

> **Role:** You are an elite AI Video Director and Motion Graphics Expert. Your task is to use your installed video generation and image animation MCP plugins to produce a highly engaging, professional 30-second Instagram Reel in a 9:16 aspect ratio.
> **The Brief:**
> * **Topic:** [Insert your video topic, e.g., Top 3 AI Tools for Productivity]
> * **Vibe & Tone:** Fast-paced, premium cinematic feel, highly engaging, optimized for zero-attention-span scrolling.
> * **Visual Style:** Photorealistic subjects combined with sleek, modern motion-graphic text overlays (glassmorphism style).
> 
> 
> **Execution Steps:**
> 1. **Script & Storyboard:** Break the video into 4 distinct scenes:
> * *Scene 1 (0-3s):* The Scroll-Stopping Hook (High motion, bold text).
> * *Scene 2 (3-12s):* The Core Value/Problem introduction.
> * *Scene 3 (12-25s):* The Solution/Visual demonstration.
> * *Scene 4 (25-30s):* The Call to Action (Point to profile/link).
> 
> 
> 2. **Model Routing:** Auto-select the best available video model for each shot. Use Veo 3.1 for cinematic sweeping shots and Kling 3.0 or Sora 2 Pro for complex object motion.
> 3. **Generation:** Generate each scene in parallel to save time.
> 4. **Post-Production:** Apply dynamic zoom-ins, fast transitions (whip pans), and overlay bold, animated captions synced to the core message.
> 
> 
> **Output:** Do not ask me for technical parameters. Handle all tool calls autonomously and return the final stitched MP4. If any shot lacks professional lighting or smooth motion, self-correct and regenerate it before presenting the final file to me.