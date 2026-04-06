---
title: "1.3.4 Tool Interface Recommendations"
description: "Tool interface pin recommendations"
---

# 1.3.4 Tool Interface Recommendations

AURIX™ TC3XX devices are well supported by many tool partners for different types of tools. Standard tool interface for debug, measurement and calibration is **DAP** due to its reduced pin-count, higher performance (3-6x) and higher robustness (CRC) than JTAG.

**Table 12: Tool Relevant Device Pins of AURIX™ TC3XX Family**

| Pins | Remark |
|------|--------|
| TRST/DAPE0 | DAP: Has to be high at PORST pin release. TRST has a pull-up. JTAG: Needs to be controlled by the tool via the tool connector. The DAPE interfaces can be operated in parallel with the DAP for Emulation Devices. |
| DAP0/TCK | DAP: Please consider AP24003 for high speed DAP |
| DAP1/TMS | |
| DAP2/TDO/DAPE2 TGI3/TGO3 | DAP: Needed for three pin modes like high bandwidth Wide Mode and Unidirectional Wide Mode. The standard DAP connector (AP24003) allows to use this pin on demand either for Wide Mode e.g. for measurement or as trigger pin for system debugging. The DAPE interfaces can be operated in parallel with the DAP for Emulation Devices. |
| DAP3/TDI/DAPE1 TGI2/TGO2 | DAP: Needed for four pin mode like high bandwidth Unidirectional Wide Mode. The DAPE interfaces can be operated in parallel with the DAP for Emulation Devices. |
| VDDSB | 1.25 V supply of the ED memory. VDDSB has to be supplied when VDD is supplied and the EMEM is unlocked. VDDSB can be unsupplied when VDD is supplied and PORST is active or the EMEM is locked. VDDSB can be supplied when VDD is unsupplied and PORST is active (EMEM standby mode). |
| VEXT | 3.3 V or 5 V external power supply for the device. VEXT decides also the DAP connection voltage. |
| TGIX/TGOx | Optional trigger pins, overlaid to port pins. Availability depends on device and package type. |
| AGBT_xyz | AGBT high-speed serial pins in the center ball matrix of EDs in BGA packages. Please connect to VSS if no AGBT is needed. |

> Note: Dedicated DAPE pins are provided for Emulation Device packages, referring to the data sheet and the ED specificization.

For more information please contact your Infineon support.
