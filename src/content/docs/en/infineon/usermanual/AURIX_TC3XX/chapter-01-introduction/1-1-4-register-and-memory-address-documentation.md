---
title: "1.1.4 Register and Memory Address Documentation"
description: "Register and Memory Address Documentation"
---

# 1.1.4 Register and Memory Address Documentation

Some modules enable through their bus interface access to memory ranges and registers. In these cases the "Register Address Space" table shows memories differently, for example:

| Module | Base Address | End Address | Note |
|--------|--------------|-------------|------|
| (DAM0) | 90400000<sub>H</sub> | 9040FFFF<sub>H</sub> | DAM RAM Access cached address space |
| | B0400000<sub>H</sub> | B040FFFF<sub>H</sub> | DAM RAM Access non-cached address space |
| DAM0 | F8500000<sub>H</sub> | F8507FFF<sub>H</sub> | Special Function Register Address Space |

In this example "LMU_DAM" notifies the module name. In the first column "(DAM0)" and all following rows with empty Module field contain memory ranges accessible by this module instance DAM0. The row showing "DAM0" in the first column contains the address range definition of the DAM0 registers.

The following "Register Overview" table lists all registers with offset addresses based on the row containing "DAM0".

If the LMU_DAM has multiple instances (e.g. DAM0, DAM1) then the table has further rows with "(DAM1)" for memories and "DAM1" as base address for the registers.
