---
title: "1.3.1 Introduction"
description: "OCDS introduction - debugging, rapid prototyping, calibration"
---

# 1.3.1 Introduction

### Debugging

The application is not yet ready, the system outside of the TC3XX is either not connected or under control by other means so that misbehavior of the software has no catastrophic consequences. The "user" is a software design engineer with thorough knowledge of the device and the system, in other words, no protection is needed. From the tool the user expects:

- **Download:** The memories of the SoC (and of other external memories attached to the SoC) must be written (and programmed in case of non-volatile memories) without need to disassemble the application system.

- **Run Control:** Each processor core can be stopped and started at will, either separately or synchronously throughout the SoC.

- **Visibility:** The content of all storage locations inside the SoC, i.e. memories, SFRs and processor registers, can be read and written, preferably even while the system is running.

- **Trace:** A log of the processing is desired, as detailed ("cycle accurate") and wide (aligned trace of parallel processes) as possible.

> Note: Due to the high speed of the TC3XX tracing has limitations in trace buffer with the standard chip, but a pin and package compatible Device with extended trace capabilities is available.

### Rapid Prototyping

The application design has reached a state where operation at target speed is possible. The SoC's tasks are mission critical, but some of the algorithms are still in development. Hardware support is needed for:

- **Triggering:** An external high speed processor is attached to the SoC to perform all processing tasks not yet implemented inside the SoC. This external system must be notified ("triggered") whenever its services are needed, possibly with detailed information on the kind of service requested.

- **Data Exchange:** When triggered, the external "bypass" processor must get hold of the input data of its algorithm as fast as possible. After the calculation the results must be written back into the SoC, again with low latency and possibly triggered by another event. Other tasks of the SoC shall not be influenced.

### Calibration

Once the algorithms are fixed there still is need to "tweak" the software. Namely the constants used by the program typically are dependent on external parameters and are "tuned" in the final application.

- **Overlay:** As the constants are stored in non-volatile memory changing them requires an erase-program cycle. Therefore RAM is mapped into the address space "over" locations the software addresses as ROM. This RAM can be accessed and changed by the tool concurrently.

- **Measurement:** Significant internal data of the SoC (variables, sensor data) must be read from the SoC with deterministic timing and high bandwidth.
