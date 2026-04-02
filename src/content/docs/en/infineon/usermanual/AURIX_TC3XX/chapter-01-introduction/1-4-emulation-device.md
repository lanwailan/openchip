---
title: "1.4 Emulation Device (ED)"
description: "Emulation Device overview"
---

# 1.4 Emulation Device (ED)

In the AURIX TC2xx family for most of the so-called production devices a corresponding TC2xxED Emulation device is available. An Emulation Device comprises the unchanged Product Chip Part (SoC) and the Emulation Extension Chip (EEC) part.

In the AURIX®2G TC3xx family this is similar from a functional perspective. The EEC part contains as well an Extension Memory (EMEM) and a Trace module. The MCDS trace module is on a TC39xED while the MCDSlight trace module is on a TC33xED and TC35x. Devices with ED functionality are devices with "Feature Package E".

[Figure 12: Block Diagram — image not included]

**Table 14: TC39x/37x/33xED and TC35x Comparison**

| Functionality / Device name | TC39xED / TC39x | TC37xED / TC37xEXT | TC33xED / TC33xEXT | TC35x |
|---------------------------|------------------|--------------------|--------------------|-------|
| Emulation device for | TC39x, TC38x, TC3Ex | TC37x, TC36x, TC33x | TC33xED | TC35x |
| MCDS variant | MCDS | MCDS | MCDSlight | MCDSlight |
| EMEM RAM total (incl. XTM) | 4112 KB | 3088 KB | 1040 KB | 2064 KB |
| EMEM TCM | 2048 KB | 2048 KB | 1024 KB | 2048 KB |
| AGBT (Aurora) | yes | yes | yes | yes |

**Requirements for TC38x code:**

- It needs to be tolerant to the different CHIP and JTAG ID values.
- It may not access reserved address ranges and expect an error if these ranges are present for TC39xED.
- It may not access the miniMCDS subsystem.
- It may not access the upper 12 ASCLIN modules (out of 24).

**Additional requirements for TC3Ex code:**

- It may not access the upper 2 out of the 5 CAN modules.
- A workaround is needed if the external clock source pin is used for the RTC in the SCR.
