const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json("err");
  }
});

module.exports = router;

// login
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });
 
  !user && res.status(404).json("user not found");
  //   const comparePassword = await bcrypt.compare(
  //     req.body.password,
  //     user.password
  //   );
  user.password !== req.body.password &&
    res.json(404).json("password does not match");

  const { password, ...others } = user._doc;
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC
  );
  res.status(200).json({ ...others, accessToken });

  try {
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
