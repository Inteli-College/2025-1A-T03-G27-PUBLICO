---
title: "Risk Matrix"
sidebar_position: 2
sidebar_label: "Risk Matrix"
---

| **Risk** | **Impact** | **Probability** | **Mitigation Plan** |
|-----------|------------|------------------|----------------------|
| **LoRaWAN communication failure (interference or excessive distance)** | High | Medium | Adjust power configuration and Spreading Factor, use repeaters if necessary. |
| **Lack of LoRaWAN coverage in the test area** | Medium | High | Deploy a dedicated gateway or test backup via Wi-Fi/4G. |
| **High power consumption of sensors and ESP32** | High | Medium | Implement *deep sleep*, optimize consumption, test solar panels, and higher capacity batteries. |
| **Sensor failure (inaccurate calibration or malfunction)** | Medium | High | Implement data validation and sensor backup. |
| **MQTT transmission issues to AWS IoT Core** | High | Medium | Implement automatic *retry* and monitoring with logs. |
| **High cost of components and infrastructure** | Medium | High | Seek alternative suppliers and prioritize cost-benefit without compromising quality. |
| **Difficulty integrating hardware and software** | High | Medium | Create incremental tests before final integration. |
| **Security issues in data transmission (hacking or interception)** | High | High | Implement AES encryption for LoRa and TLS for MQTT, along with JWT authentication. |
| **Low usability of the application by rural producers** | Medium | Medium | Conduct usability tests and collect continuous feedback. |
| **Lack of real-world testing before deployment** | High | Low | Create a controlled environment before farm deployment. |
| **Difficult hardware maintenance in the field** | Medium | High | Design installation to allow quick replacement of sensors and batteries. |

