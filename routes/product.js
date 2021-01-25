const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  productsCount,
  productStar,
  listRelated,
  searchFilters
} = require("../controllers/product");

// routes
router.post("/product", authCheck, create);
router.get("/products/total", productsCount);

router.get("/products/:count", listAll); // products/100
router.delete("/product/:slug", authCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, update);

router.post("/products", list);
router.get("/product/related/:productId", listRelated);



router.put('/product/star/:productId', authCheck, productStar)

// search
router.post("/search/filters", searchFilters);

module.exports = router;
