const User = require("../models/user");

const register = (req, res) => {
  const data = {
    username: req.username,
    password: req.password,
    role: req.role,
  };

  const user = new Order(data);

  user.save(data)
      .then((result) => {
        res.json({
          message: "Success Create",
          status: 200,
          data: null,
        });
      })
      .catch((err) => {
        res.json({
          message: "Create Error",
          status: 301,
          data: err,
        });
      })
};

module.exports = {
  list,
  search,
  create,
  single,
  edit,
  destroy,
};
