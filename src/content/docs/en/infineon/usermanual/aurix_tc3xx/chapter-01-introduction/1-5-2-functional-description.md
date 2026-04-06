---
title: "1.5.2 Functional Description"
description: "SOTA functional description"
---

# 1.5.2 Functional Description

When SOTA is enabled, a group of PFLASH banks will be mapped to CPU executable address space (defined as 'active' banks) and the other group will be mapped to a set of addresses that allows them to be read and written to (defined as 'inactive' banks). When a SOTA update has completed, and the banks are swapped around, only the address mapping will change. This means that no data needs to be copied and the address ranges being executed from are always the same. The physical address of the PFLASH banks are as described in the standard address map in the Address Map chapter. When a SOTA address map switch from the standard address map is performed, the mapping of the PFLASH banks for read/code execution is described in the alternate address map in the Address Map chapter. In this chapter, the group of banks active in the standard address map is referred to as 'A' and the group of banks active in the alternate address map is referred to as 'B'.

> **Note:** All NVM operations are performed via the DMU using the physical system address of the PFLASH, i.e., an NVM operation always uses the standard address map regardless of swap settings. 'NVM operation' is a term used for any command sequence such as a program, erase etc. targeting a FLASH and does not include reads.

The parameters that control SOTA address map switching and related functions are pre-configured in UCB and the hardware configuration is only updated (by on-chip system firmware) during the subsequent System Reset. This prevents unintentional changes during application execution.

On some product variants, a 1MB block will be swapped with a 3MB block. Because the code image must be able to fit in either group A or B, the upper 2MB of the 3MB block cannot be used for program code.

### Performance Considerations

The CPU access to its local Program Flash bank is optimised for maximum performance. In order mitigate performance variation when executing from different physical PFLASH banks, when SOTA is enabled, CPU fast path to local PFlash must be disabled. This will cause some drop in performance but will ensure identical system performance when between executing from either groups of banks.

Another point to note is prefetch accesses. If exact performance parity between each group is required, prefetch access should be disabled completely. If however, only approximate parity is required, one of the four user assignable prefetch buffers should be assigned to each non-local CPU.
