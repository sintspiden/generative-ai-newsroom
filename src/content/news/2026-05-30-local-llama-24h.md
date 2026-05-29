---
title: "r/LocalLLaMA Daily Update (24h)"
date: "2026-05-29T22:01:00Z"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "models", "tools", "resources"]
summary: "Top r/LocalLLaMA updates from the last 24 hours, prioritizing concrete releases, performance updates, and practical resources."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 3
entities: ["llama.cpp", "vLLM", "Gemma 4", "Qwen 3.6", "TinyStories"]
---
## Models

- **TinyStories 25M trained from scratch on 8GB VRAM** — community post sharing a full from-scratch training run plus released model artifact; notable for low-resource training practicality.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1treb2z/me_train_llm_on_8gb_from_scratch_me_happy/

## Tools / Frameworks

- **llama.cpp b9410: f16 mask change for FA/MTP VRAM savings** — release-linked post highlighting a concrete memory optimization (reported sizeable VRAM reduction at larger ubatch settings).
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1trfe9d/b9410_mtp_vram_save_for_f16_and_fa_llamacpp/

- **MTP benchmarking on vLLM vs llama.cpp (Gemma 4 / Qwen 3.6)** — practical benchmark report with reproducible setup details and measured throughput gains, useful for local inference tuning.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1trf0r0/i_tested_mtp_on_vllm_and_llamacpp_for_gemma_4/

## Resources

- **Public benchmark repo for MTP experiments** — includes Docker/setup scripts and CSV outputs backing the vLLM vs llama.cpp speed tests.
  Reddit thread: https://www.reddit.com/r/LocalLLaMA/comments/1trf0r0/i_tested_mtp_on_vllm_and_llamacpp_for_gemma_4/

- **"train-a-model-from-scratch" reference repo (from TinyStories post)** — lightweight training code/resource for small-model experimentation on constrained hardware.
  Reddit thread: https://www.reddit.com/r/LocalLLaMA/comments/1treb2z/me_train_llm_on_8gb_from_scratch_me_happy/
