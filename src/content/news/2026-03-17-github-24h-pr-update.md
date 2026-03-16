---
title: "24h GitHub PR Update"
date: "2026-03-16T22:02:00Z"
category: "GitHub"
source: "Tracked repos"
tags: ["github", "24h", "pull-requests"]
summary: "24h PR roundup with 13 new pull requests across 2 tracked repos."
url: "https://github.com/Comfy-Org/ComfyUI/tree/master"
importance: 3
entities: ["ComfyUI", "comfyUI-Realtime-Lora", "ai-toolkit", "musubi-tuner", "ai-toolkit_BIG-DADDY-VERSION", "ComfyUI-KJNodes", "LTX-Desktop", "ComfyUI-LTXVideo", "LTX-2", "awesome-ltx2"]
---

https://github.com/Comfy-Org/ComfyUI/tree/master
- [#13003 LongCat-Image edit](https://github.com/Comfy-Org/ComfyUI/pull/13003) by @Talmaj: Proposes updates to the LongCat image-edit functionality.
- [#13002 Add --enable-dynamic-vram options to force enable it.](https://github.com/Comfy-Org/ComfyUI/pull/13002) by @comfyanonymous: Adds a force-enable dynamic VRAM option for explicit memory behavior control.
- [#13001 fix: gracefully handle port-in-use error on server startup](https://github.com/Comfy-Org/ComfyUI/pull/13001) by @luke-mino-altherr: Improves startup resilience when the configured server port is already occupied.
- [#12999 feat: auto-register node replacements from custom node JSON files](https://github.com/Comfy-Org/ComfyUI/pull/12999) by @deepme987: Automates node replacement registration from custom-node JSON metadata.
- [#12996 fix: return millisecond timestamps from get_file_info()](https://github.com/Comfy-Org/ComfyUI/pull/12996) by @luke-mino-altherr: Increases file-info timestamp precision to milliseconds for better ordering/consistency.
- [#12995 fix: add UTC timezone suffix to datetime serializers](https://github.com/Comfy-Org/ComfyUI/pull/12995) by @luke-mino-altherr: Standardizes serialized datetimes with explicit UTC suffixes.
- [#12994 Skip running model finalizers at exit](https://github.com/Comfy-Org/ComfyUI/pull/12994) by @blepping: Avoids exit-time finalizer runs to reduce shutdown overhead.
- [#12991 Improved performance of image_upload() in server.py](https://github.com/Comfy-Org/ComfyUI/pull/12991) by @V1sionVerse: Speeds up server-side image upload handling.
- [#12990 fix: replace bare except with json.JSONDecodeError in app_settings.py](https://github.com/Comfy-Org/ComfyUI/pull/12990) by @LincolnBurrows2017: Narrows exception handling to JSON decode failures for safer error paths.
- [#12987 fix: atomic writes for userdata to prevent data loss on crash](https://github.com/Comfy-Org/ComfyUI/pull/12987) by @christian-byrne: Uses atomic userdata writes to reduce corruption/loss risk during crashes.
- [#12986 feat: add CurveInput wrapper class with interp method](https://github.com/Comfy-Org/ComfyUI/pull/12986) by @christian-byrne: Adds a CurveInput interpolation helper for cleaner curve-driven node logic.
- [#12983 feat: register node output files as assets after execution](https://github.com/Comfy-Org/ComfyUI/pull/12983) by @jtydhr88: Registers node outputs as assets automatically after workflow execution.

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
- [#70 Feat/amd rocm support](https://github.com/Lightricks/LTX-Desktop/pull/70) by @justindarnell: Adds AMD ROCm support to broaden Linux GPU compatibility beyond CUDA.

https://github.com/Lightricks/ComfyUI-LTXVideo
- no new pull requests in last 24h

https://github.com/Lightricks/LTX-2
- no new pull requests in last 24h

https://github.com/wildminder/awesome-ltx2
- no new pull requests in last 24h
