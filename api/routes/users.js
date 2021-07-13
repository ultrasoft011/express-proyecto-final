module.exports = (app) => {
  const users = require("../controller/users");
  var router = require("express").Router();

  router.post("/register", users.registerUsers);
  router.post("/registers", function (req, res) {
    console.log(req);
  });
  app.use("/api/users", router);
};
