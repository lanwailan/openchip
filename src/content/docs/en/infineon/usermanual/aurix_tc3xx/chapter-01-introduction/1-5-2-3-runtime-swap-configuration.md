---
title: "1.5.2.3 Runtime SWAP Configuration"
description: "SOTA runtime swap configuration"
---

# 1.5.2.3 Runtime SWAP Configuration

Following is a recommendation for installing the new image during running application, and configuring the device to swap to the new image.

1. Load the new program image into the inactive group of PFLASH banks
2. Disable sector specific write protection for those banks
3. Identify and fix any errors in the new image
4. Re-enable write protection
5. Configure the SWAP information in UCB_SWAP

[Figure 15: Runtime SOTA configuration — image not included]

**To configure SWAP:**

- To select **alternate address map** (group B contains new image): Program 0x000000AAH into MARKERLx.SWAP
- To select **standard address map** (group A contains new image): Program 0x00000055H into MARKERLx.SWAP

**Confirmation:**

- Program CONFIRMATIONHx.ADDR with system address of CONFIRMATIONLx.CODE
- Program CONFIRMATIONLx.CODE with 0x57B5327FH
- Invalidate previous entry (x-1) by over-programming CONFIRMATIONL(x-1) with all-1

> **Note:** If UCB_SWAP is full (x has reached 15), the whole UCB may be erased and x set back to 0 before a new entry is added.

> **Note:** The last valid entry of SWAP information is used by the Startup Software.

To begin running of the new image, a **system reset** should be triggered (application resets have no effect).
