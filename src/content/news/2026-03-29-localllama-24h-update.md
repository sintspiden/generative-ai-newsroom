---
title: "r/LocalLLaMA Daily Update (24h, 2026-03-29 JST)"
date: "2026-03-29T07:01:00+09:00"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "24h", "models", "tools", "resources"]
summary: "Top concrete r/LocalLLaMA updates from the last 24 hours: IBM Granite 4.0 3B Vision surfaced, TurboQuant ecosystem implementation updates accelerated, and new benchmarking/resource posts for Apple Silicon, V100, and agent harnessing stood out."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 4
entities: ["IBM Granite 4.0 3B Vision", "TurboQuant", "llama.cpp", "MLX", "Qwen 3.5", "V100"]
---
Window: **last 24 hours** (reported on 2026-03-29 JST)

### Models

- [ibm-granite/granite-4.0-3b-vision · Hugging Face](https://reddit.com/r/LocalLLaMA/comments/1s6axvb/ibmgranitegranite403bvision_hugging_face/) — new compact vision-capable Granite 4.0 checkpoint surfaced to the community.
- [EverMind-AI/EverMemOS: 4B parameter model with 100M token memory.](https://reddit.com/r/LocalLLaMA/comments/1s64brt/evermindaievermemos_4b_parameter_model_with_100m/) — niche but concrete model release thread focused on long-memory behavior.

### Tools/Frameworks

- [TurboQuant on MLX: 4.6x KV cache compression with custom Metal kernels (Qwen 32B at 98% FP16 speed)](https://reddit.com/r/LocalLLaMA/comments/1s5vhf6/turboquant_on_mlx_46x_kv_cache_compression_with/) — concrete implementation update bringing TurboQuant to MLX with practical Apple hardware gains.
- [llama.cpp: Prefetching weights when offloading to CPU](https://reddit.com/r/LocalLLaMA/comments/1s5xcmw/llamacpp_prefetching_weights_when_offloading_to/) — performance-focused llama.cpp runtime improvement for hybrid CPU/GPU setups.
- [Llama.cpp with Turboquant, Heavy-Hitter Oracle (H2O), and StreamingLLM. Even more performance!](https://reddit.com/r/LocalLLaMA/comments/1s61gwj/llamacpp_with_turboquant_heavyhitter_oracle_h2o/) — early integration report showing stacked context/perf techniques in one pipeline.
- [Built a simple PyTorch flash-attention alternative for AMD GPUs that don't have it](https://reddit.com/r/LocalLLaMA/comments/1s614i8/built_a_simple_pytorch_flashattention_alternative/) — practical tooling contribution for AMD users lacking native flash-attention support.

### Resources

- [M5 Max vs M3 Max Inference Benchmarks (Qwen3.5, oMLX, 128GB, 40 GPU cores)](https://reddit.com/r/LocalLLaMA/comments/1s5np41/m5_max_vs_m3_max_inference_benchmarks_qwen35_omlx/) — high-value comparative benchmark data for Apple Silicon inference planning.
- [V100 32 Gb : 6h of benchmarks across 20 models with CPU offloading & power limitations](https://reddit.com/r/LocalLLaMA/comments/1s5o37v/v100_32_gb_6h_of_benchmarks_across_20_models_with/) — long-run benchmark dataset relevant for older datacenter GPU operators.
- [Web use agent harness w/ 30x token reduction, 12x TTFT reduction w/ Qwen 3.5 9B on potato device](https://reddit.com/r/LocalLLaMA/comments/1s5von5/web_use_agent_harness_w_30x_token_reduction_12x/) — actionable engineering write-up on lowering token/runtime costs for local agents.
