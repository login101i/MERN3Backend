const express = require("express");
const { auth } = require("../firebase");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

const { orders, orderStatus } = require("../controllers/admin");

// routes
router.get("/admin/orders", authCheck, orders);
router.put("/admin/order-status", authCheck, orderStatus);

module.exports = router;
