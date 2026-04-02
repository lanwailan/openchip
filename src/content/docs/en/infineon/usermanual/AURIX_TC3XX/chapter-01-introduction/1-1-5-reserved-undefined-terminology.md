---
title: "1.1.5 Reserved, Undefined, and Unimplemented Terminology"
description: "Reserved, Undefined, and Unimplemented Terminology"
---

# 1.1.5 Reserved, Undefined, and Unimplemented Terminology

In tables where register bit fields are defined, the following conventions are used to indicate undefined and unimplemented function. Furthermore, types of bits and bit fields are defined using the abbreviations as shown in Table 2.

**Table 2: Bit Function Terminology**

| Function of Bits | Description |
| :--- | :--- |
| Unimplemented, Reserved | Register bit fields named 0 indicate unimplemented functions with the following behavior: |
| | • Reading these bit fields returns 0. |
| | • These bit fields should be written with 0 if the bit field is defined as r or rh. |
| | • These bit fields have to be written with 0 if the bit field is defined as rw. |
| | These bit fields are reserved. The detailed description of these bit fields can be found in the register descriptions. |
| rw | The bit or bit field can be read and written. |
| rwh | As rw, but bit or bit field can be also set or reset by hardware. |
| r | The bit or bit field can only be read (read-only). |
| w, wX | The bit or bit field can only be written (write-only). A read of this register will always give a default value back that is described in the register documentation. |
| w0, w1 | The bit or bit field can only be written (write-only). A read of this register will always give the value 0 or 1 back. |
| r0, r1 | The bit or bit field can only be read. The read value is 0 or 1. |
| rh | This bit or bit field can be modified by hardware (read-hardware, typical example: status flags). A read of this bit or bit field give the actual status of this bit or bit field back. Writing to this bit or bit field has no effect on the setting of this bit or bit field. |
| s | Bits with this attribute are "sticky" in one direction. If their reset value is once overwritten by software, they can be switched again into their reset state only by a reset operation. Software cannot switch this type of bit into its reset state by writing the register. This attribute can be combined to "rws" or "rwhs". |
| f | Bits with this attribute are readable only when they are accessed by an instruction fetch. Normal data read operations will return other values. |
