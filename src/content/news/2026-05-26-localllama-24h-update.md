---
title: "r/LocalLLaMA 24h Update"
date: "2026-05-26T07:01:00+09:00"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["localllama", "reddit", "24h", "models", "tools", "resources"]
summary: "Strong 24h cycle led by new model drops (NuExtract3, MiniCPM5-1B, MiMo-V2.5-coder) and practical inference stack updates around llama.cpp and quantization/perf tooling."
importance: 4
entities: ["NuExtract3", "MiniCPM5-1B", "MiMo-V2.5-coder", "llama.cpp", "MLX", "hipEngine"]
---

## Models

- **NuExtract3 released (open-weight 4B VLM for OCR/Markdown/structured extraction).** Self-hostable extraction-focused model; one of the clearest concrete launches in this window.  
  https://reddit.com/r/LocalLLaMA/comments/1tn8utn/nuextract3_released_openweight_4b_vlm_for/

- **MiniCPM5-1B surfaced as a new small-model release.** High engagement for a lightweight model post.  
  https://reddit.com/r/LocalLLaMA/comments/1tnafre/minicpm51b/

- **MiMo-V2.5-coder posted (new coding model release thread).** Notable interest from local coding-model users.  
  https://reddit.com/r/LocalLLaMA/comments/1tn3455/mimov25coder/

## Tools/Frameworks

- **llama.cpp server checkpoint-creation fix merged (PR #22929).** Practical reliability update for server workflows.  
  https://reddit.com/r/LocalLLaMA/comments/1tn0jyp/server_fix_checkpoints_creation_by_jacekpoplawski/

- **llama.cpp CUDA fast Walsh-Hadamard transform PR highlighted.** Potential inference-side speedups for CUDA users.  
  https://reddit.com/r/LocalLLaMA/comments/1tnfqng/cuda_add_fast_walshhadamard_transform_by_am17an/

- **MLX got W8A8 activation quantization update (reported prefill latency improvement).** Useful Apple-silicon optimization signal.  
  https://reddit.com/r/LocalLLaMA/comments/1tn2p61/we_added_w8a8_activation_quantization_to_mlx/

- **hipEngine shared for native Qwen 3.6 inference on RDNA3.** Relevant for AMD local inference stack options.  
  https://reddit.com/r/LocalLLaMA/comments/1tmq4s6/hipengine_fast_native_qwen_36_inference_for_rdna3/

## Resources

- **Qwen 3.6 throughput report: “1000 tps” on V100 setup.** Community benchmark datapoint with detailed discussion.  
  https://reddit.com/r/LocalLLaMA/comments/1tmyln6/1000_tps_generation_on_qwen36_27b_with_v100s/

- **Qwen 3.6 benchmarks on dual RTX PRO 6000 shared.** Helpful hardware-specific performance reference for high-end local rigs.  
  https://reddit.com/r/LocalLLaMA/comments/1tn0t7u/qwen_36_benchmarks_on_2x_rtx_pro_6000/

- **Local LLM toolkit and local-first MCP tutorial repos posted.** Practical implementation resources for self-hosted agents and workflows.  
  https://reddit.com/r/LocalLLaMA/comments/1tnbfkl/sharing_my_localllmtoolkit_repo/  
  https://reddit.com/r/LocalLLaMA/comments/1tn1jjy/i_made_a_localfirst_mcp_tutorial_repo_with/
