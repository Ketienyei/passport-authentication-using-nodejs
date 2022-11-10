const express = require ('express');
const router = express.Router();

//login page
router.get ('/login',(req,res) => res.render('login'));

//register page
router.get ('/register',(req,res) => res.render('register'));

// Register Handle 
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body
    let errors =[]

    // check required fiels
    if(!name || !email || !password || !password2  ) {
        errors.push({msg : 'Kindly fill in all fields required'});

    }
})

module.exports = router;