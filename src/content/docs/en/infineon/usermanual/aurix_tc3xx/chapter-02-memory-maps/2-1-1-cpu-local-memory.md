---
title: "2.1.1 CPU Local Memory Address Map"
description: "CPU Scratch-Pad SRAM and Cache address map"
---

# 2.1.1 CPU Local Memory Address Map

Each CPU has dedicated local memory regions including Data Scratch-Pad SRAM (DSPR), Program Scratch-Pad SRAM (PSPR), Data Cache SRAM (DCACHE), Program Cache SRAM (PCACHE), and Cache TAG SRAM.

## CPU5 Local Memory (Segment 1)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 1000 0000<sub>H</sub> - 1001 7FFF<sub>H</sub> | 96 Kbyte | CPU5 Data Scratch-Pad SRAM (CPU5 DSPR) | Access | Access |
| 1001 8000<sub>H</sub> - 1001 BFFF<sub>H</sub> | 16 Kbyte | CPU5 Data Cache SRAM (CPU5 DCACHE) | Access² / SRIBE | Access² / SRIBE |
| 1001 C000<sub>H</sub> - 100B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 100C 0000<sub>H</sub> - 100C 17FF<sub>H</sub> | - | CPU5 Data Cache TAG SRAM (CPU5 DTAG) | Access² / SRIBE | Access² / SRIBE |
| 100C 1800<sub>H</sub> - 100F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 1010 0000<sub>H</sub> - 1010 FFFF<sub>H</sub> | 64 Kbyte | CPU5 Program Scratch-Pad SRAM (CPU5 PSPR) | Access | Access |
| 1011 0000<sub>H</sub> - 1011 7FFF<sub>H</sub> | 32 Kbyte | CPU5 Program Cache SRAM (CPU5 PCACHE) | Access² / SRIBE | Access² / SRIBE |
| 1011 8000<sub>H</sub> - 101B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 101C 0000<sub>H</sub> - 101C 2FFF<sub>H</sub> | - | CPU5 Program Cache TAG SRAM (CPU5 PTAG) | Access² / SRIBE | Access² / SRIBE |
| 101C 3000<sub>H</sub> - 1FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## CPU4 Local Memory (Segment 3)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 3000 0000<sub>H</sub> - 3001 7FFF<sub>H</sub> | 96 Kbyte | CPU4 Data Scratch-Pad SRAM (CPU4 DSPR) | Access | Access |
| 3001 8000<sub>H</sub> - 3001 BFFF<sub>H</sub> | 16 Kbyte | CPU4 Data Cache SRAM (CPU4 DCACHE) | Access² / SRIBE | Access² / SRIBE |
| 3001 C000<sub>H</sub> - 300B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 300C 0000<sub>H</sub> - 300C 17FF<sub>H</sub> | - | CPU4 Data Cache TAG SRAM (CPU4 DTAG) | Access² / SRIBE | Access² / SRIBE |
| 300C 1800<sub>H</sub> - 300F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 3010 0000<sub>H</sub> - 3010 FFFF<sub>H</sub> | 64 Kbyte | CPU4 Program Scratch-Pad SRAM (CPU4 PSPR) | Access | Access |
| 3011 0000<sub>H</sub> - 3011 7FFF<sub>H</sub> | 32 Kbyte | CPU4 Program Cache SRAM (CPU4 PCACHE) | Access² / SRIBE | Access² / SRIBE |
| 3011 8000<sub>H</sub> - 301B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 301C 0000<sub>H</sub> - 301C 2FFF<sub>H</sub> | - | CPU4 Program Cache TAG SRAM (CPU4 PTAG) | Access² / SRIBE | Access² / SRIBE |
| 301C 3000<sub>H</sub> - 3FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## CPU3 Local Memory (Segment 4)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 4000 0000<sub>H</sub> - 4001 7FFF<sub>H</sub> | 96 Kbyte | CPU3 Data Scratch-Pad SRAM (CPU3 DSPR) | Access | Access |
| 4001 8000<sub>H</sub> - 4001 BFFF<sub>H</sub> | 16 Kbyte | CPU3 Data Cache SRAM (CPU3 DCACHE) | Access² / SRIBE | Access² / SRIBE |
| 4001 C000<sub>H</sub> - 400B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 400C 0000<sub>H</sub> - 400C 17FF<sub>H</sub> | - | CPU3 Data Cache TAG SRAM (CPU3 DTAG) | Access² / SRIBE | Access² / SRIBE |
| 400C 1800<sub>H</sub> - 400F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 4010 0000<sub>H</sub> - 4010 FFFF<sub>H</sub> | 64 Kbyte | CPU3 Program Scratch-Pad SRAM (CPU3 PSPR) | Access | Access |
| 4011 0000<sub>H</sub> - 4011 7FFF<sub>H</sub> | 32 Kbyte | CPU3 Program Cache SRAM (CPU3 PCACHE) | Access² / SRIBE | Access² / SRIBE |
| 4011 8000<sub>H</sub> - 401B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 401C 0000<sub>H</sub> - 401C 2FFF<sub>H</sub> | - | CPU3 Program Cache TAG SRAM (CPU3 PTAG) | Access² / SRIBE | Access² / SRIBE |
| 401C 3000<sub>H</sub> - 4FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## CPU2 Local Memory (Segment 5)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 5000 0000<sub>H</sub> - 5001 7FFF<sub>H</sub> | 96 Kbyte | CPU2 Data Scratch-Pad SRAM (CPU2 DSPR) | Access | Access |
| 5001 8000<sub>H</sub> - 5001 BFFF<sub>H</sub> | 16 Kbyte | CPU2 Data Cache SRAM (CPU2 DCACHE) | Access² / SRIBE | Access² / SRIBE |
| 5001 C000<sub>H</sub> - 500B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 500C 0000<sub>H</sub> - 500C 17FF<sub>H</sub> | - | CPU2 Data Cache TAG SRAM (CPU2 DTAG) | Access² / SRIBE | Access² / SRIBE |
| 500C 1800<sub>H</sub> - 500F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 5010 0000<sub>H</sub> - 5010 FFFF<sub>H</sub> | 64 Kbyte | CPU2 Program Scratch-Pad SRAM (CPU2 PSPR) | Access | Access |
| 5011 0000<sub>H</sub> - 5011 7FFF<sub>H</sub> | 32 Kbyte | CPU2 Program Cache SRAM (CPU2 PCACHE) | Access² / SRIBE | Access² / SRIBE |
| 5011 8000<sub>H</sub> - 501B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 501C 0000<sub>H</sub> - 501C 2FFF<sub>H</sub> | - | CPU2 Program Cache TAG SRAM (CPU2 PTAG) | Access² / SRIBE | Access² / SRIBE |
| 501C 3000<sub>H</sub> - 5FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## CPU1 Local Memory (Segment 6)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 6000 0000<sub>H</sub> - 6003 BFFF<sub>H</sub> | 240 Kbyte | CPU1 Data Scratch-Pad SRAM (CPU1 DSPR) | Access | Access |
| 6003 C000<sub>H</sub> - 6003 FFFF<sub>H</sub> | 16 Kbyte | CPU1 Data Cache SRAM (CPU1 DCACHE) | Access² / SRIBE | Access² / SRIBE |
| 6004 0000<sub>H</sub> - 600B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 600C 0000<sub>H</sub> - 600C 17FF<sub>H</sub> | - | CPU1 Data Cache TAG SRAM (CPU1 DTAG) | Access² / SRIBE | Access² / SRIBE |
| 600C 1800<sub>H</sub> - 600F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 6010 0000<sub>H</sub> - 6010 FFFF<sub>H</sub> | 64 Kbyte | CPU1 Program Scratch-Pad SRAM (CPU1 PSPR) | Access | Access |
| 6011 0000<sub>H</sub> - 6011 7FFF<sub>H</sub> | 32 Kbyte | CPU1 Program Cache SRAM (CPU1 PCACHE) | Access² / SRIBE | Access² / SRIBE |
| 6011 8000<sub>H</sub> - 601B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 601C 0000<sub>H</sub> - 601C 2FFF<sub>H</sub> | - | CPU1 Program Cache TAG SRAM (CPU1 PTAG) | Access² / SRIBE | Access² / SRIBE |
| 601C 3000<sub>H</sub> - 6FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

## CPU0 Local Memory (Segment 7)

| Address Range | Size | Description | Access Type: Read | Access Type: Write |
| :--- | :--- | :--- | :--- | :--- |
| 7000 0000<sub>H</sub> - 7003 BFFF<sub>H</sub> | 240 Kbyte | CPU0 Data Scratch-Pad SRAM (CPU0 DSPR) | Access | Access |
| 7003 C000<sub>H</sub> - 7003 FFFF<sub>H</sub> | 16 Kbyte | CPU0 Data Cache SRAM (CPU0 DCACHE) | Access² / SRIBE | Access² / SRIBE |
| 7003 C000<sub>H</sub> - 700B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 700C 0000<sub>H</sub> - 700C 17FF<sub>H</sub> | - | CPU0 Data Cache TAG SRAM (CPU0 DTAG) | Access² / SRIBE | Access² / SRIBE |
| 700C 1800<sub>H</sub> - 700F FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 7010 0000<sub>H</sub> - 7010 FFFF<sub>H</sub> | 64 Kbyte | CPU0 Program Scratch-Pad SRAM (CPU0 PSPR) | Access | Access |
| 7011 0000<sub>H</sub> - 7011 7FFF<sub>H</sub> | 32 Kbyte | CPU0 Program Cache SRAM (CPU0 PCACHE) | Access² / SRIBE | Access² / SRIBE |
| 7011 8000<sub>H</sub> - 701B FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |
| 701C 0000<sub>H</sub> - 701C 2FFF<sub>H</sub> | - | CPU0 Program Cache TAG SRAM (CPU0 PTAG) | Access² / SRIBE | Access² / SRIBE |
| 701C 3000<sub>H</sub> - 7FFF FFFF<sub>H</sub> | - | Reserved | SRIBE | SRIBE |

> **Notes:**
> - CPU5 has 96 Kbyte DSPR and 64 Kbyte PSPR (different from other CPUs which have 240 Kbyte DSPR)
> - All TAG SRAMs require 32-bit data access and 64-bit aligned addresses
> - Access²: Conditional access based on specific hardware configurations
