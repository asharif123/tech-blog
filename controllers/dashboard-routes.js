const router = require('express').Router();
const withAuth = require('../utils/auth');
  
//redirect to dashboard
router.get('/', withAuth, async (req, res) => {
try {
    if (!req.session.loggedIn) {
        res.redirect('/login')
    }

    else {
        res.render('dashboard')
    }
}

catch(err)
{
    console.log(err);
    res.status(500).send(err);
}
console.log("DASHBOARD ****************************************************")
})

module.exports = router;


