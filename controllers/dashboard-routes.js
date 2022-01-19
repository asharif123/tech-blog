const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, Comment, User } = require('../models');

//store all the posts
router.post('/', withAuth, async (req, res) => {
    try {
      const newPostData = await Post.create({
        title: req.body.post_title,
        content: req.body.post_data,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPostData);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });
  
//redirect to dashboard, show all posts
router.get('/', withAuth, async (req, res) => {
try {
    if (!req.session.loggedIn) {
        res.redirect('/login')
    }

    else {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['title']
                }
            ]
        })
            // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {posts, loggedIn: req.session.loggedIn})
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


