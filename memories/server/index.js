const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//insert Routes

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//app.use {{routeName}}

const CONNECTION_URL = 'mongodb://localhost:27017/memories';	
const PORT = process.env.PORT || 3030;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => 
    console.log('Connected to MongoDB.'),
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
).catch(err => {
    console.log(`${err}`);
    console.log('Unable to connect to MongoDB, Connection Failed.');
});

