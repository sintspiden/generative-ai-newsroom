---
title: "r/LocalLLaMA Daily Update (24h)"
date: "2026-04-18T22:01:00Z"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "models", "tools", "resources"]
summary: "Top r/LocalLLaMA signals in the last 24h centered on Qwen3.6 deployment/performance validation, plus a few concrete tool updates and hardware tuning writeups."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 4
entities: ["Qwen3.6-35B-A3B", "GHOST v2.1", "Lore 0.2.0", "LM Studio", "KVCache"]
---
## Models

- **Qwen3.6 performance/configuration validation thread** — highest-signal post in-window, with extensive setup notes showing the reported jump depends heavily on correct runtime configuration.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1soq1es/qwen36_performance_jump_is_real_just_make_sure/

- **Qwen3.6-35B-A3B coding benchmark vs Qwen3.5-27B** — practical side-by-side coding outcomes from real tasks, with strong community engagement.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1soxyfi/qwen3635ba3b_solved_coding_problems_qwen3527b/

- **Qwen3.6-35B-A3B-Uncensored-Wasserstein-GGUF release** — concrete model variant drop (GGUF) for local uncensored experimentation.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sp2l72/qwen3635ba3buncensoredwassersteingguf/

## Tools / Frameworks

- **GHOST v2.1 update: full native Windows support** — concrete release update for local agent workflow users on Windows.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sp7yhz/update_ghost_v21_full_native_windows_support_is/

- **Lore 0.2.0 released** — open-source local knowledge app update with visible reasoning stream and non-destructive embedding migration.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sp5d6l/lore_020_the_open_source_local_knowledge/

- **zmx: run local code agents on remote machines** — new tooling share focused on remote execution for local coding agents.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sp6ss3/zmx_run_local_code_agents_on_remote_machines/

## Resources

- **Prefill-as-a-Service (cross-datacenter KVCache) discussion** — architecture resource post relevant to scaling next-gen model serving.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sp216x/prefillasaservice_kvcache_of_nextgeneration/

- **RTX 5070 Ti + Qwen3.6 throughput report (79 t/s @ 128K context)** — actionable performance datapoint highlighting `--n-cpu-moe` impact.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1sor55y/rtx_5070_ti_9800x3d_running_qwen3635ba3b_at_79_ts/

- **LM Studio CPU thread pool tuning results** — practical benchmark notes for MoE offload scenarios and token throughput tradeoffs.
  Reddit: https://www.reddit.com/r/LocalLLaMA/comments/1soz24h/lm_studio_cpu_thread_pool_size_vs_tks_with_some/
