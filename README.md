# AULAS_QUINTA

TWA - Módulo antigo, o software ficava na máquina local 
PWA - Atual, o browser é único

HTTP - Hyper Text Transfer Protocol
Request - GET/POST/PUT/DELETE 
Response - 200 OK
BANCO -> CONTROLLER -> ROUTER -> APP -> SERVER


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


PROJETO (NOME DO PROJETO)
NODE MODULES (A PARTIR DAS INSTALAÇÕES DO NPM)
SRC (PASTA)
CONTROLLER (PASTA)
TASKCONTROLLER.TS
import taskModels
MODELS (PASTA)
CONNECTION.TS
import dotenv e mysql
TASKMODELS.TS
import connection
ROUTER.TS
import express e controller
APP.TS
import express, router, cors
SERVER.TS
import app, config
PACKAGE.JSON
