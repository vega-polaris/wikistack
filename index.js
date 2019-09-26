const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded())//bodyParser(extended: true)

app.get("/", (req, res) => {
  res.send('Hello')

});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
