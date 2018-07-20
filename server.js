require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const contacts = require('./routes/api/contacts');

const app = express();



//Body-parser middle ware
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );
// DB Config
const db = process.env.mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/contacts', contacts);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})