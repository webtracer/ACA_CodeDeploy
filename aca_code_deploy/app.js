const express = require('express');
const connectDB = require('../config');
const cors = require('cors');

// routes
const codeDrops = require('./routes/api/code_drops');

const app = express();


// cors
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send("Hello World"));

//use Routes
app.use('/api/code_drops', codeDrops);

const port = process.env.PORT || 3101;

app.listen(port, () => console.log(`ACA Code Deploy server running on port ${port}`));