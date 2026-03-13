---
title: "24h GitHub PR Update"
date: "2026-03-13T10:56:00Z"
category: "GitHub"
source: "Tracked repos"
tags: ["github", "24h", "pull-requests"]
summary: "New PRs in the last 24 hours were concentrated in ComfyUI and LTX-Desktop, with caching, frontend, and settings-focused changes."
url: "https://github.com/Comfy-Org/ComfyUI/pulls"
importance: 4
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2"]
---

https://github.com/Comfy-Org/ComfyUI/tree/master
- [#12919 fix: Content-Disposition header to comply with RFC2183](https://github.com/Comfy-Org/ComfyUI/pull/12919) by @LincolnBurrows2017: Aligns response headers with RFC2183 for more reliable download handling across clients.
- [#12915 Revert "Revert "feat: Add CacheProvider API for external distributed caching""](https://github.com/Comfy-Org/ComfyUI/pull/12915) by @deepme987: Re-applies distributed cache API support after an immediate rollback.
- [#12912 Revert "feat: Add CacheProvider API for external distributed caching"](https://github.com/Comfy-Org/ComfyUI/pull/12912) by @comfyanonymous: Temporarily removes CacheProvider API changes to mitigate short-term stability risks.
- [#12911 fix: use no-store cache headers to prevent stale frontend chunks](https://github.com/Comfy-Org/ComfyUI/pull/12911) by @christian-byrne: Prevents stale frontend assets by forcing fresh chunk fetches.
- [#12910 Patch frontend to 1.41.18 (from 1.41.16)](https://github.com/Comfy-Org/ComfyUI/pull/12910) by @christian-byrne: Bumps frontend patch version for bug fixes and UI consistency.
- [#12909 Lower kv cache memory usage.](https://github.com/Comfy-Org/ComfyUI/pull/12909) by @comfyanonymous: Cuts KV-cache memory overhead to improve model runtime on lower VRAM systems.
- [#12908 Update workflow templates to v0.9.21](https://github.com/Comfy-Org/ComfyUI/pull/12908) by @comfyui-wiki: Refreshes bundled templates to current workflow patterns.
- [#12907 feat: Support mxfp8](https://github.com/Comfy-Org/ComfyUI/pull/12907) by @kijai: Adds MXFP8 support to expand precision/runtime configuration options.
- [#12905 Support flux 2 klein kv cache model: Use the FluxKVCache node.](https://github.com/Comfy-Org/ComfyUI/pull/12905) by @comfyanonymous: Extends Flux support with a dedicated KV-cache node path for Klein variants.

https://github.com/shootthesound/comfyUI-Realtime-Lora
- no new pull requests in last 24h

https://github.com/ostris/ai-toolkit
- no new pull requests in last 24h

https://github.com/AkaneTendo25/musubi-tuner/tree/ltx-23
- no new pull requests in last 24h

https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION
- no new pull requests in last 24h

https://github.com/kijai/ComfyUI-KJNodes
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-Desktop
- [#58 settings: persist generation defaults and player mute state](https://github.com/Lightricks/LTX-Desktop/pull/58) by @RGB-loop: Persists user defaults and mute state so repeated runs start with preferred settings.

https://github.com/Lightricks/ComfyUI-LTXVideo
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-2
- no new pull requests in last 24h

https://github.com/wildminder/awesome-ltx2
- no new pull requests in last 24h