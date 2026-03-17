---
title: "r/LocalLLaMA Daily Update (24h, 2026-03-18 JST)"
date: "2026-03-18T07:01:00+09:00"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "24h", "models", "tools", "frameworks", "resources"]
summary: "Top concrete releases and practical updates from r/LocalLLaMA in the last 24 hours, prioritized over Q&A and memes."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 3
entities: ["Unsloth Studio", "Holotron-12B", "Drummer models", "mlx-tune", "vLLM", "Qwen3.5 benchmarks"]
---
Window: **2026-03-17 07:00 → 2026-03-18 07:00 JST**

## Models
- [Drummer model pack release: Skyfall 31B v4.1, Valkyrie 49B v2.1, Anubis 70B v1.2, Anubis Mini 8B v1](https://www.reddit.com/r/LocalLLaMA/comments/1rwc1gh/drummers_skyfall_31b_v41_valkyrie_49b_v21_anubis/) — multi-model version bump posted as a new generation drop.
- [Holotron-12B released (open-source multimodal model, NVIDIA collaboration)](https://www.reddit.com/r/LocalLLaMA/comments/1rw2ygx/h_company_just_released_holotron12b_developed/) — concrete model launch with throughput-focused positioning for computer-use workloads.

## Tools/Frameworks
- [Introducing Unsloth Studio (open-source web UI to train/run LLMs)](https://www.reddit.com/r/LocalLLaMA/comments/1rw9jmf/introducing_unsloth_studio_a_new_opensource_web/) — major new tooling release; also heavily discussed in [this follow-up thread](https://www.reddit.com/r/LocalLLaMA/comments/1rwa0f7/unsloth_announces_unsloth_studio_a_competitor_to/).
- [HF one-liner with llmfit + llama.cpp server + Pi agent bootstrap](https://www.reddit.com/r/LocalLLaMA/comments/1rwgi8x/hugging_face_just_released_a_oneliner_that_uses/) — notable setup automation update for local deployments.
- [mlx-tune: fine-tune LLMs on Mac (SFT/DPO/GRPO/Vision)](https://www.reddit.com/r/LocalLLaMA/comments/1rw4lft/mlxtune_finetune_llms_on_your_mac_sft_dpo_grpo/) — new Mac-focused tuning framework with Unsloth-compatible API.
- [Dynamic expert caching PR in vLLM](https://www.reddit.com/r/LocalLLaMA/comments/1rw4sly/dynamic_expert_caching_pr_in_vllm/) — framework-level performance optimization in progress.

## Resources
- [Qwen3.5-35B-3AB benchmark on 8GB VRAM laptop (26 t/s at 100k context)](https://www.reddit.com/r/LocalLLaMA/comments/1rwa9h3/benchmarking_qwen3535b3ab_on_8_gb_vram_gaming/) — practical local-inference benchmark data.
- [Qwen3.5 MLX vs GGUF performance on Mac Studio M3 Ultra (512GB)](https://www.reddit.com/r/LocalLLaMA/comments/1rwaq47/qwen35_mlx_vs_gguf_performance_on_mac_studio_m3/) — useful backend comparison resource for Apple Silicon users.
- [Mistral-Small-4-119B-2603 NVFP4 inference numbers on RTX Pro 6000](https://www.reddit.com/r/LocalLLaMA/comments/1rwbstv/inference_numbers_for_mistralsmall4119b2603_nvfp4/) — concrete throughput snapshot on workstation-class GPU.
