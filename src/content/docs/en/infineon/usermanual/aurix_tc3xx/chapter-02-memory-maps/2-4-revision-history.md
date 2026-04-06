---
title: "2.4 Memory Map Revision History"
description: "Revision history and changes for Memory Maps chapter"
---

# 2.4 Memory Map Revision History

## Table 42 Standard Read Only Memories (C const)

| Memory | Byte (r) | Byte (w) | Half-word (r) | Half-word (w) | Word (r) | Word (w) | Word (rmw) | Double-word (r) | Double-word (w) | Block Transfer (r) | Block Transfer (w) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| BROM | y | - | y | - | y | - | - | y | - | - | - |
| HSM BROM | y | - | y | - | y | - | - | y | - | - | - |
| PFLASH | y | - | y | - | y | - | - | y | - | - | - |
| DFLASH | y | y | y | y | y | y | y | y | y | - | - |
| BROMEXT | y | - | y | - | y | - | - | y | - | - | - |

> **Note:** 'y' = access supported, '-' = access not supported

## Table 44 Changes

| Reference | Change to Previous Version | Comment |
| :--- | :--- | :--- |
| V0.1.12 | Page 15 | Add MCMCAN3. |
| V0.1.13 | Page 15 | Add MCMCAN4. |
| V0.1.14 | Page 12 | TC38x Alternate Address Map for SOTA of Segment 8 PFLASH |
| | Page 12 | TC38x Alternate Address Map for SOTA of Segment 10 PFLASH |
| | Page 12 | TC38x Alternate Address Map for SOTA of Segment 10 Erase Counters and Registers |
| V0.1.15 | Page 3 | Add EMEM4 and EMEM5 |
| | Page 15 | Add BITMGR |
| | Page 15 | SPUCFG0 and SPUCFG1 increased from 64 Kbyte to 128 Kbyte |
| V0.1.16 | Page 11 | TC3Ex Alternate Address Map for SOTA of Segment 8 PFLASH |
| | Page 11 | TC3Ex Alternate Address Map for SOTA of Segment 10 PFLASH |
| | Page 11 | TC3Ex Alternate Address Map for SOTA of Segment 10 Erase Counters and Registers |
