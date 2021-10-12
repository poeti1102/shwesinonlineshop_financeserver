const Order = require("../models/order");
const { options } = require("../routes/orderRoutes");

const list = (req, res) => {
  let options = {
    sort: { orderDate: -1 },
    offset: req.params.limit * req.params.page,
    limit: req.params.limit,
  };
  Order.paginate({}, options).then(function (result) {
    res.json({
      message: "Success Create",
      status: 200,
      data: result,
    });
  });
};

const create = (req, res) => {
  const data = {
    itemName: req.body.itemName,
    price: req.body.price,
    quantity: req.body.quantity,
    orderDate: req.body.orderDate,
    customerName: req.body.customerName,
    customerDetail: req.body.customerDetail,
    deliveryFee: req.body.deliveryFee,
  };

  const order = new Order(data);
  order
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
  Order.findById(req.params.id)
    .then((result) => {
      res.json({
        message: "Succese",
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
    itemName: req.body.itemName,
    price: req.body.price,
    quantity: req.body.quantity,
    orderDate: req.body.orderDate,
    customerName: req.body.customerName,
    customerDetail: req.body.customerDetail,
    deliveryFee: req.body.deliveryFee,
  };

  Order.findByIdAndUpdate(req.params.id, data)
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

const destroy = (req, res) => {
  Order.findByIdAndDelete(req.params.id)
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
};

const search = (req, res) => {
  const mode = req.body.searchMode;
  let query = {};
  switch (mode) {
    case "name":
      query = { itemName: { $regex: ".*" + req.body.searchString + ".*" } };
      break;

    case "date":
      query = {
        orderDate: {
          $gte: new Date(req.body.startDate),
          $lte: new Date(req.body.endDate),
        },
      };
      break;
  }

  Order.find(query)
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

module.exports = {
  list,
  search,
  create,
  single,
  edit,
  destroy,
};
