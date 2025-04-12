---
title: "Sprint 5"
sidebar_position: 0
sidebar_label: "Sprint 5"
---

Esta sprint teve como foco a **preparação do ambiente de desenvolvimento** com PlatformIO e a **elaboração de um primeiro código funcional para sensores**, com testes realizados via simulação no Wokwi. Essa etapa serve como base para, posteriormente, evoluirmos para uma arquitetura IoT mais robusta com uso de programação orientada a objetos (POO).

## 1. Preparação do Ambiente

Inicialmente, foi realizada a configuração da IDE [Visual Studio Code](https://code.visualstudio.com/) com a extensão **PlatformIO**, que permite o desenvolvimento e upload de código para microcontroladores como o **ESP32**.

Além disso, foi utilizado o **simulador Wokwi**, que permite testar virtualmente os sensores e o funcionamento do código sem depender do hardware físico.

### Arquivos principais da configuração:
- `platformio.ini`: define a plataforma, framework e placa-alvo (ESP32)
- `wokwi.toml`: define os sensores e conexões virtuais no simulador Wokwi
- `diagram.json`: contém a representação gráfica da montagem no Wokwi e permite a simulação

## 2. Desenvolvimento Inicial

Durante esta etapa, foi implementado um primeiro código (`main.ino`) com foco na **leitura de sensores**, simulando os sinais que futuramente serão captados de forma real.

Para garantir compatibilidade com o sensor **DHT22**, foi adicionada previamente a biblioteca `DHT_sensor_library-1.4.6`, já incluída no projeto, garantindo que não haja dependência externa ao realizar os testes ou montar o ambiente novamente.

### Sensores simulados:
- **DHT22**: sensor de temperatura e umidade
- **Potenciômetros**: utilizados para simular leituras futuras de sensores de nutrientes como NPK
- **Sensor de gás**: simulado por entrada analógica (planejado para versões futuras)

O código inicial se baseia em leitura simples e impressão no terminal serial, com foco em validar o funcionamento básico dos componentes e preparar uma base com padrões que permitam a adoção da programação orientada a objetos nas próximas etapas.

## 3. Arquitetura Orientada a Objetos

O projeto aplica os princípios da **programação orientada a objetos (POO)**, promovendo modularidade, encapsulamento e organização de responsabilidades. O sistema foi dividido em módulos independentes, cada um representando um sensor ou componente lógico, encapsulados em classes.

### Estrutura de Arquivos

```
Projeto_IoT/
├── main.ino                 // Funções principais setup() e loop()
├── DHTSensor.h / .cpp       // Classe do sensor DHT22
├── NPKSensor.h / .cpp       // Classe do sensor NPK (simulado com potenciômetros)
├── GasSensor.h / .cpp       // Classe do sensor de gás (analógico)
├── SensorMessage.h / .cpp   // Classe agregadora para envio de dados
```

### Descrição das Classes

**DHTSensor**  
Responsável por encapsular a leitura do sensor DHT22.  
Métodos principais: `begin()`, `update()`, `getTemperature()`, `getHumidity()`.

**NPKSensor**  
Simula a leitura dos valores de Nitrogênio (N), Fósforo (P) e Potássio (K) a partir de três pinos analógicos.  
Métodos principais: `begin()`, `update()`, `getNitrogen()`, `getPhosphorus()`, `getPotassium()`.

**GasSensor**  
Classe dedicada ao sensor de gás, com leitura analógica encapsulada.  
Métodos principais: `begin()`, `update()`, `getValue()`.

**SensorMessage**  
Classe agregadora que recebe os dados de todos os sensores e estrutura a mensagem para exibição ou envio.  
Métodos principais: `toString()`, `toJson()`.

### Benefícios da Arquitetura

- Encapsulamento e separação de responsabilidades
- Baixo acoplamento entre componentes
- Facilidade de manutenção e expansão
- Reutilização de código em projetos futuros
- Pronto para integração com módulos de conectividade (ex: 5G, LoRa)

## 4. Simulação no Wokwi

A montagem dos sensores e a simulação foram realizadas com sucesso no Wokwi, permitindo testar todo o fluxo de dados e validar a lógica e construção antes da chegada dos sensores físicos.

![Simulação](/img/Simulacao.png)

## 5. Próximos Passos

Na próxima sprint, o foco será:
- Integrar com a comunicação **LoRaWAN** ou **5G**, dando início à camada de conectividade IoT
- Implementar uma camada de persistência local e mecanismos de reconexão
- Refinar o uso de programação orientada a objetos para suportar novos sensores e protocolos
- Otimizar o projeto para uso real em campo, com foco em robustez e escalabilidade
