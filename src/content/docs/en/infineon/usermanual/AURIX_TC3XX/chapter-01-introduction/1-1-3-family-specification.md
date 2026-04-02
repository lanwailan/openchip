---
title: "1.1.3 Family Specification and Appendix"
description: "Family Specification and Appendix"
---

# 1.1.3 Family Specification and Appendix

The User's Manual is split into a "Family" part (named "AURIXTC3XX_*") and an "Appendix" per silicon.

The **Family part** describes each module used in this family of devices. It is intended as reference for the human reader to understand functionality and register set of these modules. Additionally it contains a family wide address map, a feature set table and all block diagrams.

The **Appendix** describes differences of a module implementation for a certain device series. Its content is usually supplied by tools (e.g. compiler, debugger, configuration tools). These differences are usually:

- Device connectivity (connections to pins or other modules)
- The Register Address Space (i.e. a list of implemented modules and their address ranges)
- Specific register implementations like bit fields that are only functional in certain devices

Registers that are identical to the Family part contain a cross reference to the Family documentation.

When bus interfaces are shared between modules (e.g. for SCU, CCU, PMS) the Appendix is also shared to allow an accurate listing of all registers in a certain address range.
