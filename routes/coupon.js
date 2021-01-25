const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, remove, list } = require("../controllers/coupon");

// routes
router.post("/coupon", authCheck , create);
router.get("/coupons", list);
router.delete("/coupon/:couponId", authCheck, remove);

module.exports = router;
