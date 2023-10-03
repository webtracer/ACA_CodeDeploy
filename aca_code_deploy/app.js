const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const codeDrops = require('./routes/api/code_drops');

const app = express();

//connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send("Hello World"));

//use Routes
app.use('/api/code_drops', codeDrops);

const port = process.env.PORT || 3100;

app.listen(port, () => console.log(`Server running on port ${port}`));