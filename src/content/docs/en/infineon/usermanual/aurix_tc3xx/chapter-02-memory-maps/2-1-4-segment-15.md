---
title: "2.1.4 Segment 15 Address Map"
description: "Segment 15 SPB and SRI peripheral address space — Table 40"
---

# 2.1.4 Segment 15 Address Map

Segment 15 contains the SPB and SRI peripheral address space. The lower 128 Mbyte is SPB address space and the upper 128 Mbyte is SRI address space.

## Table 40 Address Map of Segment 15

[Table 40  Address Map of Segment 15 — content spans multiple pages, OCR data below]

### SPB Address Space (Lower 128 MB)

| Address Range | Size | Unit | Description |
| :--- | :--- | :--- | :--- |
| F000 0000<sub>H</sub> - F000 01FF<sub>H</sub> | 512 Byte | Flexible CRC Engine (FCE0) | Access |
| F000 0200<sub>H</sub> - F000 03FF<sub>H</sub> | - | Reserved | SPBBE |
| F000 0400<sub>H</sub> - F000 05FF<sub>H</sub> | 2 x 256 Byte | On-Chip Debug Support (Cerberus) | Access |
| F000 0600<sub>H</sub> - F000 06FF<sub>H</sub> | 256 Byte | ASCLIN0 | Access |
| F000 0700<sub>H</sub> - F000 07FF<sub>H</sub> | 256 Byte | ASCLIN1 | Access |
| F000 0800<sub>H</sub> - F000 08FF<sub>H</sub> | 256 Byte | ASCLIN2 | Access |
| F000 0900<sub>H</sub> - F000 09FF<sub>H</sub> | 256 Byte | ASCLIN3 | Access |
| F000 0A00<sub>H</sub> - F000 0AFF<sub>H</sub> | 256 Byte | ASCLIN4 | Access |
| F000 0B00<sub>H</sub> - F000 0BFF<sub>H</sub> | 256 Byte | ASCLIN5 | Access |
| F000 0C00<sub>H</sub> - F000 0CFF<sub>H</sub> | 256 Byte | ASCLIN6 | Access |
| F000 0D00<sub>H</sub> - F000 0DFF<sub>H</sub> | 256 Byte | ASCLIN7 | Access |
| F000 0E00<sub>H</sub> - F000 0EFF<sub>H</sub> | 256 Byte | ASCLIN8 | Access |
| F000 0F00<sub>H</sub> - F000 0FFF<sub>H</sub> | 256 Byte | ASCLIN9 | Access |

[Additional rows continue — see OCR raw: page_0103-0110]

### SRI Address Space (Upper 128 MB)

| Address Range | Size | Unit | Description |
| :--- | :--- | :--- | :--- |
| F001 0000<sub>H</sub> - F001 0FFF<sub>H</sub> | 64 Kbyte | CPU0 SFR | Access |
| F001 1000<sub>H</sub> - F001 1FFF<sub>H</sub> | 64 Kbyte | CPU1 SFR | Access |
| F001 2000<sub>H</sub> - F001 2FFF<sub>H</sub> | 64 Kbyte | CPU2 SFR | Access |
| F001 3000<sub>H</sub> - F001 3FFF<sub>H</sub> | 64 Kbyte | CPU3 SFR | Access |
| F001 4000<sub>H</sub> - F001 4FFF<sub>H</sub> | 64 Kbyte | CPU4 SFR | Access |
| F001 5000<sub>H</sub> - F001 5FFF<sub>H</sub> | 64 Kbyte | CPU5 SFR | Access |
| FB70 0000<sub>H</sub> - FB70 FFFF<sub>H</sub> | 64 Kbyte | SRI Domain 2 SFR (SRI2) | Access |
| FB71 8000<sub>H</sub> - FB71 FFFF<sub>H</sub> | 32 Kbyte | MINIMCDS SFR | Access |

[Additional rows continue — see OCR raw: page_0103-0110]

[Figure 16: Segment F Structure — image not included]
