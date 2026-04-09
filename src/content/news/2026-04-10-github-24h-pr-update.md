---
title: "24h GitHub PR Update"
date: "2026-04-09T22:02:00Z"
tags: ["github", "24h", "pull-requests"]
summary: "24h new pull request roundup with 8 new PRs across 3 tracked repos."
category: "GitHub"
source: "Tracked repos"
url: "https://github.com/Comfy-Org/ComfyUI/tree/master"
importance: 4
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2", "DiffSynth-Studio", "awesome-autoresearch"]
---
https://github.com/Comfy-Org/ComfyUI/tree/master
- [#13340 Simplify multigpu dispatch: all devices on pool threads](https://github.com/Comfy-Org/ComfyUI/pull/13340) by @Kosinkadink: Simplifies multi-GPU dispatch logic by using thread-pool workers for every device path.
- [#13338 fix: respect capture_on_queue in WebcamCapture.IS_CHANGED](https://github.com/Comfy-Org/ComfyUI/pull/13338) by @mango766: Fixes webcam recapture behavior so queued runs properly force fresh frame capture when enabled.
- [#13336 fix: close mask image file handle in /upload/mask endpoint](https://github.com/Comfy-Org/ComfyUI/pull/13336) by @mango766: Prevents file-descriptor leaks during mask uploads by explicitly closing opened image handles.
- [#13334 fix: change SaveAnimatedWEBP default method to 'fastest' for better performance](https://github.com/Comfy-Org/ComfyUI/pull/13334) by @octo-patch: Speeds up default animated WebP export by switching compression defaults to the fastest method.
- [#13333 Basic intel standalone package .bat](https://github.com/Comfy-Org/ComfyUI/pull/13333) by @comfyanonymous: Adds a basic Intel standalone batch workflow to improve Windows onboarding on Intel setups.
- [#13332 Fix EGL context creation on headless NVIDIA (EGL_BAD_ACCESS)](https://github.com/Comfy-Org/ComfyUI/pull/13332) by @sam-kpm: Adds a headless-NVIDIA EGL fallback path to make shader/OpenGL workflows work reliably on display-less servers.

https://github.com/shootthesound/comfyUI-Realtime-Lora
- no new pull requests in last 24h

https://github.com/ostris/ai-toolkit
- [#785 Add support for ACE-Step 1.5 and ACE-Step 1.5xl. Also added dataset captioning through the UI.](https://github.com/ostris/ai-toolkit/pull/785) by @jaretburkett: Introduces ACE-Step 1.5 model support plus UI-native dataset captioning and job handling.

https://github.com/AkaneTendo25/musubi-tuner/tree/ltx-2
- no new pull requests in last 24h

https://github.com/ArtDesignAwesome/ai-toolkit_BIG-DADDY-VERSION
- no new pull requests in last 24h

https://github.com/kijai/ComfyUI-KJNodes
- [#602 LTXV: Add guide_attention_entries to multi-guide nodes](https://github.com/kijai/ComfyUI-KJNodes/pull/602) by @drozbay: Adds per-guide attention metadata needed for downstream windowed latent processing in LTXV nodes.

https://github.com/Lightricks/LTX-Desktop
- no new pull requests in last 24h

https://github.com/Lightricks/ComfyUI-LTXVideo
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-2
- no new pull requests in last 24h

https://github.com/wildminder/awesome-ltx2
- no new pull requests in last 24h

https://github.com/modelscope/DiffSynth-Studio
- no new pull requests in last 24h

https://github.com/alvinunreal/awesome-autoresearch
- no new pull requests in last 24h
