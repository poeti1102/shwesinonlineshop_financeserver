const mongo = require("mongo");
const mongoose = require("mongoose");
const Order = require("../models/order");

const list = (req, res) => {
  options = {
    sort: { orderDate: -1 },
    offset: 20 * req.page,
    limit: req.limit,
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
    itemName: req.itemName,
    price: req.price,
    quantity: req.quantity,
    orderDate: req.orderDate,
    customerName: req.customerName,
    customerDetail: req.customerDetail,
    deliveryFee: req.deliveryFee,
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
        message: "Success Create",
        status: 200,
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        message: "Get Error",
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
    orderDate: req.orderDate,
    customerName: req.customerName,
    customerDetail: req.customerDetail,
    deliveryFee: req.deliveryFee,
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
