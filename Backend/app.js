const express = require("express");

const app = express();
require('dotenv').config();
require('./Db/index')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT;
const sign=require('./Router/Signupp')
app.use('/api',sign)
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
