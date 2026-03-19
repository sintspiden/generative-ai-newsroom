---
title: "24h GitHub PR Update"
date: "2026-03-19T22:03:00Z"
tags: ["github", "24h", "pull-requests"]
summary: "24h pull request roundup with 13 new PRs across 1 active repos in the tracked set."
category: "GitHub"
source: "Tracked repos"
url: "https://github.com/Comfy-Org/ComfyUI/tree/master"
importance: 4
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2"]
---

https://github.com/Comfy-Org/ComfyUI/tree/master
- [#13070 Revert "fix: run text encoders on MPS GPU instead of CPU for Apple Silicon"](https://github.com/Comfy-Org/ComfyUI/pull/13070) by @comfyanonymous: Rolls back the Apple Silicon text-encoder GPU change to stabilize behavior pending a safer implementation.
- [#13068 fix: make Content-Disposition header RFC 2183 compliant (Fixes #8914)](https://github.com/Comfy-Org/ComfyUI/pull/13068) by @junagent: Brings download headers into RFC compliance for more reliable client/browser file handling.
- [#13067 memory: Add more exclusion criteria to pinned read (fixes corrupt outputs - rare cases)](https://github.com/Comfy-Org/ComfyUI/pull/13067) by @rattus128: Adds stricter pinned-read guards to prevent rare corruption scenarios in memory-sensitive runs.
- [#13062 ltx: vae: implement chunked encoder + CPU IO chunking (Big VRAM reductions)](https://github.com/Comfy-Org/ComfyUI/pull/13062) by @rattus128: Introduces chunked LTX VAE encode/decode paths that materially reduce VRAM pressure.
- [#13060 [API Nodes] mark seedream-3-0-t2i and seedance-1-0-lite models as deprecated](https://github.com/Comfy-Org/ComfyUI/pull/13060) by @bigcat88: Marks older API-node model entries deprecated to steer users toward current supported options.
- [#13059 feat: add get_execution_environment() API](https://github.com/Comfy-Org/ComfyUI/pull/13059) by @deepme987: Adds an API for runtime environment introspection, useful for adaptive node behavior.
- [#13058 Main](https://github.com/Comfy-Org/ComfyUI/pull/13058) by @kristentr: Proposes branch sync/update changes under a generic mainline PR.
- [#13057 Main (#3)](https://github.com/Comfy-Org/ComfyUI/pull/13057) by @kristentr: Submits an additional mainline sync/update iteration.
- [#13056 fp16 intermediates doen't work for some text enc models.](https://github.com/Comfy-Org/ComfyUI/pull/13056) by @comfyanonymous: Fixes fp16 intermediate dtype handling for text-encoder models that failed in mixed-precision.
- [#13054 fix: make Content-Disposition header RFC 2183 compliant](https://github.com/Comfy-Org/ComfyUI/pull/13054) by @junagent: Corrects attachment header formatting for standards-compliant file download behavior.
- [#13053 Fix regression.](https://github.com/Comfy-Org/ComfyUI/pull/13053) by @comfyanonymous: Patches a newly introduced regression impacting recent workflows.
- [#13052 Further Reduce LTX VAE decode peak RAM usage](https://github.com/Comfy-Org/ComfyUI/pull/13052) by @kijai: Further lowers LTX VAE decode memory spikes to improve run stability on lower-VRAM systems.
- [#13051 Make more intermediate values follow the intermediate dtype.](https://github.com/Comfy-Org/ComfyUI/pull/13051) by @comfyanonymous: Aligns more intermediate operations with configured dtype to reduce conversion errors and inconsistencies.

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
- no new pull requests in last 24h

https://github.com/Lightricks/ComfyUI-LTXVideo
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-2
- no new pull requests in last 24h

https://github.com/wildminder/awesome-ltx2
- no new pull requests in last 24h
