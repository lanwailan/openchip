---
title: "2.2 Alternate Address Maps for SOTA"
description: "SOTA (Start-of-Life Testing) alternate address maps for Program Flash"
---

# 2.2 Alternate Address Maps for SOTA

Alternative address maps are provided for Start-of-Life Testing (SOTA) of Program Flash. These maps allow test access to flash modules at different addresses.

## TC39x Alternate Address Map for SOTA of Segment 10 PFLASH

| Segment | Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | A000 0000<sub>H</sub> - A02F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | SRIBE | SRIBE |
| | A030 0000<sub>H</sub> - A05F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 3 (PF3) | SRIBE | SRIBE |
| | A060 0000<sub>H</sub> - A08F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | SRIBE | SRIBE |
| | A090 0000<sub>H</sub> - A0BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | SRIBE | SRIBE |
| | A0C0 0000<sub>H</sub> - A0CF FFFF<sub>H</sub> | 1 Mbyte | Program Flash 5 (PF5) | SRIBE | SRIBE |
| | A0D0 0000<sub>H</sub> - A0EF FFFF<sub>H</sub> | 2 Mbyte | Reserved (for PFLASH) | SRIBE | SRIBE |
| | A0F0 0000<sub>H</sub> - A11F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 4 (PF4) | SRIBE | SRIBE |
| | A120 0000<sub>H</sub> - A1FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## TC39x Alternate Address Map for SOTA of Segment 10 Erase Counters and Registers

| Segment | Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | A800 0000<sub>H</sub> - A800 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 2 (EC2) | SRIBE | SRIBE |
| | A800 4000<sub>H</sub> - A807 FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| | A808 0000<sub>H</sub> - A80B FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 2 (PFI2) | SRIBE | SRIBE |

## TC3Ex Alternate Address Map for SOTA of Segment 8 PFLASH

| Segment | Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 8 | 8000 0000<sub>H</sub> - 802F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | SRIBE | SRIBE |
| | 8030 0000<sub>H</sub> - 805F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 3 (PF3) | SRIBE | SRIBE |
| | 8060 0000<sub>H</sub> - 808F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | SRIBE | SRIBE |
| | 8090 0000<sub>H</sub> - 80BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | SRIBE | SRIBE |
| | 80C0 0000<sub>H</sub> - 81FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## TC3Ex Alternate Address Map for SOTA of Segment 10 PFLASH

| Segment | Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | A000 0000<sub>H</sub> - A02F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | SRIBE | SRIBE |
| | A030 0000<sub>H</sub> - A05F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 3 (PF3) | SRIBE | SRIBE |
| | A060 0000<sub>H</sub> - A08F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | SRIBE | SRIBE |
| | A090 0000<sub>H</sub> - A0BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | SRIBE | SRIBE |
| | A0C0 0000<sub>H</sub> - A1FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## TC38x Alternate Address Map for SOTA of Segment 8 PFLASH

| Segment | Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 8 | 8000 0000<sub>H</sub> - 802F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | SRIBE | SRIBE |
| | 8030 0000<sub>H</sub> - 803F FFFF<sub>H</sub> | 1 Mbyte | Program Flash 3 (PF3) | SRIBE | SRIBE |
| | 8040 0000<sub>H</sub> - 805F FFFF<sub>H</sub> | 2 Mbyte | Reserved (for PFLASH) | SRIBE | SRIBE |
| | 8060 0000<sub>H</sub> - 808F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | SRIBE | SRIBE |
| | 8090 0000<sub>H</sub> - 80BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | SRIBE | SRIBE |
| | 80C0 0000<sub>H</sub> - 81FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## TC38x Alternate Address Map for SOTA of Segment 10 PFLASH

| Segment | Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | A000 0000<sub>H</sub> - A02F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | SRIBE | SRIBE |
| | A030 0000<sub>H</sub> - A03F FFFF<sub>H</sub> | 1 Mbyte | Program Flash 3 (PF3) | SRIBE | SRIBE |
| | A040 0000<sub>H</sub> - A05F FFFF<sub>H</sub> | 2 Mbyte | Reserved (for PFLASH) | SRIBE | SRIBE |
| | A060 0000<sub>H</sub> - A08F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | SRIBE | SRIBE |
| | A090 0000<sub>H</sub> - A0BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | SRIBE | SRIBE |

## TC37x Alternate Address Map for SOTA of Segment 8 PFLASH

| Segment | Address Range | Size | Description | Access Type |
| :--- | :--- | :--- | :--- | :--- |
| 8 | 8000 0000<sub>H</sub> - 802F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | Access / SRIBE |
| | 8030 0000<sub>H</sub> - 805F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | Access / SRIBE |
| | 8060 0000<sub>H</sub> - 81FF FFFF<sub>H</sub> | - | Reserved | SRIBE |

## TC37x Alternate Address Map for SOTA of Segment 10 PFLASH

| Segment | Address Range | Size | Description | Access Type |
| :--- | :--- | :--- | :--- | :--- |
| 10 | A000 0000<sub>H</sub> - A02F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | Access / SRIBE |
| | A030 0000<sub>H</sub> - A05F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | Access / SRIBE |
| | A060 0000<sub>H</sub> - A1FF FFFF<sub>H</sub> | - | Reserved | SRIBE |

## TC36x/TC35x Alternate Address Map for SOTA of Segment 8 PFLASH

| Segment | Address Range | Size | Description | Access Type |
| :--- | :--- | :--- | :--- | :--- |
| 8 | 8000 0000<sub>H</sub> - 802F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | Access / SRIBE |
| | 8030 0000<sub>H</sub> - 805F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 3 (PF3) | Access / SRIBE |
| | 8060 0000<sub>H</sub> - 807F FFFF<sub>H</sub> | 2 Mbyte | Program Flash 0 (PF0) | Access / SRIBE |
| | 8080 0000<sub>H</sub> - 81FF FFFF<sub>H</sub> | - | Reserved | SRIBE |

## TC36x/TC35x Alternate Address Map for SOTA of Segment 10 PFLASH

| Segment | Address Range | Size | Description | Access Type |
| :--- | :--- | :--- | :--- | :--- |
| 10 | A000 0000<sub>H</sub> - A02F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | Access / SRIBE |
| | A030 0000<sub>H</sub> - A04F FFFF<sub>H</sub> | 2 Mbyte | Program Flash 0 (PF0) | Access / SRIBE |
| | A050 0000<sub>H</sub> - A1FF FFFF<sub>H</sub> | - | Reserved | SRIBE |

## TC36x/TC35x Alternate Address Map for SOTA of Segment 10 Erase Counters and Registers

| Segment | Address Range | Size | Description | Access Type |
| :--- | :--- | :--- | :--- | :--- |
| 10 | A800 0000<sub>H</sub> - A800 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 1 (EC1) | Access / SRIBE |
| | A800 4000<sub>H</sub> - A807 FFFF<sub>H</sub> | - | Reserved | SRIBE |
| | A808 0000<sub>H</sub> - A80B FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 1 (PFI1) | Access / SRIBE |
| | A80C 0000<sub>H</sub> - A82F FFFF<sub>H</sub> | - | Reserved | SRIBE |
| | A830 0000<sub>H</sub> - A830 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 0 (EC0) | Access / SRIBE |
| | A830 4000<sub>H</sub> - A837 FFFF<sub>H</sub> | - | Reserved | SRIBE |
| | A838 0000<sub>H</sub> - A83B FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 0 (PFI0) | Access / SRIBE |
