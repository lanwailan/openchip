---
title: "1.1.7 Register Reset Documentation"
description: "Register Reset Documentation"
---

# 1.1.7 Register Reset Documentation

From application point of view the register reset value is the initial content of the register upon application start. In addition to the documented hardware reset types (see headline "Reset Types" in chapter "Reset Control Unit (RCU)") also the Startup Software can affect the initial content. Finally the resulting content may depend on conditions. Reset tables linked to the register definition convey this information.

In the following example "LVD Reset" and "Cold PORST" are hardware reset types and "After SSW execution" shows that the SSW overwrites this register with a different value:

| Reset Type | Reset Value | Note |
| :--- | :--- | :--- |
| LVD Reset | 0059 7F4A<sub>H</sub> | |
| Cold PORST | 0059 7F4A<sub>H</sub> | |
| After SSW execution | 005C 834A<sub>H</sub> | |

**Table 6: Defined Reset Types**

| Reset Type | Description |
| :--- | :--- |
| Application Reset | see RCU chapter |
| PowerOn Reset | see RCU chapter |
| System Reset | see RCU chapter |
| Cold PowerOn Reset | see RCU chapter. Also abbreviated "Cold PORST". |
| Warm PowerOn Reset | see RCU chapter. Also abbreviated "Warm PORST". |
| Debug Reset | see RCU chapter. Also named "Debug Clear". |
| LVD Reset | Low Voltage Detector reset, see PMS chapter. |
| Kernel Reset | Module internal hardware reset triggered with KRST0 and KRST1 registers. Also named "Module Reset". |
| CFS Value | Indicating that CFS or UCB contain a reference value for this register. This value can be copied automatically by hardware or SSW into the register or application software has to perform the copying. Details are described in the respective chapter. |
| Default Flash | Indicating values in a Flash location (UCB or CFS) that are contained at delivery time. |
| After SSW execution | Register overwritten by SSW. |

Other name: Module specific reset type described in respective chapter usually, among them:
- IOClient Reset (OCDS)
- MCDS Reset (MiniMCDS)
- DPLL_RAM_INI.INIT…(GTM)
- Generated Reset (SCR)

The "Reset Value" column may contain letter "-" and "X" to indicate bits or nibbles that are either not affected by this reset type or are changed to a value not known at design time (e.g. trimming value).

The "Note" column may describe further conditions when this particular value is applied.
