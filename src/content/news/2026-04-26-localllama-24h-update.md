---
title: "r/LocalLLaMA Daily Update (24h)"
date: "2026-04-25T22:01:00Z"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "models", "tools", "resources"]
summary: "Top concrete r/LocalLLaMA updates from the last 24 hours, prioritized by releases, inference-stack updates, and practical benchmark/deployment resources."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 4
entities: ["Xiaomi MiMo V2.5 Pro", "Shield 82M", "Darwin-36B-Opus", "llama.cpp", "ik_llama.cpp", "Qwen3.6"]
---
## Models

- **Xiaomi MiMo V2.5 Pro surfaced in the Artificial Analysis index ("weights are coming")** — notable model-watch signal because it entered the public leaderboard discussion with strong placement.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sv9q8f/weights_are_comingxiaomis_mimo_v25_pro_has_landed/

- **Shield 82M released as a focused PII stripping/filtering model** — concrete small-model drop with a clear production privacy use case.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sv8ewy/shield_82m_a_pii_strippingfiltering_model/

- **Darwin-36B-Opus checkpoint shared on Hugging Face (FINAL-Bench thread)** — fresh model artifact post with early community benchmarking context.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1svl1wr/finalbenchdarwin36bopus_hugging_face/

## Tools / Frameworks

- **FP4 inference landed in llama.cpp (NVFP4) and ik_llama.cpp (MXFP4)** — the most concrete runtime-stack change in this window, relevant for faster/lower-memory inference paths.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1svfjyv/fp4_inference_in_llamacpp_nvfp4_and_ik_llamacpp/

- **llama.cpp CUDA MMQ stream-k overhead reduction PR highlighted** — actionable performance engineering update for CUDA users.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1svdjfa/cuda_reduce_mmq_streamk_overhead_by/

- **Open-source multi-cursor/background computer-use setup shared (Hermes Agent + Qwen3.6 + Cua-Driver)** — practical open workflow for Codex-like local automation.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1suux6h/open_source_multicursorbackground_computeruse/

## Resources

- **Qwen3.6-27B served via vLLM 0.19 at ~80 tok/s with 218k context on RTX 5090** — strong real-world throughput datapoint with stack details.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sv8eua/qwen3627b_at_80_tps_with_218k_context_window_on/

- **KV-cache quantization comparison for Qwen3.6-27B (Turbo3/4 vs F16/Q8/Q4)** — concrete tuning resource for balancing speed/quality under memory constraints.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1suur3s/qwen36_27bs_surprising_kv_cache_quantization_test/

- **Throughput + TTFT comparison of Qwen3.6/Gemma 4 variants on H100** — useful benchmark reference for deployment planning and model selection.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sv81sw/throughput_and_ttft_comparisons_of_qwen_36_27b/
