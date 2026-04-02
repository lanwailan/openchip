---
title: "1.4.5 DAP ED Interface (DAPE)"
description: "DAPE interface comparison"
---

# 1.4.5 DAP ED Interface (DAPE)

[Figure 12: Additional DAPE Interface — image not included]

**Table 17: Comparison DAP/DAPE**

| Property | DAP | DAPE |
|----------|-----|------|
| Availability | on each device | TC3xxED and TC35x only |
| Number of pins | 2-3 | |
| Performance | 15-30 MB/s (both can be used in parallel) | |
| Package Pins | DAP/JTAG/P21 | |
| Additional ED package mapping | no | dedicated DAPE pins on BGA packages |
| Accessible address ranges | all (SRI, SPB, BBB) | BBB only |
| Interface locking | yes (OSTATE.IF_LCK) | yes (follows OSTATE.IF_LCK) |
| Password exchange | yes (COMDATA) | no |
| Control of Application and System resets | yes (OJCONF) | no |
| Trigger CPU to tool sources | OTGS, TRIG | OTGS |
| Trigger CPU to tool signaling | TGIP, IOINFO, TRIGx | TGIP, IOINFO |
| CPU interrupt request | COM Mode, write SRNs | IOC32E_OJCONF |
| Debug with run control, flashing, etc. | yes | no |
| Debug with MCDS trace | yes | |
| Calibration | yes | no (possible with monitor) |
| Measurement with DAP | yes | |
| Measurement with AGBT | yes (DAP needed for AGBT control) | |
| Rapid prototyping internal | yes | yes with monitor or prolog code |
| Rapid prototyping external | yes | yes with service monitor |

> **Attention:** The additional DAPE pads used for BGA packages need to be configured with TTL level.
