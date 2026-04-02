---
title: "1.4.4.3 Parallel Trace Use Cases"
description: "Parallel trace use cases"
---

# 1.4.4.3 Parallel Trace Use Cases

### Trace with miniMCDS

In this use case all trace sources need to be selectable as input for miniMCDS. The associated row of Table 18 has only the exceptions DMA and SPU. DMA is also covered by the OTGB DMA trace options and the tracing of SRI slaves, which includes the information of DMA as master including channel number. SPU requires a continuous high bandwidth output, which miniMCDS can't provide.

### Trace Based Measurement (TBM)

In this use case a parallel trace of CPUs and DMA is required. The MCDSlight provides two while the MCDS has five observation blocks. For TC39x with six CPUs plus DMA, an almost arbitrary selection from these seven sources can be made.

The data written by the remaining CPU(s) can be measured with list based DAQ, and included for instance with the traced DMA in the MCDS trace data.

### Debugging with MCDS

The following combinations are mandatory for typical debug use cases:

- CPU debugging with 2-3 arbitrary CPUs + OLDA/LMU0/OTGB + DMA + SPB
- GTM debugging with OTGBM (e.g. MCS) + OTGB (e.g. signal groups) + one CPU + SPB
- OTGB + CPU(s) + SPB
- SRI slave + CPU(s)
