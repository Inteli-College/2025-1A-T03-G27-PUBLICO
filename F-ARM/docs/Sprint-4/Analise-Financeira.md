---
title: "Financial Analysis"
sidebar_position: 2
sidebar_label: "Financial Analysis"
---

The financial analysis of the proposed solution is structured in two main stages: the MVP (Minimum Viable Product) phase and the cost projection for an industrial, more robust, and scalable version. In the MVP phase, the main goal is to validate the system's functionality with reduced investments, while the industrial version focuses on reliability, certifications, and large-scale operation.

In the initial stage, the system is composed of ESP32 boards for sensor reading and data transmission, easily accessible environmental sensors, a LoRaWAN gateway for local reception, and support components such as batteries, solar panels, and protective casings. The structure is completed with cloud services, mainly from AWS, leveraging its free tier and low initial costs. The main services used include AWS IoT Core for device management, AWS Lambda for data processing, and AWS RDS and S3 for structured storage and archiving, respectively. The costs associated with this phase of the project can be seen in detail in the [MVP Cost Table](#mvp-costs).

In addition to physical components and cloud infrastructure, the scope also includes investments in firmware and backend development, prototype assembly, bench and field testing, and technical documentation. As an early-stage solution, operational costs are low, including gateway connectivity to the internet, energy consumption, and occasional maintenance of sensors and installed infrastructure.

For the industrial version, components such as custom electronic boards with integrated microcontrollers and radios, certified sensors with higher precision and durability, industrial-grade power sources (or solar kits designed for continuous operation), and optimized communication structures with certified modules are considered. These devices are designed for harsh environments, requiring IP65 or IP67 rated enclosures and robust connectors. The communication network can be public (third-party LoRaWAN) or private, with outdoor industrial gateways connected via 4G or wired networks. In areas with coverage, each node can also operate via individual cellular connectivity, which directly impacts operational cost.

From a scalability perspective, the industrial version requires national and international certifications (such as FCC, CE, and Anatel), as well as infrastructure for mass production, compliance testing, quality control, and logistical structure for transportation, installation, and field maintenance. The cloud platform, in this scenario, must grow alongside the installed base, requiring more robust databases, device management systems, and expanded storage capacity. Operational expenses also increase, including periodic sensor maintenance, battery replacements, remote firmware updates, and continuous technical support.

Finally, equipment depreciation should be included as a long-term variable, ensuring the project’s financial planning remains sustainable even after scaling. The [Cost Forecast Table for the Industrial Version](#cost-forecast-for-the-industrial-version) provides a detailed estimate of all these investments.

---

## MVP Costs

| Category              | Item                        | Description                                                              | Price Range (USD)      |
|-----------------------|-----------------------------|--------------------------------------------------------------------------|------------------------|
| **Hardware**          | ESP32                       | Development board with Wi-Fi/Bluetooth                                   | $10–15                |
|                       | RS485 Sensors               | Basic or multi-parameter environmental sensors                           | $20–100               |
|                       | LoRaWAN Gateway             | Basic indoor gateway for LoRaWAN                                         | $100–300              |
|                       | Battery and Components      | Rechargeable battery, solar panel, regulators, casing per node          | $60–120 per node      |
| **Cloud Services**    | AWS IoT Core                | Free tier (250k messages/month); low cost after                         | ~$0.08 per 1M minutes |
|                       | AWS Lambda                  | Up to 1M free executions/month                                           | Negligible at MVP     |
|                       | AWS RDS/S3                  | Cloud DB (RDS) and storage (S3)                                          | ~$3/mo (DB); $0.023/GB|
| **Implementation**    | Software Development        | Firmware, backend, dashboards                                            | $10,000–11,000        |
|                       | Assembly & Testing          | Prototyping, soldering, field validation                                 | Several hundred        |
|                       | Docs & Initial Adjustments  | Documentation and training                                               | Indirect (team hours) |
| **Operational**       | Data Connectivity           | Gateway connection (Wi-Fi/4G SIM)                                        | $6–12/month           |
|                       | Power Consumption           | Low; can use small solar panels                                          | Very low              |
|                       | Support & Maintenance       | Monitoring, restart visits                                               | $5–50/month           |

---

## Cost Forecast for the Industrial Version

| Category                    | Item                           | Description                                                                 | Price Range (USD)              |
|-----------------------------|--------------------------------|-----------------------------------------------------------------------------|-------------------------------|
| **Hardware**                | Custom PCBs                    | Microcontroller, radio integration; includes NRE costs                      | $5,000–20,000 (NRE); $30–50/unit |
|                             | Certified Sensors              | Calibrated, IP67 sensors                                                    | $150–500 per sensor            |
|                             | Industrial Power               | Grid-powered or solar-powered kits                                         | $20–200 (grid); $100–200 (solar) |
|                             | Communication Modules          | Certified LoRaWAN/cellular modules                                          | $10–50 per unit                |
|                             | Industrial Enclosures          | IP65/IP67 cases, waterproof connectors                                     | $20–60                         |
| **Infrastructure**          | Public LoRaWAN Network         | Third-party network (e.g., Everynet)                                       | ~$0.50/device/month            |
|                             | Private LoRaWAN Infrastructure| Outdoor gateways + connectivity (e.g., 4G link)                             | $500–2,000 per gateway; ~$40/month |
|                             | Cellular (M2M) Connectivity    | Per-device 4G/5G/NB-IoT SIM plans                                           | $50–150/month/device           |
| **Scalability & Deployment**| Certifications & Compliance     | FCC, CE, Anatel certifications                                              | $10,000–20,000                 |
|                             | Mass Manufacturing             | Production line, tooling, quality control                                   | Tens of thousands              |
|                             | Cloud Backend Expansion        | Robust DB, device management                                                | ~$200/month                    |
|                             | Logistics & On-Site Install    | Equipment delivery, sensor/gateway setup                                   | Variable                       |
| **Operational**             | Device Maintenance             | Sensor cleaning, battery changes, OTA firmware updates                      | $500–2,000/year/farm           |
|                             | Support & Updates              | Continuous development, patches, support                                    | Variable                       |
|                             | Equipment Depreciation         | E.g., gateway $5,000 → $1,000/year (5-year lifespan)                        | ~$1,000/year                   |
