---
title: "1.4 Emulation Device (ED)"
description: "Emulation Device - block diagrams, features, and trace multiplexer"
---

# 1.4 Emulation Device (ED)

In the AURIX®2G TC3xx family, the Emulation Device comprises the unchanged Product Chip Part (SoC) and the Emulation Extension Chip (EEC) part.

[Figure 12: Block Diagram of TC39xED — image not included]

The EEC part contains Extension Memory (EMEM) and a Trace module. The MCDS trace module is on TC39xED while MCDSlight is on TC33xED and TC35x.

**Table 16: TC39x/37x/33xED and TC35x Comparison**

| Functionality | TC39xED / TC39x | TC37xED / TC37xEXT | TC33xED / TC33xEXT | TC35x |
|--------------|-----------------|-------------------|-------------------|-------|
| Emulation device for | TC39x, TC38x, TC3Ex | TC37x, TC36x, TC33x | TC33xED | TC35x |
| MCDS variant | MCDS | MCDS | MCDSlight | MCDSlight |
| EMEM RAM total | 4112 KB | 3088 KB | 1040 KB | 2064 KB |
| EMEM TCM | 2048 KB | 2048 KB | 1024 KB | 2048 KB |
| AGBT (Aurora) | yes | yes | yes | yes |

**Requirements for TC38x code:**

- Must be tolerant to different CHIP and JTAG ID values
- May not access reserved address ranges
- May not access the miniMCDS subsystem
- May not access the upper 12 ASCLIN modules (out of 24)

**Additional requirements for TC3Ex code:**

- May not access the upper 2 out of the 5 CAN modules

## 1.4.1 Block Diagram

[Figure 12: Block Diagram — image not included]

**Table 17: TC39xED Components**

| Component | Definition |
|-----------|-----------|
| AGBT | Aurora GigaBit Trace module on EEC |
| BBB | Back Bone Bus with FPI protocol |
| BOB | Bus Observation Block. Trace and trigger logic within MCDS |
| Cerberus | Central debug and tool access control unit (part of OCDS) |
| DAP | Device Access Port. Fast and robust 2/3 pin tool interface (15/30 MB/s) |
| DAPE | Independent DAP instance for connecting a second tool to the ED |
| DMA | Direct Memory Access controller |
| ED | Emulation Device for calibration, measurement and debug |
| EEC | Emulation Extension Chip part |
| EMEM | Extension Memory (calibration and trace memory) |
| FPI | Flexible Peripheral Interconnect, the protocol of SPB and BBB buses |
| IOC32P/E | IO Client for accessing BBB by DAP/DAPE |
| MCDS | Multi-Core Debug Solution |
| OCDS | On-Chip Debug Support |
| OTGB | OCDS Trigger Bus: collects interrupt and peripheral trace and trigger signals |
| POB | Processor Observation Block |
| SBCU | SPB Bus Control Unit |
| SoC | System on Chip |
| SPB | System Peripheral Bus with FPI protocol |
| SRI | Shared Resource Interconnect cross bar |
| TMUX | Trace Multiplexer |

The Extension Memory (EMEM) is used for two purposes:
- **Trace buffering** – for non-intrusive debugging
- **Overlay memory** – RAM partitions mapped into CPU address ranges

## 1.4.2 Feature List

### Applications

- Software development (Debugging, Performance analysis)
- Calibration
- Measurement
- Rapid prototyping

### General Features

- Behavior identical to corresponding TC3xx device (with listed restrictions)
- Package footprint compatible
- Minimum number of ED specific pins
- Full access to EEC part via regular DAP/JTAG package pins
- No external emulator hardware required
- Tool software running on TriCore has full EEC access
- Protection against reverse engineering and manipulation
- Additional DAP interface (DAPE) for connecting a second independent tool
- High speed Aurora GigaBit Trace (AGBT) interface

### Extension Memory Features

- EMEM size up to 4112 KB
- EMEM has two 8 KB XTM tiles, up to eight 256 KB TCM tiles, and up to 2 MB XCM
- Up to 2048 KB for trace buffering
- Continuous trace via DAP / AGBT
- EMEM mapped into TriCore address range
- EMEM can be overlaid to Flash
- ECC with SECDED

### Measurement Features

- Highly efficient SW triggering via DAP interface (TRIG)
- Fine Grained Trace Qualification for Trace Based Measurement (TBM)
- Aurora GigaBit Trace (AGBT) interface

### Debug Features

- TriCore program trace (instructions, program flow, functions)
- Continuous Compact Function Trace (CFT) via DAP
- TriCore data trace
- Parallel trace of CPUs, SRI clients, and SPB bus
- Full visibility of internal peripheral bus (SPB)
- Breakpoints and watch points
- Pre- and post-event trace buffering ("digital oscilloscope")
- Performance counters
- Central time stamp unit
- EMEM trace debug unit power reduction modes
- Trace data in EMEM can be decoded after unsolicited PORST
- HSM bus traffic filtered away by default

## 1.4.3 Comparison to AURIX Emulation Devices

### New Features (vs. previous generation)

- CPU read data value trace
- Trace based measurement (TBM) mode
- Second DAP interface (DAPE)
- Unidirectional Wide Mode for DAP interface only
- Trace of EVR state and control loop signals
- Option to make HSM accesses visible in SPB trace
- Debug support of EBCU enabled
- EMEM standby supply status bit (SBRCTR.STBPON)
- Program trace of up to three CPUs in parallel
- Local trace source multiplexer in CPU subsystem (TCMUX)
- GTM with two additional direct 32 bit trace busses to MCDS (OTGBM0/1)
- EMEM size up to 4 MB
- EMEM TCM tile size is 256 KB

### Discontinued

- Cold start EMEM access via Standby DAP
- FusionQuad™ packages

## 1.4.4 Trace Source Multiplexer

[Figure 12: TMUX Multiplexer — image not included]

Within the CPU subsystem there is a local multiplexer (TCMUX).

### 1.4.4.1 TMUX Setting Options

**Table 18: Trace Source Multiplexer (TMUX) Setting Options**

| Source | POBx, miniMCDS | POBy | POBz | BOB1 | BOB2 |
|--------|---------------|------|------|------|------|
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

### 1.4.4.2 Trace Source Multiplexer in CPU Subsystem (TCMUX)

[Figure 13: TCMUX in CPU Subsystem — image not included]

The trace multiplexer within the CPU Subsystem allows selection between:
- CPU pipeline
- PSPR/DSPR/DLMU SRI slave

### 1.4.4.3 Parallel Trace Use Cases

**Trace with miniMCDS:**
All trace sources need to be selectable as input for miniMCDS. DMA is covered by OTGB DMA trace options and SRI slave tracing.

**Trace Based Measurement (TBM):**
Parallel trace of CPUs and DMA. MCDSlight provides two observation blocks, MCDS has five.

**Debugging with MCDS:**
Mandatory combinations:
- CPU debugging with 2-3 arbitrary CPUs + OLDA/LMU0/OTGB + DMA + SPB
- GTM debugging with OTGBM + OTGB + one CPU + SPB
- OTGB + CPU(s) + SPB
- SRI slave + CPU(s)

## 1.4.5 DAP ED Interface (DAPE)

[Figure 12: Additional DAPE Interface — image not included]

**Table 19: Comparison DAP/DAPE**

| Property | DAP | DAPE |
|----------|-----|------|
| Availability | On each device | TC3xxED and TC35x only |
| Number of pins | 2-3 | |
| Performance | 15-30 MB/s (both can be used in parallel) | |
| Package Pins | DAP/JTAG/P21 | |
| Additional ED package mapping | no | dedicated DAPE pins on BGA packages |
| Accessible address ranges | all (SRI, SPB, BBB) | BBB only |
| Interface locking | yes | yes (follows DAP) |
| Password exchange | yes | no |
| Control of Application/System resets | yes | no |
| Calibration | yes | no (possible with monitor) |
| Debug with run control, flashing | yes | no |

> **Attention:** The additional DAPE pads used for BGA packages need to be configured with TTL level.

## 1.4.6 Revision History

**Table 20: Revision History**

| Version | Changes |
|---------|---------|
| V1.0.1 | No changes |
| V1.0.2 | Updated description of "Emulation Device", updated descriptions of Cerberus and EEC |
| V1.0.3 | Added TC39x/37x/33xED and TC35x Comparison table, requirements for TC38x and TC3Ex compatibility |
| V1.0.4 | Added TC3Ax to tables and descriptions |
| V1.0.5 | Corrected version number to V1.0.5 |
| V1.0.6 | Removed sections regarding TC3Ax |
