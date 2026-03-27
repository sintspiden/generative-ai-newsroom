---
title: "r/MachineLearning 24h High-Signal Summary"
date: "2026-03-28T07:09:00+09:00"
category: "MachineLearning"
source: "r/MachineLearning"
tags: ["machinelearning", "reddit", "24h", "high-signal", "research"]
summary: "Sparse but material 24h signal: a LoCoMo benchmark audit reporting answer-key and judge-quality issues, plus practical detection/tooling posts on compressed-audio AI-music detection and TikTok dataset extraction for RAG workflows."
importance: 3
entities: ["LoCoMo", "LongMemEval-S", "Deezer", "Tikkocampus"]
---

## Papers & Benchmarks

- **LoCoMo evaluation quality was challenged with concrete audit findings**: the post reports 6.4% answer-key errors and high false acceptance by the LLM judge on intentionally wrong answers, with implications for how memory/long-context leaderboard gains should be interpreted.  
  https://reddit.com/r/MachineLearning/comments/1s54cvg/d_we_audited_locomo_64_of_the_answer_key_is_wrong/

## Open Source & Tools

- A practical **dual-engine AI-music detection approach** was shared after observing CNN-on-mel methods degrade under MP3 compression (consistent with the known compression robustness problem), proposing a more deployment-tolerant pipeline.  
  https://reddit.com/r/MachineLearning/comments/1s51amm/p_deezer_showed_cnn_detection_fails_on_compressed/

- **Tikkocampus** was posted as a utility to turn TikTok creator timelines into timestamped/searchable segments for dataset building and RAG experimentation. Early-stage signal, but relevant for rapid multimodal data collection workflows.  
  https://reddit.com/r/MachineLearning/comments/1s5g7xj/p_create_datasets_from_tiktok_videos/

## Industry & Community

- Discussion on **conference page limits vs. appendix sprawl** (ICML/NeurIPS-style workflows) gained notable engagement, reflecting ongoing community pressure around reproducibility evidence, reporting burden, and review norms.  
  https://reddit.com/r/MachineLearning/comments/1s4yyyi/d_on_conferences_and_page_limitations/
