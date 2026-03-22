---
title: "LTX-2.x 24h Signals"
date: "2026-03-23"
category: "LTX-2.3"
source: "r/StableDiffusion"
tags: ["ltx-2.3", "ltx-2.x", "reddit", "24h", "signals"]
summary: "Low-activity window: 2 LTX-2.x help threads, with practical signals around distilled-vs-dev workflow behavior and prompt-driven VRAM spikes in LTX 2.3."
url: https://www.reddit.com/r/StableDiffusion/new/
---

## Models

- [Changing the prompt leads to a memory problem](https://www.reddit.com/r/StableDiffusion/comments/1s0xm0r/changing_the_prompt_leads_to_a_memory_problem/) — user reports prompt changes triggering `VAEDecodeTiled` allocation failures on `ltx-2.3-22b-dev-Q5_K_M.gguf`; practical signal that prompt complexity can materially alter VRAM pressure.

## Tools/Workflows

- [How to change steps in latest Comfyui LTX 2.3?](https://www.reddit.com/r/StableDiffusion/comments/1s0rbn4/how_to_change_steps_in_latest_comfyui_ltx_23/) — confirms current built-in distilled templates are fixed to 8 steps; moving to higher-step/non-distilled flow requires swapping manual sigmas for a sampler and adjusting distill LoRA placement/strength.

## Resources

- No new high-signal LTX-2.x resource drops (guides/repos/workflow packs) surfaced in this 24h JST window.
