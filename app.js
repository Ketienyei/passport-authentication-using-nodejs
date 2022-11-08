const express = require ('express');

const app = express()

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port  ${PORT}`))


























//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Ketienyei/passport-authentication-using-nodejs.git
//git push -u origin main