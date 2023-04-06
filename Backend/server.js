const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errormidware');
const connectDB = require('./config/db')
const port = process.env.PORT || 3000;
const cors = require('cors');

connectDB()
const app = express();
// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/iframe/link', require('./routes/iframeLinks'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server listening on port ${port}`));