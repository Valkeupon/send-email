const express = require('express')
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sendEmail = require('./services/nodemailer')

const app = express()
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config()

app.post('/send-email', function(req, res) {
  sendEmail(req.body);
});

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)