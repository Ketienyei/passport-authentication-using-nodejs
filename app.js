const express = require ('express');
const expressLayouts = require('express-ejs-layouts');

const app = express()

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

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