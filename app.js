const express = require('express')
const morgan = require('morgan')
const layout = require("./views/layout");
const Sequelize = require('sequelize')
const { db } = require('./models');

const app = express()
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded())//bodyParser(extended: true)

app.get("/", (req, res) => {
  res.send(layout(""));

});

db.authenticate().
then(() => {
  console.log('connected to the database');
})

//page class
const Page = db.define("page", {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
})

//user class

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
