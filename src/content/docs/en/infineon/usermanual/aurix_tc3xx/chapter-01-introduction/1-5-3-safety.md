---
title: "1.5.3 Safety"
description: "SOTA safety considerations"
---

# 1.5.3 Safety

If SOTA is disabled, the entirety of the program flash is protected by safety_endinit which prevents unintentional changes to the program flash's contents. If SOTA is enabled, safety_endinit protection for the inactive group of banks is automatically removed, thus allowing them to be updated.

However, even for the active banks, the requirement for safety application software to be checked before execution remains. More details on the safety_endinit protection are available in the 'Functional Safety Features' section of the NVM Subsystem chapter.
