---
title: "1.5 Software over the Air (SOTA)"
description: "SOTA - Software updates, configuration, safety, and security"
---

# 1.5 Software over the Air (SOTA)

## 1.5.1 Overview

All TC3xx devices besides the TC33x and TC33xEXT have the ability to receive Software updates Over The Air (SOTA) by providing the ability to split the PFLASH into two groups of banks, A and B. When SOTA is enabled, one group of banks can be read and executed from while the other group can have new code written to it.

Simultaneous read-while-write (RWW) capability is not supported within a single physical PFLASH bank. SOTA achieves this by providing the ability to safely and securely perform write and erase operations to the unused group of banks.

## 1.5.2 Functional Description

When SOTA is enabled:
- A group of PFLASH banks will be mapped to CPU executable address space (defined as 'active' banks)
- The other group will be mapped to addresses that allow read and write (defined as 'inactive' banks)

When a SOTA update has completed and the banks are swapped, only the address mapping changes. This means no data needs to be copied and the address ranges being executed from are always the same.

**Note:** All NVM operations are performed via the DMU using the physical system address of the PFLASH, regardless of swap settings.

The parameters that control SOTA address map switching are pre-configured in UCB and the hardware configuration is only updated during the subsequent System Reset.

On some product variants, a 1 MB block will be swapped with a 3 MB block. The upper 2 MB of the 3 MB block cannot be used for program code.

### 1.5.2.1 Performance Considerations

The CPU access to its local Program Flash bank is optimised for maximum performance. When SOTA is enabled, CPU fast path to local PFlash must be disabled. This causes some performance drop but ensures identical system performance when executing from either group of banks.

Regarding prefetch accesses: If exact performance parity between each group is required, prefetch access should be disabled completely.

### 1.5.2.2 Configuring for SOTA

#### 1.5.2.2.1 Configuration Parameters

**Table 21: Configuration Parameters related to SOTA**

| Parameter | Description | Register | See Chapter |
|-----------|-------------|----------|------------|
| **SOTA Mode Enable** | If valid and enabled, SOTA Mode will be entered after the next System Reset | DMU_HF_PROCONTP.SWAPEN | DMU |
| **Bank Swap** | User programmable active address map (standard or alternate) | SCU_SWAPCTRL | SCU |
| **CPUx Fast Path Disable** | Disables direct CPU access to local Program Flash Bank | DMU_HF_PROCONTP.DDISx | DMU, CPU |

#### 1.5.2.2.2 Initial Device Configuration for SOTA

Starting from the delivery state, the initial execution image is programmed onto the program flash banks in the active banks.

1. Protect the sectors used by installing sector specific write protection in the UCB_PFLASH
2. Program the start address of the initial image in UCB_BMHD
3. Perform standard programming of Boot Mode Header UCBs
4. To select standard address map (executing from group A, writing to group B), program 00000055H into MARKERL0.SWAP field in UCB_SWAP
5. Confirm by writing the system address of MARKERL0.SWAP into MARKERH0.ADDR, the system address of CONFIRMATIONL0.CODE into CONFIRMATIONH0.ADDR, and the confirmation code 57B5327FH into CONFIRMATIONL0.CODE

[Figure 14: Initial SWAP Configuration — image not included]

If HSM is required, the initial image should be loaded along with the HSM program code within PFLASH logical sectors S0 to S39 of both group A and group B.

Finally, set SWAPEN to enabled in UCB_OTP to enable SOTA mode with the next system reset.

#### 1.5.2.2.3 Runtime SWAP Configuration

To install a new image during running application:

1. Load the new program image into the inactive group of PFLASH banks
2. Disable sector specific write protection for those banks
3. Identify and correct any errors in the new image
4. Re-enable write protection
5. Configure the SWAP information in UCB_SWAP:
   - Program 0x000000AAH into MARKERLx.SWAP to select alternate address map (if group B contains the new image)
   - Or program 0x00000055H into MARKERLx.SWAP to select standard address map (if group A contains the new image)
6. Program MARKERHx.ADDR, CONFIRMATIONHx.ADDR and CONFIRMATIONLx.CODE
7. Invalidate the previous entry by over-programming CONFIRMATIONL(x-1) with all-1
8. Trigger a system reset

[Figure 15: Runtime SOTA Configuration — image not included]

**Notes:**
- If UCB_SWAP is full (x has reached 15), the whole UCB may be erased and x set back to 0
- The last valid entry of SWAP information is used by the Startup Software
- Maximum 16 SWAPs possible before UCB erase is required

## 1.5.3 Safety

If SOTA is disabled, the entirety of the program flash is protected by safety_endinit. If SOTA is enabled, safety_endinit protection for the inactive group of banks is automatically removed.

Even for the active banks, the requirement for safety application software to be checked before execution remains.

## 1.5.4 Security

The security protection offered to a NVM operation on the PFLASH remains the same as defined in the DMU Chapter, irrespective of the active or inactive nature of the PFLASH bank.

**Additional measures for HSM Exclusive sectors:**

If SOTA is enabled, any protection configured in PROCONHSMCX and PROCONHSMCOTP is mirrored to PFLASH logical sectors S0 to S39 of both groups A and B. This prevents unauthorised access to HSM code via bank swapping.

Reprogramming sectors marked as HSM exclusive, even when inactive, can only be done by the HSM or Cerberus when HSM debug is enabled.

## 1.5.5 Revision History

**Table 22: Revision History**

| Version | Changes |
|---------|---------|
| V1.0.1 | Revision History added, First-level heading structure created, Restructuring of chapter for better clarity |
| V1.0.2 | Removed UCB_HSMCFG from user programming model, Added recommendation to invalidate previous entry by over-programming with all-1 |
| V1.0.3 | Typo correction: "banks" instead of "maps" |
| V1.0.4 | Due to 64 bit width of page write for UCBs, must over-program CONFIRMATIONL+H with all-1 |
| V1.0.5 | Removed value |
