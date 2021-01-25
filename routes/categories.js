const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
    create,
    read,
    update,
    remove,
    list,
    getSubs
} = require("../controllers/category");

// routes
router.post("/category", authCheck, create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", authCheck, update);
router.delete("/category/:slug", authCheck, remove);
router.get("/category/subs/:_id", getSubs);


module.exports = router;
