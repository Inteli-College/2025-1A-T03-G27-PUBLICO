---
title: "Sprint 4"
sidebar_position: 0
sidebar_label: "Sprint 4"
---

## Sensor Acquisition and Communication Interface

During this sprint, the following fundamental elements for the monitoring system were acquired and organized:

- **2 UVM-30A sensors** (measure ultraviolet radiation index).
- **2 NPK 7-in-1 soil sensors** (measure moisture, temperature, electrical conductivity, pH, N, P, K).
- **BME280 sensor** (for temperature, humidity, and barometric pressure) - borrowed from Prof. Godoi.
- **MQ-135 sensor** (gas detection such as ammonia and NOx) - borrowed from Prof. Godoi.
- **MAX13487 TTL/RS485 converter** - acquired to enable communication with sensors via Modbus RTU protocol.
- **100W Solar panel and a 100A Solar charge controller** - acquired by Prof. Godoi

The need for the TTL/RS485 converter arises from the fact that the NPK sensors use the RS485 communication standard. Since the ESP32 operates at TTL levels, communication between them requires an appropriate converter. After studying different solutions, it was concluded that traditional converters like the MAX485 can present instability. Thus, the MAX13487 was chosen, offering signal auto-direction and electrical compatibility with the sensors used. This choice was based on technical materials, such as analysis videos and field test reports.

## System Power Supply

In the testing version, the devices will be powered by mains-connected sources. This approach allows for stable bench testing, without concern for load variations and autonomy.

However, this fixed power supply is not suitable for field use. Therefore, the next project phase will adopt **solar panels with rechargeable batteries**, which will provide enough energy autonomy for use in regions without electrical infrastructure. This transition requires proper battery and panel sizing, as well as tests to evaluate autonomy during days of low sunlight, witch were reviewd this sprint.

A charge controller (MPPT) will be adopted, and the power consumption of the sensors and the ESP32 will be optimized via deep sleep, peripheral shutdown when idle, and programmed transmission intervals. The solar system aims to ensure that the sensors can operate in a distributed and continuous manner, with minimal maintenance.

## Neural Networks and NDVI

Given the designed architecture and the goal of extracting value from the data, enabling precise analyses of agricultural field quality and productivity, we opted to use neural network models to analyze the relationship between the collected environmental data and the NDVI. NDVI is an index obtained via remote sensing that represents vegetation health and is considered an indirect indicator of agricultural productivity. This index will be obtained through images from SatVeg (Embrapa).

Initially, linear regression was considered for this correlation, but it was identified that the nonlinear nature of environmental relationships requires more robust models. Therefore, neural network approaches were studied, such as:

- **MLP (Multilayer Perceptron):** to correlate environmental variables (moisture, temperature, pH, nutrients) with NDVI;
- **LSTM:** to account for temporal variations and dependencies in the data over days;

The use of neural networks allows capturing complex and interdependent relationships, involving various environmental variables and temporal changes. Practices such as data normalization, cross-validation, train/validation/test splitting, and evaluation by metrics like MSE and R² are adopted.
