const express = require("express");
const sq = require("./models/index.js");
const app = express();
const port = 3000;
const cors = require('cors');


// Middleware

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Controllers
//const userController = require('../controllers/userController.js');

//Routers
const userRouter = require('./routes/UserRoute.js');

app.get('/test', (req, res) => {

  res.send('Welcome to my server!');
});

/*app.post("/createUsername", (req, res) => {
  res.send("hello world");
})*/

app.use('/api/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});