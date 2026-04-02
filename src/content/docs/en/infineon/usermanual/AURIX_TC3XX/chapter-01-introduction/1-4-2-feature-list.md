---
title: "1.4.2 Feature List"
description: "ED feature list"
---

# 1.4.2 Feature List

### Applications

- Software development
  - Debugging
  - Performance analysis and optimization
- Calibration
- Measurement
- Rapid prototyping

### General Features

- The behavior of a TC3xx device and its corresponding TC3xxED device is identical with restrictions listed in Table 16
- The package of a TC3xx device and its corresponding TC3xxED device is footprint compatible
- Minimum number of ED specific pins
- Full access to the EEC part via the regular DAP/JTAG package pins
- No external emulator hardware required other than DAP/JTAG interface
- Tool software running on TriCore has full EEC access
- Protection against reverse engineering and manipulation
- Additional DAP interface (DAPE) for connecting a second independent tool
- High speed Aurora GigaBit Trace (AGBT) interface

### Extension Memory Features

- Extension Memory (EMEM) size is up to 4112 KB
- EMEM has two 8 KB XTM tiles, up to eight 256 KB TCM tiles, and up to 2 MB XCM
- EMEM except XTM can be used for calibration, code, constants, or data storage
- Up to 2048 KB can be used for trace buffering
- Continuous trace via DAP / AGBT requires just two XTM tiles
- Support of independently operating calibration and debug tools
- FIFO functionality for continuous trace (EMEM address triggers in MCDS)
- EMEM is also mapped into the address range of TriCore
- EMEM can be overlaid to Flash
- Data retention of RAM during power down by isolated standby power supply
- ECC with SECDED (Single Error Correction, Double Error Detection)

### Measurement Features

- Highly efficient SW triggering via DAP interface (TRIG)
- Fine Grained Trace Qualification for low-cost Trace Based Measurement (TBM) via DAP
- Aurora GigaBit Trace (AGBT) interface for high-end trace based measurement

### Debug Features

- TriCore program trace (instructions, program flow, functions only)
- Continuous Compact Function Trace (CFT) via DAP
- TriCore data trace (no register file trace)
- Parallel trace of three CPUs, two selected SRI clients, and the SPB bus
- Full visibility of internal peripheral bus (SPB)
- Time aligned trace of all sources
- Trace of internal states and signals of complex peripherals
- Trace of interrupt and DMA requests and processing
- Trace of EVR state and control loop signals
- Breakpoints and watch points based on common event generation logic
- Magnitude comparators working on instruction pointers and memory addresses
- Masked magnitude comparators working on the data buses
- Sequential event logic: counters driven by events with limit comparators
- Optimized compression of buffered trace data
- Very powerful qualification- and trigger mechanism
- Pre- and post-event trace buffering ("digital oscilloscope")
- Performance counters
- Central time stamp unit to correlate traces from different CPUs and other sources
- Halt the system or parts of it when trace memory is full
- Regular and modular structure of the control blocks and registers
- Trace debug unit power reduction modes with clock gating
- Trace data in EMEM can be decoded after unsolicited PORST
- Output of continuous trace over DAP/DAPE or Aurora GigaBit Trace interface
- HSM bus traffic completely filtered away by default
