const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

// @route      POST api/posts
// @desc       Test route
// @access     Private
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };
    } catch (err) {
      res.status(500).send('SERVER ERROR');
    }
  }
);

module.exports = router;
