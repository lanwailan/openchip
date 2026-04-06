---
title: "2.1 Segment 0 to 14"
description: "Segment 0 to 14 address space overview"
---

# 2.1 Segment 0 to 14

The address map of segments 0 to 14 describes the allocation of the SRI/SPB address space. The segments contain CPU local memory, Program Flash, Data Flash, external memory interfaces, and various control registers.

## Segment Overview

| Segment | Address Range | Size | Description |
| :--- | :--- | :--- | :--- |
| 0 | 0000 0000<sub>H</sub> - 0FFF FFFF<sub>H</sub> | 256 Mbyte | Reserved (virtual address space) |
| 1 | 1000 0000<sub>H</sub> - 100B FFFF<sub>H</sub> | - | CPU5 DSPR, DCACHE, DTAG |
| 2 | 2000 0000<sub>H</sub> - 2FFF FFFF<sub>H</sub> | - | Reserved |
| 3 | 3000 0000<sub>H</sub> - 300B FFFF<sub>H</sub> | - | CPU4 DSPR, DCACHE, DTAG |
| 4 | 4000 0000<sub>H</sub> - 400B FFFF<sub>H</sub> | - | CPU3 DSPR, DCACHE, DTAG |
| 5 | 5000 0000<sub>H</sub> - 500B FFFF<sub>H</sub> | - | CPU2 DSPR, DCACHE, DTAG |
| 6 | 6000 0000<sub>H</sub> - 600B FFFF<sub>H</sub> | - | CPU1 DSPR, DCACHE, DTAG |
| 7 | 7000 0000<sub>H</sub> - 700B FFFF<sub>H</sub> | - | CPU0 DSPR, DCACHE, DTAG |
| 8 | 8000 0000<sub>H</sub> - 8FFF FFFF<sub>H</sub> | 256 Mbyte | Program Flash, EBU, BROM |
| 9 | 9000 0000<sub>H</sub> - 9011 FFFF<sub>H</sub> | - | LMU |
| 10 | A000 0000<sub>H</sub> - A8FF FFFF<sub>H</sub> | 144 Mbyte | Program Flash, EBU, Erase Counters, PFI |
| 11 | B000 0000<sub>H</sub> - B043 FFFF<sub>H</sub> | - | LMU, DAM, TRAM |
| 12 | C000 0000<sub>H</sub> - CFFF FFFF<sub>H</sub> | - | Reserved |
| 13 | D000 0000<sub>H</sub> - DFFF FFFF<sub>H</sub> | - | Reserved |
| 14 | E000 0000<sub>H</sub> - EFFF FFFF<sub>H</sub> | - | Reserved |

### Segment 0

Segment 0 is a reserved virtual address space. If an SPB access to 0000 0000<sub>H</sub> occurs, the SPB BCU generates a bus error.

### Segment 11

This memory segment allows non-cached access to LMU and to EMEM.

### Segment 12, 13

These segments are reserved.

### Segment 14

This segment is reserved.

### Segment 15

The lower 128 Mbyte is SPB address space and the upper 128 Mbyte is SRI address space. See Table 40 for details.

[Figure 16: Segment F Structure — image not included]
