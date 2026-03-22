---
title: "Changing the prompt leads to a memory problem"
date: "2026-03-23"
category: "LTX-2.3"
source: "r/StableDiffusion"
url: https://www.reddit.com/r/StableDiffusion/comments/1s0xm0r/changing_the_prompt_leads_to_a_memory_problem/
tags: ["ltx-2.3", "stable-diffusion", "reddit"]
summary: "User reports that changing prompts in an LTX 2.3 T2V setup can trigger VAEDecodeTiled out-of-memory errors despite the default prompt working."
---

This r/StableDiffusion thread captures a practical LTX-2.x runtime behavior: prompt edits in an otherwise stable LTX 2.3 workflow can push decode-time memory use over the edge, making VRAM budgeting and decode settings as important as model choice.
