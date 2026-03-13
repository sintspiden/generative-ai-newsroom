---
title: "24h GitHub PR Update"
date: "2026-03-13T22:05:25Z"
category: "GitHub"
source: "Tracked repos"
tags: ["github", "24h", "pull-requests"]
summary: "New PRs in the last 24 hours: 12 across 4 repos, led by ComfyUI plus targeted fixes in ai-toolkit, ComfyUI-KJNodes, and LTX-Desktop."
url: "https://github.com/Comfy-Org/ComfyUI/pulls"
importance: 4
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2"]
---

https://github.com/Comfy-Org/ComfyUI/tree/master
- [#12928 Drop the mutable default in clip_preprocess](https://github.com/Comfy-Org/ComfyUI/pull/12928) by @tejasae-afk: Removes a mutable default argument in clip_preprocess to prevent state leakage across runs.
- [#12926 Log per-node RAM usage during custom node import](https://github.com/Comfy-Org/ComfyUI/pull/12926) by @jarz76: Adds per-node RAM logging during custom node import to speed memory bottleneck debugging.
- [#12925 comfy aimdo 0.2.11 + Improved RAM Pressure release strategies - Windows speedups](https://github.com/Comfy-Org/ComfyUI/pull/12925) by @rattus128: Improves RAM-pressure release strategy and Windows performance in AIMDO path updates.
- [#12924 Add MiniMax Chat node for text generation](https://github.com/Comfy-Org/ComfyUI/pull/12924) by @octo-patch: Introduces a MiniMax Chat node to expand built-in text generation options.
- [#12923 Bump comfyui-frontend-package to 1.41.19](https://github.com/Comfy-Org/ComfyUI/pull/12923) by @comfy-pr-bot: Bumps frontend package to v1.41.19 for patch-level UI/runtime fixes.
- [#12919 fix: Content-Disposition header to comply with RFC2183](https://github.com/Comfy-Org/ComfyUI/pull/12919) by @LincolnBurrows2017: Aligns Content-Disposition handling with RFC2183 for more reliable downloads.
- [#12915 Revert "Revert "feat: Add CacheProvider API for external distributed caching""](https://github.com/Comfy-Org/ComfyUI/pull/12915) by @deepme987: Re-applies distributed cache API support after a rapid rollback cycle.
- [#12912 Revert "feat: Add CacheProvider API for external distributed caching"](https://github.com/Comfy-Org/ComfyUI/pull/12912) by @comfyanonymous: Temporarily removes distributed cache API changes pending stabilization.
- [#12911 fix: use no-store cache headers to prevent stale frontend chunks](https://github.com/Comfy-Org/ComfyUI/pull/12911) by @christian-byrne: Uses no-store cache headers to prevent stale frontend chunks from being served.

https://github.com/shootthesound/comfyUI-Realtime-Lora
- no new pull requests in last 24h

https://github.com/ostris/ai-toolkit
- [#738 Fix random_noise_multiplier never being applied to the noise.](https://github.com/ostris/ai-toolkit/pull/738) by @lRemixl: Fixes random_noise_multiplier so it actually affects injected training noise.

https://github.com/AkaneTendo25/musubi-tuner/tree/ltx-23
- no new pull requests in last 24h

https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION
- no new pull requests in last 24h

https://github.com/kijai/ComfyUI-KJNodes
- [#573 fix ModelSaveKJ](https://github.com/kijai/ComfyUI-KJNodes/pull/573) by @urlesistiana: Fixes ModelSaveKJ so saved model artifacts are written correctly.

https://github.com/Lightricks/LTX-Desktop
- [#58 settings: persist generation defaults and player mute state](https://github.com/Lightricks/LTX-Desktop/pull/58) by @RGB-loop: Persists generation defaults and player mute state so user preferences survive restarts.

https://github.com/Lightricks/ComfyUI-LTXVideo
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-2
- no new pull requests in last 24h

https://github.com/wildminder/awesome-ltx2
- no new pull requests in last 24h
