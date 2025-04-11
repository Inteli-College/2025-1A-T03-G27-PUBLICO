# 🌾 F-ARM — Agricultural Remote Monitoring

**F-ARM** é uma solução de monitoramento ambiental remoto voltada para o agronegócio, príncipalmente na parte de agricultura de precisão e microgerenciamento de produtividade. Desenvolvemos uma tecnologia para fornecer insights sobre as condições do solo e do ar em áreas rurais, mesmo na ausência de conectividade tradicional.

O projeto foi desenvolvido por estudantes do curso de Engenharia da Computação do Inteli, com foco em impacto real, escalabilidade e sustentabilidade.

---

## 🔍 Visão Geral do Projeto

A proposta do **F-ARM** envolve:

- Coleta de dados ambientais via sensores conectados a microcontroladores ESP32.
- Transmissão de dados por LoRaWAN para um gateway local.
- Envio à nuvem (AWS IoT Core) com processamento via AWS Lambda e armazenamento em PostgreSQL (RDS) e S3.
- Visualização de métricas em um aplicativo móvel para auxiliar decisões agrícolas em tempo real.
- Aplicação de **ciência de dados** (regressão linear e redes neurais) para correlacionar os dados coletados com o índice de vegetação NDVI.

---

## 🧱 Arquitetura da Solução

A estrutura foi projetada para operar em regiões remotas, utilizando:

- **Sensores ambientais (NPK, UV, gases, umidade, etc.)**
- **ESP32 com comunicação RS485 (Modbus RTU)**
- **Gateway com LoRaWAN**
- **Serviços AWS (IoT Core, Lambda, RDS, S3)**
- **Painéis solares e controladores de carga**

A modularidade garante escalabilidade e adaptação para diferentes realidades do campo.

---

## 📊 Análise Financeira

A documentação contempla:

- 💡 Estimativas de custo do MVP com uso de serviços gratuitos e componentes acessíveis.
- 🏭 Projeção de custos para uma versão industrial escalável, com sensores certificados e infraestrutura robusta.
- 🛠️ Planejamento de manutenção, certificações e expansão da plataforma em nuvem.

---

## ⚠️ Análise de Risco

Principais riscos mapeados e ações mitigadoras incluem:

- Falhas de comunicação LoRaWAN → uso de repetidores ou gateways dedicados.
- Consumo energético → uso de painéis solares e deep sleep.
- Baixa usabilidade → testes com usuários reais e iterações na interface.

---

## 💡 Proposta de Valor

A solução entrega:

| Problemas Resolvidos                        | Ganhos Gerados                          |
|-------------------------------------------- |------------------------------------------|
| ❌ Alto custo de monitoramento remoto       | ✅ Acessível e automatizado               |
| ❌ Falta de conectividade no campo          | ✅ Comunicação por LoRaWAN ou 5G          |
| ❌ Baixa previsibilidade de produtividade   | ✅ Alertas e previsões com IA             |
| ❌ Alto consumo e manutenção complexa       | ✅ Sustentabilidade com energia solar     |

---

## 📘 Acesse a Documentação Completa

Toda a documentação detalhada do projeto está disponível no link abaixo. Lá você encontrará:

- Introdução ao F-ARM
- Arquitetura técnica
- Análise financeira
- Matriz de riscos
- Etapas de pesquisa e implementação
- Canvas de proposta de valor

🔗 **[Clique aqui para abrir a documentação oficial](https://inteli-college.github.io/2025-1A-T03-G27-PUBLICO/intro)**

---

## 👨‍💻 Equipe

Este projeto foi desenvolvido pela equipe **Gabriela Barretto**, com orientação do Professor André Chiovato e corpo docente do Inteli.
