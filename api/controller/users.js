const db = require("../config/connectDB");

exports.registerUsers = async (req, res) => {
  try {
    const users = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const user = await db.Users.create(users);
    res.json(user);

    //   console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
