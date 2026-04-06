---
title: "1.1.2 Text Conventions"
description: "Text Conventions used in the document"
---

# 1.1.2 Text Conventions

This document uses the following text conventions for named components:

- **Functional units** are given in plain UPPER CASE. For example: "The QSPI supports full-duplex and half-duplex synchronous communication".

- **Pins using negative logic** are indicated by an overline. For example: "The external reset pin, ESR0, has a dual function".

- **Bit fields and bits in registers** are in general referenced as "Module_Register name.Bit field" or "Module_Register name.Bit". For example: "The Current CPU Priority Number bit field CPU_ICR.CCPN is cleared". Most of the register names contain a module name prefix, separated by an underscore character "_" from the actual register name (for example, "QSPI0_GLOBALCON", where "QSPI0" is the module name prefix, and "GLOBALCON" is the kernel register name).

- **Variables** used to describe sets of processing units or registers appear in mixed upper and lower cases. For example, register name "MOFCRn" refers to multiple "MOFCR" registers with variable n. The bounds of the variables are always given where the register expression is first used (for example, "n = 0-255").

- **The default radix is decimal**. Hexadecimal constants are suffixed with a subscript letter "H", as in: $100_H$. Binary constants are suffixed with a subscript letter "B", as in: $111_B$.

- **Register fields and pins** are collectively named as "NAME[A:B]" for a range from A to B, or "NAME[C]" for individual bits.

- **Units** are abbreviated as follows:
  - MHz = Megahertz
  - μs = Microseconds
  - kBaud, kbit/s = 1000 characters/bits per second
  - MBaud, Mbit/s = 1000000 characters/bits per second
  - Kbyte, KB = 1024 bytes of memory
  - Mbyte, MB = 1048576 bytes of memory

- **Data format quantities**:
  - Byte = 8-bit quantity
  - Half-word = 16-bit quantity
  - Word = 32-bit quantity
  - Double-word = 64-bit quantity
