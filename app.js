const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require ('mongoose')
const  dotenv = require ("dotenv")
dotenv.config()
const app = express()

//DB Config
const db = require('./config/keys').MongoURI

//Connect to Mongo
mongoose.connect(
    db,
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
    }
     )

.then(() => console.log ('MongoDb Connected ...'))
.catch(err => console.log(err))

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({extended : false}));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port  ${PORT}`))


























//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Ketienyei/passport-authentication-using-nodejs.git
//git push -u origin main