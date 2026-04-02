---
title: "1.5 Software over the Air (SOTA)"
description: "SOTA overview"
---

# 1.5 Software over the Air (SOTA)

All TC3xx devices besides the TC33x and TC33xEXT have the ability to receive Software updates Over The Air (SOTA) by providing the ability to split the PFLASH into two groups of banks, A and B. When SOTA is enabled, one of these groups of banks can be read and executed from, while the other group can have new code written to it.

Thus, though simultaneous read-while-write (RWW) capability is not supported within a single physical PFLASH bank, SOTA is supported by providing the ability to safely and securely perform write and erase operations to the unused group of banks.
