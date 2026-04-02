---
title: "1.2.3.1 Encoding of the Product Name"
description: "Product name encoding structure"
---

# 1.2.3.1 Encoding of the Product Name

The product name of a variant (e.g., SAK-TC375SB-128F200W AA) supplies the following information:

**Temperature Range:**

- K: T<sub>ambient</sub> temperature range from −40 °C up to +125 °C
- L: T<sub>ambient</sub> temperature range from −40 °C up to +150 °C in packaged devices

**Architecture:**

The architecture (= device family) is identified by the "3" in TC3xy.

In AURIX™ TC3xx Platform the SCU_CHIPID field CHTEC encodes the devices series.

**Device Series:**

The series (e.g., TC39x, TC38x, TC37x, TC35x, TC33x, TC3Ex) identifies a set of variants.

In AURIX™ TC3xx Platform the SCU_CHIPID field CHID encodes the device series.

**Package Class:**

The package class is marked with the "x" in the product name:

| Class | Pins |
|-------|------|
| 9 | 516 pins |
| 7 | 292 pins |
| 6 | 180 pins |
| 5 | 176 pins |
| 4 | 144 pins |
| 3 | 100 pins |
| 2 | 80 pins |
| 0 | bare die |

In AURIX™ TC3xx Platform the SCU_CHIPID field CHPK encodes the package. It encodes the number of pins and the package type together. Indirectly with a different package also a different pinning is selected.

**Core Architecture:**

| Letter | Cores |
|--------|-------|
| X | Hexa core (= 6 CPUs) |
| Q | Quad core (= 4 CPUs) |
| T | Triple core (= 3 CPUs) |
| D | Dual core (= 2 CPUs) |
| L | Single core (= 1 CPU) |

**Feature Package:**

| Package | Description |
|---------|-------------|
| A | ADAS extension – These products contain the ADAS subsystem, generally with extended memory (EMEM), SPU, RIF. Emulation features are enabled, HSM is enabled when implemented. |
| P | HSM enabled – These products don't contain the ADAS subsystem and not the Emulation features. HSM is enabled. |
| E | Emulation device – These products are emulation devices for the devices of Feature Package "P". The ADAS peripherals SPU, RIF are not available. HSM is enabled when implemented. Generally Emulation Devices have the same feature set as the to be emulated product device plus additional MCDS functionality. |
| X | Feature extension – These products contain the ADAS subsystem but only with the extended memory (EMEM). The ADAS peripherals SPU, RIF are not available. HSM is enabled when implemented. |
| (no letter) | HSM disabled, no ADAS extension, no Emulation device, no Feature extension. |

**Flash Size Code:**

The PFlash size is encoded in the product name as multiple of 64 KByte:

| Code | Size |
|------|------|
| 16 | 1 MByte |
| 32 | 2 MBytes |
| 48 | 3 MBytes |
| 64 | 4 MBytes |
| 96 | 6 MBytes |
| 144 | 9 MBytes |
| 160 | 10 MBytes |
| 192 | 12 MBytes |
| 256 | 16 MBytes |

**Memory Type:**

The memory type is currently constant "F" for Flash.

**Frequency:**

| Code | Speed |
|------|-------|
| 160 | 160 MHz |
| 200 | 200 MHz |
| 300 | 300 MHz |

**Package Type:**

| Letter | Type |
|--------|------|
| W | LQFP with 0.5 mm pitch |
| F | TQFP with 0.4 mm pitch |
| S | LFBGA with 0.8 mm pitch |
| (none) | bare die |

**Stepping:**

The last two letters identify the stepping, i.e. different versions of the device hardware including ROM changes.

In AURIX™ TC3xx Platform the SCU_CHIPID field CHREV encodes stepping.
