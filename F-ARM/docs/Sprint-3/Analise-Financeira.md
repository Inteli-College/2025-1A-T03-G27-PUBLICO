---
title: "Financial Analysis"
sidebar_position: 1
sidebar_label: "Financial Analysis"
---

## 📌 MVP Costs

| **Category**             | **Item**                      | **Description**                                                                 | **Price Range/Unit**                |
|---------------------------|--------------------------------|-----------------------------------------------------------------------------|------------------------------------------|
| **Hardware**              | ESP32                          | Development board with Wi-Fi/Bluetooth for sensor reading and data transmission | R$50–75 (~US$10–15)                       |
| **Hardware**              | RS485 Sensors                 | Basic agricultural sensors (humidity, temperature) – simple or multiparameter options | US$20–100 (simple: ~R$100–500; advanced: US$150–500) |
| **Hardware**              | LoRa Gateway                   | Basic LoRaWAN gateway (indoor for MVP)                                    | US$100–300; in some cases ~US$139      |
| **Hardware**              | Batteries and Components         | Rechargeable battery, solar panel, regulators, cables, and protective case for each sensor node | Approximately R$300–600 per node; gateway (single) ~R$700–1500 |
| **Cloud Services**        | AWS IoT Core                   | Free tier usage (250,000 messages/month) and low cost after the limit    | ~US$0.08 per 1 million connected minutes |
| **Cloud Services**        | AWS Lambda                     | Serverless functions with 1 million free executions; occasional use for MVP | Insignificant cost at the beginning          |
| **Cloud Services**        | Database/S3                    | Micro instance (e.g., RDS) and storage (S3) for historical data       | R$15/month (RDS); US$0.023/GB/month (S3)    |
| **Implementation**        | Software Development           | Firmware programming, backend configuration (IoT Core, Lambdas, dashboards) | US$10,000–11,000 (~R$50–55k)       |
| **Implementation**        | Assembly and Testing           | Prototype assembly, soldering, bench and field testing             | A few thousand reais                |
| **Implementation**        | Documentation and Adjustments  | Documentation preparation, training, and initial adjustments                   | Indirect cost (team hours)        |
| **Operational**           | Data Connectivity              | Gateway connection to the internet (Wi-Fi or SIM 4G/IOT)                          | R$30–60/month                              |
| **Operational**           | Power Consumption              | Low power consumption of devices; recharge or use of small solar panels   | Very low cost                        |
| **Operational**           | Support and Maintenance        | Monitoring and preventive maintenance (visits, restarts)                   | Tens to a few hundred reais/month   |

## 📌 Industrial Version Forecast

| **Category**                         | **Item**                              | **Description**                                                                 | **Price Range/Investment**                |
|---------------------------------------|--------------------------------------|-----------------------------------------------------------------------------|------------------------------------------|
| **Hardware**                          | Custom Electronic Boards             | Custom PCB integrating microcontroller, radio, and interfaces; includes engineering/tooling cost (NRE) | Upfront: US$5,000–20,000 (R$25k–100k); Production: US$30–50 (R$150–250) per unit |
| **Hardware**                          | Certified Sensors                    | Robust sensors with certifications (IP67, guaranteed calibration) for prolonged use | US$150–500; in Brazil: R$800–1500 per sensor |
| **Hardware**                          | Dedicated Power Source               | Industrial power sources (electric grid) or sized solar systems (larger panel, controller, high-capacity battery) | Electric grid: R$100–200; Solar kit: R$500–1000 per unit |
| **Hardware**                          | Optimized Communication              | Integrated communication modules (certified LoRaWAN or cellular modules) | LoRa: US$10–20; Cellular: ~US$50 each |
| **Hardware**                          | Industrial Enclosure and Connectors  | Resistant enclosures (IP65/IP67) and waterproof connectors for component protection | R$100–300 per unit |
| **Infrastructure**                     | Public LoRaWAN                       | Use of third-party networks (e.g., Everynet) with a monthly subscription per device | US$0.50/device/month (approx. R$2.50) |
| **Infrastructure**                     | Private LoRaWAN                      | Deployment of industrial outdoor gateways, installation, and link connection (e.g., 4G) | Gateways: US$500–2000 each (e.g., ~US$800 = R$4k); data: ~R$200/month |
| **Infrastructure**                     | Cellular Communication               | Individual connectivity via 4G/5G/NB-IoT with M2M plan | US$50–150/month per device |
| **Implementation and Scalability**     | Design and Certifications            | Certification (FCC, CE, Anatel) and compliance testing of devices | US$10k–20k (R$50–100k) |
| **Implementation and Scalability**     | Large-Scale Manufacturing            | Production line setup, quality testing, and tooling for volume production | Investment of tens of thousands of reais |
| **Implementation and Scalability**     | Cloud and Software                   | Backend updates, database scalability, and device management | Example: robust database ~US$200/month (varies by usage) |
| **Implementation and Scalability**     | Logistics and Installation           | Equipment transportation, sensor and gateway installation, and calibration | Variable costs depending on project |
| **Operational**                         | Device Maintenance                   | Calibration, cleaning, battery replacement, and firmware updates (OTA) | US$500–2000/year per group or farm |
| **Operational**                         | Support and Updates                  | Continuous development, security patches, and technical support | Variable operational cost |
| **Operational**                         | Equipment Depreciation               | Gateway and sensor degradation (example: gateway with a 5-year lifespan) | E.g., R$5000 gateway → ~R$1000/year |

📌 **Summary:** The MVP cost estimate includes hardware, cloud services, implementation, and operation, ensuring feasibility for an efficient and scalable IoT system. The industrial version forecast considers additional investments for scalability, certifications, and device robustness.