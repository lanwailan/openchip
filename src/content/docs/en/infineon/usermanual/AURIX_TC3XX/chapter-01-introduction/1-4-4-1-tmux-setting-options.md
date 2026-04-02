---
title: "1.4.4.1 TMUX Setting Options"
description: "TMUX setting options"
---

# 1.4.4.1 TMUX Setting Options

For keeping the on-chip wiring of wide high-speed trace buses within reasonable bounds, the trace source setting options for some MCDS observation blocks are significantly reduced. This reduced set was selected taking into account the use cases for parallel trace.

**Table 16: Trace Source Multiplexer (TMUX) Setting Options**

| Source | POBx, miniMCDS | POBy | POBz | BOB1 | BOB2 |
|--------|----------------|------|------|------|------|
| CPU0 | ✓ | | ✓ | | |
| CPU1 | | ✓ | | | |
| CPU2 | | ✓ | | ✓ (TBM) | |
| CPU3 | | ✓ | | | ✓ (TBM) |
| CPU4 | | ✓ | | ✓ (TBM) | |
| CPU5 | | ✓ | | | ✓ (TBM) |
| LMU0 | | | ✓ | | |
| OLDA | | | ✓ | | |
| DMA_MIF0 | | | | | ✓ |
| SPU0 | | | | ✓ | |
| SPU1 | | | | | ✓ |
| OTGB | | | ✓ | | |
| OTGBM (GTM) | ✓ | ✓ | | | |
