---
title: "2.1.2 Program Flash and External Bus"
description: "Program Flash, EBU, BROM, EMEM address map"
---

# 2.1.2 Program Flash and External Bus

## Segment 8 — Program Flash and EBU

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 8000 0000<sub>H</sub> - 802F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | Access | SRIBE |
| 8030 0000<sub>H</sub> - 805F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | Access | SRIBE |
| 8060 0000<sub>H</sub> - 808F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | Access | SRIBE |
| 8090 0000<sub>H</sub> - 80BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 3 (PF3) | Access | SRIBE |
| 80C0 0000<sub>H</sub> - 80EF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 4 (PF4) | Access | SRIBE |
| 80F0 0000<sub>H</sub> - 80FF FFFF<sub>H</sub> | 1 Mbyte | Program Flash 5 (PF5) | Access | SRIBE |
| 8100 0000<sub>H</sub> - 811F FFFF<sub>H</sub> | 2 Mbyte | Reserved (for PFLASH) | SRIBE | SRIBE |
| 8120 0000<sub>H</sub> - 81FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 8200 0000<sub>H</sub> - 87FF FFFF<sub>H</sub> | 96 Mbyte | External Bus Unit (EBU) | Access | Access |
| 8800 0000<sub>H</sub> - 8FDF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 8FE0 0000<sub>H</sub> - 8FE7 FFFF<sub>H</sub> | 512 Kbyte | Online Data Acquisition (OLDA) | SRIBE | Access / SRIBE |
| 8FE8 0000<sub>H</sub> - 8FFE FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 8FFF 0000<sub>H</sub> - 8FFF FFFF<sub>H</sub> | 64 Kbyte | Boot ROM (BROM) | Access | SRIBE |

## Segment 10 — Program Flash and Registers

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| A000 0000<sub>H</sub> - A02F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 0 (PF0) | Access | SRIBE |
| A030 0000<sub>H</sub> - A05F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 1 (PF1) | Access | SRIBE |
| A060 0000<sub>H</sub> - A08F FFFF<sub>H</sub> | 3 Mbyte | Program Flash 2 (PF2) | Access | SRIBE |
| A090 0000<sub>H</sub> - A0BF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 3 (PF3) | Access | SRIBE |
| A0C0 0000<sub>H</sub> - A0EF FFFF<sub>H</sub> | 3 Mbyte | Program Flash 4 (PF4) | Access | SRIBE |
| A0F0 0000<sub>H</sub> - A0FF FFFF<sub>H</sub> | 1 Mbyte | Program Flash 5 (PF5) | Access | SRIBE |
| A100 0000<sub>H</sub> - A11F FFFF<sub>H</sub> | 2 Mbyte | Reserved (for PFLASH) | SRIBE | SRIBE |
| A120 0000<sub>H</sub> - A1FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A200 0000<sub>H</sub> - A7FF FFFF<sub>H</sub> | 96 Mbyte | External Bus Unit (EBU) | Access | Access |
| A800 0000<sub>H</sub> - A800 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 0 (EC0) | Access | SRIBE |
| A800 4000<sub>H</sub> - A807 FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A808 0000<sub>H</sub> - A80B FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 0 (PFI0) | Access | SRIBE |
| A80C 0000<sub>H</sub> - A82F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A830 0000<sub>H</sub> - A830 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 1 (EC1) | Access | SRIBE |
| A830 4000<sub>H</sub> - A837 FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A838 0000<sub>H</sub> - A83B FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 1 (PFI1) | Access | SRIBE |
| A83C 0000<sub>H</sub> - A85F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A860 0000<sub>H</sub> - A860 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 2 (EC2) | Access | SRIBE |
| A860 4000<sub>H</sub> - A867 FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A868 0000<sub>H</sub> - A86B FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 2 (PFI2) | Access | SRIBE |
| A86C 0000<sub>H</sub> - A88F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A890 0000<sub>H</sub> - A8CF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A8D0 0000<sub>H</sub> - A8D0 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 3 (EC3) | Access | SRIBE |
| A8D0 4000<sub>H</sub> - A8D7 FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A8D8 0000<sub>H</sub> - A8DB FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 3 (PFI3) | Access | SRIBE |
| A8DC 0000<sub>H</sub> - A8EF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A8F0 0000<sub>H</sub> - A8F0 3FFF<sub>H</sub> | 16 Kbyte | Erase Counter 4 (EC4) | Access | SRIBE |
| A8F0 4000<sub>H</sub> - A8F7 FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A8F8 0000<sub>H</sub> - A8FB FFFF<sub>H</sub> | 256 Kbyte | PFI User Registers 4 (PFI4) | Access | SRIBE |
| A8FC 0000<sub>H</sub> - A8FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| A900 0000<sub>H</sub> - A903 FFFF<sub>H</sub> | 16 Kbyte | Erase Counter 5 (EC5) | Access | SRIBE |
| A904 0000<sub>H</sub> - AEFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| AF00 0000<sub>H</sub> - AF0F FFFF<sub>H</sub> | 1 Mbyte | Data Flash 0 EEPROM (DF0) Host Command Sequence Interpreter | Access | Access |
| AF10 0000<sub>H</sub> - AF3F FFFF<sub>H</sub> | 3 Mbyte | Reserved | SRIBE | SRIBE |
| AF40 0000<sub>H</sub> - AF40 5FFF<sub>H</sub> | 24 Kbyte | Data Flash 0 UCB (DF0) | Access | SRIBE |
| AF40 6000<sub>H</sub> - AF7F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| AF80 0000<sub>H</sub> - AF80 FFFF<sub>H</sub> | 64 Kbyte | Data Flash 0 CFS (DF0) | Access | SRIBE |
| AF81 0000<sub>H</sub> - AFBF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| AFC0 0000<sub>H</sub> - AFC1 FFFF<sub>H</sub> | 128 Kbyte | Data Flash 1 EEPROM (DF1) HSM Command Sequence Interpreter | Access | Access |
| AFC2 0000<sub>H</sub> - AFC3 FFFF<sub>H</sub> | 128 Kbyte | Reserved | SRIBE | SRIBE |
| AFC4 0000<sub>H</sub> - AFDF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| AFE0 0000<sub>H</sub> - AFE7 FFFF<sub>H</sub> | 512 Kbyte | Online Data Acquisition (OLDA) | SRIBE | Access / SRIBE |
| AFE8 0000<sub>H</sub> - AFFE FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| AFFF 0000<sub>H</sub> - AFFF FFFF<sub>H</sub> | 64 Kbyte | Boot ROM (BROM) | Access | SRIBE |
