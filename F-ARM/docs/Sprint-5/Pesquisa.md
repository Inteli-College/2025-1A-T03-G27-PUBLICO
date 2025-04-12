---
title: "Sprint 5"
sidebar_position: 0
sidebar_label: "Sprint 5"
---

This sprint focused on the **preparation of the development environment** with PlatformIO and the **development of a first functional code for sensors**, with tests carried out via simulation on Wokwi. This stage serves as a basis for later evolving into a more robust IoT architecture using object-oriented programming (OOP).

## 1. Environment Setup

Initially, the [Visual Studio Code](https://code.visualstudio.com/) IDE was configured with the **PlatformIO** extension, which enables development and code upload to microcontrollers such as the **ESP32**.

Additionally, the **Wokwi simulator** was used, allowing sensors and code functionality to be virtually tested without relying on physical hardware.

### Main configuration files:
- `platformio.ini`: defines the platform, framework, and target board (ESP32)
- `wokwi.toml`: defines sensors and virtual connections in the Wokwi simulator
- `diagram.json`: contains the graphical representation of the setup in Wokwi and enables simulation

## 2. Initial Development

During this stage, a first code (`main.ino`) was implemented focusing on **sensor readings**, simulating the signals that will later be captured in real scenarios.

To ensure compatibility with the **DHT22** sensor, the `DHT_sensor_library-1.4.6` library was previously added, already included in the project, ensuring there are no external dependencies when running tests or setting up the environment again.

### Simulated sensors:
- **DHT22**: temperature and humidity sensor
- **Potentiometers**: used to simulate future readings from nutrient sensors like NPK
- **Gas sensor**: simulated via analog input (planned for future versions)

The initial code is based on simple readings and printing to the serial terminal, focusing on validating the basic operation of the components and preparing a base with standards that will allow the adoption of object-oriented programming in the next stages.

## 3. Object-Oriented Architecture

The project applies the principles of **object-oriented programming (OOP)**, promoting modularity, encapsulation, and organization of responsibilities. The system was divided into independent modules, each representing a sensor or logical component, encapsulated in classes.

### File Structure

```
Projeto/
├── main.ino                 // Main setup() and loop() functions 
├── DHTSensor.h / .cpp       // DHT22 sensor class 
├── NPKSensor.h / .cpp       // NPK sensor class (simulated with potentiometers)
├── GasSensor.h / .cpp       // Gas sensor class (analog)
├── SensorMessage.h / .cpp   // Aggregator class for sending data
```

### Class Descriptions

**DHTSensor**  
Responsible for encapsulating the reading of the DHT22 sensor.  
Main methods: `begin()`, `update()`, `getTemperature()`, `getHumidity()`.

**NPKSensor**  
Simulates the reading of Nitrogen (N), Phosphorus (P), and Potassium (K) values from three analog pins.  
Main methods: `begin()`, `update()`, `getNitrogen()`, `getPhosphorus()`, `getPotassium()`.

**GasSensor**  
Dedicated class for the gas sensor, with encapsulated analog reading.  
Main methods: `begin()`, `update()`, `getValue()`.

**SensorMessage**  
Aggregator class that receives data from all sensors and structures the message for display or transmission.  
Main methods: `toString()`, `toJson()`.

### Architecture Benefits

- Encapsulation and separation of responsibilities
- Low coupling between components
- Ease of maintenance and expansion
- Code reuse in future projects
- Ready for integration with connectivity modules (e.g., 5G, LoRa)

## 4. Simulation on Wokwi

The assembly of the sensors and simulation were successfully carried out on Wokwi, allowing the entire data flow and logic to be tested and validated before the arrival of the physical sensors.

![Simulation](/img/Simulacao.png)

## 5. Next Steps

In the next sprint, the focus will be:
- Integrating with **LoRaWAN** or **5G** communication, starting the IoT connectivity layer
- Implementing a local persistence layer and reconnection mechanisms
- Refining the use of object-oriented programming to support new sensors and protocols
- Optimizing the project for real field use, focusing on robustness and scalability