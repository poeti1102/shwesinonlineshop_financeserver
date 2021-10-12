const Purchasing = require("../models/purchasing");

const list = (req, res) => {
  options = {
    sort: { purchaseDate: -1 },
    offset: req.params.limit * req.params.page,
    limit: req.params.limit,
  };

  Purchasing.paginate({}, options).then(function (result) {
    res.json({
      message: "Success Create",
      status: 200,
      data: result,
    });
  });
};

const search = (req, res) => {
  const mode = req.searchMode;
  let query = {};
  switch (mode) {
    case "name":
      query = { itemName: { $regex: ".*" + req.searchString + ".*" } };
      break;

    case "date":
      query = {
        createdAt: {
          $gte: new Date(req.startDate),
          $lt: new Date(req.endDate),
        },
      };
      break;
  }

  Purchasing.find(query)
    .then((result) => {
      res.json({
        message: "Success",
        status: 201,
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error",
        status: 302,
        data: error,
      });
    });
};

const create = (req, res) => {
  const data = {
    itemName: req.itemName,
    price: req.price,
    quantity: req.quantity,
    purchaseDate: req.purchaseDate,
    note: req.note
  };

  const purchasing = new Purchasing(data);
  purchasing
    .save()
    .then((result) => {
      res.json({
        message: "Success Create",
        status: 200,
        data: null,
      });
    })
    .catch((error) => {
      res.json({
        message: "Create Error",
        status: 302,
        data: error,
      });
    });
};

const single = (req, res) => {
  Purchasing.findById(req.params.id)
    .then((result) => {
      res.json({
        message: "Success",
        status: 200,
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error",
        status: 302,
        data: error,
      });
    });
};

const edit = (req, res) => {
  const data = {
    itemName: req.itemName,
    price: req.price,
    quantity: req.quantity,
    purchaseDate: req.purchaseDate,
    note: req.note
  };

  Purchasing.findByIdAndUpdate(req.params.id, data)
    .then((result) => {
      res.json({
        message: "Edit SUccess",
        status: 201,
        data: null,
      });
    })
    .catch((error) => {
      res.json({
        message: "Edit Error",
        status: 300,
        data: error,
      });
    });
};


const destroy = (req,res) => {
  Purchasing.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({
        message: "Success Delete",
        status: 200,
        data: null,
      });
    })
    .catch((error) => {
      res.json({
        message: "Delete Error",
        status: 302,
        data: error,
      });
    });
}

module.exports = {
    list,
    search,
    create,
    single,
    edit,
    destroy
}
