[![Build Status](https://app.travis-ci.com/nxalan/clean-node-api.svg?branch=main)](https://app.travis-ci.com/nxalan/clean-node-api)
[![Coverage Status](https://coveralls.io/repos/github/nxalan/clean-node-api/badge.svg?branch=main)](https://coveralls.io/github/nxalan/clean-node-api?branch=main)
# **Clean Node API**

O objetivo desse repositório é criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.

> ## APIs construídas

1. [Cadastro](./requirements/signup.md)
2. [Login](./requirements/login.md)
3. [Criar enquete](./requirements/add-survey.md)
4. [Listar enquetes](./requirements/load-surveys.md)
5. [Responder enquete](./requirements/save-survey-result.md)
  
## Documentação
1. [Swagger] (https://enquetesapi.herokuapp.com/api-docs)
> ## Princípios aplicados:
* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Don't Repeat Yourself (DRY)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns aplicados:
* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root

> ## Metodologias/designs utilizados:
* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases

> ## Bibliotecas e ferramentas utilizadas:
* NPM
* Typescript
* Git
* Docker
* Jest
* MongoDb
* Bcrypt
* JsonWebToken
* Validator
* Express
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Sucrase
* Nodemon
* Rimraf
* In-Memory MongoDb Server

> ## Features:
* Atalhos no Git
* Log de Erro
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares
* Testes de Integração
* Testes Unitários
* Cobertura de Testes
* Mocks
* Stubs
* Spies
* Deploy com Typescript
* Deploy no Heroku
* Uso de breakpoints no Typescript
* Uso correto de tags no Git