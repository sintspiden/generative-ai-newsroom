---
title: "r/LocalLLaMA Daily Update (24h)"
date: "2026-03-13T22:02:00Z"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "models", "tools", "frameworks", "resources"]
summary: "Top concrete r/LocalLLaMA updates from the last 24 hours, prioritizing releases, version updates, and practical implementation resources over questions/memes."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 3
entities: ["OmniCoder-9B", "Apex 1.5", "htmLLM-124M v2", "Lemonade v10", "Understudy", "Harbor CLI"]
---

## Models

- **OmniCoder-9B community performance signal** — strong early user feedback for coding use in OpenCode, with useful practical discussion around local coding quality.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsa8wd/omnicoder9b_slaps_in_opencode/

- **[Release] Apex 1.5 + Apex 1.5 Coder (350M)** — explicit release post for two tiny instruct models aimed at general chat + coding.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsptm5/release_finally_apex_15_and_apex_15_coder_my_two/

- **[Release] htmLLM-124M v2** — tiny-model v2 release with reported validation-loss improvements on modest hardware (single T4).
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsww4g/new_release_htmllm124m_v2_091_val_loss_on_a/

## Tools/Frameworks

- **Lemonade v10 released** — Linux NPU support plus expanded multimodal capabilities in a single desktop-facing update.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsucvk/lemonade_v10_linux_npu_support_and_chock_full_of/

- **Understudy (MIT, open source) surfaced** — local-first desktop agent that learns tasks from GUI demonstrations; concrete project/tool drop.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsavl4/understudy_localfirst_desktop_agent_that_learns/

- **Harbor v0.4.4 CLI release** — new utility to list/pull/remove models across llama.cpp, vLLM, and Ollama from one CLI.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rt01tf/harbor_v044_lspullrm_llamacppvllmollama_models/

## Resources

- **ggml NVFP4 quantization support merged** — concrete upstream implementation signal for new quantization support relevant to local inference tuning.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsdqvu/ggml_add_nvfp4_quantization_type_support/

- **Open-source LLM compiler benchmark/resource post** — practical performance + power comparison data (M1 Pro) useful for CPU-side deployment decisions.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rspblk/open_source_llm_compiler_for_models_on/

- **Expert parallelism write-up for 1T MoE finetuning** — implementation/resource post claiming large speed/cost improvements on single-node finetuning.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1rsw0u3/expert_parallelism_for_1t_moe_finetuning_on_a/
