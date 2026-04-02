---
title: "1.4.1 Block Diagram"
description: "ED block diagram and components"
---

# 1.4.1 Block Diagram

[Figure 12: Block Diagram — image not included]

**Table 15: TC39xED Components**

| Component | Definition |
|-----------|-----------|
| AGBT | Aurora GigaBit Trace module on EEC |
| BBB | Back Bone Bus with FPI protocol |
| BOB | Bus Observation Block. Trace and trigger logic within MCDS |
| Cerberus | Central debug and tool access control unit is part of OCDS |
| DAP | Device Access Port. Fast and robust 2/3 pin tool interface (15/30 MB/s). |
| DAPE | Independent DAP instance for connecting a second tool to the ED |
| DMA | Direct Memory Access controller. Shares SRI/SPB bus interfaces with Cerberus. |
| ED | Emulation Device for calibration, measurement and debug |
| EEC | Emulation Extension Chip part |
| EMEM | Extension Memory (calibration and trace memory) |
| FPI | Flexible Peripheral Interconnect, the protocol of SPB and BBB buses |
| IOC32P/E | IO Client for accessing BBB by DAP/DAPE |
| MCDS | Multi-Core Debug Solution |
| OCDS | On-Chip Debug Support |
| OTGB | OCDS Trigger Bus: collects interrupt and peripheral trace and trigger signals. |
| POB | Processor Observation Block |
| SBCU | SPB Bus Control Unit |
| SoC | System on Chip (used also for "product chip part") |
| SPB | System Peripheral Bus with FPI protocol |
| SRI | Shared Resource Interconnect cross bar |
| TMUX | Trace Multiplexer |

The Extension Memory (EMEM) as part of the EEC is used for two conceptually different purposes: trace buffering and overlay memory.

**Trace buffering** is a non-intrusive tool to aid the debugging process. Matching elements from the MCDS module are provided to translate captured signals into trace messages. These messages are buffered in EMEM and can then be read by the tool.

**Overlay memory** allows RAM partitions to be mapped into the address ranges of the CPUs, optionally replacing parts of the TC3xx's local Flash.
