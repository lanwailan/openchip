---
title: "1.5.2.2 Initial Device Configuration for SOTA"
description: "SOTA initial configuration"
---

# 1.5.2.2 Initial Device Configuration for SOTA

Following is a recommendation for installing the initial device configuration for a device with SOTA enabled.

Starting from the delivery state, the initial execution image is programmed onto the program flash banks in the active banks. It is recommended that the sectors used are then protected by installing sector specific write protection in the UCB_PFLASH.

The start address of the initial image is programmed in UCB_BMHD and the standard programming of the Boot Mode Header UCBs is performed.

In order to select the standard address map (executing from group A, writing to group B), 00000055H should be programmed into MARKERL0.SWAP field in UCB_SWAP. This should then be confirmed by writing the system address of MARKERL0.SWAP into MARKERH0.ADDR, the system address of CONFIRMATIONL0.CODE into CONFIRMATIONH0.ADDR and the confirmation code 57B5327FH into CONFIRMATIONL0.CODE.

[Figure 14: Initial SWAP configuration — image not included]

If HSM is required, the initial image should be loaded along with the HSM program code which should be put within the PFLASH logical sectors S0 to S39 of the first PFLASH modules of both group A and group B. The customer HSM configuration should be loaded into UCB_HSMCOTP and UCB_HSM.

Finally, SWAPEN is set to enabled in UCB_OTP, thus enabling SOTA mode with the next system reset.
