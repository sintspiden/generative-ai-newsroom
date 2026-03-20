---
title: "24h GitHub PR Update"
date: "2026-03-20T22:03:00Z"
tags: ["github", "24h", "pr-update"]
summary: "24h pull request roundup with 9 new PRs across 3 active repos in the tracked set."
category: "GitHub"
source: "Tracked repos"
url: "https://github.com/Comfy-Org/ComfyUI/pulls"
importance: 4
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2"]
---

https://github.com/Comfy-Org/ComfyUI/tree/master
- [#13082 Auto-regressive video generation](https://github.com/Comfy-Org/ComfyUI/pull/13082) by @Talmaj: Proposes auto-regressive video generation support, likely enabling iterative frame extension workflows.
- [#13081 fix: follow RFC 2183 for Content-Disposition header](https://github.com/Comfy-Org/ComfyUI/pull/13081) by @chulinhcql-art: Makes Content-Disposition handling standards-compliant to improve file naming behavior across clients.
- [#13080 fix: RFC 2183 compliant Content-Disposition header in /view endpoint](https://github.com/Comfy-Org/ComfyUI/pull/13080) by @TJUEZ: Aligns /view response headers with RFC 2183 to reduce attachment/rendering edge cases.
- [#13079 Make EmptyImage node follow intermediate device/dtype.](https://github.com/Comfy-Org/ComfyUI/pull/13079) by @comfyanonymous: Ensures EmptyImage honors intermediate compute settings, reducing dtype/device mismatch surprises.
- [#13074 ltx: vae: Fix missing init variable](https://github.com/Comfy-Org/ComfyUI/pull/13074) by @rattus128: Fixes missing LTX VAE init state that could fail graph execution in video jobs.
- [#13073 Fix VRAM leak in tiler fallback in video VAEs](https://github.com/Comfy-Org/ComfyUI/pull/13073) by @rattus128: Addresses a VRAM leak in video VAE fallback logic for better stability in long or repeated runs.

https://github.com/shootthesound/comfyUI-Realtime-Lora
- no new pull requests in last 24h

https://github.com/ostris/ai-toolkit
- [#742 Fix CPU/CUDA device mismatch when training Klein edit with control_path](https://github.com/ostris/ai-toolkit/pull/742) by @HuangYuChuh: Fixes mixed device placement during Klein edit training so control_path runs don’t crash on tensor-device mismatches.

https://github.com/AkaneTendo25/musubi-tuner/tree/ltx-23
- no new pull requests in last 24h

https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION
- no new pull requests in last 24h

https://github.com/kijai/ComfyUI-KJNodes
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-Desktop
- no new pull requests in last 24h

https://github.com/Lightricks/ComfyUI-LTXVideo
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-2
- [#170 Add @torch.inference_mode() to pipeline __call__ methods](https://github.com/Lightricks/LTX-2/pull/170) by @garrick99: Wraps pipeline calls in inference mode to cut autograd overhead and reduce runtime memory usage.
- [#169 Fix --quantization fp8-scaled-mm CLI crash](https://github.com/Lightricks/LTX-2/pull/169) by @garrick99: Fixes a CLI crash path for fp8-scaled-mm quantization, improving reliability for low-memory runs.

https://github.com/wildminder/awesome-ltx2
- no new pull requests in last 24h
