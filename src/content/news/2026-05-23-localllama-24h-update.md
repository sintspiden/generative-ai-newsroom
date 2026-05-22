---
title: "r/LocalLLaMA Daily Update (24h)"
date: "2026-05-22T22:01:00Z"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "models", "tools", "resources"]
summary: "Most concrete r/LocalLLaMA updates from the last 24 hours, prioritized by real releases, major version updates, and actionable implementation resources."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 4
entities: ["BeeLlama v0.2.0", "ByteShape Qwen3.6-35B-A3B", "BitCPM-CANN", "lemon-mlx-engine", "llama.cpp"]
---
## Models

- **BeeLlama v0.2.0 (major DFlash update)** — large reported throughput gains on single RTX 3090 across Qwen/Gemma workloads; one of the strongest concrete performance-release posts in this window.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tkpz2y/beellama_v020_major_dflash_update_single_rtx_3090/

- **ByteShape Qwen3.6-35B-A3B** — new quant/perf-focused release claiming ~30% faster inference than Unsloth IQ on 6GB VRAM laptops.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tknjcx/byteshape_qwen3635ba3b_30_faster_than_unsloth_iq/

- **OpenBMB BitCPM-CANN (1.58-bit) announcement** — notable ultra-low-bit model release direction relevant to memory-constrained local inference.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tkjpsh/openbmb_presents_the_model_bitcpmcann_158_bit/

## Tools / Frameworks

- **lemon-mlx-engine (ROCm-based MLX LLM engine) new release** — concrete framework/engine update for AMD/ROCm local stacks.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tkbupt/new_release_of_rocm_based_mlx_llm_engine/

- **llama.cpp update b9274 reported to address MTP VRAM leak** — practical stability/perf fix signal for heavy local use.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tk0grd/latest_b9274_addresses_mtp_vram_leak/

- **llama.cpp asymmetric KV q8/q4 cache caveats thread** — concrete implementation notes on tradeoffs for memory/speed tuning.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tkih6y/llamacpp_asymmetric_kv_q8q4_cache_current_caveats/

## Resources

- **Qwen3-Coder quantization shootout** — useful benchmark-style comparison resource for practical quant selection.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tkmjmq/i_ran_a_quantization_shootout_on_qwen3coder_and/

- **Prompt-injection detector trained with ml-intern + DeepSeek v4 Flash (runs in browser)** — practical defensive implementation resource with reproducible idea/path.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tkoeuo/trained_a_prompt_injection_detector_using/

- **Experts-first llama.cpp discussion/thread** — implementation-oriented pointer for MoE handling behavior in llama.cpp usage.  
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1tknbzh/experts_first_llamacpp/
