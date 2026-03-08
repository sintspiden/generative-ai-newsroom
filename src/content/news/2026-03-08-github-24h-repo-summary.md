---
title: "24h GitHub Repo Summary"
date: "2026-03-08T14:52:46Z"
category: "GitHub"
source: "Tracked repos"
tags: ["github", "24h", "repo-summary", "ltx-2.3"]
summary: "24h commit roundup across tracked repos including ComfyUI, musubi-tuner, BIG-DADDY, KJNodes, and LTX-Desktop."
url: "https://github.com/Comfy-Org/ComfyUI/tree/master"
importance: 4
entities: ["ComfyUI", "musubi-tuner", "LTX-Desktop", "LTX-2.3"]
---
https://github.com/Comfy-Org/ComfyUI/tree/master
- [29b24cb](https://github.com/Comfy-Org/ComfyUI/commit/29b24cb5177e9d5aa5b3d2e5869999efb4d538c7): Refactored asset handling into a modular async two-phase scanner with background seeding for faster and cleaner asset indexing.
- [a7a6335](https://github.com/Comfy-Org/ComfyUI/commit/a7a6335be538f55faa2abf7404c9b8e970847d1f): Released ComfyUI v0.16.4 to roll up recent fixes and improvements.
- [bcf1a1f](https://github.com/Comfy-Org/ComfyUI/commit/bcf1a1fab1e9efe0d4999ea14e9c0318409e0000): Added compute-stream synchronization before freeing cast buffers to prevent MM reset race issues.

https://github.com/shootthesound/comfyUI-Realtime-Lora
- no commits in last 24h

https://github.com/ostris/ai-toolkit
- no commits in last 24h

https://github.com/AkaneTendo25/musubi-tuner/tree/ltx-23
- [d7dc1d5](https://github.com/AkaneTendo25/musubi-tuner/commit/d7dc1d5954e747836fb03b84b4cb62bcbe356752): Improved sampling-time LoRA/LyCORIS adapter detection and norm logging for more reliable diagnostics.
- [00bd605](https://github.com/AkaneTendo25/musubi-tuner/commit/00bd605b23b99b637ac6f874e13fcc44c0fa8555): Added an opt-in `--loss_type` flag to switch training loss between MSE, MAE, Huber, and Smooth L1.
- [b52b7aa](https://github.com/AkaneTendo25/musubi-tuner/commit/b52b7aadb632091c310cea1bc65ad93810bcdfa9): Upgraded the Self-Flow pipeline with non-breaking integration, EMA resume support, updated docs, and new training arguments.
- [7011086](https://github.com/AkaneTendo25/musubi-tuner/commit/70110868e2d38fc9fe8fe37db42aff9992c74522): Reworked LyCORIS training with an LTX2-focused preset, FP8 compatibility, and improved optimizer parameter handling.
- [8eb3ff5](https://github.com/AkaneTendo25/musubi-tuner/commit/8eb3ff5d4f5adeeb45bf9e41cf7f1a6f6acf778a): Made fused backward accumulation-safe and restricted it to Adafactor to avoid optimizer mismatch issues.

https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION
- [8980686](https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION/commit/898068612c776d409e1b6c3f8c8fbafbdce9bef6): Fixed the fresh-install path flow for the LTX-2.3 backend so new setups initialize correctly.
- [5068dcb](https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION/commit/5068dcb98bae5153efd78301ca4cb9d606cfbaf8): Fixed missing `audio_loss` on training batches to prevent audio-related training failures.

https://github.com/kijai/ComfyUI-KJNodes
- [9e0b76a](https://github.com/kijai/ComfyUI-KJNodes/commit/9e0b76a12e801080584a13b6492ac20835f53409): Improved LoRA extraction quality and/or reliability in KJNodes workflows.

https://github.com/Lightricks/LTX-Desktop
- [b84b7e9](https://github.com/Lightricks/LTX-Desktop/commit/b84b7e9cf0dc26655f68859b8b2901d0d0bc33de): Merged the Python-isolation fix branch into main to harden runtime consistency.
- [c3fac8e](https://github.com/Lightricks/LTX-Desktop/commit/c3fac8e905033d97e4fc6d39dbc7af51accdd721): Set `PYTHONNOUSERSITE=1` so the bundled Python ignores user/system site-packages and avoids environment contamination.
- [4439273](https://github.com/Lightricks/LTX-Desktop/commit/4439273dc57a4abaa7224842649c8ae757fe2bce): Merged output-path handling fixes to stabilize where generated files are written.
- [90259a9](https://github.com/Lightricks/LTX-Desktop/commit/90259a9a433b49fc835ef905436a59fcecdffa3e): Routed backend stdout/stderr into the Electron session log for easier debugging and support triage.
- [9234b92](https://github.com/Lightricks/LTX-Desktop/commit/9234b9264343055ade55db65141da23778fa30c9): Merged patch updates from an external contribution into main.
- [72aa8d9](https://github.com/Lightricks/LTX-Desktop/commit/72aa8d96d29f803129709b738db34ef8e9a9fafb): Changed the default outputs directory to live under app data for cleaner and more consistent file management.

https://github.com/Lightricks/ComfyUI-LTXVideo
- no commits in last 24h

https://github.com/Lightricks/LTX-2
- no commits in last 24h
