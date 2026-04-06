---
title: "1.4.3 Comparison to AURIX Emulation Devices"
description: "Comparison to previous generation EDs"
---

# 1.4.3 Comparison to AURIX Emulation Devices

TC3xx Emulation Devices are designed as close to the predecessors of the AURIX family as feasible.

### New Features

- CPU read data value trace
- Trace based measurement (TBM) mode
- Second DAP interface (DAPE) for connecting two tools in parallel
- Unidirectional Wide Mode for DAP interface only (not for DAPE)
- Trace of EVR state and control loop signals
- Option to make HSM accesses visible in SPB trace
- Debug support of EBCU enabled
- EMEM standby supply status bit (SBRCTR.STBPON)
- Program trace of up to three CPUs in parallel
- Local trace source multiplexer in CPU subsystem (TCMUX)
- Data trace of up to five CPUs (or four + DMA) in parallel for Trace Based Measurement
- GTM has two additional direct 32 bit trace busses to MCDS (OTGBM0/1)
- Improved trace data streaming via DAP (NTN NOW capture)
- BBB access with an SRI to FPI bridge from CPUs (not via LMU)
- EMEM access with SRI to SRI bridge from CPUs (not via LMU)
- EMEM size is up to 4 MB
- EMEM access latency reduced for CPUs
- Up to 2 MB EMEM can be used for trace buffering
- EMEM TCM tile size is 256 KB
- EMEM XTM addressing changed due to changed TCM tile size
- EMEM XTM can only be used for trace data (MCDS, BBB, AGBT). No CPU access anymore.
- EEC addresses are now the same from IOC32P/E and from CPU point of view
- Prolog Code PCEDS addresses changed

### Discontinued

- Cold start EMEM access via Standby DAP
- FusionQuad™ packages
