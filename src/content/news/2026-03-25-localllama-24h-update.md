---
title: "r/LocalLLaMA Daily Update (24h, 2026-03-25 JST)"
date: "2026-03-25T07:01:00+09:00"
category: "LocalLLaMA"
source: "r/LocalLLaMA"
tags: ["reddit", "localllama", "24h", "models", "tools", "resources"]
summary: "Top concrete r/LocalLLaMA updates from the last 24 hours: notable model releases, tooling/security updates, and practical benchmark resources."
url: "https://www.reddit.com/r/LocalLLaMA/new/"
importance: 5
entities: ["GigaChat", "MolmoWeb", "Devstral", "text-generation-webui", "LiteLLM", "LM Studio"]
---
Window: **last 24 hours** (reported on 2026-03-25 JST)

### Models

- [New open weights models: GigaChat-3.1-Ultra-702B and GigaChat-3.1-Lightning-10B-A1.8B](https://reddit.com/r/LocalLLaMA/comments/1s2pkfw/new_open_weights_models_gigachat31ultra702b_and/) — major open-weights drop spanning both ultra-large and smaller deployable tiers.
- [MolmoWeb 4B/8B](https://reddit.com/r/LocalLLaMA/comments/1s2gvy5/molmoweb_4b8b/) — new model family release signal with lightweight-to-mid-size variants.
- [Devstral-Small-2-24B fine-tuned on Claude 4.6 Opus reasoning traces [GGUF Q4+Q5]](https://reddit.com/r/LocalLLaMA/comments/1s2bxdr/devstralsmall224b_finetuned_on_claude_46_opus/) — concrete community fine-tune + quantized artifacts for local inference.
- [Mistral-Small-4-119B-2603-heretic](https://reddit.com/r/LocalLLaMA/comments/1s2bque/mistralsmall4119b2603heretic/) — new derivative release for users tracking Mistral-based open checkpoints.

### Tools/Frameworks

- [text-generation-webui v4.2 released: use Claude Code with local models via new Anthropic-compatible API, smaller portable builds, UI theme improvements + more](https://reddit.com/r/LocalLLaMA/comments/1s2q9r8/textgenerationwebui_v42_released_use_claude_code/) — substantial version update with integration and packaging improvements.
- [mcp-scan: security scanner that audits MCP server configs across 10 AI clients](https://reddit.com/r/LocalLLaMA/comments/1s2r0nw/mcpscan_security_scanner_that_audits_mcp_server/) — new security utility focused on MCP deployment hygiene.
- [ACP Router, a small bridge/proxy for connecting ACP-based agents to OpenAI-compatible tools](https://reddit.com/r/LocalLLaMA/comments/1s2ciaz/acp_router_a_small_bridgeproxy_for_connecting/) — interoperability bridge release for agent-tool wiring.
- [SparkRun & Spark Arena = someone finally made an easy button for running vLLM on DGX Spark](https://reddit.com/r/LocalLLaMA/comments/1s2hz7c/sparkrun_spark_arena_someone_finally_made_an_easy/) — tooling streamlining for Spark-focused local/server setups.
- [Litellm 1.82.7 and 1.82.8 on PyPI are compromised, do not update!](https://reddit.com/r/LocalLLaMA/comments/1s2c1w4/litellm_1827_and_1828_on_pypi_are_compromised_do/) — high-priority supply-chain alert affecting a widely used LLM gateway layer.
- [LM Studio may possibly be infected with sophisticated malware.](https://reddit.com/r/LocalLLaMA/comments/1s2clw6/lm_studio_may_possibly_be_infected_with/) — high-visibility community security incident thread to monitor/verify before updates.

### Resources

- [ran 150+ benchmarks across a bunch of macs, here's what we found](https://reddit.com/r/LocalLLaMA/comments/1s2edsl/ran_150_benchmarks_across_a_bunch_of_macs_heres/) — practical benchmark dataset for Apple hardware sizing decisions.
- [SWE-bench results for different KV cache quantization levels](https://reddit.com/r/LocalLLaMA/comments/1s28z12/swebench_results_for_different_kv_cache/) — concrete eval resource on quality/perf trade-offs in KV quantization.
- [PSA: Two env vars that stop your model server from eating all your RAM and getting OOM-killed](https://reddit.com/r/LocalLLaMA/comments/1s2l0my/psa_two_env_vars_that_stop_your_model_server_from/) — operational tuning reference with immediate production relevance.
