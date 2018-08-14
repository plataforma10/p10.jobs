# Plataforma 10 Jobs - Backend

Este es el servidor de P10 Jobs, el cual se encarga de comunicarse con el CMS de Strapi y devolverle al Frontend los datos que necesita. 


## Requisitos

* Node.JS
* NPM

## Configuracion

Este tiene configurado 2 entornos de trabajo, dev y prod, los cuales se configuran desde la ruta:
> src\settings\appsettings.json

## Instalacion

La instalacion es muy simple, deben hacer un clone del proyecto, luego parados dentro del proyecto deben usar el comando:

> npm install

Con esto tendremos instaladas todas las dependencias. Luego para levantar el servidor de desarrollo utilizar:

> npm start

Esto levantara un servidor en Node.js en [esta direccion](http://localhost:8081).