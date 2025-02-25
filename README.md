# 📌 Projeto - Estrutura e Configuração

## 🖥️ Tecnologias
- **TWA** (Módulo antigo) → Software instalado localmente.
- **PWA** (Atual) → Aplicação no navegador.

## 🌍 HTTP - HyperText Transfer Protocol
- **Request**: `GET` | `POST` | `PUT` | `DELETE`
- **Response**: `200 OK`

### 🔄 Fluxo da Aplicação
```
BANCO -> CONTROLLER -> ROUTER -> APP -> SERVER
```

## 📦 Configuração do Ambiente

### 📌 Instalação das Dependências
Execute os seguintes comandos:
```sh
npm install typescript
npx tsc --init
npm i --save-dev @types/node
npm i --save-dev @types/express
npm i --save-dev @types/cors
npm i nodemon -D
npm i ts-node
npm i mysql2
npm i express
npm i cors
npm i dotenv
```

## 📂 Estrutura do Projeto
```
📁 PROJETO (NOME DO PROJETO)
│── 📁 node_modules (Gerado a partir das instalações do npm)
│── 📁 src
│   ├── 📁 controller
│   │   └── taskController.ts (import taskModels)
│   ├── 📁 models
│   │   ├── connection.ts (import dotenv e mysql)
│   │   └── taskModels.ts (import connection)
│   ├── router.ts (import express e controller)
│   ├── app.ts (import express, router, cors)
│   └── server.ts (import app, config)
│── package.json
```

## 🚀 Inicialização do Servidor
Para rodar o projeto, utilize o comando:
```sh
npx ts-node src/server.ts
```

🔹 **Agora sua estrutura está organizada e formatada para o GitHub!** 🚀

