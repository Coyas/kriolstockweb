# KriolStock Photo webpage

Este sistema é o frontend a parte visivel aos usuarios onde poderam interagir com o systema

## Instalaçao

- yarn i -- instalar dependencias
- yarn dev --para modo desenvolvimento
- yarn build -- configurar para leva a producao
- yarn start -- para usar em producao

## Inicializar o app com o [PM2](https://pm2.keymetrics.io/)

### Desenvolvimento

- pm2 start yarn --name "kriolstockweb" -- dev (so para testes)

### Producao

- npm run build
- pm2 start npm --name "kriolstockweb" -- start
