---
title: "1.5.4 Security"
description: "SOTA security considerations"
---

# 1.5.4 Security

The security protection offered to a NVM operation on the PFLASH remains the same as defined in the 'Security' section of the DMU Chapter irrespective of the active or inactive nature of the PFLASH bank.

**Additional measures for HSM Exclusive sectors in PFLASH:**

If SOTA is enabled, any protection configured in PROCONHSMCX and PROCONHSMCOTP registers is mirrored to the PFLASH logical sectors S0 to S39 of both the groups A and B. This is to prevent unauthorised access to HSM code being gained via bank swapping. The user must make sure that the secure content image is duplicated between the two groups.

Reprogramming sectors marked as HSM exclusive, even when inactive, can only be done by the HSM or Cerberus when HSM debug is enabled.
