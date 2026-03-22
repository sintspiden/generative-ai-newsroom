---
title: "How to change steps in latest Comfyui LTX 2.3?"
date: "2026-03-23"
category: "LTX-2.3"
source: "r/StableDiffusion"
url: https://www.reddit.com/r/StableDiffusion/comments/1s0rbn4/how_to_change_steps_in_latest_comfyui_ltx_23/
tags: ["ltx-2.3", "stable-diffusion", "reddit"]
summary: "Discussion clarifies that the default distilled LTX 2.3 workflow is fixed to 8 steps and outlines how to switch to a higher-step non-distilled path."
---

This thread gives actionable workflow guidance for LTX-2.x users in ComfyUI: if you need step control beyond the distilled defaults, you must rewire sampling and apply the distill LoRA only where intended in the pipeline.
