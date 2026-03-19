---
title: "24h GitHub Repo Summary"
date: "2026-03-19T22:03:00Z"
tags: ["github", "24h", "repo-summary"]
summary: "24h commit roundup with 14 commits across 2 active repos in the tracked set."
category: "GitHub"
source: "Tracked repos"
url: "https://github.com/Comfy-Org/ComfyUI/tree/master"
importance: 4
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2"]
---

https://github.com/Comfy-Org/ComfyUI/tree/master
- [8458ae2](https://github.com/Comfy-Org/ComfyUI/commit/8458ae2686a8d62ee206d3903123868425a4e6a7): Reverts the earlier Apple Silicon text-encoder GPU change to restore stable behavior while that fix is reworked.
- [fd0261d](https://github.com/Comfy-Org/ComfyUI/commit/fd0261d2bc0c32fa6c21d20994702f44fd927d4c): Reduces tiled decode peak memory to lower OOM risk on constrained GPUs.
- [ab14541](https://github.com/Comfy-Org/ComfyUI/commit/ab14541ef7965dc61956c447d3066dd3d5c9f33b): Tightens pinned-read exclusion rules to avoid rare memory-path corruption edge cases.
- [6589562](https://github.com/Comfy-Org/ComfyUI/commit/6589562ae3e35dd7694f430629a805306157f530): Adds chunked LTX VAE encoding and CPU I/O chunking for large practical VRAM savings.
- [fabed69](https://github.com/Comfy-Org/ComfyUI/commit/fabed694a2198b1662d521b1c47e11e625601ebe): Adds chunked LTX VAE encoding and CPU I/O chunking for large practical VRAM savings.
- [f6b869d](https://github.com/Comfy-Org/ComfyUI/commit/f6b869d7d35f7160bf2fdeabaed378d737834540): Fixes fp16 intermediate handling for text-encoder models that were failing under reduced precision.
- [56ff88f](https://github.com/Comfy-Org/ComfyUI/commit/56ff88f9511c4e25cd8ac08b2bfcd21c8ad83121): Fixes a regression introduced in recent changes so affected workflows run correctly again.
- [9fff091](https://github.com/Comfy-Org/ComfyUI/commit/9fff091f354815378b913c6e0ee3a39c0ed79a70): Further lowers LTX VAE decode RAM peaks to improve reliability for longer or heavier generations.
- [dcd6595](https://github.com/Comfy-Org/ComfyUI/commit/dcd659590faac35a1ac36393077f4ab8aac3fea8): Makes intermediate tensor operations adhere to selected dtype more consistently, reducing mismatch issues.

https://github.com/shootthesound/comfyUI-Realtime-Lora
- no commits in last 24h

https://github.com/ostris/ai-toolkit
- no commits in last 24h

https://github.com/AkaneTendo25/musubi-tuner/tree/ltx-23
- no commits in last 24h

https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION
- no commits in last 24h

https://github.com/kijai/ComfyUI-KJNodes
- [d5c9b0a](https://github.com/kijai/ComfyUI-KJNodes/commit/d5c9b0a341a5578861766241cc5352d1d5cb755d): Improves Set/Get separation between workflow loading and node copying to prevent cross-context confusion.
- [535d7cb](https://github.com/kijai/ComfyUI-KJNodes/commit/535d7cb6e0338f8bf3e958c4af7a1702dc215a51): Hardens LTXVAudioVideoMask validation so invalid masks fail more gracefully.
- [297a245](https://github.com/kijai/ComfyUI-KJNodes/commit/297a2458058f029987ae3bdf24f97a2ece899d35): Fixes Set/Get context-menu insertion when working inside subgraphs.
- [6dfca48](https://github.com/kijai/ComfyUI-KJNodes/commit/6dfca48e00a573a47ffde438afce3ed32ae8474f): Updates node help popup support to the newer 2.0 behavior.
- [00af95b](https://github.com/kijai/ComfyUI-KJNodes/commit/00af95b9cb5a092dfffece6b7efd6cba76099a90): Delivers a full Set/Get subsystem overhaul for cleaner node-linking workflows.

https://github.com/Lightricks/LTX-Desktop
- no commits in last 24h

https://github.com/Lightricks/ComfyUI-LTXVideo
- no commits in last 24h

https://github.com/Lightricks/LTX-2
- no commits in last 24h

https://github.com/wildminder/awesome-ltx2
- no commits in last 24h
