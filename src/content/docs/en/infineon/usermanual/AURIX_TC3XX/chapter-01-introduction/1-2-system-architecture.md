---
title: "1.2 System Architecture of the AURIX TC3xx Platform"
description: "System Architecture overview, family overview, and variants"
---

# 1.2 System Architecture of the AURIX™ TC3xx Platform

The AURIX™ TC3xx Platform is a family of high-performance microcontrollers with multiple TriCore CPUs, program and data memories, buses, bus arbitration, interrupt system, DMA controller, and a powerful set of on-chip peripherals. The AURIX™ TC3xx Platform is designed to meet the needs of the most demanding embedded control systems applications where the competing issues of price/performance, real-time responsiveness, computational power, data bandwidth, and power consumption are key design elements.

Within the AURIX™ TC3xx Platform, all peripheral units are connected to the TriCore CPUs/system via a System Peripheral Bus (SPB) and a Shared Resource Interconnect (SRI).

The TriCore processor architecture combines three powerful technologies within one processing unit:

- **Reduced Instruction Set Computing (RISC)** processor architecture
- **Digital Signal Processing (DSP)** operations and addressing modes
- **On-chip memories and peripherals**

DSP operations and addressing modes provide the computational power necessary to efficiently analyse complex real-world signals. The RISC load/store architecture provides high computational bandwidth with low system cost.

**Additional high-level features:**

- Multicore Architecture
- Efficient memory organization: instruction and data scratch memories, caches, and local flash banks
- Serial communication interfaces – flexible synchronous and asynchronous modes
- Multiple channel DMA Controller
- Flexible interrupt system – configurable interrupt priorities and targets
- Hardware Security Module
- Flexible CRC Engine
- General-purpose timers
- High-performance on-chip buses
- On-chip debugging and emulation facilities
- Flexible interconnections to external components
- Flexible power-management

**ADAS or Extended features available in some products:**

- Camera Interface
- Radar Interface
- Extended Memory
- ADAS Signal Processing Unit

## 1.2.1 AURIX™ TC3xx Platform High End – TC39x

[Figure 1: Block Diagram of TC39x — image not included]

## 1.2.2 AURIX™ TC3xx Platform - Family Overview

The following pages show the block diagrams of the main platform devices based on the TC3xx architecture.

**Device series:**

- TC39x
- TC38x
- TC3Ex
- TC37xEXT
- TC37x
- TC36x
- TC35x
- TC33xEXT
- TC33x

**Table 9: Platform Feature Overview**

> **Note:** The following table has been simplified from the original multi-column format. For detailed per-device specifications, refer to the original PDF.

| Feature Category | Description |
|-----------------|-------------|
| **CPUs** | Type: TC1.6.2P |
| **Cores / Checker Cores** | TC33x: 1/1, TC33xEXT: 2/1, TC35x: 3/2, TC36x: 2/2, TC37x: 3/2, TC37xEXT: 3/3, TC38x: 4/2, TC39x: 6/4 |
| **Max. Freq.** | 300 MHz |
| **Cache per CPU** | Program: 32 KB, Data: 16 KB |
| **SRAM per CPU** | PSPR: 32-64 KB, DSPR: 96-240 KB, DLMU: 8-64 KB |
| **SRAM global** | LMU: 0-768 KB, DAM: 0-128 KB |
| **Extension Memory** | TCM: 0-2 MB, XCM: 0-2 MB, XTM: 16 KB |
| **Program Flash** | Size: 2-16 MB, Banks: 1-6 |
| **Data Flash** | DF0: 128 KB-1 MB, DF1: 128 KB |
| **DMA** | Channels: 64-128, Move Engines: 2, Resource Partitions: 4 |
| **EVADC** | Primary: 2-8 groups, Secondary: 0-4 groups |
| **EDSADC** | Channels: 0-14 |
| **GTM** | Clusters: 0-12 @ 100-200 MHz |
| **CAN** | Modules: 1-3, Nodes: 4-12 |
| **QSPI** | Modules: 4-6, HSIC Channels: 0-2 |
| **ASCLIN** | Modules: 4-24 |
| **FlexRay** | Modules: 0-2, Channels: 0-4 |
| **SENT** | Channels: 0-25 |
| **Security** | HSM+ on select devices |
| **Debug** | OCDS, MCDS, miniMCDS (device dependent) |
| **ASIL** | Level: up to ASIL-D |

> For complete per-device feature tables, please refer to the original Infineon AURIX TC3XX User Manual PDF.

### Block Diagrams

[Figure 2: Block Diagram of TC38x — image not included]

[Figure 3: Block Diagram of TC37xEXT — image not included]

[Figure 4: Block Diagram of TC37x — image not included]

[Figure 5: Block Diagram of TC36x — image not included]

[Figure 6: Block Diagram of TC35x — image not included]

[Figure 7: Block Diagram of TC33xEXT — image not included]

[Figure 8: Block Diagram of TC33x — image not included]

## 1.2.3 Variants

From the devices described in Section 1.2.1 and 1.2.2, "Variants" are created with reduced feature set. This reduction of features is realized by switching functionality off or by documentation only.

### 1.2.3.1 Encoding of the Product Name

The product name (e.g., SAK-TC375SB-128F200W AA) supplies the following information:

**Temperature Range:**
- K: T<sub>ambient</sub> temperature range from −40 °C up to +125 °C
- L: T<sub>ambient</sub> temperature range from −40 °C up to +150 °C

**Architecture:**
The architecture (= device family) is identified by the "3" in TC3xy.

**Device Series:**
The series (e.g., TC39x, TC38x, TC37x, TC35x, TC33x, TC3Ex) identifies a set of variants. The SCU_CHIPID field CHID encodes the device series.

**Package Class:**
The package class is marked with the "x" in the product name:

| x | Pins |
|---|------|
| 9 | 516 pins |
| 7 | 292 pins |
| 6 | 180 pins |
| 5 | 176 pins |
| 4 | 144 pins |
| 3 | 100 pins |
| 2 | 80 pins |
| 0 | bare die |

**Core Architecture:**

| Letter | Cores |
|--------|-------|
| X | Hexa core (= 6 CPUs) |
| Q | Quad core (= 4 CPUs) |
| T | Triple core (= 3 CPUs) |
| D | Dual core (= 2 CPUs) |
| L | Single core (= 1 CPU) |

**Feature Package:**

| Package | Description |
|---------|-------------|
| A | ADAS extension – contains ADAS subsystem with extended memory (EMEM), SPU, RIF |
| P | HSM enabled – no ADAS subsystem, no Emulation features |
| E | Emulation device – emulation device for Package P devices |
| X | Feature extension – contains ADAS subsystem with EMEM only, no SPU/RIF |
| (no letter) | HSM disabled, no ADAS, no Emulation |

**Flash Size Code:**
Flash size encoded as multiple of 64 KByte (e.g., "16" = 1 MB, "256" = 16 MB)

**Frequency:**
Maximum CPU frequency: 160 MHz, 200 MHz, or 300 MHz

**Package Type:**
- W: LQFP with 0.5 mm pitch
- F: TQFP with 0.4 mm pitch
- S: LFBGA with 0.8 mm pitch

### 1.2.3.2 Emulation Devices

Emulation Devices "ED" (Feature Package "E") are compatible to the emulated Feature Package "P" and "" devices.

**Emulation strategy:**
- TC39x Feature Package "E" can emulate TC39x and TC38x
- TC37x Feature Package "E" can emulate TC37x and TC36x

### 1.2.3.3 TC32x

The TC32x device series is based on TC33x silicon. Refer to the TC33x/TC32x Data Sheet Addendum for variant information and feature differences.

### 1.2.3.4 TC39x With Feature Package "P"

**Table 10: TC39x Feature Package "P" differences**

| Feature | TC39x Feature Package "P" |
|---------|-------------------------|
| Extension Memory (EMEM) | TCM: – , XCM: – , XTM: – |
| SDMMC | eMMC/SD Interface: 0 |
| SPU | Modules: 0 |
| SPU Lockstep Cmp. | Modules: no |
| RIF | Modules: 0 |
| HSPDM | Modules: 0 |
| Debug | AGBT: no |

## 1.2.4 Revision History

**Table 11: Revision History**

| Version | Changes |
|---------|---------|
| V1.5.0 | Initial release |
| V1.5.1 | Extended AGBT footnote, changed GTM config for TC33x, corrected SENT documentation, renamed TC38xEXT to TC3Ex |
| V1.6.0 | Added TC3Ax Feature list, updated block diagrams, added TC3Ax to device series, added PMS row to feature table |
| V1.6.1 | Updated TC3Ax block diagram with BITMGR0, updated CPU2 DSPR size |
| V1.6.2 | Updated TC33x EVADC Secondary Groups/Channels, updated Feature Package "X" definition |
| V1.6.3 | TC3Ax reference removed |
| V1.6.4 | TC32x feature overview delta removed, bare die package removed |
