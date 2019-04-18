import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {  MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';

import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import isDocker from 'is-docker';
import express from 'express';
import { theme } from './components/styles';
import App from './components';

const staticPath = !isDocker() ? process.env.RAZZLE_PUBLIC_DIR : path.join(__dirname, '../build/public');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(express.static(staticPath));

server.use((req, res) => {
  const sheetsRegistry = new SheetsRegistry();

  const sheetsManager = new Map();

  const generateClassName = createGenerateClassName();

  const context = {};

  const markup = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <StaticRouter context={context} location={req.url}>
              <App />
          </StaticRouter>
      </MuiThemeProvider>
    </JssProvider>
  );

  const css = sheetsRegistry.toString();
    
  if (context.url) {
    res.redirect(context.url);
  } else {
    fs.readFile('./public/views/index.html', 'utf-8', function(error, source){
      var template = handlebars.compile(source);
      var html = template({assets: assets, css: css});
      html = html.replace('<div id="root-server"></div>', `<div id="root-server">${markup}</div>`);
      res.send(html);
    });
  }
});

export default server;
