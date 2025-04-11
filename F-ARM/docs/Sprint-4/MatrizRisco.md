---
title: "Risk Matrix"
sidebar_position: 3
sidebar_label: "Risk Matrix"
---

To ensure the feasibility and resilience of the agricultural environmental monitoring system, a risk matrix was developed that considers the main technical, operational, and strategic factors that could compromise the performance of the MVP and the industrial version of the solution. Identifying these risks allows for early planning of mitigation actions, preventing critical failures from becoming barriers to operation or scalability.

One of the main risks identified is related to LoRaWAN communication, which may fail due to environmental interference or distances beyond the effective radio range. As a preventive measure, it is recommended to adjust the spreading factor, increase transmission power, and, if necessary, include repeaters between the sensor node and the gateway. This same risk is exacerbated in areas without public LoRaWAN coverage, making the absence of connectivity a highly probable issue. In this case, deploying a dedicated gateway or using alternative connectivity options such as Wi-Fi or 4G links becomes essential.

Another critical point is the energy efficiency of the devices. High energy consumption, both by sensors and the ESP32, can compromise autonomy in the field. Strategies such as deep sleep mode, optimized reading/transmission cycles, and the use of solar panels with higher charging capacity are essential to ensure continuous operation. Sensor failures—due to improper calibration, wear, or factory defects—also represent a significant risk. To mitigate this, data validation and the use of redundant sensors are recommended, allowing quick replacement without compromising measurement integrity.

In the transmission layer, data sending failures to AWS IoT Core via MQTT protocol can occur, especially in unstable connectivity environments. Applying automatic retry mechanisms, log monitoring, and temporary local buffer storage helps reduce the impact of such incidents. Cost increases for components and infrastructure also need to be considered, particularly in the context of exchange rate volatility or logistical restrictions. The recommendation is to maintain flexible financial planning, with alternative suppliers and negotiations focused on cost-benefit without sacrificing material quality.

Regarding hardware and software integration, the risk of incompatibility or failures during final testing requires an incremental development approach. Performing modular testing before full system integration allows for early fault detection. Security issues are also highlighted, especially concerning data interception or manipulation during transmission. Applying AES encryption to LoRa transmissions, using TLS with MQTT, and JWT token authentication are mandatory measures to mitigate this risk.

From a user experience perspective, one of the risks is low usability of the application by rural producers, particularly those with limited technological familiarity. To address this, usability tests in the field should be conducted, real user feedback should be gathered, and continuous interface adjustments should be applied. The lack of real-world testing before final deployment is also a risk, though less probable. Ideally, controlled simulations should be carried out to validate the system's behavior in adverse conditions.

Finally, the difficulty of maintaining equipment in the field, especially in remote areas, is noteworthy. Mitigation involves developing an infrastructure that is easy to replace, with accessible sensors and batteries and a modular physical design. The complete risk matrix and mitigation plans can be found in the table below.

---

## Risk Matrix

| **Risk**                                                      | **Impact** | **Probability** | **Mitigation Plan**                                                                 |
|---------------------------------------------------------------|------------|------------------|--------------------------------------------------------------------------------------|
| LoRaWAN communication failure (interference or distance)      | High       | Medium           | Adjust power and spreading factor; use repeaters if necessary.                      |
| Lack of LoRaWAN coverage in the test area                     | Medium     | High             | Install dedicated gateway or use Wi-Fi/4G alternative.                              |
| High energy consumption of sensors and ESP32                  | High       | Medium           | Implement deep sleep, optimize usage, use solar panels and larger batteries.        |
| Sensor failure (calibration or malfunction)                   | Medium     | High             | Validate data and use backup sensors.                                               |
| MQTT transmission issues to AWS IoT Core                      | High       | Medium           | Use retry mechanisms, logs, and temporary local storage.                            |
| High cost of components and infrastructure                    | Medium     | High             | Seek alternative suppliers and prioritize cost-effectiveness.                       |
| Hardware/software integration difficulty                      | High       | Medium           | Conduct incremental tests before final integration.                                 |
| Security issues in data transmission                          | High       | High             | Apply AES encryption, TLS on MQTT, and JWT authentication.                          |
| Low usability by rural producers                              | Medium     | Medium           | Conduct usability tests and gather continuous feedback.                             |
| Lack of real-world testing before final deployment            | High       | Low              | Create controlled simulation environments before field use.                         |
| Difficult maintenance of field devices                        | Medium     | High             | Design installation with easy access to sensors and batteries.                      |
