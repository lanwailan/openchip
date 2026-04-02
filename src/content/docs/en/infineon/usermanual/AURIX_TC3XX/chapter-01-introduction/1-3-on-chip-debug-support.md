---
title: "1.3 On-Chip Debug Support (OCDS)"
description: "On-Chip Debug Support overview"
---

# 1.3 On-Chip Debug Support (OCDS)

The Infineon AURIX™ TC3XX devices contain powerful resources for debugging and performance optimization. They provide high visibility and controllability of software, hardware and system, especially under hard real-time constraints. The resources are either embedded in specific modules (e.g. breakpoint logic of CPUs) or part of the central Cerberus module.

[Figure 11: OCDS Block Diagram (Family Concept) — image not included]

Trace functionality is available for TC3XX with miniMCDS, MCDSlight or MCDS. Please refer to the table "Platform Feature Overview" for more details.

When acting as a bus master, Cerberus shares the master interfaces of the DMA (using a different master tag) to access memories and SFRs attached to the SPB or SRI via the shortest possible path.
