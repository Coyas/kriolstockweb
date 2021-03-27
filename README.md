# KriolStock Photo webpage

Este sistema é um dos frontend da kriolstock photo, a parte disponivel para interaçao entre Utilizadores e qualquer publico em geral.

Nesta UI é possivel pesquisar por conteudos e a sua aquisiçao so é possivel mediante a criaçao de uma conta na plataforma e
os conteudos podem ser gratis ou pagos.

# Instalaçao

- yarn i -- instalar dependencias
- yarn dev --para modo desenvolvimento
- yarn build -- configurar para levar a produçao
- yarn start -- para usar em producao (so funciona apos o yarn build)

## Inicializar o app com o [PM2](https://pm2.keymetrics.io/)

Para ter uma instancia desta UI no seu servidor local.

### Desenvolvimento

- pm2 start yarn --name "kriolstockweb" -- dev (so para testes)

### Producao

- npm run build
- pm2 start npm --name "kriolstockweb" -- start
