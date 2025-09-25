# 🚀 Husky Validation: Monorepo PoC para la Calidad de Código

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Husky](https://img.shields.io/badge/Husky-9.1.7-ff69b4.svg)](https://typicode.github.io/husky/)

## 🎯 Visión General del Proyecto

Este proyecto es una Prueba de Concepto (PoC) que demuestra la implementación de un robusto flujo de trabajo de validación de código utilizando Git hooks en una estructura de monorepo. El objetivo es asegurar que solo el código de alta calidad, seguro y estable, sea subido al repositorio central, protegiendo así la integridad de la base de código.

### Características Principales

- **Validación Automática de Código**: Ejecución automática de pruebas y verificaciones en cada commit y push
- **Monitoreo de Seguridad**: Detección de datos sensibles y credenciales expuestas
- **Formato Consistente**: Aplicación automática de estándares de codificación
- **Tipado Estricto**: Uso de TypeScript para mayor seguridad en el desarrollo
- **Pruebas Automatizadas**: Integración con JUnit para pruebas de backend

## 🏗️ Estructura del Proyecto

```
husky-validation/
├── .husky/               # Configuración de hooks de Git
│   ├── pre-commit       # Validaciones antes del commit
│   └── pre-push         # Validaciones antes del push
├── backend/             # Código fuente del backend (Java/Spring Boot)
│   ├── src/
│   └── pom.xml
├── frontend/            # Código fuente del frontend (TypeScript/React)
│   ├── src/
│   └── tsconfig.json
├── .gitignore
└── package.json         # Configuración de Node.js y scripts
```

## 🛠️ Configuración e Instalación

### Requisitos Previos

- Node.js 16+ y npm 8+
- Java 17+
- Maven 3.6+
- Git 2.25+




### 1. Instalar Dependencias del Frontend

```
npm install
```

### 2. Configurar el Backend (Java/Spring Boot)

Asegúrate de que tu directorio backend contenga el archivo `pom.xml` con las dependencias necesarias.

## 🔒 Flujo de Validaciones Automatizadas

### 1. Hook `pre-commit`

Se ejecuta automáticamente antes de cada `git commit` para validaciones rápidas:

- 🔍 **Detección de Datos Sensibles**: Bloquea el commit si encuentra patrones de credenciales
- 📝 **Código Comentado**: Advierte sobre código comentado innecesario
- 🧹 **Linting y Formateo**: Ejecuta ESLint y Prettier en archivos modificados
- ✅ **Validación de Tipado**: Verifica que el código TypeScript no tenga errores

### 2. Hook `pre-push`

Se ejecuta antes de cada `git push` para validaciones más exhaustivas:

- 🔄 **Sincronización de Rama**: Verifica que estés al día con `develop`
- 🧪 **Pruebas Unitarias**: Ejecuta `mvn test` para validar el backend

## 💡 Guía de Buenas Prácticas

### Principios de Desarrollo

- **DRY (Don't Repeat Yourself)**: Evita la duplicación de código
- **KISS (Keep It Simple, Stupid)**: Mantén el código simple y legible
- **YAGNI (You Aren't Gonna Need It)**: No implementes funcionalidades innecesarias
- **SOLID**: Sigue los principios de diseño orientado a objetos

### Estándares de Código

- **TypeScript**: Usa tipado estricto y evita `any`
- **Java**: Sigue las convenciones de código de Spring Boot
- **Commits**: Usa mensajes descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/)

### Pruebas

- **Frontend**: Tests unitarios con Jest y React Testing Library
- **Backend**: Pruebas unitarias con JUnit 5 y MockMvc
- **Cobertura**: Objetivo mínimo del 80% de cobertura de código

