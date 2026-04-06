---
title: "2.1.3 LMU, DAM, EMEM and Trace Memory"
description: "LMU, DAM, EMEM, TRAM address map"
---

# 2.1.3 LMU, DAM, EMEM and Trace Memory

## Segment 9 — LMU (Local Memory Unit)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 9000 0000<sub>H</sub> - 9000 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU0 DLMU) | Access | Access |
| 9001 0000<sub>H</sub> - 9001 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU1 DLMU) | Access | Access |
| 9002 0000<sub>H</sub> - 9002 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU2 DLMU) | Access | Access |
| 9003 0000<sub>H</sub> - 9003 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU3 DLMU) | Access | Access |
| 9004 0000<sub>H</sub> - 9007 FFFF<sub>H</sub> | 256 Kbyte | LMU (LMU0 LMURAM) | Access | Access |
| 9008 0000<sub>H</sub> - 900B FFFF<sub>H</sub> | 256 Kbyte | LMU (LMU1 LMURAM) | Access | Access |
| 900C 0000<sub>H</sub> - 900F FFFF<sub>H</sub> | 256 Kbyte | LMU (LMU2 LMURAM) | Access | Access |
| 9010 0000<sub>H</sub> - 9010 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU4 DLMU) | Access | Access |
| 9011 0000<sub>H</sub> - 9011 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU5 DLMU) | Access | Access |

## Segment 11 — LMU, DAM and EMEM

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| B000 0000<sub>H</sub> - B000 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU0 DLMU) | Access | Access |
| B001 0000<sub>H</sub> - B001 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU1 DLMU) | Access | Access |
| B002 0000<sub>H</sub> - B002 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU2 DLMU) | Access | Access |
| B003 0000<sub>H</sub> - B003 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU3 DLMU) | Access | Access |
| B004 0000<sub>H</sub> - B007 FFFF<sub>H</sub> | 256 Kbyte | LMU (LMU0 LMURAM) | Access | Access |
| B008 0000<sub>H</sub> - B00B FFFF<sub>H</sub> | 256 Kbyte | LMU (LMU1 LMURAM) | Access | Access |
| B00C 0000<sub>H</sub> - B00F FFFF<sub>H</sub> | 256 Kbyte | LMU (LMU2 LMURAM) | Access | Access |
| B010 0000<sub>H</sub> - B010 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU4 DLMU) | Access | Access |
| B011 0000<sub>H</sub> - B011 FFFF<sub>H</sub> | 64 Kbyte | LMU (CPU5 DLMU) | Access | Access |
| B012 0000<sub>H</sub> - B03F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| B040 0000<sub>H</sub> - B040 7FFF<sub>H</sub> | 32 Kbyte | DAM (DAM0 RAM0) | Access | Access |
| B040 8000<sub>H</sub> - B040 FFFF<sub>H</sub> | 32 Kbyte | DAM (DAM0 RAM1) | Access | Access |
| B041 0000<sub>H</sub> - B041 7FFF<sub>H</sub> | 32 Kbyte | DAM (DAM1 RAM0) | Access | Access |
| B041 8000<sub>H</sub> - B041 FFFF<sub>H</sub> | 32 Kbyte | DAM (DAM1 RAM1) | Access | Access |
| B042 0000<sub>H</sub> - B7FF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| B800 0000<sub>H</sub> - B800 1FFF<sub>H</sub> | 8 Kbyte | MINIMCDS Trace SRAM (TRAM) | Access | Access |
| B800 2000<sub>H</sub> - B8DF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| B8E0 0000<sub>H</sub> - B8EF FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 4) | Access | Access |
| B8F0 0000<sub>H</sub> - B8FF FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 5) | Access | Access |
| B900 0000<sub>H</sub> - B90F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 0) | Access | Access |
| B910 0000<sub>H</sub> - B91F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 1) | Access | Access |
| B920 0000<sub>H</sub> - B92F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 2) | Access | Access |
| B930 0000<sub>H</sub> - B93F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 3) | Access | Access |
| B940 0000<sub>H</sub> - B947 FFFF<sub>H</sub> | 512 Kbyte | Extra Trace Memory (XTM) (only 16 Kbyte physical SRAM) | Access | Access |
| B948 0000<sub>H</sub> - BFFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## Segment 9 EMEM (Extended Memory)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 9800 0000<sub>H</sub> - 9800 1FFF<sub>H</sub> | 8 Kbyte | MINIMCDS Trace SRAM (TRAM) | Access | Access |
| 9800 2000<sub>H</sub> - 98DF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 98E0 0000<sub>H</sub> - 98EF FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 4) | Access | Access |
| 98F0 0000<sub>H</sub> - 98FF FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 5) | Access | Access |
| 9900 0000<sub>H</sub> - 990F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 0) | Access | Access |
| 9910 0000<sub>H</sub> - 991F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 1) | Access | Access |
| 9920 0000<sub>H</sub> - 992F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 2) | Access | Access |
| 9930 0000<sub>H</sub> - 993F FFFF<sub>H</sub> | 1 Mbyte | EMEM (EMEM Module 3) | Access | Access |
| 9940 0000<sub>H</sub> - 9FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
