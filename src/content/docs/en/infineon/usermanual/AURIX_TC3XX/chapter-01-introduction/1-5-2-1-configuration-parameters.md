---
title: "1.5.2.1 Configuration Parameters"
description: "SOTA configuration parameters"
---

# 1.5.2.1 Configuration Parameters

**Table 19: Configuration Parameters related to SOTA**

| Parameter | Overview Description | Copied into register (by SSW during start-up) | See Chapter |
|-----------|---------------------|----------------------------------------------|------------|
| **SOTA Mode Enable** | If valid and enabled, SOTA Mode will be entered after the next System Reset. If valid and enabled then PROCONHSMCXx and PROCONHSMCOTP setting configured for active banks will also be applied to inactive banks after the next System Reset. | DMU_HF_PROCONTP.SWAPEN | DMU |
| **Bank Swap** | User programmable active address map is standard or alternate address map. If SOTA Mode is valid and enabled and the SWAP information configured in the UCB_SWAP is valid, then after next System Reset the address map is set accordingly to standard or alternate address map. | SCU_SWAPCTRL | SCU |
| **CPUx Fast Path Disable** | Disables direct CPU access to local Program Flash Bank after the next System Reset. Access to local Program Flash routed via SRI instead. | DMU_HF_PROCONTP.DDISx | DMU, CPU |
