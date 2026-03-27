---
title: "r/LocalLLaMA Daily Update (24h, 2026-03-28 JST)"
date: "2026-03-28T07:01:00+09:00"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "24h", "models", "tools", "resources"]
summary: "Top concrete r/LocalLLaMA updates from the last 24 hours: GLM-5.1 release momentum, TurboQuant/llama.cpp performance work, and practical deployment/benchmark resources."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 5
entities: ["GLM-5.1", "TurboQuant", "llama.cpp", "Unsloth", "Qwen", "Cohere"]
---
Window: **last 24 hours** (reported on 2026-03-28 JST)

### Models

- [GLM 5.1 is out](https://reddit.com/r/LocalLLaMA/comments/1s51id3/glm_51_is_out/) — highest-signal model-release thread in the window.
- [GLM-5.1 is live – coding ability on par with Claude Opus 4.5](https://reddit.com/r/LocalLLaMA/comments/1s55xox/glm51_is_live_coding_ability_on_par_with_claude/) — second major thread confirming rollout and early capability impressions.
- [chromadb/context-1: 20B parameter agentic search model](https://reddit.com/r/LocalLLaMA/comments/1s506gc/chromadbcontext1_20b_parameter_agentic_search/) — new 20B model release focused on retrieval/agentic search.
- [I benchmarked 31 STT models on medical audio — VibeVoice 9B is the new open-source leader](https://reddit.com/r/LocalLLaMA/comments/1s4z18o/i_benchmarked_31_stt_models_on_medical_audio/) — concrete model comparison with domain-specific WER results.

### Tools/Frameworks

- [Skipping 90% of KV dequant work → +22.8% decode at 32K (llama.cpp, TurboQuant)](https://reddit.com/r/LocalLLaMA/comments/1s56g07/skipping_90_of_kv_dequant_work_228_decode_at_32k/) — practical runtime optimization with measurable decode gains.
- [New Unsloth Studio Release!](https://reddit.com/r/LocalLLaMA/comments/1s56q9g/new_unsloth_studio_release/) — active framework update for local fine-tuning/workflow users.
- [TurboQuant for weights: near‑optimal 4‑bit LLM quantization with lossless 8‑bit residual](https://reddit.com/r/LocalLLaMA/comments/1s51b5h/turboquant_for_weights_nearoptimal_4bit_llm/) — quantization-method release with strong community discussion.
- [DeepSeekOCR & codefuse-ai/F2LLM-v2 are ready on llama.cpp](https://reddit.com/r/LocalLLaMA/comments/1s4zy8t/deepseekocr_codefuseaif2llmv2_are_ready_on/) — concrete compatibility update for llama.cpp users.

### Resources

- [[Qwen Meetup] Function Calling Harness with Qwen, turning 6.75% to 100%](https://reddit.com/r/LocalLLaMA/comments/1s4ydfu/qwen_meetup_function_calling_harness_with_qwen/) — implementation write-up/resource with reproducible improvement framing.
- [Cohere Transcribe WebGPU: state-of-the-art multilingual speech recognition in your browser](https://reddit.com/r/LocalLLaMA/comments/1s5g2zh/cohere_transcribe_webgpu_stateoftheart/) — browser-local speech resource for practical experimentation.
- [FlashAttention from first principles](https://reddit.com/r/LocalLLaMA/comments/1s55nco/flashattention_from_first_principles/) — educational technical deep dive shared in-window.
- [Inference Engines — Part I: How It Works (visual deep dive)](https://reddit.com/r/LocalLLaMA/comments/1s52srl/inference_engines_part_i_how_it_works_a_visual/) — reference-style explainer on inference stack internals.
