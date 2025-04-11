---
title: F-ARM
sidebar_position: 0
sidebar_label: F-ARM
---

# F-ARM

## Agricultural Remote Monitoring

The Agricultural Remote Monitoring (F-ARM) aims at remote monitoring of environmental quality on farms, focusing on soil and air analysis. The solution enables the real-time collection and transmission of environmental data to an intuitive mobile application. Sensors will be connected to an ESP32 with LoRa modules, which will transmit the data to an ESP32 collector, responsible for sending it via LoRaWAN to a central gateway. The gateway will transmit the data to the cloud via MQTT (AWS IoT Core), allowing the mobile application to display real-time metrics, providing essential information to optimize agricultural productivity and generate preventive alerts on environmental variations.

In addition to collecting and displaying environmental metrics, the project will include a Data Science stage, where linear regression techniques will be applied to identify relationships between the Normalized Difference Vegetation Index (NDVI) — obtained through the Embrapa SatVeg portal — and the data collected by the sensors. This analysis will allow correlating environmental variables with agricultural productivity, providing intelligent and intuitive insights that will assist in strategic decision-making and sustainable agricultural planning.