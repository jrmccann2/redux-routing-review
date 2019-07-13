require('dotenv').config();
const express = require('express');
const massive = require('massive');

const ctrl = require('./controllers/controller')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json());

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('DB connected')
  app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))
})

app.get('/api/houses', ctrl.getHouses)

app.post('/api/houses', ctrl.addHouse)

app.delete('/api/houses/:id', ctrl.deleteHouse)