import express, { Response } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import dotenv from 'dotenv';

import React from 'react';
import { renderToString } from 'react-dom/server';

// eslint-disable-next-line import/extensions
import App from '../App';

dotenv.config();
const app = express();

app.use(express.static('./'));

const PORT = process.env.WEB_START_ON || 4200;

app.get('/', (request, response: Response) => {
  const html = renderToString(React.createElement(App));

  const indexFile = path.resolve('./index.html');
  fs.readFile(indexFile, 'utf8', (error, data) => {
    if (error) {
      console.error('Something went wrong:', error);
      return response.status(500).send('Oops, better luck next time!');
    }

    return response.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
