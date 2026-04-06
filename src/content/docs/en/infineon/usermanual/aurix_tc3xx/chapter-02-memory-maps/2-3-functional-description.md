---
title: "2.3 Functional Description"
description: "Bus-specific address maps, segments, and memory access types"
---

# 2.3 Functional Description

The bus-specific address maps describe how the different bus master devices react on accesses to on-chip memories and modules, and which address ranges are valid or invalid for the corresponding buses.

The detailed address mapping of e.g. control registers, SRAM blocks or flash banks/sectors within a module is described in the related module chapter.

## Table 23 Acronyms and Terms

| Term | Description |
| :--- | :--- |
| BBBBE | A bus access is terminated with a bus error on the BBB. |
| SPBBE | A bus access is terminated with a bus error on the SPB. |
| SRIBE | A bus access is terminated with a bus error on the SRI. |
| Access | A bus access is allowed and is executed. |

## 2.3.1 Segments

This section summarizes the contents of the segments.

### Segment 0 and 2

These memory segments are reserved.

### Segments 1 and 3-7

These memory segments allow access to the CPUs Program and Data Scratch Pad SRAM (PSPR, DSPR), Program and Data Cache SRAMs (PCACHE, DCACHE) as well as TAG SRAMs related to Program and Data Cache (PTAG SRAM) and DTAG SRAM.

Where DCACHE is supported, DCACHE and DTAG SRAM can be only accessed if the Data Cache is disabled.

PCACHE and PTAG SRAM can be only accessed if the related Program Cache is disabled.

The attribute of these segments (cached / non-cached) can be partially configured for each CPUs data and program side individually (see CPU chapter: Physical Memory Attribute Registers, PMAx).

### Segment 8

This memory segment allows cached access to PFlash and BROM.

### Segment 9

This memory segment allows cached access to LMU and to EMEM.

### Segment 10

This memory segment allows non-cached access to PFlash, DFlash and BROM.

> **Note:** TAG SRAMs are not meant to be used as general SRAMs and can be accessed only with single data access and only with 64 bit aligned address.

> **Note:** Mapping of Cache and TAG SRAMs is controlled via the MTU register MTU_MEMMAP.

## 2.3.2 Address Map of the On Chip Bus System

All bus master agents can address identical peripherals and memories at identical addresses. The system address map is visible and valid for all CPUs which means that all peripherals and resources are accessible from all TriCore CPUs and other on chip bus master agents.

Parallel access by more than one bus master agent to one slave agent are executed sequentially. Additionally the SRI, SPB and BBB support atomic Read Modify Write sequences from the CPUs.

### 2.3.2.1 Segments 0 to 14

Table 24 shows the address map of segments 0 to 14.

> **Note:** Write Access Type: Write access to Flash resources are handled by the DMU module (Flash command sequence, see DMU chapter for details).

### 2.3.2.2 Segment 15

See Section 2.1.4 for the detailed Segment 15 address map (Table 40).

## 2.3.3 Memory Accesses

The following tables list the types of memories and supported access sizes:

### Table 41 Standard Read Write Memories (C variable)

| Memory | Byte | Half-word | Word | Double-word | Block Transfer |
| :--- | :---: | :---: | :---: | :---: | :---: |
| PSPR | y | y | y | y | y |
| DSPR | y | y | y | y | y |
| DLMU | y | y | y | y | y |
| LMURAM | y | y | y | y | y |
| EMEM | y | y | y | y | y |
| DAM RAM | y | y | y | y | y |
| TRAM | y | y | y | y | y |

> **Note:** TRAM shall not be used as a general SRAM and can only be accessed when OCDS is enabled.
> **Note:** 'y' means: access supported. '-' means: access not supported.
