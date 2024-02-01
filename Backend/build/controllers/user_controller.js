const jwt = require("jsonwebtoken");
const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    username,
    password,
  } = req.body;

  try {
    // Vérifier si l'utilisateur ou l'email existe déjà
    let user = await User.findOne({ $or: [{ username }]});
    if (user) {
      return res.status(400).json({ msg: 'User already exists with this username or email' });
    }

    // Créer un nouvel utilisateur
    user = new User({
      username,
      password,
    });

    await user.save();

    res.json({ msg: 'User created' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};



exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ $or: [{ username }] });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    // console.log(user);
    
    
    // Check if password matches
    // Check if password matches
    // console.log(password, user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
      
    // Create a payload for the JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign the JWT
    jwt.sign(payload, "RANDOM_TOKEN_SECRET", { expiresIn: '24h' }, (err, token) => {
      // Remove the password from the user object
      user.password = undefined;
      if (err) throw err;
      res.json({
        user,
        token,
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error' + err.message);
  }
}

