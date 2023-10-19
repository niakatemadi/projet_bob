const express = require("express");
const sq = require("./models/index.js");
const app = express();
const port = 8080;
const cors = require('cors');


// Middleware

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Controllers
//const userController = require('../controllers/userController.js');

//Routers
const userRouter = require('./routes/UserRoute.js');
const voitureRouter = require('./routes/VoitureRoute.js');
const sportRouter = require('./routes/SportRoute.js');

app.get('/test', (req, res) => {

  res.send('Welcome to my server!');
});

/*app.post("/createUsername", (req, res) => {
  res.send("hello world");
})*/

app.use('/api/user', userRouter);
app.use('/api/voitures', voitureRouter);
app.use('/api/sports', sportRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});