import express from 'express';
import path from 'path';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/app.jsx';

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

const htmlTemplate = ReactComponents => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="Practice App for server side rendering">
        <title>SSR Practice</title>
      </head>
      <body>
        <div id="app">${ReactComponents}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};

app.get('*', (req, res) => {
  const ReactComponent = renderToString(<App />);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(ReactComponent));
});

app.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
