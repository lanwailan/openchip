---
title: "1.1 About this Document"
description: "About this Document - scope, conventions, and terminology"
---

# 1.1 About this Document

This document is designed to be read primarily by potential users of an AURIX™ TC3xx Platform product who need a detailed description of the products and their functional units.

## 1.1.1 Related Documentations

A complete description of the TriCore architecture is found in the document entitled "TriCore Architecture Manual". The architecture of the TriCore is described separately this way because of the configurable nature of the TriCore specification: different versions of the architecture may contain a different mix of systems components. The TriCore architecture, however, remains constant across all derivative designs in order to preserve compatibility.

This User's Manual should be read in conjunction with the "TriCore Architecture Manual".

## 1.1.2 Text Conventions

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

## 1.1.3 Family Specification and Appendix

The User's Manual is split into a "Family" part (named "AURIXTC3XX_*") and an "Appendix" per silicon.

The **Family part** describes each module used in this family of devices. It is intended as reference for the human reader to understand functionality and register set of these modules. Additionally it contains a family wide address map, a feature set table and all block diagrams.

The **Appendix** describes differences of a module implementation for a certain device series. Its content is usually supplied by tools (e.g. compiler, debugger, configuration tools). These differences are usually device connectivity, the Register Address Space, and specific register implementations.

When bus interfaces are shared between modules (e.g. for SCU, CCU, PMS) the Appendix is also shared to allow an accurate listing of all registers in a certain address range.

## 1.1.4 Register and Memory Address Documentation

Some modules enable through their bus interface access to memory ranges and registers. In these cases the "Register Address Space" table shows memories differently, for example:

| Module | Base Address | End Address | Note |
|--------|--------------|-------------|------|
| (DAM0) | 90400000<sub>H</sub> | 9040FFFF<sub>H</sub> | DAM RAM Access cached address space |
| | B0400000<sub>H</sub> | B040FFFF<sub>H</sub> | DAM RAM Access non-cached address space |
| DAM0 | F8500000<sub>H</sub> | F8507FFF<sub>H</sub> | Special Function Register Address Space |

In this example "LMU_DAM" notifies the module name. Rows with "(DAM0)" and empty Module field contain memory ranges accessible by DAM0. The row showing "DAM0" contains the address range definition of the DAM0 registers.

## 1.1.5 Reserved, Undefined, and Unimplemented Terminology

In tables where register bit fields are defined, the following conventions are used:

**Table 2: Bit Function Terminology**

| Function | Description |
|----------|-------------|
| Unimplemented, Reserved | Register bit fields named 0 indicate unimplemented functions. Reading returns 0. These bit fields should be written with 0 if defined as r or rh, and must be written with 0 if defined as rw. |
| rw | The bit or bit field can be read and written. |
| rwh | As rw, but can also be set or reset by hardware. |
| r | The bit or bit field can only be read (read-only). |
| w, wX | The bit or bit field can only be written (write-only). A read returns the default value. |
| w0, w1 | Write-only. A read returns 0 or 1. |
| r0, r1 | Read-only. The read value is 0 or 1. |
| rh | Modified by hardware (read-hardware). Writing has no effect. |
| s | Sticky bit. Can only be reset by a reset operation. Can be combined as "rws" or "rwhs". |
| f | Readable only on instruction fetch. |

## 1.1.6 Register Access Modes

Read and write access to registers and memory locations are sometimes restricted. The terms defined in Table 3 are used:

**Table 3: Access Terms**

| Symbol | Description |
|--------|-------------|
| BE | Always returns Bus Error (e.g., write access to read-only register) |
| CPUx | Access only by CPUx (identified by its bus master id) |
| CEy | Access only when CPUy ENDINIT is not active |
| E | Access only when any CEx is inactive |
| H | Access only from HSM Master when DFLASH1 is HSM Exclusive |
| M | Module specific access condition described in module chapter |
| OEN | Access only when OCDS is enabled |
| P | Access only from Master x (when MOD_ACCEN0.ENx = 1) |
| PW | Access only when correct Password |
| SE | Access only when Safety Endinit is inactive |
| ST | Access only when startup (SSW) executes |
| SV | Access only when Supervisor Mode is active |
| TM | Access only when SCU test mode |
| U | Access only when User Mode is active |
| 32 | Access only when 32-bit width |
| 32,64 | Access only when 32-bit or 64-bit width |

**Table 4: Combined Access Conditions**

| Symbol | Description |
|--------|-------------|
| U, SV | U or SV |
| P, U, SV | P and (U or SV) |
| P, SV, E | P and SV and E |
| SV, SE | SV and SE |
| TM, ST | TM or ST |

**Table 5: Other Register Annotations**

| Symbol | Description |
|--------|-------------|
| nBE | No Bus Error generated when accessing this address range |
| nE | No Error generated when accessing this address or range |

## 1.1.7 Register Reset Documentation

From application point of view the register reset value is the initial content of the register upon application start. In addition to the documented hardware reset types, also the Startup Software can affect the initial content.

**Table 6: Defined Reset Types**

| Reset Type | Description |
|------------|-------------|
| Application Reset | see RCU chapter |
| PowerOn Reset | see RCU chapter |
| System Reset | see RCU chapter |
| Cold PowerOn Reset | see RCU chapter. Also abbreviated "Cold PORST". |
| Warm PowerOn Reset | see RCU chapter. Also abbreviated "Warm PORST". |
| Debug Reset | see RCU chapter. Also named "Debug Clear". |
| LVD Reset | Low Voltage Detector reset, see PMS chapter. |
| Kernel Reset | Module internal hardware reset triggered with KRST0 and KRST1 registers. |
| CFS Value | Value in CFS or UCB referenced by register. |
| Default Flash | Values in Flash location (UCB or CFS) at delivery time. |
| After SSW execution | Register overwritten by SSW. |

The "Reset Value" column may contain "-" and "X" to indicate bits or nibbles that are either not affected or changed to a value not known at design time.
