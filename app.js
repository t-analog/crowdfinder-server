import express from 'express';

const app = express();
const listenPort = 3000;

// dummy routes
app.get('/', (_req, res) => {
  res.send('this is response of GET request sent from crowdfinder-server API listening on port ' + listenPort);
});


// listen
app.listen(listenPort);
