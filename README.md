# 🚀 Husky Validation: Monorepo PoC for Code Quality

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Husky](https://img.shields.io/badge/Husky-9.1.7-ff69b4.svg)](https://typicode.github.io/husky/)

## 🎯 Project Overview

This project is a Proof of Concept (PoC) that demonstrates the implementation of a robust code validation workflow using Git hooks in a monorepo structure. The goal is to ensure that only high-quality, secure, and stable code is pushed to the central repository, thus protecting the integrity of the codebase.

### Key Features

- **Automatic Code Validation**: Automatic execution of tests and verifications on each commit and push
- **Security Monitoring**: Detection of sensitive data and exposed credentials
- **Consistent Formatting**: Automatic application of coding standards
- **Strict Typing**: Use of TypeScript for enhanced development security
- **Automated Testing**: Integration with JUnit for backend testing

## 🏗️ Project Structure

```
husky-validation/
├── .husky/               # Git hooks configuration
│   ├── pre-commit       # Pre-commit validations
│   └── pre-push         # Pre-push validations
├── backend/             # Backend source code (Java/Spring Boot)
│   ├── src/
│   └── pom.xml
├── frontend/            # Frontend source code (TypeScript/React)
│   ├── src/
│   └── tsconfig.json
├── .gitignore
└── package.json         # Node.js configuration and scripts
```

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 16+ and npm 8+
- Java 17+
- Maven 3.6+
- Git 2.25+

### 1. Install Frontend Dependencies

```
npm install
```

### 2. Configure Backend (Java/Spring Boot)

Make sure your backend directory contains the `pom.xml` file with the necessary dependencies.

## 🔒 Automated Validation Flow

### 1. `pre-commit` Hook

Automatically executed before each `git commit` for quick validations:

- 🔍 **Sensitive Data Detection**: Blocks commit if credential patterns are found
- 📝 **Commented Code**: Warns about unnecessary commented code
- 🧹 **Linting and Formatting**: Runs ESLint and Prettier on modified files
- ✅ **Type Validation**: Verifies TypeScript code has no errors

### 2. `pre-push` Hook

Executed before each `git push` for more comprehensive validations:

- 🔄 **Branch Synchronization**: Verifies you're up to date with `develop`
- 🧪 **Unit Tests**: Runs `mvn test` to validate the backend

## 💡 Best Practices Guide

### Development Principles

- **DRY (Don't Repeat Yourself)**: Avoid code duplication
- **KISS (Keep It Simple, Stupid)**: Keep code simple and readable
- **YAGNI (You Aren't Gonna Need It)**: Don't implement unnecessary features
- **SOLID**: Follow object-oriented design principles

### Code Standards

- **TypeScript**: Use strict typing and avoid `any`
- **Java**: Follow Spring Boot code conventions
- **Commits**: Use descriptive messages following [Conventional Commits](https://www.conventionalcommits.org/)

### Testing

- **Frontend**: Unit tests with Jest and React Testing Library
- **Backend**: Unit tests with JUnit 5 and MockMvc
- **Coverage**: Minimum target of 80% code coverage
