---
title: "2 Memory Maps (MEMMAP)"
description: "Memory Maps (MEMMAP) — AURIX TC3XX address space organization"
---

# 2 Memory Maps (MEMMAP)

[Figure 1: Block Diagram of AURIX TC3XX — image not included]

## 2.1 Memory Map Summary

The address map of segments 0 to 14 describes the allocation of the SRI/SPB address space.

### 2.1.1 CPU Local Memory

Each CPU has its own local Data Scratch-Pad SRAM (DSPR), Program Scratch-Pad SRAM (PSPR), Data Cache SRAM (DCACHE), Program Cache SRAM (PCACHE), and Cache TAG SRAM (DTAG/PTAG).

### 2.1.2 Program Flash

The device features multiple Program Flash modules (PF0-PF5) for non-volatile code storage.

### 2.1.3 LMU, DAM, EMEM

The LMU provides additional local memory for CPUs. DAM and EMEM provide external memory interfaces.

### 2.1.4 Segment 15

Segment 15 contains the SPB and SRI peripheral address space. The lower 128 Mbyte is SPB address space and the upper 128 Mbyte is SRI address space.

## 2.2 Alternate Address Maps for SOTA

Alternative address maps are provided for Start-of-Life Testing (SOTA) of Program Flash.

## 2.3 Functional Description

Bus-specific address maps describe how different bus master devices react on accesses to on-chip memories and modules.

## 2.4 Revision History

Revision history and changes for the Memory Maps chapter.
