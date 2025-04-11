---
title: "Initial Research"
sidebar_position: 0
sidebar_label: "Initial Research"
---

## 🚀 **MVP and Industrial Version**

## **1. Introduction**

**Remote monitoring of agricultural areas** plays an essential role in **efficient natural resource management** and **productivity optimization**. This project aims to develop a solution for collecting and analyzing **environmental data from soil and air**, using strategic sensors and wireless connectivity to enable **Data Science** analysis.

The solution will be developed in **two phases**:
- **MVP (Minimum Viable Product):** Uses **ESP32** as a collector node, commercially available sensors, and a **dedicated gateway** for data transmission.
- **Industrial Version:** Implements a **custom electronic board**, certified sensors, and local optimized communication networks as **5G**.

## **2. System Architecture**

The system will consist of **sensor nodes**, which collect environmental data and transmit it to the cloud via **LoRaWAN or 5G**. The choice of technology influences the necessity of a **dedicated gateway**.

| **Component**     | **MVP**                                | **Industrial Version**                     |
|------------------|--------------------------------------|--------------------------------------------|
| **Collector Node** | ESP32 (with RS485 and ADC interface) | Custom board with optimized microcontroller |
| **Converter** | Board RS485 to I2C | Integrated in custom board |
| **Sensors**       | Commercial sensors                   | Certified and industrial sensors           |
| **Communication** | LoRaWAN or 5G                        | LoRaWAN or 5G                             |
| **Dedicated Gateway** | **Yes (required for LoRa in MVP)** | **Only if LoRaWAN is unavailable in the region** |
| **Power**        | Rechargeable battery                  | Dedicated power source (solar or fixed)    |
| **Data Analysis** | Cloud-based Data Science            | Cloud-based Data Science                   |

---

## **3. Selection of Sensors for Environmental Monitoring**
The choice of sensors was based on **agricultural relevance, wireless communication compatibility, and suitability for both MVP and industrial versions**.

### **Sensors for MVP**  
| **Sensor/Module** | **Protocol** | **Measurement** | **Purchase Link** |
|------------------|-------------|-------------|----------------|
| **RS485 7-in-1 Soil Sensor** | Modbus RTU (RS485) | Moisture, Temperature, Conductivity, pH, NPK | [View Sensor](https://pt.aliexpress.com/item/1005005697940574.html) |
| **MQ-135** | Analog | Gases like NH₃ and NOₓ | [View Sensor](https://produto.mercadolivre.com.br/MLB-2148556196-sensor-mq-135-gas-amnia-oxido-nitrico-para-arduino-rasp-_JM) |
| **DNE280E** |  | Air Temperature and Humidity |  |
| **UVM-30A** | Analog | UV Index | [View Sensor](https://www.saravati.com.br/sensor-de-deteccao-raio-ultravioleta-uvm-30a-uv-3v-5v.html) |

> 💡 **In the MVP**, sensors are **affordable and easy to integrate**, while the **industrial version** will use **certified sensors for higher accuracy and reliability**.

---

### **Industrial Sensors**  
| **Sensor/Module** | **Protocol** | **Measurement** | **Purchase Link** |
|------------------|-------------|-------------|----------------|
| **RS485 7-in-1 Soil Sensor (Industrial)** | Modbus RTU (RS485) | Moisture, Temperature, Conductivity, pH, NPK | [View Sensor](https://www.usinainfo.com.br/sensor-de-solo/sensor-npk-ph-condutividade-temperatura-e-umidade-do-solo-npkphcth-s-rs485-8611.html) |
| **Ammonia (NH₃) Gas Sensor** | Digital | Ammonia (NH₃) | [View Sensor](https://infrasensing.com/sensors/sensor_gas_nh3.asp?utm_source=chatgpt.com) |
| **Nitrogen Oxides (NOₓ) Gas Sensor** | Digital | NOₓ | [View Sensor](https://www.usinainfo.com.br/sensor-de-gas-arduino/sensor-de-qualidade-do-ar-mics-6814-sensor-de-gas-monoxido-de-carbono-dioxido-de-nitrogenio-amonia-metano-e-outros-5112.html) |
| **Industrial UV Sensor** | Digital | UV Index | [View Sensor](https://www.climaeambiente.com.br/prod,idproduto,3723414,pecas-e-acessorios-sensor-de-radiacao-ultravioleta---k6490) |

---

## **4. Wireless Communication: LoRaWAN and 5G**

The communication between sensors and the cloud can be done via **LoRaWAN** or **5G**, depending on the available coverage in the deployment area. As a **priority approach**, we will adopt the **most cost-effective solution**, avoiding individual 5G modules in ESP32 whenever possible.

### **4.1. LoRaWAN – Direct Transmission to the Cloud (If Available)**
- **Gateway Requirement:** ❌ **No dedicated gateway needed** if LoRaWAN coverage is available from TIM or Vivo.
- **Range:** Up to **15 km** in open areas with an external antena.
- **Power Consumption:** **Very low**, ideal for battery-powered sensors.

💡 **Industrial Alternative:** Contact **TIM and Vivo** to evaluate **LoRaWAN coverage in agricultural areas**, avoiding the need for a **dedicated gateway** in the commercial version.

---

### **4.2. 5G – Only if LoRaWAN is Unavailable**
If **LoRaWAN coverage is unavailable**, the **most cost-effective alternative** is using a **central 5G gateway**, which will collect data from ESP32 via **LoRa** and send it to the cloud via 5G.

- **ESP32 devices can use individual 5G modules**.
- **Also, a single 5G Gateway can be used**, reducing operational and hardware costs.

---

### **4.3. Private LoRaWAN Gateway**  
If **no public LoRaWAN coverage or 5G is available**, the solution will be the **deployment of a private LoRaWAN gateway**, allowing ESP32 devices to communicate via LoRa and forward data to the cloud via protocolo **Wi-Fi**.  

**Preferred Approach:**  
- **ESP32 devices will use LoRaWAN modules to communicate with a private gateway.**  
- **The gateway will be responsible for connecting the LoRaWAN network to the internet via Wi-Fi, Ethernet, or 4G.**  

✅ **This approach ensures that the system operates even without public LoRaWAN coverage or 5G.**

---

| **Scenario**  | **Transmission Method**  | **Gateway Required?** |
|-------------|------------------|----------------------|
| **LoRaWAN coverage available** | ESP32 sends directly via LoRaWAN | ❌ **No gateway needed** |
| **No LoRaWAN, but 5G available** | ESP32 transmits to a **5G gateway** via LoRa | ✔️ **5G gateway required** |
| **No LoRaWAN or 5G coverage** | Gateway can use another connection (e.g., satellite) | ✔️ **Alternative gateway required** |

✅ **The preferred approach will always be the most cost-effective, prioritizing the elimination of dedicated gateways whenever possible.**

---

## **5. Data Integration and Transmission**  

### **5.1. Sensor Integration with ESP32 (MVP)**  
The **ESP32** will be responsible for collecting sensor data and transmitting it via **LoRaWAN** (if coverage is available) or to a **dedicated gateway** (if 5G is used).  

📌 **Sensor Connection in the MVP:**  
- **RS485 Sensors (Modbus RTU)** → RS485-TTL Adapter → ESP32 UART.  
- **Analog Sensors** → ADC Conversion → Data formatting before transmission.  
- **Digital Sensors** → Direct communication via I²C or 1-Wire protocols.  

---  

## **6. Data Processing and Alert Generation**  

The **Agricultural Remote Monitoring (F-ARM)** system is designed to ensure **efficient data collection, secure storage, and intelligent analysis** of sensor-captured information.  

Data will be sent **at predefined standard intervals**, without the need for real-time monitoring. With the hibernation function, we will achieve a significant reduction in energy costs, something that will be better detailed throughout the project's development. The system will only **generate alerts for critical variations**, enabling farmers to make informed decisions.

---  

### **6.1. Data Upload and Cloud Storage**  

Communication between sensors and AWS will depend on the **available network infrastructure** at the installation site. We consider **three distinct scenarios**, each with a specific method of transmitting data to the cloud:  

---  

### **Scenario 1: LoRaWAN Coverage Available (No Gateway Needed)**  
If **LoRaWAN coverage** is available in the area (via public networks such as TIM, Vivo, or The Things Network), the ESP32 devices will **directly** transmit data to the LoRaWAN network, which will then forward the data to AWS.  

📌 **Transmission Flow:**  
1. **Sensors capture environmental data** (ESP32 + RS485 sensors).  
2. **ESP32 transmits via LoRaWAN directly to the public network.**  
3. **The LoRaWAN network forwards the data to AWS IoT Core** via the MQTT protocol.  
4. **AWS IoT Core processes and stores the data:**  
   - **AWS Lambda:** Initial data processing.  
   - **AWS RDS (PostgreSQL):** Stores historical records.  
   - **AWS S3:** Stores logs and backups.  

✅ **Advantage:** **Eliminates the need for a dedicated gateway, reducing operational and maintenance costs.**  

❌ **Disadvantage:** Relies on **LoRaWAN coverage from the provider**, which may be limited in some rural areas.  

---  

### **Scenario 2: No LoRaWAN Coverage, but 5G Available (With 5G Gateway)**  
If **LoRaWAN coverage is unavailable**, but **5G coverage is available**, ESP32 devices will communicate **with a dedicated gateway** via **LoRa or Wi-Fi**, and this **gateway will have a 5G module** to send data to AWS.  

📌 **Transmission Flow:**  
1. **Sensors capture environmental data** (ESP32 + RS485 sensors).  
2. **ESP32 transmits via LoRa to a 5G Gateway** (local coverage of 1-3 km).  
3. **The 5G Gateway sends data directly to AWS via MQTT or HTTP.**  
4. **AWS IoT Core processes and stores the data:**  
   - **AWS Lambda:** Initial data processing.  
   - **AWS RDS (PostgreSQL):** Stores historical records.  
   - **AWS S3:** Stores logs and backups.  

✅ **Advantage:** **Reduces the need for external LoRaWAN infrastructure**, as the private gateway handles communication.  

❌ **Disadvantage:** **Additional cost for the 5G gateway**, including data plans and power consumption.  

---  

### **Scenario 3: No LoRaWAN and No 5G Coverage (With Alternative Gateway)**  
If **neither LoRaWAN nor 5G coverage is available**, the system will rely on a **dedicated gateway** that can connect to the cloud via **Wi-Fi, satellite, or another available network**.  

📌 **Transmission Flow:**  
1. **Sensors capture environmental data** (ESP32 + RS485 sensors).  
2. **ESP32 transmits via LoRa to a LoRa Gateway** (local coverage of 1-3 km).  
3. **The Gateway transmits data to AWS via Wi-Fi, Ethernet, or satellite.**  
4. **AWS IoT Core processes and stores the data:**  
   - **AWS Lambda:** Initial data processing.  
   - **AWS RDS (PostgreSQL):** Stores historical records.  
   - **AWS S3:** Stores logs and backups.  

✅ **Advantage:** Can function in **remote areas without cellular network coverage**, as long as some alternative connectivity is available.  

❌ **Disadvantage:** **Higher operational costs**, as a satellite link or other alternative infrastructure may be required.  

---  

### **Summary of Communication Scenarios**  
| **Scenario** | **How ESP32 Devices Transmit Data?** | **Is a Gateway Required?** | **How Data Reaches AWS?** |  
|------------|-----------------------------------|-----------------------------|--------------------------------|  
| **1. With LoRaWAN Coverage** | ESP32 → Public LoRaWAN Network | ❌ No gateway needed | Via LoRaWAN network’s MQTT |  
| **2. No LoRaWAN, but 5G Available** | ESP32 → 5G Gateway → AWS | ✔️ Yes, 5G gateway required | Gateway sends via MQTT/HTTP |  
| **3. No LoRaWAN and No 5G** | ESP32 → Alternative Gateway → AWS | ✔️ Yes, gateway with Wi-Fi, satellite, or other network | Gateway sends via MQTT/HTTP |  

✅ **The preferred approach will always be the most cost-effective, prioritizing the elimination of dedicated gateways whenever public LoRaWAN infrastructure is available.**  

---  

### **6.2. Alert Generation**  
Alerts will be generated **at predefined reading intervals**, based on the conditions detected by the sensors. Examples:  

- **Low Soil Moisture:** “⚠️ Warning: Soil moisture below recommended levels for the crop.”  
- **High Temperature:** “⚠️ Alert: Elevated temperature – risk of heat stress on plants.”  
- **High UV Index:** “⚠️ UV index above safe limits – increased risk for crops.”  

📌 **The system WILL NOT operate in real-time** but will **issue alerts at scheduled reading times.**  

---  

## **7. Conclusion and Observations**  
1️⃣ **MVP:** The first prototype implementation will use **ESP32, commercial sensors, and a dedicated LoRa gateway**.  
2️⃣ **Industrial Version:** Includes hardware optimization, certified sensors, and on-site infrastructure (5G and LoRaWAN).  
3️⃣ **LoRaWAN and 5G Coverage:** Contact **TIM and Vivo** to assess the feasibility of direct transmission, eliminating the need for a dedicated gateway.