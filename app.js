const express = require('express')
const morgan = require('morgan')
const layout = require("./views/layout");
const {db} = require('./models/index');

const app = express()
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded()) // bodyParser(extended: true)

app.get("/", (req, res) => {
  res.send(layout(""));

});

db.authenticate({logging: false}).
then(() => {
  console.log('connected to the database');
})
 await db.sync();
const init = async () => {
  await db.User.async()
  await db.Page.async()

  const PORT = 1000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  }
)}

init();


