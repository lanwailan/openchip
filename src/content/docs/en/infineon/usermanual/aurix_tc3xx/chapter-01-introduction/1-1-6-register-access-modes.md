---
title: "1.1.6 Register Access Modes"
description: "Register Access Modes"
---

# 1.1.6 Register Access Modes

Read and write access to registers and memory locations are sometimes restricted. In memory and register access tables, the terms as defined in Table 3 are used.

In general, if an access type is not permitted under these rules (e.g. attempted write to R, attempted user mode access to SV, attempted access to E without Endinit, etc.) then a Bus Error will result, unless the access is also marked as nBE (or otherwise stated in the specific module chapter).

Other special access restrictions may apply in some modules. These will be described within the module chapters.

**Table 3: Access Terms**

| Symbol | Description |
| :--- | :--- |
| BE | Always returns Bus Error (e.g. used on Write Access to indicate a read-only register) |
| CPUx | Access only by CPUx (identified by its bus master id). |
| CEy | Access only when CPUy ENDINIT is not active (SCU_WDTCPUyCON0.ENDINIT = 0) |
| E | Access only when any CEx is inactive (SCU_WDTCPUxCON0.ENDINIT = 0 or SCU_EICON0.ENDINIT = 0) |
| H | Access only from HSM Master (and Cerberus, if HSM Debug is enabled) when DFLASH1 is HSM Exclusive (DMU_SP_PROCONHSMCFG.HSMDX is set) |
| M | Marks module specific access condition which is described in the module's chapter |
| OEN | Access only when OCDS is enabled |
| P | Access only from Master x (when MOD_ACCEN0.ENx = 1) |
| P0 | Access only from Master x (when MOD_ACCEN00.ENx = 1) |
| P1 | Access only from Master x (when MOD_ACCEN10.ENx = 1) |
| Pr | Access only from Master x (when MOD_ACCENr0.ENx or MOD_ACCENr1.ENx = 1) |
| P00/P01 | Access only from Master x (when MOD_ACCEN00/01.ENx = 1, i.e. r=0) |
| PW | Access only when correct Password |
| SE | Access only when Safety Endinit is inactive (SCU_WDTSCON0.ENDINIT = 0 or SCU_SEICON.ENDINIT = 0) |
| ST | Access only when startup (SSW) executes |
| SV | Access only for when Supervisor Mode is active on the bus. |
| TM | Access only when SCU test mode |
| U | Access only when User Mode is active on the bus. |
| 32 | Access only when 32-bit width |
| 32,64 | Access only when 32-bit or 64-bit width |

**Notes:**
1. Different definition in IR module, also defining "P1" and "P2".
2. Definitions used in DMA module to separate resource partitions "r".

**Table 4: Combined Access Conditions**

| Symbol | Description |
| :--- | :--- |
| U, SV | U or SV |
| P, U, SV | P and (U or SV) |
| P, SV, E | P and SV and E |
| SV, SE | SV and SE |
| TM, ST | TM or ST |

**Table 5: Other Register Annotations**

| Symbol | Description |
| :--- | :--- |
| nBE | Indicates that no Bus Error is generated when accessing this address range, even though it is either an access to an undefined address or the access does not follow the given rules. |
| nE | Indicates that no Error is generated when accessing this address or address range, even though the access is to an undefined address or the access does not follow the given rules. True for CPU accesses (MTCR/MFCR) to undefined addresses in the CSFR range. |

More complicated Access Conditions (e.g. write access depending on value of other register) described in text or separate "Access Mode Restrictions" tables.
