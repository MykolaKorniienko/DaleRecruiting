var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');
  
db.sequelize.sync().then(() => {
  //console.log('Resync with { force: true }');
  //initial();
});

let routes = require('./app/routes/app.routes.js');
app.use('/api', routes);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://localhost", host, port);
})

function initial(){

  let anagrafiche = [
    {
      id: 1,
      nome: "Joe",
      cognome: "Thomas",
      eta: 36
    },
    {
      id: 2,
      nome: "Peter",
      cognome: "Smith",
      eta: 18
    },
    {
      id: 3,
      nome: "Lauren",
      cognome: "Taylor",
      eta: 31
    },
    {
      id: 4,
      nome: "Mary",
      cognome: "Taylor",
      eta: 24
    },
    {
      id: 5,
      nome: "David",
      cognome: "Moore",
      eta: 25
    },
  ]

  // Init data -> save to MySQL
  const Anagrafica = db.anagrafiche;
  for (let i = 0; i < anagrafiche.length; i++) { 
    //Anagrafica.create(anagrafiche[i]);  
  }
}